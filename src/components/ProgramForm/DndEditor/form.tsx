import { TopicNewOrNotEmpty } from './types';

import Topic from '../Topic/index';

export const TopicForm: React.FC<{
  courseId?: number;
  courseLessons: API.Lesson[];
  item: TopicNewOrNotEmpty;
}> = ({ courseId, courseLessons, item }) => {
  return (
    <Topic
      courseId={courseId}
      courseLessons={courseLessons}
      key={item.id}
      topic={item}
      onUpload={(uploadedTopic) => console.log(uploadedTopic)}
    />
  );
};
