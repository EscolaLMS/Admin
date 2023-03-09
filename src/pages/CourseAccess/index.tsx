import { DeleteOutlined } from '@ant-design/icons';
import { Button, Tooltip, Popconfirm, message, Typography, Drawer } from 'antd';
import React, { useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import UserSelect from '@/components/UserSelect';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';

import {
  courseAccess,
  deleteCourseAccess,
  approveCourseAccess,
} from '@/services/escola-lms/course_access';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import CourseSelect from '@/components/CourseSelect';

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
          <pre>{JSON.stringify(data, null, 2)}</pre>
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
          <CourseSelect
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
      render: (_, record) =>
        record.created_at && format(new Date(record.created_at), DATETIME_FORMAT),
    },
    {
      title: <FormattedMessage id="status" defaultMessage="Status" />,
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        pending: {
          text: 'pending',
          status: 'pending',
        },
        approved: {
          text: 'approved',
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
          record.status
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
        actionRef={actionRef}
        rowKey="id"
        request={({ pageSize, current, course_id, status, user_id }) => {
          return courseAccess({
            pageSize,
            current,
            course_id,
            user_id,
            status,
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
