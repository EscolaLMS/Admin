import React, { useCallback, useEffect, useState, useContext } from 'react';
import Topic from '@/components/Topic';
import { Context } from '@/context/curriculum';
import { getFormData } from '@/services/api';
import LessonEditForm from './editform';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import Card from 'antd/lib/card';
import Avatar from 'antd/lib/avatar';
import Image from 'antd/lib/image';
import Popover from 'antd/lib/popover';
import Popconfirm from 'antd/lib/popconfirm';
import Collapse from 'antd/lib/collapse';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import SortingButtons from '@/components/sortingbuttons';
import TopicHeader from '../Topic/header';

const { Meta } = Card;
const { Panel } = Collapse;

export const Lesson: React.FC<{ lesson: API.Lesson }> = ({ lesson }) => {
  const [state, setState] = useState(lesson);
  const [topicList, setTopicList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const { id, updateLesson, deleteLesson, addNewTopic, sortTopic } = useContext(Context);

  useEffect(() => {
    setState(lesson);
    setTopicList(lesson.topics);
  }, [lesson]);

  useEffect(() => {
    if (state.title.length > 100) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [state]);

  const onInputChange = useCallback(
    (e) => {
      const { value } = e.target;
      setState((prevState) => {
        return {
          ...prevState,
          title: value,
        };
      });
    },
    [state],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleSave();
    },
    [state, id],
  );

  const onNew = useCallback(() => addNewTopic(lesson.id), [state, id]);

  const handleSave = useCallback(() => {
    setLoading(true);

    const formData = getFormData(
      state.isNew
        ? {
            course_id: lesson.course_id,
            //id: state.id,
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

    updateLesson(state.id, formData)
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [state]);

  const handleDelete = useCallback(
    (e) => {
      e.preventDefault();

      deleteLesson(state.id);
    },
    [state, id],
  );

  const onSort = useCallback(
    (id, up) => {
      sortTopic(lesson.id, id, up);
    },
    [state, lesson],
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
        <Collapse>
          {topicList &&
            topicList.map((topic, index, arr) => (
              <Panel
                header={<TopicHeader topic={topic} />}
                key={index}
                extra={
                  topic.isNew ? (
                    <React.Fragment />
                  ) : arr.length > 1 ? (
                    <SortingButtons
                      mode={index === 0 ? 'first' : index === arr.length - 1 ? 'last' : 'middle'}
                      onUp={() => onSort(topic.id, true)}
                      onDown={() => onSort(topic.id, false)}
                    />
                  ) : (
                    <React.Fragment />
                  )
                }
              >
                <Topic key={topic.id} topic={topic} />
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
