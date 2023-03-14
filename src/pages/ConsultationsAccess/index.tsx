import { DeleteOutlined } from '@ant-design/icons';
import {
  Button,
  Tooltip,
  Popconfirm,
  message,
  Typography,
  Drawer,
  Tag,
  Descriptions,
  Space,
  Input,
} from 'antd';
import React, { Fragment, useCallback, useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import UserSelect from '@/components/UserSelect';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';

import {
  consultationAccess,
  approveConsultationAccessTerm,
  disapproveConsultationAccess,
} from '@/services/escola-lms/consultations_access';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import CourseSelect from '@/components/CourseSelect';

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

const Disapprove: React.FC<{ id: number; onChange: () => void }> = ({ id, onChange }) => {
  const [txt, setTxt] = useState<string>('');
  const onDisapprove = useCallback(() => {
    disapproveConsultationAccess(id, { message: txt }).finally(() => onChange());
  }, [txt]);
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Input.TextArea placeholder="reason" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <Button type="primary" danger onClick={() => onDisapprove()}>
        <FormattedMessage id="Disapprove" defaultMessage="Disapprove" />
      </Button>
    </Space>
  );
};

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const [disapproveId, setDisapproveId] = useState<number>();

  const columns: ProColumns<API.ConsultationAccessEnquiryListItem>[] = [
    {
      title: <FormattedMessage id="ID" defaultMessage="ID" />,
      dataIndex: 'id',
      hideInSearch: true,
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
          >
            <Tag>{record.user.email}</Tag>
          </TypeButtonDrawer>
        ),
    },

    {
      title: <FormattedMessage id="consultation_id" defaultMessage="Consultation" />,
      dataIndex: 'consultation_id',

      renderFormItem: (item, { type, defaultRender, ...rest }, form) => {
        if (type === 'form') {
          return null;
        }
        const stateType = form.getFieldValue('state');
        return (
          <CourseSelect
            modelType="CONSULTATIONS"
            {...rest}
            state={{
              type: stateType,
            }}
          />
        );
      },

      render: (_, record) =>
        record.consultation?.id && (
          <TypeButtonDrawer
            key={'consultation_id'}
            type="EscolaLms\Consultations\Models\Consultation"
            type_id={record.consultation?.id}
          >
            <Tag>{record.consultation.name}</Tag>
          </TypeButtonDrawer>
        ),
    },
    {
      title: <FormattedMessage id="consultation_term" defaultMessage="Term" />,
      dataIndex: 'consultation_term',
      hideInSearch: true,
      render: (_, record) => {
        return (
          <Space direction="vertical">
            {record.consultation_term
              ? record.consultation_term.busy_terms &&
                record.consultation_term.busy_terms.map((term) => (
                  <Tag>
                    <FormattedMessage id="busy_term" defaultMessage="Busy Term" />:
                    {format(new Date(term), DATETIME_FORMAT)}
                  </Tag>
                ))
              : record.proposed_terms.map((term) => (
                  <Button
                    type="primary"
                    onClick={() => {
                      approveConsultationAccessTerm(term.id).finally(() => {
                        if (actionRef.current) {
                          actionRef.current.reload();
                        }
                      });
                    }}
                  >
                    <FormattedMessage id="approve" defaultMessage="Approve Term" />
                    {' : '}
                    {format(new Date(term.proposed_at), DATETIME_FORMAT)}
                  </Button>
                ))}
          </Space>
        );
      },
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
            danger
            size="small"
            type="primary"
            onClick={() => {
              setDisapproveId(record.id);
            }}
          >
            <FormattedMessage id="disapprove" defaultMessage="Disapprove" />
          </Button>
        ) : (
          record.status
        ),
    },
  ];

  return (
    <PageContainer>
      <Drawer
        title={<FormattedMessage id="disapprove" defaultMessage="Disapprove" />}
        placement="right"
        onClose={() => setDisapproveId(undefined)}
        open={!!disapproveId}
      >
        {disapproveId && (
          <Disapprove
            id={disapproveId}
            onChange={() => {
              setDisapproveId(undefined);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }}
          />
        )}
      </Drawer>
      <ProTable<API.ConsultationAccessEnquiryListItem, API.ConsultationAccessEnquiryListParams>
        headerTitle={intl.formatMessage({
          id: 'consultationAccessEnquiries',
          defaultMessage: 'consultation Access Enquiries',
        })}
        actionRef={actionRef}
        rowKey="id"
        request={({
          pageSize,
          current,
          consultation_id,
          status,
          user_id,
          is_coming,
          proposed_at_from,
          proposed_at_to,
        }) => {
          return consultationAccess({
            pageSize,
            current,
            consultation_id,
            status,
            user_id,
            is_coming,
            proposed_at_from,
            proposed_at_to,
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
