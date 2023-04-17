export type StateLesson = Omit<API.Lesson, 'parent_id'> & { parent_id: string | number };
