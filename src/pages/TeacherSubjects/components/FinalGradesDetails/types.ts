export type StudentExam = Omit<API.Exam, 'results'> & { result: API.ExamResult };
export interface FetchedData<T> {
  loading: boolean;
  data?: T;
  /** set when the fetch failed, so callers can tell "no data" from "could not load" */
  error?: boolean;
}

// AW-44: one flat row in the quiz/project grades table, built straight from a generated exam
// row (buildGeneratedItemRows). No course parents / children — the exam row has no course_id.
export type StudentGradeRowKind = 'quiz' | 'project';

export interface StudentGradeRow {
  key: string;
  name: string;
  kind: StudentGradeRowKind;
  /** 0–100, or null when the result is not a percentage */
  result_percent?: number | null;
  /** the backend's grade for the item */
  grade?: string | number | null;
  /** percent of a full-weight item (1-100) */
  weight?: number | null;
}
