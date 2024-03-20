import { Tree } from '@/components/Tree';
import { PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Modal, Popconfirm, Spin, Tag, Tooltip, message } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { IntlShape } from 'react-intl';
import { FormattedMessage, useIntl } from 'umi';

import {
  categories,
  categoryTree,
  createCategory,
  deleteCategory,
  updateCategory,
} from '@/services/escola-lms/category';
import { createTableOrderObject } from '@/utils/utils';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import CategoryModalForm from './components/ModalForm';

const handleUpdate = async (intl: IntlShape, fields: API.CategoryListItem, id?: number) => {
  const hide = message.loading(
    intl.formatMessage({
      id: 'loading',
    }),
  );
  try {
    await (id && id !== -1 ? updateCategory(id, fields) : createCategory(fields));
    hide();
    message.success(
      intl.formatMessage({
        id: 'success',
      }),
    );
    return true;
  } catch (error) {
    hide();
    message.error(
      intl
        .formatMessage({
          id: 'error',
        })
        .toString(),
    );
    return false;
  }
};

const handleRemove = async (intl: IntlShape, id: number) => {
  const hide = message.loading(
    intl.formatMessage({
      id: 'loading',
    }),
  );
  try {
    await deleteCategory(id);
    hide();
    message.success(
      intl.formatMessage({
        id: 'success',
      }),
    );
    return true;
  } catch (error) {
    hide();
    message.error(
      intl.formatMessage({
        id: 'error',
      }),
    );
    return false;
  }
};

export const staticColumns: ProColumns<API.CategoryListItem>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="name" defaultMessage="name" />,
    dataIndex: 'name',
    sorter: true,
  },
  {
    title: <FormattedMessage id="full_name" defaultMessage="full_name" />,
    dataIndex: 'name_with_breadcrumbs',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="slug" defaultMessage="slug" />,
    dataIndex: 'slug',
    hideInSearch: true,
    sorter: true,
  },

  {
    title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="Status" />,
    dataIndex: 'is_active',
    sorter: true,
    valueEnum: {
      true: {
        text: (
          <Tag color="success">
            <FormattedMessage id="Active" defaultMessage="Active" />
          </Tag>
        ),
        status: 'true',
      },
      false: {
        text: (
          <Tag color="error">
            <FormattedMessage id="Inactive" defaultMessage="Inactive" />
          </Tag>
        ),
        status: 'false',
      },
    },
  },
];

const TreeModal: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [categoriesWithChildren, setCategoriesWithChildren] = useState<API.Category[]>([]);

  useEffect(() => {
    setLoading(true);
    categoryTree()
      .then((data) => {
        if (data.success) {
          setCategoriesWithChildren(data.data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spin />;
  }

  return (
    <Tree
      branch={categoriesWithChildren}
      titlePropName="name"
      childrenPropName="subcategories"
      keyPropName="id"
    />
  );
};

const TableList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<number | false>(false);
  const [data, setData] = useState<API.CategoryListItem[]>([]);
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const [showTree, setShowTree] = useState(false);

  const categoryHasChildren = useCallback(
    (id: number) => {
      return !!data.some((category) => category.parent_id === id);
    },
    [data],
  );

  const columns: ProColumns<API.CategoryListItem>[] = [
    ...staticColumns,
    {
      hideInSearch: true,
      title: <FormattedMessage id="parent_id" defaultMessage="parent_id" />,
      dataIndex: 'parent_id',
      tooltip: <FormattedMessage id="parent_id_tooltip" defaultMessage="Parent category" />,
      render: (_, record) => {
        const parentCat = data.find((cat) => cat.id === record.parent_id);
        if (parentCat) {
          return (
            <Button size="small" onClick={() => setModalVisible(parentCat.id)}>
              {parentCat.name}
            </Button>
          );
        }
        return (
          <React.Fragment>
            <FormattedMessage id="none" />
          </React.Fragment>
        );
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
          />
        </Tooltip>,
        categoryHasChildren(record.id) ? (
          <Tooltip
            key="delete"
            title={
              <FormattedMessage
                id="cantDelete"
                defaultMessage="You can't delete this category because it's parent to others"
              />
            }
          >
            <Button disabled={true} type="primary" icon={<DeleteOutlined />} danger />
          </Tooltip>
        ) : (
          <Popconfirm
            key="delete"
            title={
              <FormattedMessage
                id="deleteQuestion"
                defaultMessage="Are you sure to delete this record?"
              />
            }
            onConfirm={async () => {
              const success = await handleRemove(intl, record.id);
              if (success) {
                setModalVisible(false);
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
            }}
            okText={<FormattedMessage id="yes" defaultMessage="Yes" />}
            cancelText={<FormattedMessage id="no" defaultMessage="No" />}
          >
            <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
              <Button type="primary" icon={<DeleteOutlined />} danger />
            </Tooltip>
          </Popconfirm>
        ),
      ],
    },
  ];

  return (
    <PageContainer>
      <Modal open={showTree} onCancel={() => setShowTree(false)} onOk={() => setShowTree(false)}>
        {showTree && <TreeModal />}
      </Modal>
      <ProTable<API.CategoryListItem, API.CategoryParams>
        headerTitle={intl.formatMessage({
          id: 'menu.Courses.Categories',
          defaultMessage: 'categories',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        toolBarRender={() => [
          <Button key={'show_tree'} onClick={() => setShowTree(true)}>
            <FormattedMessage id="show_tree" defaultMessage="Show Tree" />
          </Button>,
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
        request={({ pageSize, current, name, is_active }, sort) => {
          return categories({
            per_page: pageSize,
            page: current,
            name: name || undefined,
            is_active: is_active ? (is_active === 'true' ? 1 : 0) : undefined,
            ...createTableOrderObject(sort, 'created_at'),
          }).then((response) => {
            if (response.success) {
              setData(response.data);
              return {
                data: response.data,
                total: response.meta.total,
                success: true,
              };
            }
            return [];
          });
        }}
        columns={columns}
      />

      <CategoryModalForm
        id={modalVisible}
        visible={Number.isInteger(modalVisible)}
        onVisibleChange={(value) => !value && setModalVisible(false)}
        onFinish={async (value) => {
          const success = await handleUpdate(intl, value, Number(modalVisible));
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

export default TableList;
