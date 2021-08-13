import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Tag, Tooltip, Popconfirm } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

import {
  categories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '@/services/escola-lms/category';
import CategoryModalForm from './components/ModalForm';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const handleUpdate = async (fields: API.CategoryListItem, id?: number) => {
  const hide = message.loading('loading');
  try {
    await (id && id !== -1 ? updateCategory(id, { ...fields }) : createCategory({ ...fields }));
    hide();
    message.success('success');
    return true;
  } catch (error) {
    hide();
    message.error('error');
    return false;
  }
};

const handleRemove = async (id: number) => {
  const hide = message.loading('loading');
  try {
    await deleteCategory(id);
    hide();
    message.success('success');
    return true;
  } catch (error) {
    hide();
    message.error('error');
    return false;
  }
};

const TableList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<number | false>(false);
  const [data, setData] = useState<API.CategoryListItem[]>([]);
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const columns: ProColumns<API.CategoryListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="name" defaultMessage="name" />,
      dataIndex: 'name',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="slug" defaultMessage="slug" />,
      dataIndex: 'slug',
      hideInSearch: true,
    },

    {
      title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="状态" />,
      dataIndex: 'is_active',
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        true: {
          text: (
            <Tag color="error">
              <FormattedMessage id="Inactive" defaultMessage="Inactive" />
            </Tag>
          ),
          status: 'Inactive',
        },
        false: {
          text: (
            <Tag color="success">
              <FormattedMessage id="Active" defaultMessage="Active" />
            </Tag>
          ),
          status: 'Active',
        },
      },
    },

    {
      hideInSearch: true,
      title: <FormattedMessage id="parent_id" defaultMessage="parent_id" />,
      dataIndex: 'parent_id',
      tip: 'name key',
      render: (_, record) => {
        const parentCat = data.find((cat) => cat.id === record.parent_id);
        if (parentCat) {
          return (
            <Button size="small" onClick={() => setModalVisible(parentCat.id)}>
              {parentCat.name}
            </Button>
          );
        }
        return <React.Fragment>None</React.Fragment>;
      },
    },

    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Tooltip key="edit" title={<FormattedMessage id="edit" defaultMessage="edit" />}>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => setModalVisible(record.id)}
          ></Button>
        </Tooltip>,
        <Popconfirm
          key="delete"
          title={
            <FormattedMessage
              id="deleteQuestion"
              defaultMessage="Are you sure to delete this record?"
            />
          }
          onConfirm={async () => {
            const success = await handleRemove(record.id);
            if (success) {
              setModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          okText="Yes"
          cancelText="No"
        >
          <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
            <Button type="primary" icon={<DeleteOutlined />} danger></Button>
          </Tooltip>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.CategoryListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'categories',
          defaultMessage: 'categories',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
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
        request={() => {
          return categories().then((cats) => {
            setData(cats.data);
            return cats;
          });
        }}
        columns={columns}
        pagination={{ pageSize: 100 }}
      />

      <CategoryModalForm
        id={modalVisible}
        visible={Number.isInteger(modalVisible)}
        onVisibleChange={(value) => {
          return value === false && setModalVisible(false);
        }}
        onFinish={async (value) => {
          const success = await handleUpdate(value as API.CategoryListItem, Number(modalVisible));
          if (success) {
            setModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      ></CategoryModalForm>
    </PageContainer>
  );
};

export default TableList;
