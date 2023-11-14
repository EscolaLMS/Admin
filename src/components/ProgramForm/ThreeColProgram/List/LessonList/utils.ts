import { moveItemOnTree } from '@atlaskit/tree';
import type {
  TreeItem,
  TreeSourcePosition,
  TreeDestinationPosition,
  TreeData,
  ItemId,
} from '@atlaskit/tree';
import type { Dispatch, SetStateAction } from 'react';

// UTIL TYPES
export enum MovedType {
  New = 'new',
  Lesson = 'lesson',
  Topic = 'topic',
}
export type StringifyId<Obj extends { id?: number }> = Omit<Obj, 'id'> & { id: string };
export type LessonDeeplyStringifyId = Omit<StringifyId<API.Lesson>, 'lessons' | 'topics'> & {
  lessons?: StringifyId<API.Lesson>[];
  topics?: StringifyId<API.Topic>[];
};

const mutateTopicsId = (topics: API.Topic[], depth: number): StringifyId<API.Topic>[] =>
  topics.map((t) => ({ ...t, id: `topic-${t.id}-${depth}` }));
const mutateLessonsId = (lessons: API.Lesson[], depth: number): StringifyId<API.Lesson>[] =>
  lessons.map((l) => ({ ...l, id: l.isNew ? `new-${l.id}-${depth}` : `lesson-${l.id}-${depth}` }));

const getLessonDeeplyStringifyId = (l: API.Lesson, depth: number): LessonDeeplyStringifyId => ({
  ...l,
  id: l.isNew ? `new-${l.id}-${depth}` : `lesson-${l.id}-${depth}`,
  lessons: mutateLessonsId(l?.lessons ?? [], depth + 1),
  topics: mutateTopicsId(l?.topics ?? [], depth + 1),
});

export const getFlatLessonDeeplyStringifyId = (
  lessons: API.Lesson[],
  depth = 0,
): LessonDeeplyStringifyId[] =>
  lessons.reduce<LessonDeeplyStringifyId[]>(
    (acc, l) => [
      ...acc,
      ...getFlatLessonDeeplyStringifyId(l?.lessons ?? [], depth + 1),
      getLessonDeeplyStringifyId(l, depth),
    ],
    [],
  );

export const getFlatTopicsStringifyId = (
  lessons: API.Lesson[],
  depth = 1, // Because topic has to be nested in lesson
): StringifyId<API.Topic>[] =>
  lessons.reduce<StringifyId<API.Topic>[]>(
    (acc, l) => [
      ...acc,
      ...getFlatTopicsStringifyId(l?.lessons ?? [], depth + 1),
      ...mutateTopicsId(l?.topics ?? [], depth),
    ],
    [],
  );

export const getRootLessons = (lessons: API.Lesson[]): TreeItem[] =>
  lessons.map((l) => {
    const lesson = getLessonDeeplyStringifyId(l, 0);
    const children = [...(lesson.lessons ?? []), ...(lesson.topics ?? [])].map(({ id }) => id!);

    return {
      id: lesson.id,
      children,
      hasChildren: children.length > 0,
      isExpanded: true,
      data: lesson,
    };
  });

export const getTreeDataItemsFromFlatLessonsAndTopics = (
  items: (LessonDeeplyStringifyId | StringifyId<API.Topic>)[],
  prevState?: Record<string | number, TreeItem>,
): Record<string | number, TreeItem> =>
  items.reduce<Record<string | number, TreeItem>>((acc, item) => {
    let children: string[] = [];

    if ('lessons' in item || 'topics' in item) {
      children = [...(item.lessons ?? []), ...(item.topics ?? [])].map(({ id }) => id);
    }

    const isExpanded = prevState?.[`${item.id}`]?.isExpanded ?? true;

    return {
      ...acc,
      [`${item.id}`]: {
        id: item.id,
        children,
        hasChildren: children.length > 0,
        isExpanded,
        data: item,
      },
    };
  }, {});

export const reorderIdArr = (
  idArr: ItemId[],
  sourceIndex: number,
  destinationIndex: number,
): ItemId[] => {
  const arrCopy = [...idArr];
  const arrCopyContextSourceIndex = sourceIndex % arrCopy.length;
  const arrCopyContextDestinationIndex = destinationIndex % arrCopy.length;

  const [removed] = arrCopy.splice(arrCopyContextSourceIndex, 1);
  arrCopy.splice(arrCopyContextDestinationIndex, 0, removed);

  return arrCopy;
};

export const insertToIndexIdArr = (
  idArr: ItemId[],
  destinationIndex: number,
  item: ItemId,
): ItemId[] => {
  const arrCopy = [...idArr];
  const arrCopyContextDestinationIndex =
    arrCopy.length === 1 || destinationIndex === arrCopy.length
      ? destinationIndex
      : destinationIndex % arrCopy.length;

  arrCopy.splice(arrCopyContextDestinationIndex, 0, item);

  return arrCopy;
};

export const getOrdersFromReorderedArr = (idArr: ItemId[]): [number, number][] =>
  idArr.map((id, index) => {
    const [, strId] = id.toString().split('-');

    return [+strId, index];
  });

export const optimisticMoveThroughTree = async (
  setState: Dispatch<SetStateAction<TreeData>>,
  moveItemOnTreeParams: [TreeSourcePosition, TreeDestinationPosition],
  promise: () => Promise<unknown> | Promise<API.DefaultResponse<unknown>>,
) => {
  let prevState: TreeData | undefined = undefined;
  setState((prev) => {
    prevState = prev;
    return moveItemOnTree(prev, ...moveItemOnTreeParams);
  });

  try {
    const res = await promise();
    if (
      typeof res === 'object' &&
      res !== null &&
      'success' in res &&
      typeof res.success === 'boolean' &&
      !res.success &&
      prevState
    ) {
      setState(prevState);
    }
  } catch {
    if (prevState) {
      setState(prevState);
    }
  }
};

export const findParentByChildrenId = (
  treeData: TreeData,
  childrenId: ItemId,
): TreeItem | undefined =>
  Object.values(treeData.items).find(({ children }) => children.includes(childrenId));

export const findChildrenIndexPosition = (
  treeData: TreeData,
  parentId: ItemId,
  childrenId: ItemId,
): number => treeData.items?.[parentId]?.children?.indexOf(childrenId) ?? -1;
