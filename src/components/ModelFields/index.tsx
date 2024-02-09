import React, { Fragment, useCallback, useRef, useState } from 'react';

import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Tooltip, message } from 'antd';
import { FormattedMessage, useIntl } from 'umi';

import { deleteField, fields as fetchFields } from '@/services/escola-lms/fields';

import ModelFieldsModalForm from './ModalForm';

export const TableColumns: ProColumns<EscolaLms.ModelFields.Models.Metadata>[] = [
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    hideInSearch: true,
    sorter: true,
  },

  {
    title: <FormattedMessage id="type" defaultMessage="type" />,
    dataIndex: 'type',
    sorter: true,
  },

  {
    title: <FormattedMessage id="default" defaultMessage="default" />,
    dataIndex: 'default',
    hideInSearch: true,
  },
];

export const ModelFields: React.FC<{
  class_type: string;
}> = ({ class_type }) => {
  const actionRef = useRef<ActionType>();
  const [loading, setLoading] = useState(false);
  const intl = useIntl();
  const [modalVisible, setModalVisible] = useState<string | false>(false);
  const [fields, setFields] = useState<EscolaLms.ModelFields.Models.Metadata[]>([]);

  const handleRemove = useCallback(
    async ({ class_type_to_remove, name }: { class_type_to_remove: string; name: string }) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await deleteField({ class_type: class_type_to_remove, name }).then((response) => {
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
    <Fragment>
      <ModelFieldsModalForm
        fields={fields}
        onResponse={() => {
          setModalVisible(false);
          actionRef.current?.reload();
        }}
        class_type={class_type}
        name={modalVisible}
        visible={typeof modalVisible === 'string'}
        onVisibleChange={(value) => value === false && setModalVisible(false)}
      />

      <ProTable<EscolaLms.ModelFields.Models.Metadata>
        search={false}
        headerTitle={intl.formatMessage({
          id: 'ModelFields',
          defaultMessage: 'Model Fields',
        })}
        toolBarRender={() => [
          <Button type="primary" key="new" onClick={() => setModalVisible('new')}>
            <PlusOutlined /> <FormattedMessage id="new" defaultMessage="new" />
          </Button>,
        ]}
        loading={loading}
        actionRef={actionRef}
        rowKey="id"
        request={({ pageSize, current }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          setLoading(true);

          return fetchFields({
            page: current,
            per_page: pageSize,
            class_type,
            order_by: sortArr && sortArr[0],
            order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
          }).then((response) => {
            setLoading(false);
            if (response.success) {
              setFields(response.data);
              return {
                data: response.data,
                total: response.data.length,
                success: true,
              };
            }
            return [];
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
                  onClick={() => setModalVisible(record.name)}
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
                onConfirm={() =>
                  record.name &&
                  handleRemove({ class_type_to_remove: class_type, name: record.name })
                }
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
      />
    </Fragment>
  );
};
export default ModelFields;
