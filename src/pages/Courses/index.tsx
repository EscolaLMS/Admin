import {
  CopyOutlined,
  DeleteOutlined,
  DollarOutlined,
  EditOutlined,
  ExportOutlined,
  FireOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Popconfirm, Tag, Tooltip, Typography, message } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';

import CategoryTree from '@/components/CategoryTree';
import SecureUpload from '@/components/SecureUpload';
import Tags from '@/components/Tags';
import UserSelect from '@/components/UserSelect';
import PERMISSIONS from '@/consts/permissions';
import { usePermissions } from '@/hooks/usePermissions';
import { cloneCourse, course, exportCourse, removeCourse } from '@/services/escola-lms/course';
import { createTableOrderObject, roundTo } from '@/utils/utils';
import './style.less';

function getUserItems(v: number[] | API.UserItem[]): API.UserItem[] {
  return ((v ?? []) as (API.UserItem | number)[])?.filter(
    (i): i is API.UserItem => typeof i !== 'number',
  );
}

export const TableColumns: ProColumns<API.CourseListItem>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    sorter: true,
    search: false,
    width: '80px',
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'title',
    sorter: true,
  },
  {
    title: <FormattedMessage id="status" defaultMessage="status" />,
    dataIndex: 'status',
    sorter: true,
    valueEnum: {
      draft: {
        text: (
          <Tag>
            <FormattedMessage id="draft" defaultMessage="draft" />
          </Tag>
        ),
        status: 'draft',
      },
      archived: {
        text: (
          <Tag color="error">
            <FormattedMessage id="archived" defaultMessage="archived" />
          </Tag>
        ),
        status: 'archived',
      },
      published: {
        text: (
          <Tag color="success">
            <FormattedMessage id="published" defaultMessage="published" />
          </Tag>
        ),
        status: 'published',
      },
      published_unactivated: {
        text: (
          <Tag color="processing">
            <FormattedMessage id="published_unactivated" defaultMessage="published_unactivated" />
          </Tag>
        ),
        status: 'published_unactivated',
      },
    },
  },
  {
    title: <FormattedMessage id="product" defaultMessage="base_price" />,
    dataIndex: 'product',
    sorter: false,
    valueType: 'textarea',
    search: false,
    render: (_, record) => {
      if (record.product && record.product.price) {
        return (
          <Link to={`/courses/list/${record.id}/product`}>
            <Button type="primary" icon={<DollarOutlined />}>
              <span>{roundTo(record.product.price, 2, 100)}</span>
            </Button>
          </Link>
        );
      }
      if (record.public) {
        return (
          <Typography>
            <FireOutlined /> <FormattedMessage id="public_course" defaultMessage="public course" />
          </Typography>
        );
      }
      return (
        <Typography>
          <FireOutlined /> <FormattedMessage id="no_pricing" defaultMessage="no pricing" />
        </Typography>
      );
    },
  },
  {
    title: <FormattedMessage id="duration" defaultMessage="Duration" />,
    dataIndex: 'duration',
    sorter: true,
    valueType: 'textarea',
    search: false,
  },
  {
    title: <FormattedMessage id="author_tutor" />,
    dataIndex: 'authors',
    key: 'authors',
    sorter: false,
    render: (_, record) => (
      <>
        {getUserItems(record.authors ?? []).map((author) => (
          <Tag key={`${record?.id}-${author.id}`}>{`${author.first_name} ${author.last_name}`}</Tag>
        ))}
      </>
    ),
    renderFormItem: (_i, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') return null;
      const stateType = form.getFieldValue('state');

      return <UserSelect multiple {...rest} state={{ type: stateType }} />;
    },
  },
  {
    title: <FormattedMessage id="categories" defaultMessage="Categories" />,
    dataIndex: 'category_id',
    key: 'category_id',
    sorter: false,
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <CategoryTree
          {...rest}
          state={{
            type: stateType,
          }}
        />
      );
    },
    render: (_, record) => (
      <React.Fragment>
        {record.categories?.map((category) =>
          typeof category === 'object' ? (
            <Tag key={category.name}>{category.name}</Tag>
          ) : (
            <Tag key={category}>{category}</Tag>
          ),
        )}
      </React.Fragment>
    ),
  },
  {
    title: <FormattedMessage id="tags" defaultMessage="Tags" />,
    dataIndex: 'tag',
    key: 'tag',
    sorter: false,
    renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
      if (type === 'form') {
        return null;
      }
      const stateType = form.getFieldValue('state');
      return (
        <Tags
          {...rest}
          state={{
            type: stateType,
          }}
          multiple={true}
        />
      );
    },
    render: (_, record) => (
      <React.Fragment>
        {record.tags?.map((tag) =>
          typeof tag === 'object' ? (
            <Tag key={tag.title}>{tag.title}</Tag>
          ) : (
            <Tag key={tag}>{tag}</Tag>
          ),
        )}
      </React.Fragment>
    ),
  },
];

