import React, { useCallback, useEffect, useState } from 'react';
import { PortalProvider } from 'react-portal-hook';

import {
  program,
  createLesson as apiCreateLesson,
  updateLesson as apiUpdateLesson,
  createTopic as apiCreateTopic,
  updateTopic as apiUpdateTopic,
  TopicType,
} from '@/services/escola-lms/course';

type ProgramContext = {
  state?: API.CourseProgram;
  h5ps?: any[];
  // token: credentials.token,
  id?: number;
  addNewLesson?: () => void;
  updateLesson?: (lesson_id: number, data: FormData) => Promise<void | boolean>;
  updateTopic?: (topic_id: number, data: FormData) => Promise<void>;
  // addResource,
  // removeResource,
  deleteLesson?: (lesson_id: number) => void;
  // updateH5P,
  sortLesson?: (lesson_id: number, upDirection?: boolean) => void;
  addNewTopic?: (lesson_id: number) => void;
  deleteTopic?: (topic_id: number) => void;
  sortTopic?: (lesson_id: number, topic_id: number, upDirection?: boolean) => void;
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
    setState((prevState) => ({
      ...prevState,
      lessons: [
        {
          course_id: id,
          image: null,
          topics: [],
          isNew: true,
          id: prevState ? prevState.lessons.length + 1 : getRandomId(), // New Lesson
          order: 0,
          title: 'Add title here',
        },
        ...(prevState ? prevState.lessons : []),
      ],
    }));
  }, [id]);

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
          sort_order: index,
        };
      });

      setState((prevState) => ({
        ...prevState,
        lessons: lessons || [],
      }));

      // TODO: call sorting function once this is ready
      /**
      const formData = new FormData();

      lessons.forEach((lesson, index) => {
        formData.append(`lessondata[${index}][id]`, lesson.id);
        formData.append(`lessondata[${index}][position]`, lesson.sort_order);
      });

      return API(`sort/lesson`, token, 'POST', formData)
        .then((response) => response.json())
        .catch((err) => console.log(err));

        */
    },
    [state],
  );

  const sortTopic = useCallback(
    (lesson_id, topic_id, up = true) => {
      const lesson = state?.lessons.find((lesson_item) => lesson_item.id === lesson_id);

      const lIndex = lesson?.topics?.findIndex((topic) => topic.id === topic_id) || 0;

      const swapIndex = up ? lIndex - 1 : lIndex + 1;

      const topics =
        lesson?.topics?.map((topic, index, arr) => {
          const newTopic =
            // eslint-disable-next-line
            index == lIndex ? arr[swapIndex] : index == swapIndex ? arr[lIndex] : topic;

          return {
            ...newTopic,
            sort_order: index,
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

      // TODO call sorting endpoint
      /**
      const formData = new FormData();

      topics.forEach((topic, index) => {
        formData.append(`topicquizdata[${index}][id]`, topic.id);
        formData.append(`topicquizdata[${index}][lessonid]`, id);
        formData.append(`topicquizdata[${index}][position]`, topic.sort_order);
      });

      return API(`sort/topicquiz`, token, 'POST', formData)
        .then((response) => response.json())

        .catch((err) => console.log(err));
         */
    },
    [state],
  );

  const deleteLesson = useCallback(
    (lesson_id) => {
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
    (topic_id) => {
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

  const addNewTopic = useCallback((lesson_id) => {
    setState((prevState) => ({
      ...prevState,
      lessons: prevState
        ? prevState.lessons?.map((lesson) => {
            if (lesson.id === lesson_id) {
              const topics = lesson.topics || [];
              const newTopic: API.Topic = {
                topicable_type: TopicType.Unselected,
                isNew: true,
                id: getRandomId(),
                order: 0,
                title: 'Add new title here',
              };
              return {
                ...lesson,
                topics: [...topics, newTopic],
              };
            }
            return lesson;
          })
        : [],
    }));
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
  };

  return (
    <Context.Provider value={value}>
      <PortalProvider>{children} </PortalProvider>
    </Context.Provider>
  );
};
