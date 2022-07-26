import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { message } from 'antd';
import { useLocation } from 'umi';
import type { Location } from 'history';

import {
  program,
  createLesson as apiCreateLesson,
  updateLesson as apiUpdateLesson,
  createTopic as apiCreateTopic,
  updateTopic as apiUpdateTopic,
  removeLesson as apiRemoveLesson,
  removeTopic as apiRemoveTopic,
  sort,
  cloneLesson as apiCloneLesson,
  cloneTopic as apiCloneTopic,
} from '@/services/escola-lms/course';

import type { UploadChangeParam } from 'antd/lib/upload';

type CurrentEditMode =
  | { mode: 'lesson'; id: number; value?: API.Lesson | null }
  | { mode: 'topic'; id: number; value?: API.Topic | null }
  | { mode: 'init' };

type ProgramContext = {
  currentEditMode?: CurrentEditMode;
  state?: API.CourseProgram;
  h5ps?: any[];
  // token: credentials.token,
  id?: number;
  addNewLesson?: () => API.Lesson;
  updateLesson?: (lesson_id: number, data: FormData) => Promise<void | boolean>;
  updateTopic?: (topic_id: number, data: FormData) => Promise<void>;
  // addResource,
  // removeResource,
  deleteLesson?: (lesson_id: number) => void;
  // updateH5P,
  sortLesson?: (lesson_id: number, upDirection?: boolean) => void;
  addNewTopic?: (lesson_id: number, type: API.TopicType) => API.Topic;
  deleteTopic?: (topic_id: number) => void;
  sortTopic?: (lesson_id: number, topic_id: number, upDirection?: boolean) => void;
  sortTopics?: (lesson_id: number, new_order: API.Lesson[]) => void;
  updateTopicsOrder?: (lesson_id: number) => void;
  onTopicUploaded?: (prevTopicId: number, info: UploadChangeParam) => void;
  cloneTopic?: (topic_id: number) => void;
  cloneLesson?: (lesson_id: number) => void;
};

export const Context = React.createContext<ProgramContext>({});

const getRandomId = () => Math.round(Math.random() * 99999);

