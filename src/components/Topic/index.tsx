import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '@/context/curriculum';
import API, { getFormData } from '@/services/api';
import Resources from './resources';
import { Alert, Row } from 'antd';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';
import Tabs from 'antd/lib/tabs';
import Divider from 'antd/lib/divider';
import Badge from 'antd/lib/badge';
import TopicEditForm from './editform';
import TopicMediaForm from './mediaform';
import { Popconfirm } from 'antd';
import { Radio } from 'antd';
import RichTextEditor from './media/text';
import { TopicType } from '@/services/escola-lms/course';

const { TabPane } = Tabs;

const TopicButtons = ({ onDelete, loading }) => {
  return (
    <React.Fragment>
      <Divider type="vertical" />
      <Popconfirm
        title="Are you sure to delete this topic?"
        onConfirm={onDelete}
        okText="Yes"
        cancelText="No"
      >
        <Button loading={loading} size="small" type="danger">
          Delete
        </Button>
      </Popconfirm>
    </React.Fragment>
  );
};

export const Topic: React.FC<{ topic: API.Topic; itemsLength: number }> = ({
  topic,
  itemsLength,
}) => {
  const { updateTopic, deleteTopic } = useContext(Context);

  const [state, setState] = useState<API.Topic>({
    ...topic,
    value: topic.topicable?.value,
  });

  const type = state.topicable_type;

  const [sortOrder, setSortOrder] = useState(state.sort_order);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      ...topic,
    }));
  }, [topic]);

  const updateValue = useCallback(
    (key, value) => {
      setState((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    },
    [state],
  );

  const updateValues = useCallback(
    (values) => {
      setState((prevState) => ({
        ...prevState,
        ...values,
      }));
    },
    [state],
  );

  const onFormSubmit = useCallback(() => {
    const values = {
      lesson_id: state.id,
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
  }, [state]);

  const onMediaUpdate = useCallback(
    (data) => {
      switch (type) {
        case TopicType.RichText:
          break;
        default:
          break;
      }
    },
    [state, type],
  );

  const onEdit = useCallback(() => {
    // setShowEdit(prevState => !prevState);
  }, []);

  const onDelete = useCallback(() => {
    if (topic.isNew) {
      return deleteTopic(state.id);
    } else {
      setLoading(true);
      deleteTopic(state.id);
    }
  }, [state]);

  const handleSave = useCallback(
    (formData) => {
      setLoading(true);

      updateTopic(state.id, formData)
        .then(() => setLoading(false))
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    },
    [state],
  );

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
        <TopicEditForm
          topic={state}
          onChange={(values) => updateValues(values)}
          loading={loading}
        />
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
      </Card>

      <Divider />
    </React.Fragment>
  );
};

export default Topic;
