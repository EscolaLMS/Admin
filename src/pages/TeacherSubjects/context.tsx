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
  fetchTeacherSubjectById: (semester_subject_id: number) => Promise<void>;
  fetchGroupUsers: (group_id: number) => Promise<void>;
  semester_subject_id: number | null;
  tutors: TutorsData;
  fetchTutors: (
    semester_subject_id: number,
  ) => Promise<API.DefaultResponse<API.SemesterSubjectTutors> | void>;
  getGroupById: (group_id: number) => API.SubjectGroups | undefined | void;
}

const Context = React.createContext<TeacherSubjectContext>({
  teacherSubjectData: null,
  groupUsers: { loading: false, byId: {} },
  fetchTeacherSubjectById: async () => console.warn('default value'),
  fetchGroupUsers: async () => console.warn('default value'),
  semester_subject_id: null,
  tutors: { loading: false, data: [] },
  fetchTutors: async () => console.warn('default value'),
  getGroupById: () => console.warn('default value'),
});

export const useTeacherSubject = () => useContext(Context);

export const TeacherSubjectContextProvider: React.FC<{
  children: React.ReactNode;
  semester_subject_id: number;
}> = ({ children, semester_subject_id }) => {
  const [teacherSubjectData, setTeacherSubjectData] = useState<Partial<API.Subjects> | null>(null);
  const [groupUsers, setGroupUsers] = useState<GroupUserData>({ loading: false, byId: {} });
  const [tutors, setTutors] = useState<TutorsData>({ loading: false, data: [] });

  const fetchTeacherSubjectById = useCallback(async (semesterSubjectId: number) => {
    const response = await semesterSubject(semesterSubjectId);

    if (response.success) {
      setTeacherSubjectData({
        ...response.data,
      });
    }
  }, []);

  const fetchGroupUsers = useCallback(async (group_id: number) => {
    setGroupUsers((prev) => ({ ...prev, loading: true }));
    const response = await studentUserGroup(group_id);

    if (response.success) {
      setGroupUsers((prev) => ({
        loading: false,
        byId: { ...prev.byId, [group_id]: response.data },
      }));
    }
  }, []);

  const fetchTutors = useCallback(async (semesterSubjectId: number) => {
    setTutors((prev) => ({ ...prev, loading: true }));
    const response = await getSemesterSubjectTutors(semesterSubjectId);

    if (response.success) {
      setTutors((prev) => ({
        ...prev,
        data: response.data.tutors,
      }));
    }

    setTutors((prev) => ({ ...prev, loading: false }));
    return response;
  }, []);

  const getGroupById = useCallback(
    (group_id: number) => teacherSubjectData?.groups?.find((group) => group.id === group_id),
    [teacherSubjectData?.groups],
  );

  useEffect(() => {
    fetchTeacherSubjectById(semester_subject_id);
    fetchTutors(semester_subject_id);
  }, [fetchTeacherSubjectById, fetchTutors, semester_subject_id]);

  return (
    <Context.Provider
      value={{
        teacherSubjectData,
        fetchTeacherSubjectById,
        groupUsers,
        fetchGroupUsers,
        semester_subject_id,
        tutors,
        fetchTutors,
        getGroupById,
      }}
    >
      {children}
    </Context.Provider>
  );
};
