import { useEffect, useState } from 'react';
import { Badge, Modal, Typography } from 'antd';
import { Calendar } from 'antd';
import moment from 'moment';
import './index.css';
import type { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import { DAYTIME_FORMAT } from '@/consts/dates';
import { FormattedMessage } from 'umi';
import { allSchedules as fetchAllSchedules } from '@/services/escola-lms/schedules';
import { useTeacherSubject } from '../context';

interface EventCalendarProps {
  id: number;
  title: string;
  start: Date | string;
  end: Date | string;
  tutor_name: string;
  tutor_email: string;
  group: string;
  semester: string;
  subject: string;
}

const eventMockData: API.ScheduleData[] = [
  {
    id: 1,
    date_from: '2023-05-28T13:15:00.000000Z',
    date_to: '2023-05-28T15:30:00.000000Z',
    tutor: {
      id: 1,
      first_name: 'Admin',
      last_name: 'A',
      email: 'admin@escolalms.com',
    },
    subject: {
      id: 1,
      name: 'Fizjoterapia ogólna',
    },
    semester: {
      id: 2,
      name: 'FIZ/JPR/ST/22/23/s2',
      type: 'summer',
      year: '2022',
    },
    term_status: {
      id: 34,
      name: 'Ćwiczenia',
    },
    group: {
      id: 645,
      name: 'ćwiczenia R03',
    },
  },
  {
    id: 1,
    date_from: '2023-05-28T13:15:00.000000Z',
    date_to: '2023-05-28T15:30:00.000000Z',
    tutor: {
      id: 1,
      first_name: 'Admin',
      last_name: 'A',
      email: 'admin@escolalms.com',
    },
    subject: {
      id: 1,
      name: 'Fizjoterapia ogólna',
    },
    semester: {
      id: 2,
      name: 'FIZ/JPR/ST/22/23/s2',
      type: 'summer',
      year: '2022',
    },
    term_status: {
      id: 34,
      name: 'Ćwiczenia',
    },
    group: {
      id: 645,
      name: 'ćwiczenia R03',
    },
  },
  {
    id: 1,
    date_from: '2023-05-18T13:15:00.000000Z',
    date_to: '2023-05-18T15:30:00.000000Z',
    tutor: {
      id: 1,
      first_name: 'Admin',
      last_name: 'A',
      email: 'admin@escolalms.com',
    },
    subject: {
      id: 1,
      name: 'Fizjoterapia ogólna',
    },
    semester: {
      id: 2,
      name: 'FIZ/JPR/ST/22/23/s2',
      type: 'summer',
      year: '2022',
    },
    term_status: {
      id: 34,
      name: 'Ćwiczenia',
    },
    group: {
      id: 645,
      name: 'ćwiczenia R03',
    },
  },
  {
    id: 2,
    date_from: '2023-05-01T15:30:00.000000Z',
    date_to: '2023-05-01T17:45:00.000000Z',
    tutor: {
      id: 1,
      first_name: 'Admin',
      last_name: 'A',
      email: 'admin@escolalms.com',
    },
    subject: {
      id: 1,
      name: 'Fizjoterapia ogólna',
    },
    semester: {
      id: 2,
      name: 'FIZ/JPR/ST/22/23/s2',
      type: 'summer',
      year: '2022',
    },
    term_status: {
      id: 34,
      name: 'Ćwiczenia',
    },
    group: {
      id: 653,
      name: 'ćwiczenia R04',
    },
  },
  {
    id: 2,
    date_from: '2023-05-30T15:30:00.000000Z',
    date_to: '2023-05-30T17:45:00.000000Z',
    tutor: {
      id: 1,
      first_name: 'Admin',
      last_name: 'A',
      email: 'admin@escolalms.com',
    },
    subject: {
      id: 1,
      name: 'Fizjoterapia ogólna',
    },
    semester: {
      id: 2,
      name: 'FIZ/JPR/ST/22/23/s2',
      type: 'summer',
      year: '2022',
    },
    term_status: {
      id: 34,
      name: 'Ćwiczenia',
    },
    group: {
      id: 653,
      name: 'ćwiczenia R04',
    },
  },
  {
    id: 2,
    date_from: '2023-06-02T17:30:00.000000Z',
    date_to: '2023-06-02T17:45:00.000000Z',
    tutor: {
      id: 1,
      first_name: 'Admin',
      last_name: 'A',
      email: 'admin@escolalms.com',
    },
    subject: {
      id: 1,
      name: 'Fizjoterapia ogólna',
    },
    semester: {
      id: 2,
      name: 'FIZ/JPR/ST/22/23/s2',
      type: 'summer',
      year: '2022',
    },
    term_status: {
      id: 34,
      name: 'Ćwiczenia',
    },
    group: {
      id: 653,
      name: 'ćwiczenia R04',
    },
  },
  {
    id: 2,
    date_from: '2023-06-01T18:30:00.000000Z',
    date_to: '2023-06-01T20:45:00.000000Z',
    tutor: {
      id: 1,
      first_name: 'Admin',
      last_name: 'A',
      email: 'admin@escolalms.com',
    },
    subject: {
      id: 1,
      name: 'Fizjoterapia ogólna',
    },
    semester: {
      id: 2,
      name: 'FIZ/JPR/ST/22/23/s2',
      type: 'summer',
      year: '2022',
    },
    term_status: {
      id: 34,
      name: 'Ćwiczenia',
    },
    group: {
      id: 653,
      name: 'ćwiczenia R04',
    },
  },
];
//TODO: Usunąć eventMockData i użyć eventData, sprawdzić ep, usunąc console.logi
const Schedule = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventCalendarProps | null>(null);
  const [eventData, setEventData] = useState<API.ScheduleData[]>([]);
  const { semester_subject_id } = useTeacherSubject();
  const now = moment();

  console.log({ selectedEvent });

  const events = eventMockData.map((event) => ({
    id: event.id,
    title: `${event.group.name} (${event.term_status.name})`,
    start: moment(event.date_from).toDate(),
    end: moment(event.date_to).toDate(),
    tutor_name: `${event.tutor.first_name} ${event.tutor.last_name}`,
    tutor_email: event.tutor.email,
    semester: event.semester.name,
    group: event.group.name,
    subject: event.subject.name,
  }));

  const fetchEvents = (start: moment.Moment, end: moment.Moment) => {
    fetchAllSchedules({
      semester_subject_id: semester_subject_id,
      date_form: start.toDate(),
      date_to: end.toDate(),
    }).then((response) => {
      if (response.success) {
        setEventData(response.data);
      }
    });
  };

  const handleEventClick = (event: EventCalendarProps) => {
    setSelectedEvent(event);
  };

  const handleModalClose = () => {
    setSelectedEvent(null);
  };

  const checkDate = (date: moment.Moment) => {
    if (date.isSame(now, 'day')) {
      return 'warning';
    }
    return date.isAfter(now, 'day') ? 'success' : 'error';
  };

  const dateCellRender = (date: moment.Moment) => {
    const filteredEvents = events.filter((event) => moment(event.start).isSame(date, 'day'));

    return (
      <ul className="events">
        {filteredEvents.map((event) => (
          <li key={event.id} onClick={() => handleEventClick(event)}>
            <Badge status={checkDate(moment(event.start))} text={event.title} />
          </li>
        ))}
      </ul>
    );
  };

  const handlePanelChange = (date: moment.Moment, mode: CalendarMode) => {
    const start = moment(date).startOf(mode).subtract(1, 'month');
    const end = moment(date).endOf(mode).add(1, 'month');
    console.log({ start }, { end });
    fetchEvents(start, end);
  };

  useEffect(() => {
    const initialStartDate = moment().startOf('month');
    const initialEndDate = moment().endOf('month');
    fetchEvents(initialStartDate, initialEndDate);
  }, []);
  return (
    <>
      <Typography.Title level={4}>
        <FormattedMessage id="schedule" defaultMessage="Schedule" />
      </Typography.Title>

      <Calendar dateCellRender={dateCellRender} onPanelChange={handlePanelChange} />

      <Modal
        open={selectedEvent !== null}
        title={`${selectedEvent?.subject}: ${selectedEvent?.title}`}
        onCancel={handleModalClose}
        footer={null}
      >
        <p>
          <FormattedMessage id="tutorName" defaultMessage="Tutor" />: {selectedEvent?.tutor_name}
        </p>
        <p>
          <FormattedMessage id="email" defaultMessage="Email" />: {selectedEvent?.tutor_email}
        </p>
        <p>
          <FormattedMessage id="group" defaultMessage="Group" />: {selectedEvent?.group}
        </p>
        <p>
          <FormattedMessage id="semester" defaultMessage="Semester" />: {selectedEvent?.semester}
        </p>
        <p>
          <FormattedMessage id="started_at" defaultMessage="Start date" />:
          {selectedEvent && moment(selectedEvent.start).format(DAYTIME_FORMAT)}
        </p>
        <p>
          <FormattedMessage id="end_at" defaultMessage="End date" />:
          {selectedEvent && moment(selectedEvent.end).format(DAYTIME_FORMAT)}
        </p>
      </Modal>
    </>
  );
};

export default Schedule;
