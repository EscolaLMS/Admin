import React, { useCallback, useState } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { AttendanceValue } from '@/services/escola-lms/enums';
import { changeStudentAttendance } from '@/services/escola-lms/attendances';

interface AttendanceCheckboxProps {
  groupAttendanceScheduleId: number;
  studentId: number;
  defaultChecked: boolean;
  onSuccess?: () => void;
}

const AttendanceCheckbox: React.FC<AttendanceCheckboxProps> = ({
  groupAttendanceScheduleId,
  studentId,
  defaultChecked,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  const handleChangeAttendance = useCallback((e: CheckboxChangeEvent) => {
    setLoading(true);
    changeStudentAttendance(
      groupAttendanceScheduleId,
      studentId,
      e.target.checked ? AttendanceValue.PRESENT : AttendanceValue.ABSENT,
    )
      .then((res) => {
        if (res.success) {
          onSuccess?.();
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Checkbox
      disabled={loading}
      defaultChecked={defaultChecked}
      onChange={handleChangeAttendance}
    />
  );
};

export default AttendanceCheckbox;
