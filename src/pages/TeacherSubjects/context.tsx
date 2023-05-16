import React, { useCallback, useContext, useEffect, useState } from 'react';
import { semesterSubject, getSemesterSubjectTutors } from '@/services/escola-lms/semester_subject';
import { studentUserGroup } from '@/services/escola-lms/student_user_groups';

interface GroupUserData {
  loading: boolean;
  byId: Record<string, API.StudentUserGroup>;
}

interface TutorsData {
  loading: boolean;
  data: API.SemesterSubjectTutor[];
}

export interface TeacherSubjectContext {
  teacherSubjectData: Partial<API.Subjects> | null;
  groupUsers: GroupUserData;
  getTeacherSubjectById: (semester_subject_id: number) => Promise<void>;
  getGroupUsers: (group_id: number) => Promise<void>;
  semester_subject_id: number | null;
  tutors: TutorsData;
  getTutors: (
    semester_subject_id: number,
  ) => Promise<API.DefaultResponse<API.SemesterSubjectTutors> | void>;
}

const Context = React.createContext<TeacherSubjectContext>({
  teacherSubjectData: null,
  groupUsers: { loading: false, byId: {} },
  getTeacherSubjectById: async () => console.warn('default value'),
  getGroupUsers: async () => console.warn('default value'),
  semester_subject_id: null,
  tutors: { loading: false, data: [] },
  getTutors: async () => console.warn('default value'),
});

export const useTeacherSubject = () => useContext(Context);

export const TeacherSubjectContextProvider: React.FC<{
  children: React.ReactNode;
  semester_subject_id: number;
}> = ({ children, semester_subject_id }) => {
  const [teacherSubjectData, setTeacherSubjectData] = useState<Partial<API.Subjects> | null>(null);
  const [groupUsers, setGroupUsers] = useState<GroupUserData>({ loading: false, byId: {} });
  const [tutors, setTutors] = useState<TutorsData>({ loading: false, data: [] });

  const getTeacherSubjectById = useCallback(async (semesterSubjectId: number) => {
    const response = await semesterSubject(semesterSubjectId);

    if (response.success) {
      setTeacherSubjectData({
        ...response.data,
      });
    }
  }, []);

  const getGroupUsers = useCallback(async (group_id: number) => {
    setGroupUsers((prev) => ({ ...prev, loading: true }));
    const response = await studentUserGroup(group_id);

    if (response.success) {
      setGroupUsers((prev) => ({
        loading: false,
        byId: { ...prev.byId, [group_id]: response.data },
      }));
    }
  }, []);

  const getTutors = useCallback(async (semesterSubjectId: number) => {
    setTutors((prev) => ({ ...prev, loading: true }));
    const response = await getSemesterSubjectTutors(semesterSubjectId);

    if (response.success) {
      setTutors((prev) => ({
        loading: false,
        data: response.data.tutors,
      }));
    }

    return response;
  }, []);

  useEffect(() => {
    getTeacherSubjectById(semester_subject_id);
  }, [getTeacherSubjectById, semester_subject_id]);

  return (
    <Context.Provider
      value={{
        teacherSubjectData,
        getTeacherSubjectById,
        groupUsers,
        getGroupUsers,
        semester_subject_id,
        tutors,
        getTutors,
      }}
    >
      {children}
    </Context.Provider>
  );
};
