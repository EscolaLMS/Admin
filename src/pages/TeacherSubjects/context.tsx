import { studentUserGroup } from '@/services/escola-lms/student_user_groups';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { semesterSubject } from '@/services/escola-lms/semester_subject';

interface GroupUserData {
  loading: boolean;
  byId: Record<string, API.StudentUserGroup>;
}

export interface TeacherSubjectContext {
  teacherSubjectData: Partial<API.Subjects> | null;
  groupUsers: GroupUserData;
  getTeacherSubjectById: (semester_subject_id: number) => void;
  getGroupUsers: (group_id: number) => void;
}

const Context = React.createContext<TeacherSubjectContext>({
  teacherSubjectData: null,
  groupUsers: { loading: false, byId: {} },
  getTeacherSubjectById: () => console.warn('default value'),
  getGroupUsers: () => console.warn('default value'),
});

export const useTeacherSubject = () => useContext(Context);

export const TeacherSubjectContextProvider: React.FC<{
  children: React.ReactNode;
  semester_subject_id: number;
}> = ({ children, semester_subject_id }) => {
  const [teacherSubjectData, setTeacherSubjectData] = useState<Partial<API.Subjects> | null>(null);
  const [groupUsers, setGroupUsers] = useState<GroupUserData>({ loading: false, byId: {} });

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

  useEffect(() => {
    getTeacherSubjectById(semester_subject_id);
  }, [getTeacherSubjectById, semester_subject_id]);

  return (
    <Context.Provider
      value={{ teacherSubjectData, getTeacherSubjectById, groupUsers, getGroupUsers }}
    >
      {children}
    </Context.Provider>
  );
};
