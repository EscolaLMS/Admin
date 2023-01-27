import { CopyOutlined, FireOutlined, PlusCircleFilled } from '@ant-design/icons';
import { Button, Tag, Tooltip, Popconfirm, message, Typography } from 'antd';
import React, { useState, useRef, useCallback } from 'react';
import { useIntl, FormattedMessage, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { IntlProvider, createIntl } from '@ant-design/pro-table';

import { cloneCourse, course, exportCourse, removeCourse } from '@/services/escola-lms/course';
import CategoryTree from '@/components/CategoryTree';
import Tags from '@/components/Tags';
import { DeleteOutlined, EditOutlined, ExportOutlined, DollarOutlined } from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import SecureUpload from '@/components/SecureUpload';
import './style.less';

const enLocale = {
  tableFrom: {
    search: 'Query',
    reset: 'Reset',
    submit: 'Submit',
    collapsed: 'Expand',
    expand: 'Collapse',
    inputPlaceholder: 'Please enter',
    selectPlaceholder: 'Please select',
  },
  alert: {
    clear: 'Clear',
  },
  tableToolBar: {
    leftPin: 'Pin to left',
    rightPin: 'Pin to right',
    noPin: 'Unpinned',
    leftFixedTitle: 'Fixed the left',
    rightFixedTitle: 'Fixed the right',
    noFixedTitle: 'Not Fixed',
    reset: 'Reset',
    columnDisplay: 'Column Display',
    columnSetting: 'Settings',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    reload: 'Refresh',
    density: 'Density',
    densityDefault: 'Default1',
    densityLarger: 'Larger1',
    densityMiddle: 'Middle1',
    densitySmall: 'Compact1',
  },
};

const enUSIntl = createIntl('en_US', enLocale);
// const plPLIntl = createIntl('pl_pl', enLocale);

export const TableColumns: ProColumns<API.CourseListItem>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'id',
    sorter: true,
    search: false,
  },
  {
    title: <FormattedMessage id="title" defaultMessage="title" />,
    dataIndex: 'title',
    sorter: true,
  },
  {
    title: <FormattedMessage id="status" defaultMessage="status" />,
    dataIndex: 'status',
    sorter: false,
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
    },
  },
  {
    title: <FormattedMessage id="product" defaultMessage="base_price" />,
    dataIndex: 'product',
    sorter: true,
    valueType: 'textarea',
    search: false,
    render: (_, record) => {
      if (record.product && record.product.price) {
        return (
          <Link to={`/courses/list/${record.id}/product`}>
            <Button type="primary" icon={<DollarOutlined />}>
              {(record.product.price / 100).toFixed(2)}
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

  const handleRemove = useCallback(
    async (id: number) => {
      setLoading(true);
      const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
      try {
        await removeCourse(id).then((response) => {
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

  const handleExport = useCallback(async (id: number) => {
    setLoading(true);
    const hide = message.loading(<FormattedMessage id="loading" defaultMessage="loading" />);
    try {
      const request = await exportCourse(id);
      const response = await request;
      if (response.success) {
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
        message.success(request.message);
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
                    message.success(info.file.response.message);
                  }
                }
                if (info.file.response && info.file.status === 'error') {
                  message.error(info.file.response.message);
                  console.error(info.file.response);
                }
              }}
            />
          </div>
        </ProCard>
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
      <IntlProvider value={{ intl: enUSIntl }}>
        <ProTable<API.CourseListItem, API.CourseParams>
          loading={loading}
          headerTitle={intl.formatMessage({
            id: 'menu.Courses',
            defaultMessage: 'Courses List',
          })}
          actionRef={actionRef}
          rowKey="id"
          search={
            {
              // labelWidth: 120,
            }
          }
          request={({ pageSize, current, title, active, category_id, tag, status }, sort) => {
            const sortArr = sort && Object.entries(sort)[0];
            setLoading(true);
            return course({
              title,
              status,
              pageSize,
              current,
              category_id,
              tag,
              active: active && active,
              order_by: sortArr && sortArr[0], // i like nested ternary
              /* eslint-disable */ order: sortArr
                ? sortArr[1] === 'ascend'
                  ? 'ASC'
                  : 'DESC'
                : undefined,
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
                <Link to={`/courses/list/${record.id}`}>
                  <Tooltip title={<FormattedMessage id="edit" defaultMessage="edit" />}>
                    <Button type="primary" icon={<EditOutlined />}></Button>
                  </Tooltip>
                </Link>,
                <Popconfirm
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
                    <Button type="primary" icon={<DeleteOutlined />} danger></Button>
                  </Tooltip>
                </Popconfirm>,

                <Tooltip title={<FormattedMessage id="export" defaultMessage="export" />}>
                  <Button
                    onClick={() => handleExport(Number(record.id))}
                    icon={<ExportOutlined />}
                  ></Button>
                </Tooltip>,
                <Tooltip title={<FormattedMessage id="clone" defaultMessage="clone" />}>
                  <Button
                    onClick={() => record.id && handleClone(record.id)}
                    icon={<CopyOutlined />}
                  ></Button>
                </Tooltip>,
              ],
            },
          ]}
        />
      </IntlProvider>
    </PageContainer>
  );
};

export default TableList;
