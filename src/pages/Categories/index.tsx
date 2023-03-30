import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Tag, Tooltip, Popconfirm, Spin, Modal } from 'antd';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { IntlShape } from 'react-intl';
import { Tree } from '@/components/Tree';

import {
  categories,
  createCategory,
  updateCategory,
  deleteCategory,
  categoryTree,
} from '@/services/escola-lms/category';
import CategoryModalForm from './components/ModalForm';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const handleUpdate = async (intl: IntlShape, fields: API.CategoryListItem, id?: number) => {
  const hide = message.loading(
    intl.formatMessage({
      id: 'loading',
    }),
  );
  try {
    await (id && id !== -1 ? updateCategory(id, { ...fields }) : createCategory({ ...fields }));
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
      title: <FormattedMessage id="full_name" defaultMessage="full_name" />,
      dataIndex: 'name_with_breadcrumbs',
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
      render: (_, record) =>
        record.is_active ? (
          <Tag color="success">
            <FormattedMessage id="Active" defaultMessage="Active" />
          </Tag>
        ) : (
          <Tag color="error">
            <FormattedMessage id="Inactive" defaultMessage="Inactive" />
          </Tag>
        ),
    },

    {
      hideInSearch: true,
      title: <FormattedMessage id="parent_id" defaultMessage="parent_id" />,
      dataIndex: 'parent_id',
      tip: intl.formatMessage({
        id: 'parent_id_tooltip',
        defaultMessage: 'Parent category',
      }),
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
      <ProTable<API.CategoryListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'menu.Courses.Categories',
          defaultMessage: 'categories',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={
          {
            // labelWidth: 120,
          }
        }
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
          const success = await handleUpdate(
            intl,
            value as API.CategoryListItem,
            Number(modalVisible),
          );
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
