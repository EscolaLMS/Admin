import { getSchedule } from '@/services/escola-lms/consultations';
import { Calendar } from 'antd';
import { useEffect } from 'react';

const ConsultationCalendar: React.FC<{ consultation: number }> = ({ consultation }) => {
  useEffect(() => {
    console.log(consultation);
    const fetch = () => {
      getSchedule(consultation).then((response) => {
        console.log(response);
      });
    };

    fetch();
  }, [consultation]);

  return <Calendar />;
};

export default ConsultationCalendar;
