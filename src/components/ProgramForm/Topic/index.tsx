import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import { Alert } from 'antd';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import MediaUpload from './media/upload';
import { Popconfirm } from 'antd';
import { Radio } from 'antd';
import RichTextEditor from './media/text';
import { TopicType } from '@/services/escola-lms/course';
import Oembed from './media/oembed';
import H5PForm from './media/h5p';
import TopicForm from './form';

const TopicButtons: React.FC<{ onDelete: () => void; loading: boolean }> = ({
  onDelete,
  loading,
}) => {
  return (
    <React.Fragment>
      <Divider type="vertical" />
      <Popconfirm
        title="Are you sure to delete this topic?"
        onConfirm={onDelete}
        okText="Yes"
        cancelText="No"
      >
        <Button loading={loading} size="small" danger>
          Delete
        </Button>
      </Popconfirm>
    </React.Fragment>
  );
};

export const Topic: React.FC<{
  topic: API.Topic;
  itemsLength?: number;
  onUpload?: (topic: API.Topic) => void;
}> = ({ topic, onUpload }) => {
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

  /*
  useEffect(() => {
    setState((prevState) => {
      return {
        ...topic,
        value: prevState.value,
      };
    });
  }, [topic]);
  */

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
      order: sortOrder,
    };
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
        title={`Topic: ${state.title}`}
        extra={<TopicButtons onDelete={onDelete} loading={loading} />}
        actions={[
          <Button
            type="primary"
            onClick={onFormSubmit}
            disabled={type === TopicType.Unselected}
            loading={loading}
          >
            Save
          </Button>,
        ]}
      >
        <TopicForm initialValues={state} onValuesChange={(values) => updateValues(values)} />
        <Divider>Select type of Topic to continue...</Divider>
        <Radio.Group
          name="radiogroup"
          value={type}
          onChange={(e) => updateValue('topicable_type', e.target.value)}
        >
          {Object.keys(TopicType).map((key) => (
            <Radio key={key} value={TopicType[key]}>
              {key}
            </Radio>
          ))}
        </Radio.Group>
        <Divider />
        {!type && <Alert message="Select type of Topic to continue..." type="info" />}
        {type && type === TopicType.RichText && (
          <RichTextEditor
            text={topic.topicable_type === TopicType.RichText ? topic.topicable.value || '' : ''}
            onChange={(value) => updateValue('value', value)}
          />
        )}
        {type && (type === TopicType.Video || type === TopicType.Audio) && (
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

      <Divider />
    </React.Fragment>
  );
};

export default Topic;
