import React, { useCallback, useEffect, useState, useContext } from 'react';
import Topic from '@/components/ProgramForm/Topic';
import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import LessonEditForm from './editform';
import { Button, Divider, Card, Popover, Popconfirm, Collapse } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import SortingButtons from '@/components/sortingbuttons';
import TopicHeader from '@/components/ProgramForm/Topic/header';

const { Meta } = Card;
const { Panel } = Collapse;

export const Lesson: React.FC<{ lesson: API.Lesson }> = ({ lesson }) => {
  const [state, setState] = useState<API.Lesson>(lesson);
  const [topicList, setTopicList] = useState<API.Topic[]>([]);
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const { id, updateLesson, deleteLesson, addNewTopic, sortTopic } = useContext(Context);

  const [activeKeys, setActiveKeys] = useState<string | string[]>([]);

  useEffect(() => {
    setState(lesson);
    return lesson.topics && setTopicList(lesson.topics);
  }, [lesson]);

  useEffect(() => {
    if (state.title && state.title.length > 100) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [state.title]);

  const onInputChange = useCallback((e) => {
    const { value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        title: value,
      };
    });
  }, []);

  const onNew = useCallback(() => {
    const newTopic = addNewTopic && lesson.id && addNewTopic(lesson.id);
    if (newTopic) {
      setActiveKeys(String(newTopic.id));
    }
  }, [addNewTopic, lesson.id]);

  const handleSave = useCallback(() => {
    setLoading(true);

    const formData = getFormData(
      state.isNew
        ? {
            course_id: lesson.course_id,
            id: state.id,
            title: state.title,
            order: state.order,
          }
        : {
            course_id: lesson.course_id,
            id: state.id,
            title: state.title,
            order: state.order,
          },
    );

    return (
      updateLesson &&
      state.id &&
      updateLesson(state.id, formData)
        .then(() => setLoading(false))
        .catch((err) => {
          console.log(err);
          setLoading(false);
        })
    );
  }, [state, lesson.course_id, updateLesson]);

  const handleDelete = useCallback(
    (e) => {
      e.preventDefault();

      return state.id && deleteLesson && deleteLesson(state.id);
    },
    [deleteLesson, state.id],
  );

  const onSort = useCallback(
    (topic_id, up) => {
      return lesson.id && sortTopic && id && sortTopic(lesson.id, topic_id, up);
    },
    [id, sortTopic, lesson],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleSave();
    },
    [handleSave],
  );

  return (
    <Card>
      <Meta
        style={{ marginBottom: '30px' }}
        title={`Lesson: ${state.title}`}
        description={
          lesson.isNew ? (
            <div className="meta-extra">
              <Button type="primary" danger onClick={handleDelete}>
                Delete
              </Button>
            </div>
          ) : (
            <div className="meta-extra">
              <Popover
                content={<LessonEditForm lesson={state} onInputChange={onInputChange} />}
                title="Edit"
                trigger="click"
              >
                <Button>Edit</Button>
              </Popover>
              <Divider type="vertical" />
              <Button disabled={validate} onClick={onSubmit} type="primary" loading={loading}>
                Save
              </Button>
              <Divider type="vertical" />
              <Popconfirm
                title="Are you sure to delete this lesson?"
                onConfirm={handleDelete}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>
                  Delete
                </Button>
              </Popconfirm>
            </div>
          )
        }
      />
      {topicList && topicList.length > 0 && (
        <Collapse onChange={(key) => setActiveKeys(key)} activeKey={activeKeys}>
          {topicList &&
            topicList
              .sort((topicA, topicB) => (topicA.order || 0) - (topicB.order || 0))
              .map((topic, index, arr) => (
                <Panel
                  header={<TopicHeader topic={topic} />}
                  key={topic.id || index}
                  extra={
                    // eslint-disable-next-line no-nested-ternary
                    topic.isNew ? (
                      <React.Fragment />
                    ) : arr.length > 1 ? (
                      <SortingButtons
                        // eslint-disable-next-line no-nested-ternary
                        mode={index === 0 ? 'first' : index === arr.length - 1 ? 'last' : 'middle'}
                        onUp={() => onSort(topic.id, true)}
                        onDown={() => onSort(topic.id, false)}
                      />
                    ) : (
                      <React.Fragment />
                    )
                  }
                >
                  <Topic
                    key={topic.id}
                    topic={topic}
                    onUpload={(uploadedTopic) =>
                      uploadedTopic.id && setActiveKeys(String(uploadedTopic.id))
                    }
                  />
                </Panel>
              ))}
        </Collapse>
      )}

      {lesson.isNew ? (
        <React.Fragment>
          <LessonEditForm layout="inline" lesson={state} onInputChange={onInputChange} />
          <Divider />
          <Button onClick={onSubmit} type="primary" loading={loading}>
            Create lesson
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Divider />
          <Button onClick={onNew} type="primary" className="green" icon={<PlusOutlined />}>
            Add new topic
          </Button>
        </React.Fragment>
      )}
    </Card>
  );
};

export default Lesson;
