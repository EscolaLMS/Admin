import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'umi';
import { Checkbox, Space, Tooltip } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { changeStudentAttendance } from '@/services/escola-lms/attendances';

import type { Status } from './types';
import { parseToAttendanceValue, parseToStatus } from './utils';

interface AttendanceCheckboxProps {
  groupAttendanceScheduleId: number;
  studentId: number;
  attendance: API.AttendanceValue | null;
  onSuccess?: () => void;
}

const AttendanceCheckbox: React.FC<AttendanceCheckboxProps> = ({
  groupAttendanceScheduleId,
  studentId,
  attendance,
  onSuccess,
}) => {
  const [status, setStatus] = useState<Status>(parseToStatus(attendance));

  const [loading, setLoading] = useState(false);
  const firstMount = useRef(true);

  const handleChangeAttendance = useCallback((stat: Status) => {
    setLoading(true);
    changeStudentAttendance(groupAttendanceScheduleId, studentId, parseToAttendanceValue(stat))
      .then((res) => {
        if (res.success) {
          onSuccess?.();
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const onCh1Change = useCallback(
    (e: CheckboxChangeEvent) =>
      setStatus(e.target.checked ? { ch1: true, ch2: false } : { ch1: false, ch2: false }),
    [],
  );

  const onCh2Change = useCallback(
    (e: CheckboxChangeEvent) => setStatus((prev) => ({ ...prev, ch2: e.target.checked })),
    [],
  );

  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }

    handleChangeAttendance(status);
  }, [status, handleChangeAttendance]);

  return (
    <Space>
      <Tooltip title={<FormattedMessage id="present" />}>
        <Checkbox disabled={loading} checked={status.ch1} onChange={onCh1Change} />
      </Tooltip>
      <Tooltip title={<FormattedMessage id={status.ch1 ? 'not_exercising' : 'excused_absence'} />}>
        <Checkbox disabled={loading} checked={status.ch2} onChange={onCh2Change} />
      </Tooltip>
    </Space>
  );
};

export default AttendanceCheckbox;
