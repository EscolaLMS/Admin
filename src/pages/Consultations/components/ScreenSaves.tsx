import { getSchedule as getConsultationSchedule } from '@/services/escola-lms/consultations';
import { getWebinarUsers } from '@/services/escola-lms/webinars';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Badge, Spin, message } from 'antd';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import FilesBrowser from '@/components/FilesBrowser';
import type { SortAccessors } from '@/utils/utils';
import { applySort } from '@/utils/utils';

const statusMap = {
  reported: 'warning',
  reject: 'error',
  approved: 'success',
};

interface Props {
  consultation?: number;
  webinar?: number;
  webinarTimestamp?: number;
}

const ScreenSaves: React.FC<Props> = ({ consultation, webinar, webinarTimestamp }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<API.ConsultationAppointment[]>([]);
  const intl = useIntl();
  const resourceId = consultation || webinar;

  const consultationSorters: SortAccessors<API.ConsultationAppointment> = useMemo(
    () => ({
      consultation_term_id: (i) => i.consultation_term_id ?? 0,
      user: (i) => `${i.user?.first_name ?? ''} ${i.user?.last_name ?? ''}`.toLowerCase(),
      date: (i) => new Date(i.date).getTime(),
      status: (i) => i.status ?? '',
    }),
    [],
  );

  const consultationColumns = useMemo(
    (): ProColumns<API.ConsultationAppointment>[] => [
      {
        title: <FormattedMessage id="ID" defaultMessage="ID" />,
        dataIndex: 'consultation_term_id',
        hideInSearch: true,
        sorter: true,
        width: 80,
      },
      {
        title: <FormattedMessage id="user" defaultMessage="user" />,
        dataIndex: 'user',
        sorter: true,
        render: (_, item) =>
          `${item.user?.first_name ?? ''} ${item.user?.last_name ?? ''} ${item.user?.email ?? ''}`,
      },
      {
        title: <FormattedMessage id="date" defaultMessage="date" />,
        dataIndex: 'date',
        sorter: true,
        render: (_, item) => moment(item.date).format('YYYY-MM-DD HH:mm'),
      },
      {
        title: <FormattedMessage id="status" defaultMessage="status" />,
        dataIndex: 'status',
        sorter: true,
        render: (_, item) => (
          <Badge
            // @ts-ignore
            status={statusMap[item.status]}
            text={<FormattedMessage id={item.status} />}
          />
        ),
      },
      {
        title: 'Analiza obrazu',
        dataIndex: 'files',
        render: (_, item) => (
          <FilesBrowser
            defaultDirectory={`/consultation/${resourceId}/${
              new Date(item.date).getTime() / 1000
            }/${item.user?.id}`}
            hideDeleteBtn
            hideAddBtn
          />
        ),
      },
    ],
    [resourceId],
  );

  const webinarColumns = useMemo(
    (): ProColumns<API.UserItem>[] => [
      {
        title: <FormattedMessage id="ID" defaultMessage="ID" />,
        dataIndex: 'id',
        hideInSearch: true,
        sorter: true,
        width: 80,
      },
      {
        title: <FormattedMessage id="user" defaultMessage="user" />,
        dataIndex: 'user',
        sorter: true,
        render: (_, item) => `${item.first_name ?? ''} ${item.last_name ?? ''} ${item.email ?? ''}`,
      },
      {
        title: <FormattedMessage id="active_to" />,
        dataIndex: 'active_to',
        render: () =>
          webinarTimestamp ? moment.unix(webinarTimestamp).format('YYYY-MM-DD HH:mm') : '-',
      },
      {
        title: 'Analiza obrazu',
        dataIndex: 'files',
        render: (_, item) => (
          <FilesBrowser
            defaultDirectory={`/webinar/${resourceId}/${webinarTimestamp}/${item.id}`}
            hideDeleteBtn
            hideAddBtn
          />
        ),
      },
    ],
    [resourceId, webinarTimestamp],
  );

  const fetchConsultations = useCallback(() => {
    if (!consultation) return;

    setLoading(true);
    getConsultationSchedule(consultation)
      .then((response) => {
        if (!response?.success) return;
        setAppointments(response.data as API.ConsultationAppointment[]);
      })
      .catch(() => {
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
      })
      .finally(() => setLoading(false));
  }, [consultation]);

  useEffect(() => {
    fetchConsultations();
  }, [fetchConsultations]);

  if (consultation) {
    if (loading) return <Spin />;

    return (
      <ProTable<API.ConsultationAppointment>
        headerTitle={intl.formatMessage({
          id: 'Consultations',
          defaultMessage: 'Consultations',
        })}
        rowKey="consultation_term_id"
        pagination={{ defaultPageSize: 15 }}
        search={false}
        options={{ reload: false }}
        request={async (_params, sort) => {
          const filtered = appointments.filter((item) => item.status === 'approved');
          const data = applySort(filtered, sort as any, consultationSorters);
          return { data, total: data.length, success: true };
        }}
        columns={consultationColumns}
      />
    );
  }

  if (webinar) {
    return (
      <ProTable<API.UserItem>
        headerTitle={intl.formatMessage({
          id: 'Webinars',
          defaultMessage: 'Webinars',
        })}
        rowKey="id"
        pagination={{ defaultPageSize: 15 }}
        search={false}
        options={{ reload: false }}
        request={async (params, sort) => {
          const [sortField, sortOrder] = Object.entries(sort)[0] ?? [];

          const response = await getWebinarUsers(webinar, {
            params: {
              page: params.current,
              per_page: params.pageSize,
              ...(sortField && {
                order_by: sortField === 'user' ? 'first_name' : sortField,
                order: sortOrder === 'ascend' ? 'asc' : 'desc',
              }),
            },
          });

          if (!response?.success) {
            return { data: [], total: 0, success: false };
          }

          return {
            data: response.data as API.UserItem[],
            total: response.meta?.total ?? response.data.length,
            success: true,
          };
        }}
        columns={webinarColumns}
      />
    );
  }

  return null;
};

export default ScreenSaves;
