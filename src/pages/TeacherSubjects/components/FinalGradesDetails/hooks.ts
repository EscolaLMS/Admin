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
  getSubjectTutorGrades,
} from '@/services/escola-lms/grades';
import { getExams } from '@/services/escola-lms/exams';
import { course, getCourseStats, program } from '@/services/escola-lms/course';
import { getFlatTopics } from '@/components/ProgramForm/Context';

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

export function useTutorGradeScales(
  semester_subject_id: number | undefined | null,
  tutor_id: number | undefined | null,
) {
  const [tutorGradeScales, setTutorGradeScales] = useState<FetchedData<API.GradeScale[]>>({
    loading: false,
  });

  useEffect(() => {
    if (typeof semester_subject_id !== 'number' || typeof tutor_id !== 'number') return;

    setTutorGradeScales((prev) => ({ ...prev, loading: true }));
    getSubjectTutorGrades(semester_subject_id, tutor_id)
      .then((response) => {
        if (response.success) {
          setTutorGradeScales((prev) => ({ ...prev, data: response.data.grade_scale }));
        }
      })
      .finally(() => {
        setTutorGradeScales((prev) => ({ ...prev, loading: false }));
      });
  }, [semester_subject_id, tutor_id]);

  return { tutorGradeScales };
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

export type StudentExam = Omit<API.Exam, 'results'> & { result: API.ExamResult };

export function useStudentExams(student_id: number) {
  const [studentExams, setStudentExams] = useState<FetchedData<StudentExam[]>>({ loading: false });

  useEffect(() => {
    setStudentExams((prev) => ({ ...prev, loading: true }));
    getExams({ student_id })
      .then((response) => {
        if (response.success) {
          const data = response.data.reduce<StudentExam[]>(
            (acc, { results: [result], ...rest }) => {
              if (!result) return acc;

              return [...acc, { ...rest, result }];
            },
            [],
          );

          setStudentExams((prev) => ({ ...prev, data }));
        }
      })
      .finally(() => {
        setStudentExams((prev) => ({ ...prev, loading: false }));
      });
  }, [student_id]);

  return { studentExams };
}

export function useUserCoursesStats(group_id: number, user_id: number) {
  const [userCourses, setUserCourses] = useState<FetchedData<API.Course[]>>({
    loading: false,
  });
  const [userCoursesStats, setUserCoursesStats] = useState<
    FetchedData<
      Record<
        string,
        { finishedTopics: API.FinishedTopicsUserStats[]; attendanceList: API.CourseAttempts[] }
      >
    >
  >({ loading: false });
  const [userCoursesTopics, setUserCoursesTopics] = useState<
    FetchedData<Record<string, API.Topic[]>>
  >({ loading: false });

  useEffect(() => {
    setUserCourses((prev) => ({ ...prev, loading: true }));
    course({ group_id })
      .then((response) => {
        if (response.success) {
          setUserCourses((prev) => ({ ...prev, data: response.data }));
        }
      })
      .finally(() => {
        setUserCourses((prev) => ({ ...prev, loading: false }));
      });
  }, [group_id]);

  useEffect(() => {
    if (!userCourses.data) return;

    setUserCoursesTopics((prev) => ({ ...prev, loading: true }));
    Promise.all(userCourses.data.map(({ id }) => program(Number(id))))
      .then((responses) => {
        responses.forEach((response) => {
          if (response.success) {
            setUserCoursesTopics((prev) => ({
              ...prev,
              data: {
                ...prev.data,
                [Number(response.data.id)]: getFlatTopics(response.data.lessons),
              },
            }));
          }
        });
      })
      .finally(() => {
        setUserCoursesTopics((prev) => ({ ...prev, loading: false }));
      });

    setUserCoursesStats((prev) => ({ ...prev, loading: true }));
    Promise.all(
      userCourses.data.map(({ id }) =>
        getCourseStats(Number(id), [
          'EscolaLms\\Reports\\Stats\\Course\\FinishedTopics',
          'EscolaLms\\Reports\\Stats\\Course\\AttendanceList',
        ]).then((response) => {
          if (response.success) {
            const finishedTopics = (
              response.data['EscolaLms\\Reports\\Stats\\Course\\FinishedTopics'] ?? []
            ).filter((userStat) => userStat.id === user_id);

            const attendanceList =
              response.data['EscolaLms\\Reports\\Stats\\Course\\AttendanceList'] ?? [];

            setUserCoursesStats((prev) => ({
              ...prev,
              data: {
                ...prev.data,
                [Number(id)]: { finishedTopics, attendanceList },
              },
            }));
          }
        }),
      ),
    ).finally(() => setUserCoursesStats((prev) => ({ ...prev, loading: false })));
  }, [userCourses.data, user_id]);

  return { userCourses, userCoursesStats, userCoursesTopics };
}
