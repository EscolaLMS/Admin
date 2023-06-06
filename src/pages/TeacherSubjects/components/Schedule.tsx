import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { FormattedMessage } from 'umi';
import { Badge, Modal, Typography, Calendar } from 'antd';
import type { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import moment from 'moment';

import { DAYTIME_FORMAT } from '@/consts/dates';
import { allSchedules as fetchAllSchedules } from '@/services/escola-lms/schedules';
import './index.css';
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

export const Schedule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventCalendarProps | null>(null);
  const [eventData, setEventData] = useState<API.ScheduleData[]>([]);
  const { semester_subject_id } = useTeacherSubject();
  const now = moment();

  const events = useMemo(
    () =>
      eventData.map((event) => ({
        id: event.id,
        title: `${event.group.name} (${event.term_status.name})`,
        start: moment(event.date_from).toDate(),
        end: moment(event.date_to).toDate(),
        tutor_name: `${event.tutor.first_name} ${event.tutor.last_name}`,
        tutor_email: event.tutor.email,
        semester: event.semester.name,
        group: event.group.name,
        subject: event.subject.name,
      })),
    [eventData],
  );

  const fetchEvents = useCallback(
    (start: moment.Moment, end: moment.Moment) => {
      fetchAllSchedules({
        semester_subject_id: semester_subject_id,
        date_form: start.toDate(),
        date_to: end.toDate(),
      }).then((response) => {
        if (response.success) {
          setEventData(response.data);
        }
      });
    },
    [semester_subject_id],
  );

  const handleEventClick = useCallback((event: EventCalendarProps) => {
    setSelectedEvent(event);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  const checkDate = useCallback((date: moment.Moment) => {
    if (date.isSame(now, 'day')) {
      return 'warning';
    }
    return date.isAfter(now, 'day') ? 'success' : 'error';
  }, []);

  const dateCellRender = useCallback(
    (date: moment.Moment) => {
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
    },
    [eventData],
  );

  const handlePanelChange = useCallback((date: moment.Moment, mode: CalendarMode) => {
    const start = moment(date).startOf(mode).subtract(1, 'month');
    const end = moment(date).endOf(mode).add(1, 'month');
    fetchEvents(start, end);
  }, []);

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
        <Typography.Paragraph>
          <FormattedMessage id="tutorName" defaultMessage="Tutor" />: {selectedEvent?.tutor_name}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <FormattedMessage id="email" defaultMessage="Email" />: {selectedEvent?.tutor_email}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <FormattedMessage id="group" defaultMessage="Group" />: {selectedEvent?.group}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <FormattedMessage id="semester" defaultMessage="Semester" />: {selectedEvent?.semester}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <FormattedMessage id="started_at" defaultMessage="Start date" />:
          {selectedEvent && moment(selectedEvent.start).format(DAYTIME_FORMAT)}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <FormattedMessage id="end_at" defaultMessage="End date" />:
          {selectedEvent && moment(selectedEvent.end).format(DAYTIME_FORMAT)}
        </Typography.Paragraph>
      </Modal>
    </>
  );
};
