import { useCallback, useEffect, useState } from 'react';
import { message } from 'antd';
import type { AttendanceValue } from '@/services/escola-lms/enums';
import {
  changeStudentAttendance,
  groupAttendanceSchedule,
} from '@/services/escola-lms/attendances';
import {
  getGradeTerms,
  getUserFinalGrades,
  getSubjectGradeScales,
} from '@/services/escola-lms/grades';

interface FetchedData<T> {
  loading: boolean;
  data?: T;
}

export function useFinalGrades(group_id: number, user_id: number) {
  const [finalGrades, setFinalGrades] = useState<FetchedData<API.FinalGradeItem>>({
    loading: false,
  });

  useEffect(() => {
    setFinalGrades((prev) => ({ ...prev, loading: true }));
    getUserFinalGrades(group_id, user_id)
      .then((response) => {
        if (response.success) {
          setFinalGrades((prev) => ({ ...prev, data: response.data }));
        }
      })
      .finally(() => {
        setFinalGrades((prev) => ({ ...prev, loading: false }));
      });
  }, [user_id, group_id]);

  return { finalGrades };
}

export function useGradeTerms() {
  const [gradeTerms, setGradeTerms] = useState<FetchedData<API.GradeTerm[]>>({ loading: false });

  useEffect(() => {
    setGradeTerms((prev) => ({ ...prev, loading: true }));
    getGradeTerms()
      .then((response) => {
        if (response.success) {
          setGradeTerms((prev) => ({ ...prev, data: response.data }));
        }
      })
      .finally(() => {
        setGradeTerms((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  return { gradeTerms };
}

export function useSubjectGradeScales(s_subject_scale_form_id: number | undefined) {
  const [subjectGradeScales, setSubjectGradeScales] = useState<
    FetchedData<API.SubjectGradeScale[]>
  >({
    loading: false,
  });

  useEffect(() => {
    if (s_subject_scale_form_id === undefined) return;

    setSubjectGradeScales((prev) => ({ ...prev, loading: true }));
    getSubjectGradeScales(s_subject_scale_form_id)
      .then((response) => {
        if (response.success) {
          setSubjectGradeScales((prev) => ({ ...prev, data: response.data }));
        }
      })
      .finally(() => {
        setSubjectGradeScales((prev) => ({ ...prev, loading: false }));
      });
  }, [s_subject_scale_form_id]);

  return { subjectGradeScales };
}

export function useUserAttendanceSchedules(group_id: number, user_id: number) {
  const [userAttendanceSchedules, setUserAttendanceSchedules] = useState<
    FetchedData<API.UserAttendanceSchedule[]>
  >({ loading: false });

  const fetchUserAttendanceSchedules = useCallback(() => {
    setUserAttendanceSchedules((prev) => ({ ...prev, loading: true }));
    groupAttendanceSchedule(group_id)
      .then((response) => {
        if (response.success) {
          const filteredSchedules = response.data.reduce<API.UserAttendanceSchedule[]>(
            (acc, { attendances, ...rest }) => {
              const attendance = attendances.find((attendanceItem) =>
                Boolean(attendanceItem.user_id),
              );

              if (!attendance) return acc;

              return [...acc, { ...rest, attendance }];
            },
            [],
          );

          setUserAttendanceSchedules((prev) => ({ ...prev, data: filteredSchedules }));
        }
      })
      .finally(() => {
        setUserAttendanceSchedules((prev) => ({ ...prev, loading: false }));
      });
  }, [group_id, user_id]);

  const updateUserAttendanceSchedules = useCallback(
    (schedule_id: number, value: AttendanceValue) => {
      setUserAttendanceSchedules((prev) => ({ ...prev, loading: true }));
      changeStudentAttendance(schedule_id, user_id, value)
        .then((response) => {
          if (response.success) {
            message.success(response.message);
          } else {
            message.error(response.message);
          }
        })
        .finally(() => {
          fetchUserAttendanceSchedules();
          setUserAttendanceSchedules((prev) => ({ ...prev, loading: false }));
        });
    },
    [fetchUserAttendanceSchedules, user_id],
  );

  useEffect(() => {
    fetchUserAttendanceSchedules();
  }, [fetchUserAttendanceSchedules]);

  return { userAttendanceSchedules, fetchUserAttendanceSchedules, updateUserAttendanceSchedules };
}
