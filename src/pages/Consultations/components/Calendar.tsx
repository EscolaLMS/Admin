import { getSchedule } from '@/services/escola-lms/consultations';
import { Badge, Calendar, message } from 'antd';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';

const consultationStatus = {
  reported: 'warning',
  reject: 'error',
  approved: 'success',
};

const ConsultationCalendar: React.FC<{ consultation: number }> = ({ consultation }) => {
  const [appointments, setAppointments] = useState<API.ConsultationAppointment[]>([]);

  useEffect(() => {
    const fetchAppointments = () => {
      getSchedule(consultation)
        .then((response) => {
          if (response.success) {
            setAppointments(response.data);
          }
        })
        .catch(() => {
          message.error(<FormattedMessage id="error" defaultMessage="error" />);
        });
    };

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
                  <Badge status={consultationStatus[item.status]} text={`${item.author.email} `} />
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

  return <Calendar dateCellRender={dateCellRender} />;
};

export default ConsultationCalendar;
