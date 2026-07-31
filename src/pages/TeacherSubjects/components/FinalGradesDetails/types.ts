export type StudentExam = Omit<API.Exam, 'results'> & { result: API.ExamResult };
export interface FetchedData<T> {
  loading: boolean;
  data?: T;
  /** set when the fetch failed, so callers can tell "no data" from "could not load" */
  error?: boolean;
}

export type StudentGradeRowKind = 'course' | 'quiz' | 'project';

export interface StudentGradeRow {
  key: string;
  name: string;
  kind: StudentGradeRowKind;
  /** course rows only */
  is_completed?: boolean;
  /** item rows only — 0–100, or null when the result is not a percentage */
  result_percent?: number | null;
  /** item rows only — the grade `result_percent` maps onto; null when the backend has none */
  grade?: string | number | null;
  /** item rows only — percent of a full-weight item (1-100) */
  weight?: number | null;
  children?: StudentGradeRow[];
}
