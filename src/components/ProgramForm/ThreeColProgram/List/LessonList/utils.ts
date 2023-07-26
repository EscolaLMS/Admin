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
type StringifyId<Obj extends { id?: number }> = Omit<Obj, 'id'> & { id: string };
type LessonDeeplyStringifyId = Omit<StringifyId<API.Lesson>, 'lessons' | 'topics'> & {
  lessons?: StringifyId<API.Lesson>[];
  topics?: StringifyId<API.Topic>[];
};

const mutateTopicsId = (topics: API.Topic[]): StringifyId<API.Topic>[] =>
  topics.map((t) => ({ ...t, id: `topic-${t.id}` }));
const mutateLessonsId = (lessons: API.Lesson[]): StringifyId<API.Lesson>[] =>
  lessons.map((l) => ({ ...l, id: l.isNew ? `new-${l.id}` : `lesson-${l.id}` }));

const getLessonDeeplyStringifyId = (l: API.Lesson): LessonDeeplyStringifyId => ({
  ...l,
  id: l.isNew ? `new-${l.id}` : `lesson-${l.id}`,
  lessons: mutateLessonsId(l?.lessons ?? []),
  topics: mutateTopicsId(l?.topics ?? []),
});

export const getFlatLessonDeeplyStringifyId = (lessons: API.Lesson[]): LessonDeeplyStringifyId[] =>
  lessons.reduce<LessonDeeplyStringifyId[]>(
    (acc, l) => [
      ...acc,
      ...getFlatLessonDeeplyStringifyId(l?.lessons ?? []),
      getLessonDeeplyStringifyId(l),
    ],
    [],
  );

export const getFlatTopicsStringifyId = (lessons: API.Lesson[]): StringifyId<API.Topic>[] =>
  lessons.reduce<StringifyId<API.Topic>[]>(
    (acc, l) => [
      ...acc,
      ...getFlatTopicsStringifyId(l?.lessons ?? []),
      ...mutateTopicsId(l?.topics ?? []),
    ],
    [],
  );

export const getRootLessons = (lessons: API.Lesson[]): TreeItem[] =>
  lessons.map(getLessonDeeplyStringifyId).map((lesson) => {
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
): Record<string | number, TreeItem> =>
  items.reduce<Record<string | number, TreeItem>>((acc, item) => {
    let children: string[] = [];

    if ('lessons' in item || 'topics' in item) {
      children = [...(item.lessons ?? []), ...(item.topics ?? [])].map(({ id }) => id);
    }

    return {
      ...acc,
      [`${item.id}`]: {
        id: item.id,
        children,
        hasChildren: children.length > 0,
        isExpanded: true,
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
  item: string | ItemId,
): ItemId[] => {
  const arrCopy = [...idArr];
  const arrCopyContextDestinationIndex =
    arrCopy.length === 1 ? destinationIndex : destinationIndex % arrCopy.length;

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
