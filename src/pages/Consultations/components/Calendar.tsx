import { changeTermDate, getSchedule } from '@/services/escola-lms/consultations';
import type { ProColumns } from '@ant-design/pro-table';
import { Badge, Calendar, DatePicker, Spin, Tooltip, message } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

export const ChangeDate: React.FC<{
  data: API.ConsultationAppointment;
  onChange: (date: Moment) => void;
}> = ({ data, onChange }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Moment>(moment(data.date));

  const changeDate = useCallback(
    (newDate: string) => {
      setDate(moment(newDate));
      setLoading(true);
      changeTermDate(data.consultation_term_id, newDate)
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
        disabledDate={(current: moment.Moment) => {
          const currDate = new Date();

          return current && current.valueOf() <= currDate.setDate(currDate.getDate() - 1);
        }}
        disabled={loading}
        value={date}
        showTime={{ format: 'HH' }}
        onChange={(newDate) => {
          if (newDate) {
            changeDate(newDate.toISOString());
          }
        }}
      />
    </React.Fragment>
  );
};

import { sortArrayByKey } from '@/utils/utils';
import ProTable from '@ant-design/pro-table';

const consultationStatus = {
  reported: 'warning',
  reject: 'error',
  approved: 'success',
};

export const TableColumns: ProColumns<API.ConsultationAppointment>[] = [
  {
    title: <FormattedMessage id="ID" defaultMessage="ID" />,
    dataIndex: 'consultation_term_id',
    hideInSearch: true,
    sorter: true,
    width: '80px',
  },
  {
    title: <FormattedMessage id="user" defaultMessage="user" />,
    dataIndex: 'user',
    render: (_, item) => `${item.user?.first_name} ${item.user?.last_name} ${item.user?.email}`,
    sorter: true,
  },
  {
    title: <FormattedMessage id="date" defaultMessage="date" />,
    dataIndex: 'date',
    sorter: true,
    render: (_, item) => moment(item.date).format('yyyy-MM-DD HH:mm'),
  },
  {
    title: <FormattedMessage id="status" defaultMessage="status" />,
    dataIndex: 'status',
    sorter: true,
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
    (value: moment.Moment) => {
      return (
        <ul className="events">
          {appointments.map((item: API.ConsultationAppointment) => {
            if (value.format('yyyy-MM-DD') === moment(item.date).format('yyyy-MM-DD')) {
              return (
                <li key={item.consultation_term_id}>
                  <Badge
                    status={consultationStatus[item.status]}
                    text={
                      <React.Fragment>
                        <Tooltip
                          title={`${item.user?.first_name} ${item.user?.last_name} ${item.user?.email}`}
                        >
                          <small>{moment(item.date).format('HH:mm')}</small> {item.user?.email}
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
          request={async ({}, sort) => {
            const sortArr = sort && Object.entries(sort)[0];
            let newArray = appointments;
            if (sortArr) {
              newArray = sortArrayByKey<API.ConsultationAppointment>(
                newArray,
                sortArr[0],
                sortArr[1] === 'ascend' ? false : true,
              );
            }
            return {
              data: newArray,
              total: newArray.length,
              success: true,
            };
          }}
          columns={[
            ...TableColumns,
            {
              title: <FormattedMessage id="options" defaultMessage="options" />,
              dataIndex: 'option',
              valueType: 'option',
              width: '20%',
              render: (_, record) => [
                <ChangeDate key="change_date" data={record} onChange={() => fetchAppointments()} />,
              ],
            },
          ]}
        />
      )}
    </React.Fragment>
  );
};

export default ConsultationCalendar;
