import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { NavLink, FormattedMessage, useModel, history, useIntl } from 'umi';
import { Button, message, Tooltip } from 'antd';
import { FolderOpenOutlined, FolderOutlined, PlusOutlined } from '@ant-design/icons';
import Tree, { mutateTree } from '@atlaskit/tree';
import type {
  TreeData,
  TreeItem,
  RenderItemParams,
  TreeDestinationPosition,
  TreeSourcePosition,
} from '@atlaskit/tree';

import { getFormData } from '@/services/api';
import {
  sort,
  updateLesson as apiUpdateLesson,
  updateTopic as apiUpdateTopic,
} from '@/services/escola-lms/course';
import { RecommenderType, TopicType } from '@/services/escola-lms/enums';
import { Context } from '@/components/ProgramForm/Context';
import { getTypeIcon } from '@/components/ProgramForm/ThreeColProgram/TopicForm';
import { getTypeName } from '@/components/ProgramForm/ThreeColProgram/TopicForm/media';
import type { LessonDeeplyStringifyId } from './utils';
import {
  getRootLessons,
  getTreeDataItemsFromFlatLessonsAndTopics,
  getFlatLessonDeeplyStringifyId,
  getFlatTopicsStringifyId,
  reorderIdArr,
  getOrdersFromReorderedArr,
  insertToIndexIdArr,
  optimisticMoveThroughTree,
  findChildrenIndexPosition,
  findParentByChildrenId,
  MovedType,
} from './utils';
import { NewLessonListItem } from '../NewLessonListItem';
import { TopicTypesSelector } from '../TopicTypesSelector';
import { Recommender } from '../Recommender';
import { RecommenderTopicSelector } from '../Recommender/RecommenderTopicSelector';
import { createHavePackageInstalled } from '@/utils/access';
import PACKAGES from '@/consts/packages';

interface NestingSettings {
  topic?: number;
  lesson?: number;
}

interface LessonListProps {
  onNewLesson?: () => void;
}

