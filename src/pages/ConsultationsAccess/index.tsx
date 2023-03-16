import { Button, Drawer, Tag, Space, Input } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import UserSelect from '@/components/UserSelect';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '@/consts/dates';
import { ApproveForm } from './approveForm';
import { DisapproveForm } from './disapproveForm';

import { consultationAccess } from '@/services/escola-lms/consultations_access';
import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import CourseSelect from '@/components/CourseSelect';

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const intl = useIntl();

  const [disapproveId, setDisapproveId] = useState<number>();
  const [approveTerm, setApproveTerm] =
    useState<EscolaLms.ConsultationAccess.Models.ConsultationAccessEnquiryProposedTerm>();

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
      title: <FormattedMessage id="consultation_term_date" defaultMessage="Term Date" />,
      dataIndex: 'consultation_term',
      hideInSearch: true,
      render: (_, record) => {
        return record.consultation_term ? (
          <>
            <FormattedMessage id="approved_date" defaultMessage="Approved Date" />:
            {format(new Date(record.consultation_term.date), DATETIME_FORMAT)}
          </>
        ) : (
          <Space direction="vertical">
            {record.proposed_terms.map((term) => (
              <Button
                size="small"
                type="primary"
                onClick={() => {
                  setApproveTerm(term);
                }}
              >
                <FormattedMessage id="approve" defaultMessage="Approve Term" />
                {':'}
                {format(new Date(term.proposed_at), DATETIME_FORMAT)}
              </Button>
            ))}
          </Space>
        );
      },
    },
    {
      title: <FormattedMessage id="meeting_link" defaultMessage="Meeting Link" />,
      dataIndex: 'meeting_link',
      hideInSearch: true,
      render: (_, record) =>
        record.meeting_link ? (
          <Button target="_blank" type="primary" href={record.meeting_link}>
            {new URL(record.meeting_link).host}
          </Button>
        ) : (
          <React.Fragment />
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
      <ApproveForm
        term={approveTerm}
        onClose={() => setApproveTerm(undefined)}
        onSuccess={() => actionRef && actionRef.current?.reload()}
      />
      <DisapproveForm
        id={disapproveId}
        onClose={() => setDisapproveId(undefined)}
        onSuccess={() => actionRef && actionRef.current?.reload()}
      />

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