const { Title, Text } = Typography;

const TableList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const intl = useIntl();
  const { checkPermission } = usePermissions();

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await removeCourse(id).then((response) => {
          setLoading(false);
          if (response.success) {
            message.success(intl.formatMessage({ id: response.message }));
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

  const handleExport = useCallback(async (id: number) => {
    setLoading(true);
    const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
    try {
      const request = await exportCourse(id);
      const response = await request;
      if (response.success) {
        message.success(intl.formatMessage({ id: request.message }));
        const url: string = response.data;
        window.open(url, '_blank');
      }
    } catch (error) {
      message.error(<FormattedMessage id="error" defaultMessage="error" />);
    } finally {
      hide();
      setLoading(false);
    }
  }, []);

  const handleClone = useCallback(async (id: number) => {
    setLoading(true);
    const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
    try {
      const request = await cloneCourse(id);
      if (request.success) {
        message.success(intl.formatMessage({ id: request.message }));
        hide();
        setLoading(false);
        actionRef.current?.reload();
      }
      return true;
    } catch (error) {
      hide();
      setLoading(false);
      return false;
    }
  }, []);

  return (
    <PageContainer>
      <ProCard
        ghost
        gutter={20}
        style={{
          marginBottom: 20,
        }}
      >
        <ProCard
          layout="center"
          style={{
            height: '100%',
          }}
        >
          <Link
            key={'new'}
            to="/courses/list/new"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <PlusCircleFilled
              style={{
                fontSize: '32px',
              }}
            />
            <Title
              level={5}
              style={{
                marginBottom: 0,
              }}
            >
              <FormattedMessage id="create_new" defaultMessage="Create new" />
            </Title>
          </Link>
        </ProCard>
        {checkPermission(PERMISSIONS.CourseImport) && (
          <ProCard
            layout="center"
            style={{
              height: '100%',
            }}
          >
            <div className={'course-upload'}>
              <SecureUpload
                key="upload"
                title={intl.formatMessage({
                  id: 'import_file',
                })}
                url="/api/admin/courses/zip/import"
                name="file"
                accept=".zip"
                onChange={(info) => {
                  if (info.file.status === 'done') {
                    if (info.file.response && info.file.response.success) {
                      message.success(intl.formatMessage({ id: info.file.response.message }));
                    }
                  }
                  if (info.file.response && info.file.status === 'error') {
                    message.error(intl.formatMessage({ id: info.file.response.message }));
                    console.error(info.file.response);
                  }
                }}
              />
            </div>
          </ProCard>
        )}
        <ProCard
          layout="center"
          style={{
            backgroundColor: '#FFED8E',
          }}
        >
          <a
            href={'https://docs.wellms.io/app-guide/'}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textAlign: 'center',
            }}
          >
            <Title level={5}>
              <FormattedMessage
                id="course_guide_title"
                defaultMessage="Not sure how to create a course?"
              />
            </Title>
            <Text>
              <FormattedMessage
                id="course_guide_text"
                defaultMessage="Check out our guide and learn how to do it."
              />
            </Text>
          </a>
        </ProCard>
      </ProCard>{' '}
      <ProTable<API.CourseListItem, API.CourseParams>
        loading={loading}
        headerTitle={intl.formatMessage({
          id: 'menu.Courses',
          defaultMessage: 'Courses List',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          layout: 'vertical',
        }}
        request={(
          { pageSize, current, title, active, category_id, tag, status, authors },
          sort,
        ) => {
          setLoading(true);
          return course({
            title: title || undefined,
            status,
            per_page: pageSize,
            page: current,
            category_id,
            tag,
            authors,
            active: active && active,
            ...createTableOrderObject(sort, 'created_at'),
          }).then((response) => {
            setLoading(false);
            if (response.success) {
              return {
                data: response.data,
                total: response.meta.total,
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
            render: (_, record) => [
              <Link key="edit" to={`/courses/list/${record.id}`}>
                <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                  <Button type="primary" icon={<EditOutlined />} />
                </Tooltip>
              </Link>,
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

              (checkPermission(PERMISSIONS.CourseExport) ||
                checkPermission(PERMISSIONS.CourseExportAuthored)) && (
                <Tooltip
                  key="export"
                  title={<FormattedMessage id="export" defaultMessage="export" />}
                >
                  <Button
                    onClick={() => handleExport(Number(record.id))}
                    icon={<ExportOutlined />}
                  />
                </Tooltip>
              ),
              checkPermission(PERMISSIONS.COURSES_CLONE) && (
                <Tooltip key="clone" title={<FormattedMessage id="clone" defaultMessage="clone" />}>
                  <Button
                    onClick={() => record.id && handleClone(record.id)}
                    icon={<CopyOutlined />}
                  />
                </Tooltip>
              ),
            ],
          },
        ]}
      />
    </PageContainer>
  );
};

export default TableList;