export const LessonList: React.FC<LessonListProps> = ({ onNewLesson }) => {
  const { state, currentEditMode, updateLesson, addNewTopic, addNewLesson, getLessons } =
    useContext(Context);
  const courseId = state?.id;
  const rootLessons = useMemo(() => getRootLessons(state?.lessons ?? []), [state?.lessons]);
  const flatLessonsAndTopics = useMemo(
    () => [
      ...getFlatLessonDeeplyStringifyId(state?.lessons ?? []),
      ...getFlatTopicsStringifyId(state?.lessons ?? []),
    ],
    [state?.lessons],
  );
  const [treeData, setTreeData] = useState<TreeData>({ rootId: 0, items: {} });
  const { initialState } = useModel('@@initialState');
  const intl = useIntl();

  const havePackageInstalled = useCallback(createHavePackageInstalled(initialState?.packages), [
    initialState?.packages,
  ]);
  useEffect(() => {
    setTreeData((prevState) => {
      const root: TreeItem = {
        children: rootLessons.map(({ id }) => id),
        id: 'root',
        data: rootLessons,
        isExpanded: true,
        hasChildren: rootLessons.length > 0,
      };

      const items = getTreeDataItemsFromFlatLessonsAndTopics(flatLessonsAndTopics, prevState.items);
      return { rootId: root.id, items: { ...items, [root.id]: root } };
    });
  }, [flatLessonsAndTopics]);

  const onTopicCreate = useCallback(
    (lesson_id: number, topic_type: TopicType) => {
      if (addNewTopic) {
        const newTopic = addNewTopic(lesson_id, topic_type);
        history.push(`/courses/list/${courseId}/program/?topic=${newTopic.id}`);
      }
    },
    [addNewTopic],
  );

  const nestingSettings = useMemo(
    () =>
      (initialState?.config ?? []).reduce<NestingSettings>((acc, setting) => {
        if (setting.key === 'maxLessonsNestingInProgram') {
          return { ...acc, lesson: setting.data };
        }
        if (setting.key === 'minTopicNestingInProgram') {
          return { ...acc, topic: setting.data };
        }
        return acc;
      }, {}),
    [initialState?.config],
  );

  const getHiddenNewTopicOptions = useCallback(
    (level: number) => {
      const hiddenOptions: (TopicType | 'lesson')[] = [];

      const maxLessonsNestingInProgram = nestingSettings?.lesson ?? 0.5;
      const minTopicNestingInProgram = nestingSettings?.topic ?? 0.5;

      if (Number.isInteger(maxLessonsNestingInProgram) && level > maxLessonsNestingInProgram) {
        hiddenOptions.push('lesson');
      }
      if (Number.isInteger(minTopicNestingInProgram) && level < minTopicNestingInProgram) {
        Object.values(TopicType).forEach((topicType) => hiddenOptions.push(topicType));
      }
      return hiddenOptions;
    },
    [nestingSettings],
  );
  const renderItem = useCallback(
    ({ item, depth, provided, onExpand, onCollapse }: RenderItemParams) => {
      const [type, strId] = item.id.toString().split('-');
      const id = Number(strId);

      const checkLastTopic = (lessonId: number, currentTopicId: string) => {
        const lessonTopics = flatLessonsAndTopics.find((lesson) =>
          lesson.id.includes(String(lessonId)),
        ) as LessonDeeplyStringifyId;
        const lastTopic = lessonTopics?.topics?.[lessonTopics.topics.length - 1];
        return lastTopic?.id === currentTopicId;
      };

      const checkTopicsLength = (lessonId: number) => {
        const lessonTopics = flatLessonsAndTopics.find((lesson) =>
          lesson.id.includes(String(lessonId)),
        ) as LessonDeeplyStringifyId;
        return lessonTopics?.topics?.length && !(lessonTopics?.topics?.length % 5);
      };

      if (type === 'new' && item.data.isNew) {
        return (
          <NewLessonListItem
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            initialValue={item.data}
            onCreate={(title: string) => {
              const formData = getFormData({
                ...item.data,
                parent_lesson_id: item.data.parent_id,
                title,
                active: item.data.active ? 1 : 0,
              });
              if (updateLesson) {
                updateLesson(id, formData);
              }
            }}
          />
        );
      }

      if (type === 'lesson') {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`program-sidebar__list-item program-sidebar__list-item--lesson ${
              currentEditMode?.mode === 'lesson' && currentEditMode.id === id
                ? 'program-sidebar__list-item--active'
                : ''
            }`}
          >
            <div className="program-sidebar__text-wrap">
              <button
                className="program-sidebar__collapse"
                onClick={() => (item.isExpanded ? onCollapse(item.id) : onExpand(item.id))}
              >
                {item.isExpanded ? <FolderOpenOutlined /> : <FolderOutlined />}
              </button>
              <Tooltip placement="top" title={item.data.title}>
                <NavLink
                  to={`/courses/list/${courseId}/program/?${type}=${id}`}
                  className="program-sidebar__link"
                >
                  <span className="program-sidebar__title">{item.data.title}</span>
                </NavLink>
              </Tooltip>
            </div>
            <TopicTypesSelector
              onNewLesson={() => {
                if (addNewLesson) {
                  addNewLesson(id);
                }
              }}
              onSelected={(topic_type) => onTopicCreate(id, topic_type)}
              // depth is 0 index based and settings are 1 index based
              positionsToHide={getHiddenNewTopicOptions(depth + 1)}
              depth={depth}
            />
          </div>
        );
      }
      return (
        <>
          <NavLink
            className={`program-sidebar__link program-sidebar__list-item program-sidebar__list-item--topic ${
              currentEditMode?.mode === 'topic' && currentEditMode.id === id
                ? 'program-sidebar__list-item--active'
                : ''
            }`}
            to={`/courses/list/${courseId}/program/?${type}=${id}`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Tooltip placement="right" title={<FormattedMessage id={getTypeName(item.data)} />}>
              {getTypeIcon(getTypeName(item.data))}
            </Tooltip>
            <span className="title">{item.data.title}</span>
          </NavLink>

          {havePackageInstalled(PACKAGES.Recommender) &&
            courseId &&
            currentEditMode?.mode === 'topic' &&
            currentEditMode?.value?.lesson_id &&
            currentEditMode?.value?.lesson_id === item.data.lesson_id &&
            checkLastTopic(currentEditMode.value.lesson_id, item.data.id) && (
              <>
                <Recommender
                  courseId={courseId}
                  lessonId={currentEditMode.value.lesson_id}
                  recommenderType={
                    currentEditMode.value.isNew
                      ? RecommenderType.Info
                      : checkTopicsLength(currentEditMode.value.lesson_id)
                      ? RecommenderType.Course
                      : RecommenderType.Exercise
                  }
                />
                <RecommenderTopicSelector
                  onSelected={(topic_type) => onTopicCreate(item.data.lesson_id, topic_type)}
                  // depth is 0 index based and settings are 1 index based
                  positionsToHide={getHiddenNewTopicOptions(depth + 1)}
                />
              </>
            )}
        </>
      );
    },
    [courseId, currentEditMode],
  );

  const onExpand = useCallback(
    (itemId: string | number) =>
      setTreeData((prev) => mutateTree(prev, itemId, { isExpanded: true })),
    [],
  );

  const onCollapse = useCallback(
    (itemId: string | number) =>
      setTreeData((prev) => mutateTree(prev, itemId, { isExpanded: false })),
    [],
  );

  const onDragEnd = useCallback(
    async (source: TreeSourcePosition, destination?: TreeDestinationPosition) => {
      if (!destination || !courseId) return;
      const sourceChildren = treeData.items[source.parentId].children;
      const movedFullId = sourceChildren[source.index].toString();
      const [movedType, movedId] = movedFullId.split('-');
      const destinationChildren = treeData.items[destination.parentId].children;

      const maxLessonsNestingInProgram = nestingSettings?.lesson;
      const minTopicNestingInProgram = nestingSettings?.topic;

      // Moving new lesson
      if (movedType === MovedType.New) {
        message.warn(intl.formatMessage({ id: 'new_lessons_cant_be_moved' }));
        return;
      }

      // Nest lesson/topic into topic case
      if (destination.parentId.toString().includes('topic')) {
        const topicsIds = sourceChildren.filter((id) => id.toString().includes('topic'));
        const destinationLesson = findParentByChildrenId(treeData, destination.parentId);
        const destinationDepth =
          Number((destinationLesson?.id ?? '').toString().split('-')?.[2] ?? -2) + 1;

        if (
          movedType === MovedType.Lesson &&
          maxLessonsNestingInProgram !== undefined &&
          destinationDepth > maxLessonsNestingInProgram
        ) {
          message.warn(
            intl.formatMessage({ id: 'max_lesson_nesting' }, { max: maxLessonsNestingInProgram }),
          );
          return;
        }

        if (
          movedType === MovedType.Topic &&
          minTopicNestingInProgram !== undefined &&
          destinationDepth < minTopicNestingInProgram
        ) {
          message.warn(
            intl.formatMessage({ id: 'min_topic_nesting' }, { min: minTopicNestingInProgram }),
          );
          return;
        }

        // Change order in one lesson
        if (destinationLesson?.id !== undefined && source.parentId === destinationLesson.id) {
          if (movedType === MovedType.Lesson) {
            message.warn(intl.formatMessage({ id: 'lessons_and_topics_cant_be_mixed' }));
            return;
          }

          if (movedType === MovedType.Topic) {
            const destinationTopicPos = findChildrenIndexPosition(
              treeData,
              destinationLesson.id,
              destination.parentId,
            );

            if (destinationTopicPos < 0) {
              return;
            }

            const reorderedArr = reorderIdArr(topicsIds, source.index, destinationTopicPos);
            const orders = getOrdersFromReorderedArr(reorderedArr);

            await optimisticMoveThroughTree(
              setTreeData,
              [source, { parentId: destinationLesson.id, index: destinationTopicPos }],
              () => sort({ class: 'Topic', orders, course_id: courseId }),
            );
            getLessons?.();
            return;
          }
        }

        // traverse lesson/topic through the tree
        if (destinationLesson?.id !== undefined && source.parentId !== destinationLesson.id) {
          const destinationLessonsIds = destinationLesson.children.filter((id) =>
            id.toString().includes('lesson'),
          );
          const destinationTopicsIds = destinationLesson.children.filter((id) =>
            id.toString().includes('topic'),
          );

          if (movedType === MovedType.Lesson) {
            const maxLessonPos = destinationLessonsIds.length;

            const [, destinationStrId] = destinationLesson.id.toString().split('-');
            const prevLessonState: API.Lesson = treeData.items[movedFullId].data;
            const updatingValues = {
              parent_lesson_id: destinationLesson.id === 'root' ? '' : +destinationStrId,
              course_id: courseId,
              title: prevLessonState.title,
              order: maxLessonPos,
            };

            const formData = getFormData(updatingValues);

            const reorderedArr = insertToIndexIdArr(
              destinationLessonsIds,
              maxLessonPos,
              movedFullId,
            );
            const destinationOrders = getOrdersFromReorderedArr(reorderedArr);

            await optimisticMoveThroughTree(
              setTreeData,
              [source, { ...destination, index: maxLessonPos }],
              () =>
                apiUpdateLesson(+movedId, formData).then(() =>
                  sort({ class: 'Lesson', orders: destinationOrders, course_id: courseId }),
                ),
            );
            getLessons?.();
            return;
          }

          if (movedType === MovedType.Topic) {
            const destinationTopicPos =
              findChildrenIndexPosition(treeData, destinationLesson.id, destination.parentId) + 1;

            if (destinationTopicPos < 1) {
              return;
            }

            const [, destinationStrId] = destinationLesson.id.toString().split('-');
            const updatingValues: Partial<API.Topic> = {
              lesson_id: +destinationStrId,
              order: destinationTopicPos,
            };

            const reorderedArr = insertToIndexIdArr(
              destinationTopicsIds,
              destinationTopicPos - destinationLessonsIds.length,
              movedFullId,
            );
            const destinationOrders = getOrdersFromReorderedArr(reorderedArr);

            const formData = getFormData(updatingValues);

            await optimisticMoveThroughTree(
              setTreeData,
              [source, { parentId: destinationLesson.id, index: destinationTopicPos }],
              () =>
                apiUpdateTopic(+movedId, formData).then(() =>
                  sort({ class: 'Topic', orders: destinationOrders, course_id: courseId }),
                ),
            );
            getLessons?.();
          }
        }
        return;
      }

      // Topics to root case
      if (destination.parentId === 'root' && movedType === MovedType.Topic) {
        message.warn(intl.formatMessage({ id: 'topic_cant_be_in_root' }));
        return;
      }

      // Change order in one lesson
      if (source.parentId === destination.parentId && destination.index !== undefined) {
        const lessonsIds = sourceChildren.filter((id) => id.toString().includes('lesson'));
        const topicsIds = sourceChildren.filter((id) => id.toString().includes('topic'));

        // move lessons only around 0 and x index
        if (movedType === MovedType.Lesson) {
          const minLessonPos = 0;
          const maxLessonPos = lessonsIds.length - 1;

          if (destination.index < minLessonPos || destination.index > maxLessonPos) {
            message.warn(intl.formatMessage({ id: 'lessons_and_topics_cant_be_mixed' }));
            return;
          }

          const reorderedArr = reorderIdArr(lessonsIds, source.index, destination.index);
          const orders = getOrdersFromReorderedArr(reorderedArr);

          await optimisticMoveThroughTree(setTreeData, [source, destination], () =>
            sort({ class: 'Lesson', orders, course_id: courseId }),
          );
          getLessons?.();
          return;
        }

        // move topics only around lessons length index and last children index
        if (movedType === MovedType.Topic) {
          const minTopicPos = lessonsIds.length;
          const maxTopicPos = sourceChildren.length - 1;

          if (destination.index < minTopicPos || destination.index > maxTopicPos) {
            message.warn(intl.formatMessage({ id: 'lessons_and_topics_cant_be_mixed' }));
            return;
          }

          const reorderedArr = reorderIdArr(topicsIds, source.index, destination.index);
          const orders = getOrdersFromReorderedArr(reorderedArr);

          await optimisticMoveThroughTree(setTreeData, [source, destination], () =>
            sort({ class: 'Topic', orders, course_id: courseId }),
          );
          getLessons?.();
          return;
        }
      }

      // traverse lesson/topic through the tree
      if (source.parentId !== destination.parentId) {
        const destinationLessonsIds = destinationChildren.filter((id) =>
          id.toString().includes('lesson'),
        );
        const destinationTopicsIds = destinationChildren.filter((id) =>
          id.toString().includes('topic'),
        );
        const destinationDepth = Number(destination.parentId.toString().split('-')?.[2] ?? -2) + 1;

        if (
          movedType === MovedType.Lesson &&
          maxLessonsNestingInProgram !== undefined &&
          destinationDepth > maxLessonsNestingInProgram
        ) {
          message.warn(
            intl.formatMessage({ id: 'max_lesson_nesting' }, { max: maxLessonsNestingInProgram }),
          );
          return;
        }

        if (
          movedType === MovedType.Topic &&
          minTopicNestingInProgram !== undefined &&
          destinationDepth < minTopicNestingInProgram
        ) {
          message.warn(
            intl.formatMessage({ id: 'min_topic_nesting' }, { min: minTopicNestingInProgram }),
          );
          return;
        }

        if (movedType === MovedType.Lesson) {
          const minLessonPos = 0;
          const maxLessonPos = destinationLessonsIds.length;
          const destIndex = destination.index ?? maxLessonPos;

          if (
            (maxLessonPos !== 0 && destIndex < minLessonPos) ||
            (maxLessonPos !== 0 && destIndex > maxLessonPos)
          ) {
            message.warn(intl.formatMessage({ id: 'lessons_and_topics_cant_be_mixed' }));
            return;
          }

          const [, destinationStrId] = destination.parentId.toString().split('-');
          const prevLessonState: API.Lesson = treeData.items[movedFullId].data;
          const updatingValues = {
            parent_lesson_id: destination.parentId === 'root' ? '' : +destinationStrId,
            course_id: courseId,
            title: prevLessonState.title,
            order: destIndex,
          };

          const formData = getFormData(updatingValues);

          const reorderedArr = insertToIndexIdArr(destinationLessonsIds, destIndex, movedFullId);
          const destinationOrders = getOrdersFromReorderedArr(reorderedArr);

          await optimisticMoveThroughTree(
            setTreeData,
            [source, { ...destination, index: destIndex }],
            () =>
              apiUpdateLesson(+movedId, formData).then(() =>
                sort({ class: 'Lesson', orders: destinationOrders, course_id: courseId }),
              ),
          );
          getLessons?.();
          return;
        }

        if (movedType === MovedType.Topic) {
          const minTopicPos = destinationLessonsIds.length;
          const maxTopicPos = destinationChildren.length;
          const destIndex = destination.index ?? maxTopicPos;

          if (
            (minTopicPos !== 0 && maxTopicPos !== 0 && destIndex < minTopicPos) ||
            (minTopicPos !== 0 && maxTopicPos !== 0 && destIndex > maxTopicPos)
          ) {
            message.warn(intl.formatMessage({ id: 'lessons_and_topics_cant_be_mixed' }));
            return;
          }

          const [, destinationStrId] = destination.parentId.toString().split('-');
          const updatingValues: Partial<API.Topic> = {
            lesson_id: +destinationStrId,
            order: destIndex,
          };

          const reorderedArr = insertToIndexIdArr(
            destinationTopicsIds,
            destIndex - destinationLessonsIds.length,
            movedFullId,
          );
          const destinationOrders = getOrdersFromReorderedArr(reorderedArr);

          const formData = getFormData(updatingValues);

          await optimisticMoveThroughTree(
            setTreeData,
            [source, { ...destination, index: destIndex }],
            () =>
              apiUpdateTopic(+movedId, formData).then(() =>
                sort({ class: 'Topic', orders: destinationOrders, course_id: courseId }),
              ),
          );
          getLessons?.();
        }
      }
    },
    [intl, treeData, courseId, nestingSettings],
  );

  return (
    <div style={{ height: '100%' }}>
      <Tree
        offsetPerLevel={9}
        tree={treeData}
        onExpand={onExpand}
        onCollapse={onCollapse}
        onDragEnd={onDragEnd}
        renderItem={renderItem}
        isDragEnabled
        isNestingEnabled
      />
      <Button
        onClick={onNewLesson}
        type="primary"
        className="program-sidebar__add-btn"
        icon={<PlusOutlined />}
      >
        <span>
          <FormattedMessage id="add_lesson" />
        </span>
      </Button>
    </div>
  );
};
