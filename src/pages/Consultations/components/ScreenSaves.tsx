import { getSchedule } from '@/services/escola-lms/consultations';
import type { ProColumns } from '@ant-design/pro-table';
import { Badge, Spin, message } from 'antd';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import FilesBrowser from '@/components/FilesBrowser';
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
        // TODO: #1031 fix type
        // @ts-ignore
        status={consultationStatus[item.status]}
        text={<FormattedMessage id={item.status} />}
      />
    ),
  },
];

const ScreenSaves: React.FC<{ consultation: number }> = ({ consultation }) => {
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

  return (
    <React.Fragment>
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
            let newArray = appointments.filter((item) => item.status === 'approved');

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
              title: 'Analiza obrazu',
              dataIndex: 'status',
              sorter: true,
              render: (_, item) => (
                <div>
                  <FilesBrowser
                    defaultDirectory={`/consultation/${consultation}/${
                      new Date(item.date).getTime() / 1000
                    }/${item.user?.id}`}
                    hideDeleteBtn
                    hideAddBtn
                  />
                </div>
              ),
            },
          ]}
        />
      )}
    </React.Fragment>
  );
};

export default ScreenSaves;
