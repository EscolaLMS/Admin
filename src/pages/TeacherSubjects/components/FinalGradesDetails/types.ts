export type StudentExam = Omit<API.Exam, 'results'> & { result: API.ExamResult };
export interface FetchedData<T> {
  loading: boolean;
  data?: T;
}
