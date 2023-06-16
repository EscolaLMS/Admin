import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { NavLink, FormattedMessage, useModel, history, useIntl } from 'umi';
import { message, Tooltip } from 'antd';
import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons';
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
import { TopicType } from '@/services/escola-lms/enums';
import { Context } from '@/components/ProgramForm/Context';
import { getTypeIcon } from '@/components/ProgramForm/ThreeColProgram/TopicForm';
import { getTypeName } from '@/components/ProgramForm/ThreeColProgram/TopicForm/media';
import {
  getRootLessons,
  getTreeDataItemsFromFlatLessonsAndTopics,
  getFlatLessonDeeplyStringifyId,
  getFlatTopicsStringifyId,
  reorderIdArr,
  getOrdersFromReorderedArr,
  insertToIndexIdArr,
  optimisticMoveThroughTree,
} from './utils';
import { NewLessonListItem } from '../NewLessonListItem';
import { TopicTypesSelector } from '../TopicTypesSelector';

export const LessonList: React.FC = () => {
  const { state, currentEditMode, updateLesson, addNewTopic, addNewLesson } = useContext(Context);
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

  useEffect(() => {
    const items = getTreeDataItemsFromFlatLessonsAndTopics(flatLessonsAndTopics);

    const root: TreeItem = {
      children: rootLessons.map(({ id }) => id),
      id: 'root',
      data: rootLessons,
      isExpanded: true,
      hasChildren: rootLessons.length > 0,
    };

    setTreeData({ rootId: root.id, items: { ...items, [root.id]: root } });
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

  const getHiddenNewTopicOptions = useCallback(
    (level: number) => {
      const hiddenOptions: (TopicType | 'lesson')[] = [];

      const maxLessonsNestingInProgram = initialState?.config?.filter(
        (item) => item.key === 'maxLessonsNestingInProgram',
      )[0]?.data;

      const minTopicNestingInProgram = initialState?.config?.filter(
        (item) => item.key === 'minTopicNestingInProgram',
      )[0]?.data;

      if (Number.isInteger(maxLessonsNestingInProgram) && level > maxLessonsNestingInProgram) {
        hiddenOptions.push('lesson');
      }
      if (Number.isInteger(minTopicNestingInProgram) && level < minTopicNestingInProgram) {
        Object.values(TopicType).forEach((topicType) => hiddenOptions.push(topicType));
      }
      return hiddenOptions;
    },
    [initialState],
  );

  const renderItem = useCallback(
    ({ item, depth, provided, onExpand, onCollapse }: RenderItemParams) => {
      const [type, strId] = item.id.toString().split('-');
      const id = Number(strId);

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
            />
          </div>
        );
      }

      return (
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
    (source: TreeSourcePosition, destination?: TreeDestinationPosition) => {
      if (!destination || !courseId) return;
      const sourceChildren = treeData.items[source.parentId].children;
      const movedFullId = sourceChildren[source.index].toString();
      const [movedType, movedId] = movedFullId.split('-');
      const destinationChildren = treeData.items[destination.parentId].children;

      // Moving new lesson
      if (movedType === 'new') {
        message.warn(intl.formatMessage({ id: 'new_lessons_cant_be_moved' }));
        return;
      }

      // Nest lesson/topic into topic case
      if (destination.parentId.toString().includes('topic')) {
        // TODO add translation
        message.warn(intl.formatMessage({ id: 'topics_cant_be_nested' }));
        return;
      }

      // Topics to root case
      if (destination.parentId === 'root' && movedType === 'topic') {
        // TODO add translation
        message.warn(intl.formatMessage({ id: 'topic_cant_be_in_root' }));
        return;
      }

      // Change order in one lesson
      if (source.parentId === destination.parentId && destination.index !== undefined) {
        const lessonsIds = sourceChildren.filter((id) => id.toString().includes('lesson'));
        const topicsIds = sourceChildren.filter((id) => id.toString().includes('topic'));

        // move lessons only around 0 and x index
        // TODO add new lesson support
        if (movedType === 'lesson') {
          const minLessonPos = 0;
          const maxLessonPos = lessonsIds.length - 1;

          if (destination.index < minLessonPos || destination.index > maxLessonPos) {
            message.warn(intl.formatMessage({ id: 'lessons_and_topics_cant_be_mixed' }));
            return;
          }

          const reorderedArr = reorderIdArr(lessonsIds, source.index, destination.index);
          const orders = getOrdersFromReorderedArr(reorderedArr);

          optimisticMoveThroughTree(setTreeData, [source, destination], () =>
            sort({ class: 'Lesson', orders, course_id: courseId }),
          );
          return;
        }

        // move topics only around lessons length index and last children index
        if (movedType === 'topic') {
          const minTopicPos = lessonsIds.length;
          const maxTopicPos = sourceChildren.length - 1;

          if (destination.index < minTopicPos || destination.index > maxTopicPos) {
            message.warn(intl.formatMessage({ id: 'lessons_and_topics_cant_be_mixed' }));
            return;
          }

          const reorderedArr = reorderIdArr(topicsIds, source.index, destination.index);
          const orders = getOrdersFromReorderedArr(reorderedArr);

          optimisticMoveThroughTree(setTreeData, [source, destination], () =>
            sort({ class: 'Topic', orders, course_id: courseId }),
          );
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

        if (movedType === 'lesson') {
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

          optimisticMoveThroughTree(
            setTreeData,
            [source, { ...destination, index: destIndex }],
            () =>
              apiUpdateLesson(+movedId, formData).then(() =>
                sort({ class: 'Lesson', orders: destinationOrders, course_id: courseId }),
              ),
          );
          return;
        }

        if (movedType === 'topic') {
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

          optimisticMoveThroughTree(
            setTreeData,
            [source, { ...destination, index: destIndex }],
            () =>
              apiUpdateTopic(+movedId, formData).then(() =>
                sort({ class: 'Topic', orders: destinationOrders, course_id: courseId }),
              ),
          );
          return;
        }
      }
    },
    [intl, treeData, courseId],
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
    </div>
  );
};