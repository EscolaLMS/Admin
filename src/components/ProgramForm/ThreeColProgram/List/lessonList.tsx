import React, { useCallback, useContext } from 'react';
import { NavLink } from 'umi';
import { FolderOutlined } from '@ant-design/icons';
import { TopicTypesSelector } from '@/components/ProgramForm/ThreeColProgram/List/types';
import type { DropResult } from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { getTypeIcon } from '@/components/ProgramForm/ThreeColProgram/TopicForm';
import { getTypeName } from '@/components/ProgramForm/ThreeColProgram/TopicForm/media';
import type { TopicType } from '@/services/escola-lms/enums';
import { history } from 'umi';
import { Context } from '@/components/ProgramForm/Context';

export const LessonList:React.FC = () => {
  const { state, addNewTopic, currentEditMode } = useContext(Context);
  const lessons = state.lessons; 
  const courseId = state.id;

  const [list, setList] = React.useState<API.Lesson[]>(courseLessons);

  React.useEffect(() => {
    console.log('Sync with backend', list);
  }, [list]);
if (! courseId) { return <React.Fragment /> } 
  const reorderColumnList = (lessonSource: any, startIndex: number, endIndex: number) => {
    const newTopicsIds = lessonSource.topics;
    const [removed] = newTopicsIds.splice(startIndex, 1);
    newTopicsIds.splice(endIndex, 0, removed);

    return {
      ...lessonSource,
      topics: newTopicsIds,
    };
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!result.destination) {
      return;
    }

    if (destination?.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (source.droppableId === destination?.droppableId) {
      const lesson = list.find((item) => item.id === Number(source.droppableId));
      const lessonIndex = list.findIndex((item) => item.id === Number(source.droppableId));
      const newColumn = reorderColumnList(lesson, source.index, destination.index);

      setList((prev) => {
        const newState = [...prev];
        newState[lessonIndex] = newColumn;
        return newState;
      });
    } else {
      const lessonSource = list.find((item) => item.id === Number(source.droppableId));
      const lessonSourceIndex = list.findIndex((item) => item.id === Number(source.droppableId));
      const lessonDestination = list.find((item) => item.id === Number(destination?.droppableId));
      const lessonDestinationIndex = list.findIndex(
        (item) => item.id === Number(destination?.droppableId),
      );

      const startTaskIds = lessonSource?.topics || [];
      const [removed] = startTaskIds.splice(source.index, 1);

      if (destination && lessonDestination) {
        const endTaskIds = lessonDestination.topics || [];
        endTaskIds.splice(destination.index, 0, removed);

        setList((prev) => {
          const newState = [...prev];
          newState[lessonSourceIndex] = {
            ...lessonSource,
            topics: startTaskIds,
          };
          newState[lessonDestinationIndex] = {
            ...lessonDestination,
            topics: endTaskIds,
          };
          return newState;
        });
      }
    }
  };

  const addNewTopicToLesson = useCallback(
    (lesson_id: number, topic_type: TopicType) => {
      if (addNewTopic) {
        const newTopic = addNewTopic(lesson_id, topic_type);
        history.push(`/courses/list/${courseId}/program/?topic=${newTopic.id}`);
      }
    },
    [addNewTopic, courseLessons],
  );

  return (
    <DragDropContext
      onDragEnd={(result) => {
        onDragEnd(result);
      }}
    >
      {courseLessons.map((lesson) => {
        return (
          lesson.id && (
            <React.Fragment>
              <div className={'program-sidebar__list-item program-sidebar__list-item--lesson'}>
                <NavLink to={`/courses/list/${courseId}/program/?lesson=${lesson.id}`}>
                  <FolderOutlined />
                  {lesson.title}
                </NavLink>
                <TopicTypesSelector
                  onSelected={(topic_type) =>
                    lesson.id && addNewTopicToLesson(lesson.id, topic_type)
                  }
                />
              </div>
              <Droppable droppableId={lesson.id.toString()}>
                {(provided) => (
                  <ul className={`characters`} {...provided.droppableProps} ref={provided.innerRef}>
                    {lesson.topics?.map((topic, index) => {
                      return (
                        topic.id && (
                          <Draggable
                            draggableId={topic.id.toString()}
                            index={index}
                            key={topic.id.toString()}
                          >
                            {(providedDraggable) => (
                              <li
                                ref={providedDraggable.innerRef}
                                {...providedDraggable.draggableProps}
                                {...providedDraggable.dragHandleProps}
                                className={
                                  currentEditMode &&
                                  currentEditMode.mode === 'topic' &&
                                  currentEditMode.id === topic.id
                                    ? 'program-sidebar__list-item program-sidebar__list-item--active'
                                    : 'program-sidebar__list-item'
                                }
                              >
                                <NavLink
                                  to={`/courses/list/${courseId}/program/?topic=${topic.id}`}
                                >
                                  {getTypeIcon(getTypeName(topic))} {topic.title}
                                </NavLink>
                              </li>
                            )}
                          </Draggable>
                        )
                      );
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </React.Fragment>
          )
        );
      })}
    </DragDropContext>
  );
};
