import { getSchedule } from '@/services/escola-lms/consultations';
import { Badge, Calendar, message, Tooltip, Spin, DatePicker } from 'antd';
import moment, { Moment } from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import { changeTermDate } from '@/services/escola-lms/consultations';

export const ChangeDate: React.FC<{
  data: API.ConsultationAppointment;
  onChange: (date: Moment) => void;
}> = ({ data, onChange }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Moment>(moment(data.date));

  const changeDate = useCallback(
    (newDate: Moment) => {
      setDate(newDate);
      setLoading(true);
      changeTermDate(data.consultation_term_id, newDate.format())
        .then((response) => {
          if (response.success) {
            message.success(response.message);
            onChange(date);
          } else {
            message.error(response.message);
          }
        })
        .catch((err: any) => message.error(err.toString()))
        .finally(() => setLoading(false));
    },
    [date],
  );

  return (
    <React.Fragment>
      <DatePicker
        disabled={loading}
        value={date}
        showTime
        onChange={(newDate) => {
          if (newDate) {
            changeDate(newDate);
          }
        }}
      />
    </React.Fragment>
  );
};

import ProTable from '@ant-design/pro-table';

const consultationStatus = {
  reported: 'warning',
  reject: 'error',
  approved: 'success',
};

export const TableColumns: ProColumns<API.ConsultationAppointment>[] = [
  {
    title: <FormattedMessage id="id" defaultMessage="id" />,
    dataIndex: 'consultation_term_id',
    hideInSearch: true,
  },
  {
    title: <FormattedMessage id="user" defaultMessage="user" />,
    dataIndex: 'user',
    render: (_, item) => `${item.user.first_name} ${item.user.last_name} ${item.user.email}`,
  },
  {
    title: <FormattedMessage id="date" defaultMessage="date" />,
    dataIndex: 'date',
    render: (_, item) => moment(item.date).format('yyyy-MM-DD HH:mm'),
  },
  {
    title: <FormattedMessage id="status" defaultMessage="status" />,
    dataIndex: 'status',
    render: (_, item) => (
      <Badge
        status={consultationStatus[item.status]}
        text={<FormattedMessage id={item.status} />}
      />
    ),
  },
];

const ConsultationCalendar: React.FC<{ consultation: number }> = ({ consultation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<API.ConsultationAppointment[]>([]);
  const intl = useIntl();

  const fetchAppointments = useCallback(() => {
    setLoading(true);
    getSchedule(consultation)
      .then((response) => {
        if (response.success) {
          setAppointments(response.data);
        }
      })
      .catch(() => {
        message.error(<FormattedMessage id="error" defaultMessage="error" />);
      })
      .finally(() => setLoading(false));
  }, [consultation]);

  useEffect(() => {
    fetchAppointments();
  }, [consultation]);

  const dateCellRender = useCallback(
    (value) => {
      return (
        <ul className="events">
          {appointments.map((item: API.ConsultationAppointment) => {
            if (value.format('yyyy-MM-DD') === moment(item.date).format('yyyy-MM-DD')) {
              return (
                <li>
                  <Badge
                    status={consultationStatus[item.status]}
                    text={
                      <React.Fragment>
                        <Tooltip
                          title={`${item.user.first_name} ${item.user.last_name} ${item.user.email}`}
                        >
                          <small>{moment(item.date).format('HH:mm')}</small> {item.user.email}
                        </Tooltip>
                      </React.Fragment>
                    }
                  />
                </li>
              );
            }
            return null;
          })}
        </ul>
      );
    },
    [appointments],
  );

  return (
    <React.Fragment>
      {loading && <Spin />}
      <Calendar dateCellRender={dateCellRender} />

      {loading ? (
        <Spin />
      ) : (
        <ProTable<API.ConsultationAppointment>
          headerTitle={intl.formatMessage({
            id: 'Consultations',
            defaultMessage: 'Consultations',
          })}
          loading={loading}
          rowKey="consultation_term_id"
          search={false}
          request={async () => {
            return {
              data: appointments,
              total: appointments.length,
              success: true,
            };
          }}
          columns={[
            ...TableColumns,
            {
              title: <FormattedMessage id="options" defaultMessage="options" />,
              dataIndex: 'option',
              valueType: 'option',
              width: '10%',
              render: (_, record) => [
                <ChangeDate data={record} onChange={() => fetchAppointments()} />,
              ],
            },
          ]}
        />
      )}
    </React.Fragment>
  );
};

export default ConsultationCalendar;
