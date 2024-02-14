import UserSelect from '@/components/UserSelect';
import { DATETIME_FORMAT } from '@/consts/dates';
import { DeleteOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Button, Drawer, Popconfirm, Tag, Tooltip, Typography, message } from 'antd';
import { format } from 'date-fns';
import React, { useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { CollectionSelect } from '@/components/CollectionSelect';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import {
  approveCourseAccess,
  courseAccess,
  deleteCourseAccess,
} from '@/services/escola-lms/course_access';

const handleRemove = async (id: number) => {
  return deleteCourseAccess(id).then((response) => {
    if (response.success) {
      message.success(response.message);
    }
    return true;
  });
};

const DataDisplay: React.FC<{ data: unknown }> = ({ data }) => {
  const [visible, setVisible] = useState(false);
  return data && typeof data === 'object' && Object.keys(data).length > 0 ? (
    <React.Fragment>
      <Button size="small" onClick={() => setVisible(true)}>
        <FormattedMessage id="show" defaultMessage="show" />
      </Button>
      <Drawer width={700} open={visible} onClose={() => setVisible(false)}>
        <Typography.Paragraph>
          {Object.keys(data).map((key) => (
            <p key={key}>
              <FormattedMessage id={key} defaultMessage={key} />:
              <span> {data[key as keyof typeof data]}</span>
            </p>
          ))}
        </Typography.Paragraph>
      </Drawer>
    </React.Fragment>
  ) : (
    <React.Fragment />
  );
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const columns: ProColumns<API.CourseAccessEnquiryListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
      sorter: true,
      width: '80px',
    },

    {
      title: <FormattedMessage id="course" defaultMessage="course" />,
      dataIndex: 'course_id',
      renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
        if (type === 'form') {
          return null;
        }
        const stateType = form.getFieldValue('state');
        return (
          <CollectionSelect
            {...rest}
            state={{
              type: stateType,
            }}
          />
        );
      },
      render: (_, record) =>
        record.course &&
        record.course.id && (
          <TypeButtonDrawer key={'course_id'} type="App\Models\Course" type_id={record.course.id} />
        ),
    },
    {
      title: <FormattedMessage id="user" defaultMessage="user" />,
      dataIndex: 'user_id',
      renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
        if (type === 'form') {
          return null;
        }
        const stateType = form.getFieldValue('state');
        return (
          <UserSelect
            {...rest}
            state={{
              type: stateType,
            }}
          />
        );
      },
      render: (_, record) =>
        record.user?.id && (
          <TypeButtonDrawer
            key={'user'}
            type="EscolaLms\Core\Models\User"
            type_id={record.user?.id}
          />
        ),
    },
    {
      title: <FormattedMessage id="created_at" defaultMessage="Created at" />,
      dataIndex: 'created_at',
      hideInSearch: true,
      sorter: true,
      render: (_, record) =>
        record.created_at && format(new Date(record.created_at), DATETIME_FORMAT),
    },
    {
      title: <FormattedMessage id="status" defaultMessage="Status" />,
      dataIndex: 'status',
      sorter: true,
      valueType: 'select',
      valueEnum: {
        pending: {
          text: (
            <Tag color="processing">
              <FormattedMessage id="pending" defaultMessage="pending" />
            </Tag>
          ),
          status: 'pending',
        },
        approved: {
          text: (
            <Tag color="success">
              <FormattedMessage id="approved" defaultMessage="approved" />
            </Tag>
          ),
          status: 'approved',
        },
      },
      render: (_, record) =>
        record.status === 'pending' ? (
          <Button
            size="small"
            type="primary"
            onClick={() => {
              approveCourseAccess(record.id).then((response) => {
                if (response.success) {
                  if (actionRef.current) {
                    actionRef.current.reload();
                  }
                }
              });
            }}
          >
            <FormattedMessage id="approve" defaultMessage="Approve" />
          </Button>
        ) : (
          <Tag color={record.status === 'approved' ? 'success' : 'processing'}>
            <FormattedMessage id={record.status} defaultMessage={record.status} />
          </Tag>
        ),
    },
    {
      title: <FormattedMessage id="extra_data" defaultMessage="Extra data" />,
      dataIndex: 'data',
      hideInSearch: true,
      render: (_, record) => <DataDisplay data={record.data} />,
    },
    {
      hideInSearch: true,
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="option" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
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
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          okText={<FormattedMessage id="yes" />}
          cancelText={<FormattedMessage id="no" />}
        >
          <Tooltip title={<FormattedMessage id="delete" defaultMessage="delete" />}>
            <Button type="primary" icon={<DeleteOutlined />} danger />
          </Tooltip>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.CourseAccessEnquiryListItem, API.CourseAccessEnquiryListParams>
        headerTitle={intl.formatMessage({
          id: 'courseAccessEnquiries',
          defaultMessage: 'Course Access Enquiries',
        })}
        search={{
          layout: 'vertical',
        }}
        actionRef={actionRef}
        rowKey="id"
        request={({ pageSize, current, course_id, status, user_id }, sort) => {
          const sortArr = sort && Object.entries(sort)[0];
          return courseAccess({
            pageSize,
            current,
            course_id,
            user_id,
            status,
            order_by: sortArr && sortArr[0],
            order: sortArr ? (sortArr[1] === 'ascend' ? 'ASC' : 'DESC') : undefined,
          }).then((response) => {
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
        columns={columns}
      />
    </PageContainer>
  );
};

export default TableList;
