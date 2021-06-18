import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import { Alert } from 'antd';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import TopicEditForm from './editform';
import MediaUpload from './media/upload';
import { Popconfirm } from 'antd';
import { Radio } from 'antd';
import RichTextEditor from './media/text';
import { TopicType } from '@/services/escola-lms/course';

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
        ...topic,
        value: prevState.value,
      };
    });
  }, [topic]);

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
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }
    },
    [state, updateTopic],
  );

  const onFormSubmit = useCallback(() => {
    const values = {
      lesson_id: state.lesson_id,
      order: sortOrder,
      title: state.title,
      topicable_type: state.topicable_type,
      value: state.value,
    };
    const formData = getFormData(values);

    /*
      if (values && values.image && values.image.file) {
        formData.set('image', values.image.file);
      }
      */

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
          <Button type="primary" onClick={onFormSubmit} disabled={type === TopicType.Unselected}>
            Save
          </Button>,
        ]}
      >
        <TopicEditForm topic={state} onChange={(values) => updateValues(values)} />
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
          <RichTextEditor text={state.value} onChange={(value) => updateValue('value', value)} />
        )}
        {type && (type === TopicType.Video || type === TopicType.Audio) && (
          <MediaUpload
            type={type}
            topic={topic}
            currentState={state}
            onUpdate={(info) => {
              if (topic.id && onTopicUploaded) onTopicUploaded(topic.id, info);
              if (onUpload) onUpload(info.file.response.data);
            }}
            disabled={false}
          />
        )}
      </Card>

      <Divider />
    </React.Fragment>
  );
};

export default Topic;
