import React, { useState } from 'react';
import { Spin, Checkbox } from 'antd';
import { AttendanceValue } from '@/services/escola-lms/enums';
import { changeStudentAttendance } from '@/services/escola-lms/attendances';

interface AttendanceCheckboxProps {
  groupAttendanceScheduleId: number;
  studentId: number;
  checked: boolean;
  onSuccess?: () => void;
}

const AttendanceCheckbox: React.FC<AttendanceCheckboxProps> = ({
  groupAttendanceScheduleId,
  studentId,
  checked,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);

  const handleChangeAttendance = () => {
    setLoading(true);
    changeStudentAttendance(
      groupAttendanceScheduleId,
      studentId,
      checked ? AttendanceValue.ABSENT : AttendanceValue.PRESENT,
    )
      .then((res) => {
        if (res.success) {
          onSuccess?.();
        }
      })
      .finally(() => setLoading(false));
  };

  return loading ? (
    <Spin size="small" />
  ) : (
    <Checkbox checked={checked} onChange={handleChangeAttendance} />
  );
};

export default AttendanceCheckbox;
