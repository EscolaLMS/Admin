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
  const [webinarUsers, setWebinarUsers] = useState<API.UserItem[]>([]);
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

  const webinarSorters: SortAccessors<API.UserItem> = useMemo(
    () => ({
      id: (i) => i.id ?? 0,
      user: (i) => `${i.first_name ?? ''} ${i.last_name ?? ''}`.toLowerCase(),
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
    [resourceId],
  );

  const fetchData = useCallback(() => {
    if (!resourceId) return;

    setLoading(true);

    const promise = consultation
      ? getConsultationSchedule(consultation)
      : getWebinarUsers(webinar as number);

    promise
      .then((response) => {
        if (!response?.success) return;
        if (consultation) {
          setAppointments(response.data as API.ConsultationAppointment[]);
        } else {
          setWebinarUsers(response.data as API.UserItem[]);
        }
      })
      .catch(() => {
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
      })
      .finally(() => setLoading(false));
  }, [consultation, webinar, resourceId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <Spin />;
  }

  if (consultation) {
    return (
      <ProTable<API.ConsultationAppointment>
        headerTitle={intl.formatMessage({
          id: 'Consultations',
          defaultMessage: 'Consultations',
        })}
        loading={loading}
        rowKey="consultation_term_id"
        search={false}
        options={{
          reload: false,
        }}
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
        loading={loading}
        rowKey="id"
        search={false}
        options={{
          reload: false,
        }}
        request={async (_params, sort) => {
          const data = applySort(webinarUsers, sort as any, webinarSorters);
          return { data, total: data.length, success: true };
        }}
        columns={webinarColumns}
      />
    );
  }

  return null;
};

export default ScreenSaves;
