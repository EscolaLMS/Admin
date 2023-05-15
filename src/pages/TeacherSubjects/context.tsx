import React, { useCallback, useContext, useEffect, useState } from 'react';
import { semesterSubject } from '@/services/escola-lms/semesterSubject';

export interface TeacherSubjectContext {
  teacherSubjectData: Partial<API.Subjects> | null;
  getTeacherSubjectById: (semester_subject_id: number) => void;
}

const Context = React.createContext<TeacherSubjectContext>({
  teacherSubjectData: null,
  getTeacherSubjectById: () => console.warn('Default value!'),
});

export const useTeacherSubject = () => useContext(Context);

export const TeacherSubjectContextProvider: React.FC<{
  children: React.ReactNode;
  semester_subject_id: number;
}> = ({ children, semester_subject_id }) => {
  const [teacherSubjectData, setTeacherSubjectData] = useState<Partial<API.Subjects> | null>(null);

  const getTeacherSubjectById = useCallback(async (semesterSubjectId: number) => {
    const response = await semesterSubject(semesterSubjectId);

    if (response.success) {
      setTeacherSubjectData({
        ...response.data,
      });
    }
  }, []);

  useEffect(() => {
    getTeacherSubjectById(semester_subject_id);
  }, [getTeacherSubjectById, semester_subject_id]);

  return (
    <Context.Provider value={{ teacherSubjectData, getTeacherSubjectById }}>
      {children}
    </Context.Provider>
  );
};
