import React, { useCallback, useEffect, useState, useContext } from 'react';
import Topic from '@/components/ProgramForm/Topic';
import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import { Button, Divider, Card, Collapse, Typography, Popconfirm } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import SortingButtons from '@/components/sortingbuttons';
import TopicHeader from '@/components/ProgramForm/Topic/header';

import LessonForm from './form';

const { Panel } = Collapse;

export const Lesson: React.FC<{ lesson: API.Lesson }> = ({ lesson }) => {
  const [state, setState] = useState<API.Lesson>(lesson);
  const [topicList, setTopicList] = useState<API.Topic[]>([]);
  const [loading, setLoading] = useState(false);
  const { id, updateLesson, deleteLesson, addNewTopic, sortTopic } = useContext(Context);

  const [activeKeys, setActiveKeys] = useState<string | string[]>([]);

  useEffect(() => {
    setState(lesson);
    return lesson.topics && setTopicList(lesson.topics);
  }, [lesson]);

  const onNew = useCallback(() => {
    const newTopic = addNewTopic && lesson.id && addNewTopic(lesson.id);
    if (newTopic) {
      setActiveKeys(String(newTopic.id));
    }
  }, [addNewTopic, lesson.id]);

  const handleSave = useCallback(() => {
    setLoading(true);

    const formData = getFormData({
      course_id: lesson.course_id,
      ...state,
      active: state.active ? 1 : 0,
    });

    if (updateLesson && state.id) {
      return updateLesson(state.id, formData)
        .then(() => setLoading(false))
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    return Promise.resolve();
  }, [state, lesson.course_id, updateLesson]);

  const handleDelete = useCallback(() => {
    if (state.id && deleteLesson) {
      deleteLesson(state.id);
    }
    return Promise.resolve();
  }, [deleteLesson, state.id]);

  const onSort = useCallback(
    (topic_id, up) => {
      return lesson.id && sortTopic && id && sortTopic(lesson.id, topic_id, up);
    },
    [id, sortTopic, lesson],
  );

  return (
    <Card
      title={`Lesson: ${state.title}`}
      extra={
        <Popconfirm
          title="Are you sure to delete this topic?"
          onConfirm={handleDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button loading={loading} size="small" danger>
            Delete
          </Button>
        </Popconfirm>
      }
    >
      <LessonForm
        loading={loading}
        lesson={state}
        initialValues={state}
        onDelete={handleDelete}
        onFinish={handleSave}
        onValuesChange={(changedValues) => {
          setState((prevState) => ({
            ...prevState,
            ...changedValues,
          }));
        }}
      />

      {!lesson.isNew && <Divider>Topics</Divider>}

      {topicList && topicList.length > 0 ? (
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
      ) : (
        !lesson.isNew && (
          <Typography.Text>
            There are no topics yet on this lesson{' '}
            <Button onClick={onNew} type="primary" size="small" icon={<PlusOutlined />}>
              Add new topic
            </Button>
          </Typography.Text>
        )
      )}

      {!lesson.isNew && (
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