export const AppContext: React.FC<{ children: React.ReactNode; id: number }> = ({
  children,
  id,
}) => {
  const [state, setState] = useState<API.CourseProgram>();

  const [h5ps, setH5ps] = useState([]);

  const l = useLocation() as Location & { query: { lesson?: string; topic?: string } };

  useEffect(() => {
    setH5ps([]);
  }, []);

  /*
  useEffect(() => {
    API(`h5p`, token)
      .then((response) => response.json())
      .then((data) => {
        setH5ps(data);
      });
    //.then(() => addNewLesson());
  }, []);
  */

  const getLessons = useCallback(() => {
    program(id).then((data) => {
      return data.success && setState(data.data);
    });
  }, [id]);

  useEffect(() => {
    getLessons();
  }, [getLessons]);

  const getLessonIdByTopicId = useCallback(
    (topic_id: number) => {
      const lesson = state?.lessons.find((lesson_item) =>
        lesson_item?.topics?.find((topic) => topic.id === topic_id),
      );
      return lesson ? lesson.id : null;
    },
    [state],
  );

  const getTopicByTopicId = useCallback(
    (topic_id: number) => {
      const topic = state?.lessons
        .map((lesson) => lesson.topics)
        .flat()
        .find((fTopic) => fTopic && fTopic.id == topic_id);
      return topic ? topic : null;
    },
    [state],
  );

  const currentEditMode = useMemo<CurrentEditMode>(() => {
    if (l.query?.lesson) {
      return {
        mode: 'lesson',
        id: Number(l.query.lesson),
        value: state?.lessons.find((lesson) => lesson.id === Number(l.query.lesson)),
      };
    }
    if (l.query?.topic) {
      return {
        mode: 'topic',
        id: Number(l.query.topic),
        value: getTopicByTopicId(Number(l.query.topic)),
      };
    }
    return { mode: 'init' };
  }, [l.query, state]);

  const addNewLesson = useCallback(() => {
    const newLesson: API.Lesson = {
      course_id: id,
      topics: [],
      isNew: true,
      id: state ? state.lessons.length + 1 : getRandomId(), // New Lesson
      order: 0,
      title: 'Add title here',
      active: true,
    };

    setState((prevState) => ({
      ...prevState,
      lessons: [...(prevState ? prevState.lessons : []), newLesson] as API.Lesson[],
    }));

    return newLesson;
  }, [id, state]);

  const updateLesson = useCallback(
    (lesson_id: number, formData: FormData) => {
      const newLesson = state?.lessons?.find((lesson) => lesson.id === lesson_id);
      const isNew = newLesson && newLesson.isNew;

      return (isNew ? apiCreateLesson(formData) : apiUpdateLesson(lesson_id, formData)).then(
        (data) => {
          message.success(data.message);
          return (
            data.success &&
            setState((prevState) => ({
              ...prevState,
              lessons: prevState?.lessons
                ? prevState.lessons.map((lesson) => {
                    if (lesson.id === lesson_id) {
                      return {
                        ...lesson,
                        ...data.data,
                        isNew: false,
                      };
                    }
                    return lesson;
                  })
                : [data.data],
            }))
          );
        },
      );
    },
    [state],
  );

  const sortLesson = useCallback(
    (lesson_id: number, up: boolean = true) => {
      const cIndex = state?.lessons.findIndex((lesson) => lesson.id === lesson_id) || 0;

      const swapIndex = up ? cIndex - 1 : cIndex + 1;

      const lessons = state?.lessons.map((lesson, index, arr) => {
        const newLesson =
          // eslint-disable-next-line
          index == cIndex ? arr[swapIndex] : index == swapIndex ? arr[cIndex] : lesson;
        return {
          ...newLesson,
          order: index,
        };
      });

      setState((prevState) => ({
        ...prevState,
        lessons: lessons || [],
      }));

      const orders = lessons
        ?.filter((lesson) => !lesson.isNew)
        .map((lesson) => [lesson.id, lesson.order]);

      sort({ class: 'Lesson', orders, course_id: id }).then((response) => {
        if (response.success) {
          message.success(response.message);
        }
      });
    },
    [state, id],
  );

  const sortTopic = useCallback(
    (lesson_id: number, topic_id: number, up = true) => {
      const lesson = state?.lessons.find((lesson_item) => lesson_item.id === lesson_id);

      const lIndex = lesson?.topics?.findIndex((topic) => topic.id === topic_id);

      if (lIndex === undefined || lIndex === -1) {
        return;
      }

      const swapIndex = up ? lIndex - 1 : lIndex + 1;

      const topics =
        lesson?.topics?.map((topic, index, arr) => {
          const newTopic =
            // eslint-disable-next-line
            index == lIndex ? arr[swapIndex] : index == swapIndex ? arr[lIndex] : topic;

          return {
            ...newTopic,
            order: index,
          };
        }) || [];

      setState((prevState) => ({
        ...prevState,
        lessons: prevState
          ? prevState.lessons.map((lesson_item) => {
              if (lesson_item.id === lesson_id) {
                return {
                  ...lesson_item,
                  topics,
                };
              }
              return lesson_item;
            })
          : [],
      }));
    },
    [state],
  );

  const updateTopicsOrder = useCallback(
    (lesson_id: number) => {
      const lesson = state?.lessons.find((lesson_item) => lesson_item.id === lesson_id);
      const orders = lesson?.topics
        ?.filter((topic) => !topic.isNew)
        .map((topic) => [topic.id, topic.order]);

      sort({ class: 'Topic', orders, course_id: id }).then((response) => {
        if (response.success) {
          message.success(response.message);
        }
      });
    },
    [state, id],
  );

  const sortTopics = useCallback(
    (lesson_id: number, new_order: API.Topic[]) => {
      setState((prevState) => ({
        ...prevState,
        lessons: prevState
          ? prevState.lessons.map((lesson_item) => {
              if (lesson_item.id === lesson_id) {
                return {
                  ...lesson_item,
                  topics: new_order,
                };
              }
              return lesson_item;
            })
          : [],
      }));

      const orders = new_order.map((topic) => [topic.id, topic.order]);

      sort({ class: 'Topic', orders, course_id: id }).then((response) => {
        if (response.success) {
          message.success(response.message);
        }
      });
    },
    [state],
  );

  const deleteLesson = useCallback(
    (lesson_id: number) => {
      const lesson = state?.lessons.find((lesson_item) => lesson_item.id === lesson_id);
      if (!lesson) {
        return;
      }
      const { isNew } = lesson;

      if (isNew) {
        setState((prevState) => ({
          ...prevState,
          lessons: prevState?.lessons?.filter((lesson_item) => lesson_item.id !== lesson_id) || [],
        }));
      }

      apiRemoveLesson(lesson_id).then((data) => {
        if (data.success) {
          message.success(data.message);
          setState((prevState) => ({
            ...prevState,
            lessons: prevState
              ? prevState.lessons.filter((lesson_item) => lesson_item.id !== lesson_id)
              : [],
          }));
        }
      });

      // TODO call actual API to delete lesson

      /**
      return API(`lesson/delete/${lesson_id}`, token, 'POST')
        .then((response) => response.json())
        .then(() => {
          setState((prevState) => ({
            ...prevState,
            lessons: prevState.lessons.filter((lesson) => lesson.id !== lesson_id),
          }));
        });

         */
    },
    [state],
  );

  const updateTopic = useCallback(
    (topic_id: number, formData: FormData) => {
      const lesson_id = getLessonIdByTopicId(topic_id);

      const lesson = state?.lessons?.find((lesson_item) => lesson_item.id === lesson_id);

      const topic = lesson && lesson.topics?.find((topic_item) => topic_item.id === topic_id);

      const isNew = topic?.isNew;

      return (isNew ? apiCreateTopic(formData) : apiUpdateTopic(topic_id, formData)).then(
        (data) => {
          if (data.success) {
            message.success(data.message);
            setState((prevState) => ({
              ...prevState,
              lessons: prevState
                ? prevState.lessons.map((lesson_item) => {
                    if (lesson_item.id === lesson_id) {
                      return {
                        ...lesson_item,
                        topics:
                          lesson_item.topics?.map((topic_item) => {
                            if (topic_item.id === topic_id) {
                              if (data.data.topicable_type) {
                                const newTopic: API.Topic = {
                                  ...topic_item,
                                  ...data.data,
                                  isNew: false,
                                };
                                return newTopic;
                              }
                            }
                            return topic_item;
                          }) || [],
                      };
                    }
                    return lesson_item;
                  })
                : [],
            }));
          }
        },
      );
    },
    [getLessonIdByTopicId, state],
  );

  const deleteTopic = useCallback(
    (topic_id: number) => {
      const lesson_id = getLessonIdByTopicId(topic_id);

      const lesson = state?.lessons?.find((lesson_item) => lesson_item.id === lesson_id);

      if (!lesson) {
        return;
      }

      const topic = lesson.topics?.find((topic_item) => topic_item.id === topic_id);

      const isNew = topic?.isNew;

      if (isNew) {
        setState((prevState) => ({
          ...prevState,
          lessons: prevState
            ? prevState.lessons.map((lesson_item) => {
                if (lesson_item.id === lesson_id) {
                  return {
                    ...lesson_item,
                    topics:
                      lesson_item.topics?.filter((topic_item) => topic_item.id !== topic_id) || [],
                  };
                }
                return lesson_item;
              })
            : [],
        }));
      } else {
        apiRemoveTopic(topic_id).then((data) => {
          if (data.success) {
            message.success(data.message);
            setState((prevState) => ({
              ...prevState,
              lessons: prevState
                ? prevState.lessons.map((lesson_item) => {
                    if (lesson_item.id === lesson_id) {
                      return {
                        ...lesson_item,
                        topics: lesson_item.topics
                          ? lesson_item.topics.filter((topic_item) => topic_item.id !== topic_id)
                          : [],
                      };
                    }
                    return lesson_item;
                  })
                : [],
            }));
          }
        });

        // TODO call API to delete
        /**
         return API(`topic/delete/${id}`, token, 'POST')
        .then((response) => response.json())
        .then(() =>
          setState((prevState) => ({
            ...prevState,
            lessons: prevState.lessons.map((lesson) => {
              if (lesson.id == id) {
                return {
                  ...lesson,
                  topics: lesson.topics.filter((topic) => topic.id !== id),
                };
              }
              return lesson;
            }),
          })),
        );
         */
      }
    },
    [state, getLessonIdByTopicId],
  );

  /*
  const addResource = useCallback(
    (id, formData) => {
      const isNew = false;

      const id = getLessonByTopicId(id);

      return API(`topic/resource/save/${id}`, token, 'POST', formData)
        .then((response) => response.json())
        .then((data) =>
          setState((prevState) => ({
            ...prevState,
            lessons: prevState.lessons.map((lesson) => {
              if (lesson.id == id) {
                return {
                  ...lesson,
                  topics: lesson.topics.map((topic) => {
                    if (topic.id == id) {
                      return {
                        ...topic,
                        resources: [...topic.resources, data],
                      };
                    }
                    return topic;
                  }),
                };
              }
              return lesson;
            }),
          })),
        );
    },
    [state],
  );
  */

  /*
  const removeResource = useCallback(
    (resource_id) => {
      // resource/delete/{courseFiles}

      const id = getQuizIdByResourseId(resource_id);
      const id = getLessonByTopicId(id);

      return API(`topic/resource/delete/${resource_id}`, token, 'DELETE', null)
        .then((response) => response.json())
        .then(() =>
          setState((prevState) => ({
            ...prevState,
            lessons: prevState.lessons.map((lesson) => {
              if (lesson.id == id) {
                return {
                  ...lesson,
                  topics: lesson.topics.map((topic) => {
                    if (topic.id == id) {
                      return {
                        ...topic,
                        resources: topic.resources.filter(
                          (resource) => resource.id !== resource_id,
                        ),
                      };
                    }
                    return topic;
                  }),
                };
              }
              return lesson;
            }),
          })),
        );
    },
    [state],
  );
  */

  /*
  const updateH5P = useCallback(
    (id, h5p_id) => {
      const id = getLessonByTopicId(id);
      return API(`topic/h5p/save/${id}`, token, 'POST', getFormData({ media: h5p_id }))
        .then((response) => response.json())
        .then((data) =>
          setState((prevState) => ({
            ...prevState,
            lessons: prevState.lessons.map((lesson) => {
              if (lesson.id == id) {
                return {
                  ...lesson,
                  topics: lesson.topics.map((topic) => {
                    if (topic.id == id) {
                      return {
                        ...topic,
                        media: data,
                      };
                    }
                    return topic;
                  }),
                };
              }
              return lesson;
            }),
          })),
        );
    },
    [state],
  );
  */

  const addNewTopic = useCallback((lesson_id: number, type: API.TopicType) => {
    const newTopic: API.Topic = {
      lesson_id,
      isNew: true,
      id: getRandomId(),
      title: 'Add new title here',
      active: true,
      topicable_type: type,
    };

    setState((prevState) => ({
      ...prevState,
      lessons: prevState
        ? prevState.lessons?.map((lesson) => {
            if (lesson.id === lesson_id) {
              const topics = lesson.topics || [];

              return {
                ...lesson,
                topics: [...topics, newTopic],
              };
            }
            return lesson;
          })
        : [],
    }));
    return newTopic;
  }, []);

  const onTopicUploaded = (prevTopicId: number, info: UploadChangeParam) => {
    const lesson_id = getLessonIdByTopicId(prevTopicId);
    setState((prevState) => ({
      ...prevState,
      lessons: prevState
        ? prevState.lessons?.map((lesson) => {
            if (lesson.id === lesson_id) {
              return {
                ...lesson,
                topics: lesson.topics?.map((topic) => {
                  if (topic.id === prevTopicId) {
                    return info.file.response.data;
                  }
                  return topic;
                }),
              };
            }
            return lesson;
          })
        : [],
    }));
  };

  const cloneTopic = useCallback(
    (topic_id: number) => {
      return apiCloneTopic(topic_id).then((response) => {
        if (response.success) {
          message.success(response.message);
          const lesson_id = getLessonIdByTopicId(topic_id);

          setState((prevState) => ({
            ...prevState,
            lessons: prevState
              ? prevState.lessons?.map((lesson) => {
                  if (lesson.id === lesson_id) {
                    const topics = lesson.topics || [];
                    return {
                      ...lesson,
                      topics: [...topics, response.data] as API.Topic[],
                    };
                  }
                  return lesson;
                })
              : [],
          }));
        }
      });
    },
    [state, getLessonIdByTopicId],
  );

  const cloneLesson = useCallback((lesson_id: number) => {
    return apiCloneLesson(lesson_id).then((response) => {
      if (response.success) {
        message.success(response.message);

        setState((prevState) => ({
          ...prevState,
          lessons: prevState ? [...prevState.lessons, response.data] : [],
        }));
      }
    });
  }, []);

  const value = {
    state,
    h5ps,
    // token: credentials.token,
    id,
    addNewLesson,
    updateLesson,
    updateTopic,
    // addResource,
    // removeResource,
    deleteLesson,
    // updateH5P,
    sortLesson,
    addNewTopic,
    deleteTopic,
    sortTopic,
    sortTopics,
    updateTopicsOrder,
    onTopicUploaded,
    cloneTopic,
    cloneLesson,
    currentEditMode,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
