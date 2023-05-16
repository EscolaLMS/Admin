import { changeStudentAttendance } from '@/services/escola-lms/attendances';
import { AttendanceValue } from '@/services/escola-lms/enums';
import { Spin, Checkbox } from 'antd';
import { useState } from 'react';
import { groupAttendanceSchedule as fetchGroupAttendanceSchedule } from '@/services/escola-lms/attendances';
import type { ColumnType } from '@/pages/TeacherSubjects/components/Attendances';

interface AttendanceCheckboxProps {
  currentData: API.GroupAttendanceSchedule;
  recordData: ColumnType;
  groupId: number | null;
  onSuccess: (data: API.GroupAttendanceSchedule[]) => void;
}

const AttendanceCheckbox: React.FC<AttendanceCheckboxProps> = ({
  currentData,
  recordData,
  groupId,
  onSuccess,
}) => {
  const [loadingUserAttendance, setLoadingUserAttendance] = useState(false);

  const handleChangeAttendance = () => {
    setLoadingUserAttendance(true);
    changeStudentAttendance(
      currentData.id,
      recordData.id,
      recordData?.[String(currentData.date_from)] === AttendanceValue.PRESENT
        ? AttendanceValue.ABSENT
        : AttendanceValue.PRESENT,
    ).then((res) => {
      if (res.success) {
        fetchGroupAttendanceSchedule(Number(groupId)).then((response) => {
          onSuccess(response.data);
          setLoadingUserAttendance(false);
        });
      }
    });
  };

  return loadingUserAttendance ? (
    <Spin size="small" />
  ) : (
    <Checkbox
      checked={recordData?.[String(currentData.date_from)] === AttendanceValue.PRESENT}
      onChange={() => handleChangeAttendance()}
    />
  );
};

export default AttendanceCheckbox;
