import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Tag, Typography } from 'antd';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import {
  createTranslation,
  deleteTranslation,
  translations,
  updateTranslation,
} from '@/services/escola-lms/translations';
import { createTableOrderObject } from '@/utils/utils';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Tooltip, message } from 'antd';
import TranslationModalForm from './components/ModalForm';

export const TableColumns: ProColumns<API.Translation>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    sorter: true,
    hideInSearch: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="group" defaultMessage="group" />,
    dataIndex: 'group',
    sorter: true,
  },
  {
    title: <FormattedMessage id="key" defaultMessage="key" />,
    dataIndex: 'key',
    sorter: true,
  },
  {
    title: <FormattedMessage id="text" defaultMessage="text" />,
    dataIndex: 'text',
    sorter: true,
    hideInSearch: true,
    render: (_, record) => (
      <Fragment>
        {Object.entries(record.text).map((txt) => (
          <Typography.Paragraph key={txt[0]}>
            <Tag>{txt[0]}</Tag>
            {txt[1]}
          </Typography.Paragraph>
        ))}
      </Fragment>
    ),
  },
];

const Translations: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [modalVisible, setModalVisible] = useState<number | false>(false);
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await deleteTranslation(id).then((response) => {
          setLoading(false);
          if (response.success) {
            message.success(response.message);
          }
        });
        hide();
        setLoading(false);
        actionRef.current?.reload();
        return true;
      } catch (error) {
        hide();
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
        setLoading(false);
        return false;
      }
    },
    [actionRef],
  );

  return (
    <PageContainer>
      <ProTable<
        API.Translation,
        API.PageParams &
          API.PaginationParams & {
            group: string;
            key: string;
          }
      >
        headerTitle={intl.formatMessage({
          id: 'menu.Configuration.Translations',
          defaultMessage: 'Translations',
        })}
        search={{
          layout: 'vertical',
        }}
        loading={loading}
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setModalVisible(-1);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
        ]}
        request={({ pageSize, current, group, key }, sort) => {
          setLoading(true);
          return translations({
            per_page: pageSize,
            page: current,
            group: group || undefined,
            key: key || undefined,
            ...createTableOrderObject(sort, 'created_at'),
          })
            .then((response) => {
              setLoading(false);
              if (response.success) {
                return {
                  data: response.data,
                  total: response.meta.total,
                  success: true,
                };
              }
              return [];
            })
            .finally(() => {
              setLoading(false);
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
                  onClick={() => record.id && setModalVisible(record.id)}
                />
              </Tooltip>,
              <Popconfirm
                key="delete"
                title={
                  <FormattedMessage
                    id="deleteQuestion"
                    defaultMessage="Are you sure to delete this record?"
                  />
                }
                onConfirm={() => record.id && handleRemove(record.id)}
                okText={<FormattedMessage id="yes" defaultMessage="Yes" />}
                cancelText={<FormattedMessage id="no" defaultMessage="No" />}
              >
                <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
                  <Button type="primary" icon={<DeleteOutlined />} danger />
                </Tooltip>
              </Popconfirm>,
            ],
          },
        ]}
      />{' '}
      <TranslationModalForm
        id={modalVisible}
        visible={Number.isInteger(modalVisible)}
        onVisibleChange={(value) => {
          return value === false && setModalVisible(false);
        }}
        onFinish={async (value) => {
          value.text = Object.entries(value.text).reduce((acc, curr) => {
            if (curr[1] !== '') {
              return { ...acc, [curr[0]]: curr[1] };
            }
            return acc;
          }, {});
          if (modalVisible === -1) {
            const success = await createTranslation(value);
            if (success) {
              setModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
            return;
          }
          const success = await updateTranslation(Number(modalVisible), value);
          if (success) {
            setModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      />
    </PageContainer>
  );
};

export default Translations;
