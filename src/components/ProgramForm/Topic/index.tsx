import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import { Alert } from 'antd';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import MediaUpload from './media/upload';
import { Popconfirm } from 'antd';
import RichTextEditor from './media/text';
import { TopicType } from '@/services/escola-lms/course';
import Oembed from './media/oembed';
import H5PForm from './media/h5p';
import TopicForm from './form';
import { FormattedMessage } from 'umi';
import Resources from './resources';
import { getTypeName } from './media';

const TopicButtons: React.FC<{ onDelete: () => void; loading: boolean }> = ({
  onDelete,
  loading,
}) => {
  return (
    <React.Fragment>
      <Divider type="vertical" />
      <Popconfirm
        onConfirm={onDelete}
        title={<FormattedMessage id="deleteQuestion" />}
        okText={<FormattedMessage id="yes" />}
        cancelText={<FormattedMessage id="no" />}
      >
        <Button loading={loading} size="small" danger>
          <FormattedMessage id="delete" />
        </Button>
      </Popconfirm>
    </React.Fragment>
  );
};

export const Topic: React.FC<{
  topic: API.Topic;
  itemsLength?: number;
  onUpload?: (topic: API.Topic) => void;
  courseId?: number;
  courseLessons: API.Lesson[];
  onClose: () => void;
}> = ({ topic, onUpload, courseId, courseLessons, onClose }) => {
  const { updateTopic, deleteTopic, onTopicUploaded } = useContext(Context);

  const [state, setState] = useState<API.Topic>({
    ...topic,
    value: topic.topicable?.value,
  });

  const type = state.topicable_type;

  const [sortOrder /* , setSortOrder */] = useState(state.order);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setState((prevState) => {
      return {
        ...prevState,
        value: type === topic.topicable_type ? topic.topicable?.value : '',
      };
    });
  }, [type, topic]);

  const updateValue = useCallback((key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const updateValues = useCallback((values) => {
    setState((prevState) => ({
      ...prevState,
      ...values,
    }));
  }, []);

  const handleSave = useCallback(
    (formData) => {
      if (updateTopic && state.id) {
        setLoading(true);

        updateTopic(state.id, formData)
          .then(() => setLoading(false))
          .catch(() => {
            setLoading(false);
          });
      }
    },
    [state, updateTopic],
  );

  const onFormSubmit = useCallback(() => {
    const values = {
      ...state,
      active: state.active ? 1 : 0,
      preview: state.preview ? 1 : 0,
      can_skip: state.can_skip ? 1 : 0,
      order: sortOrder,
      json: state.json ? JSON.stringify(state.json) : null,
    };

    // when creating a new topic id is neeeded for sorting but we need to delete to not create post id request
    // if (state.isNew) {
    //   values.id = undefined;
    // }

    // console.log({ values });

    // it threw a validation error when the user wanted to set the skip topic to true without this code it works fine
    // if (
    //   values.topicable_type &&
    //   [TopicType.Audio, TopicType.Image, TopicType.PDF, TopicType.Video].includes(
    //     values.topicable_type,
    //   )
    // ) {
    //   delete values.value;
    // }

    const formData = getFormData(values);

    handleSave(formData);
  }, [state, handleSave, sortOrder]);

  const onDelete = useCallback(() => {
    if (topic.isNew) {
      return deleteTopic && state.id && deleteTopic(state.id);
    }
    setLoading(true);
    return deleteTopic && state.id && deleteTopic(state.id);
  }, [state, deleteTopic, topic.isNew]);

  return (
    <React.Fragment>
      <Card
        title={
          <>
            <FormattedMessage id="topic" />
            {`: ${state.title}`}
          </>
        }
        extra={<TopicButtons onDelete={onDelete} loading={loading} />}
        actions={[
          <Button onClick={onClose} loading={loading}>
            <FormattedMessage id="Cancel" />
          </Button>,
          <Button
            type="primary"
            onClick={onFormSubmit}
            disabled={type === TopicType.Unselected}
            loading={loading}
          >
            <FormattedMessage id="save" />
          </Button>,
        ]}
      >
        <TopicForm
          courseId={Number(courseId)}
          courseLessons={courseLessons}
          initialValues={state}
          onValuesChange={(values) => updateValues(values)}
        />
        {!state.isNew && (
          <React.Fragment>
            <Divider>
              <FormattedMessage id="file_resources" />
            </Divider>
            <Resources topicId={Number(topic.id)} />
          </React.Fragment>
        )}

        <Divider>{getTypeName(topic)}</Divider>
        {!type && <Alert message={<FormattedMessage id="select_type_topic" />} type="info" />}
        {type && type === TopicType?.RichText && (
          <RichTextEditor
            directory={`course/${courseId}/lesson/${topic.lesson_id}/topic/${topic.id}/wysiwyg`}
            text={topic?.topicable_type === TopicType?.RichText ? topic?.topicable.value || '' : ''}
            onChange={(value) => updateValue('value', value)}
          />
        )}
        {type &&
          (type === TopicType.Video ||
            type === TopicType.Audio ||
            type === TopicType.Image ||
            type === TopicType.PDF) && (
            <MediaUpload
              type={type}
              topic={topic}
              currentState={state}
              onChange={() => setLoading(true)}
              onUpdate={(info) => {
                if (topic.id && onTopicUploaded) onTopicUploaded(topic.id, info);
                if (onUpload) onUpload(info.file.response.data);
                setLoading(false);
              }}
              disabled={false}
            />
          )}
        {type && type === TopicType.OEmbed && (
          <Oembed text={state.value} onChange={(value) => updateValue('value', value)} />
        )}
        {type && type === TopicType.H5P && (
          <H5PForm id={state.value} onChange={(value) => updateValue('value', value)} />
        )}
      </Card>
    </React.Fragment>
  );
};

export default Topic;
