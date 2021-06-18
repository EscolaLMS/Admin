import React, { useCallback, useEffect, useState } from 'react';

import {
  program,
  createLesson as apiCreateLesson,
  updateLesson as apiUpdateLesson,
  createTopic as apiCreateTopic,
  updateTopic as apiUpdateTopic,
  removeLesson as apiRemoveLesson,
  removeTopic as apiRemoveTopic,
  TopicType,
  sort,
} from '@/services/escola-lms/course';

import type { UploadChangeParam } from 'antd/lib/upload';

type ProgramContext = {
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
  addNewTopic?: (lesson_id: number) => API.Topic;
  deleteTopic?: (topic_id: number) => void;
  sortTopic?: (lesson_id: number, topic_id: number, upDirection?: boolean) => void;
  onTopicUploaded?: (prevTopicId: number, info: UploadChangeParam) => void;
};

export const Context = React.createContext<ProgramContext>({});

const getRandomId = () => Math.round(Math.random() * 99999);

export const AppContext: React.FC<{ children: React.ReactNode; id: number }> = ({
  children,
  id,
}) => {
  const [state, setState] = useState<API.CourseProgram>();

  const [h5ps, setH5ps] = useState([]);

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
    (topic_id) => {
      const lesson = state?.lessons.find((lesson_item) =>
        lesson_item?.topics?.find((topic) => topic.id === topic_id),
      );
      return lesson ? lesson.id : null;
    },
    [state],
  );

  /*
  const getTopicIdByResourceId = useCallback(
    (resId) => {
      const topic = state.lessons
        .map((lesson) => lesson.topics)
        .flat()
        .find((topic) => topic.resources.find((resource) => resource.id == resId));
      return topic ? topic.id : null;
    },
    [state],
  );
  */

  const addNewLesson = useCallback(() => {
    const newLesson: API.Lesson = {
      course_id: id,
      topics: [],
      isNew: true,
      id: state ? state.lessons.length + 1 : getRandomId(), // New Lesson
      order: 0,
      title: 'Add title here',
    };
    setState((prevState) => ({
      ...prevState,
      lessons: [newLesson, ...(prevState ? prevState.lessons : [])],
    }));

    return newLesson;
  }, [id, state]);

  const updateLesson = useCallback(
    (lesson_id, formData) => {
      const newLesson = state?.lessons?.find((lesson) => lesson.id === lesson_id);
      const isNew = newLesson && newLesson.isNew;

      return (isNew ? apiCreateLesson(formData) : apiUpdateLesson(lesson_id, formData)).then(
        (data) => {
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
    (lesson_id, up = true) => {
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

      sort({ class: 'Lesson', orders, course_id: id });
    },
    [state, id],
  );

  const sortTopic = useCallback(
    (lesson_id, topic_id, up = true) => {
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

      const orders = topics
        ?.filter((topic) => !topic.isNew)
        .map((topic) => [topic.id, topic.order]);

      sort({ class: 'Topic', orders, course_id: id });
    },
    [state, id],
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
    (topic_id, formData) => {
      const lesson_id = getLessonIdByTopicId(topic_id);

      const lesson = state?.lessons?.find((lesson_item) => lesson_item.id === lesson_id);

      const topic = lesson && lesson.topics?.find((topic_item) => topic_item.id === topic_id);

      const isNew = topic?.isNew;

      console.log(topic, isNew);

      return (isNew ? apiCreateTopic(formData) : apiUpdateTopic(topic_id, formData)).then(
        (data) => {
          if (data.success) {
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
                                const newTopic: API.TopicNotEmpty = {
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

  const addNewTopic = useCallback((lesson_id: number) => {
    const newTopic: API.Topic = {
      lesson_id,
      topicable_type: TopicType.Unselected,
      isNew: true,
      id: getRandomId(),
      order: 0,
      title: 'Add new title here',
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
    onTopicUploaded,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
