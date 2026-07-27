export type StudentExam = Omit<API.Exam, 'results'> & { result: API.ExamResult };
export interface FetchedData<T> {
  loading: boolean;
  data?: T;
}

// AW-23: a single row in the student's grades tree table. A `course` row is a parent
// (its `children` are the flagged quiz/project rows); `quiz`/`project` rows are leaves.
export type StudentGradeRowKind = 'course' | 'quiz' | 'project';

export interface StudentGradeRow {
  key: string;
  name: string;
  kind: StudentGradeRowKind;
  /** course rows only */
  is_completed?: boolean;
  /** item rows only — 0–100, or null when not graded */
  result_percent?: number | null;
  /** item rows only */
  score?: number | null;
  max_score?: number | null;
  /** item rows only — pass/fail (quiz: latest attempt; project: null) */
  is_passed?: boolean | null;
  /** quiz rows only — number of attempts */
  attempts?: number;
  children?: StudentGradeRow[];
}
