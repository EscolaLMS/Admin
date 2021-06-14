import React, { useCallback, useEffect, useState } from 'react';
import { PortalProvider } from 'react-portal-hook';
import API, { getFormData } from '@/services/api';

import {
  program,
  createLesson as apiCreateLesson,
  updateLesson as apiUpdateLesson,
  createTopic as apiCreateTopic,
  updateTopic as apiUpdateTopic,
} from '@/services/escola-lms/course';

export const Context = React.createContext();

export const AppContext = ({ children, credentials }) => {
  const [state, setState] = useState<API.CourseProgram>();

  const [h5ps, setH5ps] = useState([]);

  const { token, id } = credentials;

  useEffect(() => {
    API(`h5p`, token)
      .then((response) => response.json())
      .then((data) => {
        setH5ps(data);
      });
    //.then(() => addNewLesson());
  }, []);

  const getLessons = useCallback(() => {
    program(id).then((data) => {
      console.log('data', data);
      setState(data.data);
    });
  }, []);

  useEffect(() => {
    getLessons();
    //.then(() => addNewLesson());
  }, []);

  const getLessonByTopicId = useCallback(
    (id) => {
      const lesson = state.lessons.find((lesson) => lesson.topics.find((topic) => topic.id == id));
      return lesson ? lesson.id : null;
    },
    [state],
  );

  const getQuizIdByResourseId = useCallback(
    (resId) => {
      const topic = state.lessons
        .map((lesson) => lesson.topics)
        .flat()
        .find((topic) => topic.resources.find((resource) => resource.id == resId));
      return topic ? topic.id : null;
    },
    [state],
  );

  const addNewLesson = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      lessons: [
        {
          course_id: id,
          image: null,
          topics: [],
          isNew: true,
          id: prevState.lessons.length + 1, // New Lesson
          order: 0,
          title: 'Add title here',
        },
        ...prevState.lessons,
      ],
    }));
  }, [state]);

  const updateLesson = useCallback(
    (lesson_id, formData) => {
      console.log(id, lesson_id, state.lessons, state);

      const isNew = !!state.lessons.find((lesson) => lesson.id == lesson_id).isNew;

      return (isNew ? apiCreateLesson(formData) : apiUpdateLesson(lesson_id, formData)).then(
        (data) => {
          setState((prevState) => ({
            ...prevState,
            lessons: prevState.lessons.map((lesson) => {
              if (lesson.id === lesson_id) {
                return {
                  ...lesson,
                  ...data.data,
                  isNew: false,
                };
              }
              return lesson;
            }),
          }));
        },
      );
    },
    [state],
  );

  const sortLesson = useCallback(
    (id, up = true) => {
      const cIndex = state.lessons.findIndex((lesson) => lesson.id == id);

      const swapIndex = up ? cIndex - 1 : cIndex + 1;

      const lessons = state.lessons.map((lesson, index, arr) => {
        const newLesson =
          index == cIndex ? arr[swapIndex] : index == swapIndex ? arr[cIndex] : lesson;
        return {
          ...newLesson,
          sort_order: index,
        };
      });

      setState((prevState) => ({
        ...prevState,
        lessons,
      }));

      const formData = new FormData();

      lessons.forEach((lesson, index) => {
        formData.append(`lessondata[${index}][id]`, lesson.id);
        formData.append(`lessondata[${index}][position]`, lesson.sort_order);
      });

      return API(`sort/lesson`, token, 'POST', formData)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    },
    [state],
  );

  const sortTopic = useCallback(
    (id, topic_id, up = true) => {
      const lesson = state.lessons.find((lesson) => lesson.id == id);

      const lIndex = lesson.topics.findIndex((topic) => topic.id == topic_id);

      const swapIndex = up ? lIndex - 1 : lIndex + 1;

      const topics = lesson.topics.map((topic, index, arr) => {
        const newTopic =
          index == lIndex ? arr[swapIndex] : index == swapIndex ? arr[lIndex] : topic;

        return {
          ...newTopic,
          sort_order: index,
        };
      });

      setState((prevState) => ({
        ...prevState,
        lessons: prevState.lessons.map((lesson) => {
          if (lesson.id == id) {
            return {
              ...lesson,
              topics,
            };
          }
          return lesson;
        }),
      }));

      const formData = new FormData();

      topics.forEach((topic, index) => {
        formData.append(`topicquizdata[${index}][id]`, topic.id);
        formData.append(`topicquizdata[${index}][lessonid]`, id);
        formData.append(`topicquizdata[${index}][position]`, topic.sort_order);
      });

      return API(`sort/topicquiz`, token, 'POST', formData)
        .then((response) => response.json())

        .catch((err) => console.log(err));
    },
    [state],
  );

  const deleteLesson = useCallback(
    (lesson_id) => {
      const isNew = !!state.lessons.find((lesson) => lesson.id == lesson_id).isNew;

      if (isNew) {
        return setState((prevState) => ({
          ...prevState,
          lessons: prevState.lessons.filter((lesson) => lesson.id != lesson_id),
        }));
      }

      return API(`lesson/delete/${lesson_id}`, token, 'POST')
        .then((response) => response.json())
        .then(() => {
          setState((prevState) => ({
            ...prevState,
            lessons: prevState.lessons.filter((lesson) => lesson.id !== lesson_id),
          }));
        });
    },
    [state],
  );

  const updateTopic = useCallback(
    (topic_id, formData) => {
      const lesson_id = getLessonByTopicId(topic_id);

      const isNew = !!state.lessons
        .find((lesson) => lesson.id == lesson_id)
        .topics.find((lesson) => lesson.id == lesson_id).isNew;

      return (isNew ? apiCreateTopic(formData) : apiUpdateTopic(topic_id, formData)).then((data) =>
        setState((prevState) => ({
          ...prevState,
          lessons: prevState.lessons.map((lesson) => {
            if (lesson.id === lesson_id) {
              return {
                ...lesson,
                topics: lesson.topics.map((topic) => {
                  if (topic.id === topic_id) {
                    return {
                      ...topic,
                      ...data.data,
                      isNew: false,
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

  const deleteTopic = useCallback(
    (topic_id) => {
      const lesson_id = getLessonByTopicId(topic_id);

      const isNew = !!state.lessons
        .find((lesson) => lesson.id == lesson_id)
        .topics.find((lesson) => lesson.id == lesson_id).isNew;

      if (isNew) {
        return setState((prevState) => ({
          ...prevState,
          lessons: prevState.lessons.map((lesson) => {
            if (lesson.id == lesson_id) {
              return {
                ...lesson,
                topics: lesson.topics.filter((topic) => topic.id != topic_id),
              };
            }
            return lesson;
          }),
        }));
      }

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
    },
    [state],
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

  const addNewTopic = useCallback(
    (lesson_id) => {
      setState((prevState) => ({
        ...prevState,
        lessons: prevState.lessons.map((lesson) => {
          if (lesson.id == lesson_id) {
            return {
              ...lesson,
              topics: [
                ...lesson.topics,
                {
                  isNew: true,
                  lesson_id: lesson_id,
                  id: lesson.topics.length,
                  order: lesson.topics.length,
                  title: 'Add new title here',
                },
              ],
            };
          }

          return lesson;
        }),
      }));
    },
    [state],
  );

  const value = {
    state,
    h5ps,
    token: credentials.token,
    id: credentials.id,
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
