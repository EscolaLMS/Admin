import { changeStudentAttendance } from '@/services/escola-lms/attendances';
import { Checkbox, Space, Spin, Tooltip } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';

import type { Status } from './types';
import { parseToAttendanceValue, parseToStatus } from './utils';

interface AttendanceCheckboxProps {
  groupAttendanceScheduleId: number;
  studentId: number;
  attendance: API.AttendanceValue | null;
  onSuccess?: (value: API.AttendanceValue) => void;
}

const AttendanceCheckbox: React.FC<AttendanceCheckboxProps> = ({
  groupAttendanceScheduleId,
  studentId,
  attendance,
  onSuccess,
}) => {
  const [status, setStatus] = useState<Status>(parseToStatus(attendance));
  const [loading, setLoading] = useState(false);

  // Re-seed local state when the source value changes (e.g. after a bulk update
  // or a parent refetch). Only touches local state — never fires the API.
  useEffect(() => {
    setStatus(parseToStatus(attendance));
  }, [attendance]);

  const commit = useCallback(
    (next: Status) => {
      // Server-confirmed, not optimistic: keep `status` in sync with the server
      // by only writing it once the request succeeds. A failed write leaves
      // local state untouched (already correct), so there's nothing to revert
      // and local/server can't diverge. The checkbox is disabled + shows a
      // spinner while the request is in flight.
      setLoading(true);
      const value = parseToAttendanceValue(next);
      changeStudentAttendance(groupAttendanceScheduleId, studentId, value)
        .then((res) => {
          if (res.success) {
            setStatus(next);
            onSuccess?.(value);
          }
        })
        .finally(() => setLoading(false));
    },
    [groupAttendanceScheduleId, studentId, onSuccess],
  );

  const onCh1Change = useCallback(
    (e: CheckboxChangeEvent) =>
      commit(e.target.checked ? { ch1: true, ch2: false } : { ch1: false, ch2: false }),
    [commit],
  );

  const onCh2Change = useCallback(
    (e: CheckboxChangeEvent) => commit({ ...status, ch2: e.target.checked }),
    [commit, status],
  );

  return (
    <Spin spinning={loading} size="small">
      <Space>
        <Tooltip title={<FormattedMessage id="present" />}>
          <Checkbox disabled={loading} checked={status.ch1} onChange={onCh1Change} />
        </Tooltip>
        <Tooltip
          title={<FormattedMessage id={status.ch1 ? 'not_exercising' : 'excused_absence'} />}
        >
          <Checkbox disabled={loading} checked={status.ch2} onChange={onCh2Change} />
        </Tooltip>
      </Space>
    </Spin>
  );
};

export default AttendanceCheckbox;
