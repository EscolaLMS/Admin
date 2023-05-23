import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { EditOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import {
  createTranslation,
  translations,
  updateTranslation,
} from '@/services/escola-lms/translations';
import AdminModalForm from './components/AdminModalForm';
import { getAllLocales, localeInfo, addLocale } from 'umi';
import { sortByKey } from '@/utils/utils';

type LangRow = { lang: string; key: string; value: string; id: string };

export const TableColumns: ProColumns<LangRow>[] = [
  {
    title: <FormattedMessage id="language" defaultMessage="Language" />,
    dataIndex: 'lang',
    sorter: true,
    valueType: 'select',
    valueEnum: getAllLocales().reduce(
      (acc, local) => ({ ...acc, [local]: local }),
      {} as Record<string, string>,
    ),
  },
  {
    title: <FormattedMessage id="key" defaultMessage="key" />,
    dataIndex: 'key',
    sorter: true,
  },
  {
    title: <FormattedMessage id="value" defaultMessage="value" />,
    dataIndex: 'value',
    sorter: true,
  },
];

const Translations: React.FC = () => {
  const [rndNumber, setRndNumber] = useState(Math.random());
  const actionRef = useRef<ActionType>();
  const [editTranslationKey, setEditTranslationKey] = useState<{
    key: string;
    defaultValue: Record<string, string>;
  }>();

  const intl = useIntl();

  const getRows = useMemo(() => {
    const rows: LangRow[] = [];
    const langs = Object.keys(localeInfo);

    for (const lang of langs) {
      const messages: Record<string, string>[] | undefined = localeInfo[lang].messages;
      if (messages) {
        Object.keys(messages).forEach((key) => {
          rows.push({
            id: `${lang}-${key}`,
            lang: lang,
            key: key,
            value: messages[key],
          });
        });
      }
    }
    return rows;
  }, [rndNumber]);

  const onEditClick = useCallback((key: string) => {
    const defaultValue = getRows.reduce((acc, row) => {
      if (row.key === key) {
        return { ...acc, [row.lang]: row.value };
      }
      return acc;
    }, {} as Record<string, string>);
    setEditTranslationKey({ key, defaultValue });
  }, []);

  return (
    <PageContainer>
      <ProTable<LangRow>
        headerTitle={intl.formatMessage({
          id: 'menu.Configuration.Translations',
          defaultMessage: 'Translations',
        })}
        actionRef={actionRef}
        search={{
          layout: 'vertical',
        }}
        rowKey="id"
        request={({ lang, key, value }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          return new Promise((resolve) => {
            let rows = getRows.filter((row) => {
              let result = true;
              if (result && lang && row.lang !== lang) {
                result = false;
              }
              if (result && key && !row.key.includes(key)) {
                result = false;
              }
              if (
                result &&
                value &&
                typeof row.value === 'string' &&
                row.value &&
                !row.value.includes(value)
              ) {
                result = false;
              }
              return result;
            });

            if (sortArr) {
              console.log('rows: ', rows);
              console.log('sortArr: ', sortArr);
              rows = rows.sort(
                sortByKey<LangRow>(sortArr[0], sortArr[1] === 'ascend' ? false : true),
              );
            }

            resolve({
              data: rows,
              success: true,
              total: rows.length,
            });
          });
        }}
        columns={[
          ...TableColumns,
          {
            title: <FormattedMessage id="options" defaultMessage="options" />,
            dataIndex: 'option',
            valueType: 'option',
            width: '10%',
            render: (_, record) => [
              <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => onEditClick(record.key)}
                />
              </Tooltip>,
              ,
            ],
          },
        ]}
      />{' '}
      <AdminModalForm
        langKey={editTranslationKey?.key}
        defaultValue={editTranslationKey?.defaultValue}
        visible={!!editTranslationKey}
        onVisibleChange={(value) => {
          return value === false && setEditTranslationKey(undefined);
        }}
        onFinish={async (values) => {
          Object.entries(values.text).forEach((txt) => {
            if (txt[1]) {
              addLocale(
                txt[0],
                { [values.key]: txt[1] },
                {
                  antd: localeInfo[txt[0]].antd,
                  momentLocale: localeInfo[txt[0]].momentLocale,
                },
              );
            }
          });

          if (actionRef.current) {
            setRndNumber(Math.random());
            actionRef.current.reload();
          }

          const t = await translations({ group: 'Admin', key: values.key });

          if (t.success) {
            if (t.data.length > 0 && t.data[0].id) {
              updateTranslation(t.data[0].id, values);
            } else {
              await createTranslation(values);
            }
          }

          setEditTranslationKey(undefined);

          return true;
        }}
      />
    </PageContainer>
  );
};

export default Translations;
