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
import { TopicType } from '@/services/escola-lms/enums';

import Oembed from './media/oembed';
import H5PForm from './media/h5p';
import TopicForm from './form';
import { FormattedMessage } from 'umi';
import Resources from './resources';
import { getTypeName } from './media';

import {
  FundOutlined,
  FileTextOutlined,
  FilePdfOutlined,
  FileImageOutlined,
  VideoCameraAddOutlined,
  AudioOutlined,
  YoutubeOutlined,
  InteractionOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import ScormSelector from '@/components/Scorm';

export const getTypeIcon = (type: string | undefined) => {
  if (type) {
    switch (type) {
      case 'ScormSco':
        return <FundOutlined />;
      case 'PDF':
        return <FilePdfOutlined />;
      case 'Audio':
        return <AudioOutlined />;
      case 'Image':
        return <FileImageOutlined />;
      case 'OEmbed':
        return <YoutubeOutlined />;
      case 'H5P':
        return <InteractionOutlined />;
      case 'Video':
        return <VideoCameraAddOutlined />;
      case 'RichText':
        return <FileTextOutlined />;
    }
  }
  return <ExclamationCircleOutlined />;
};

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
  courseId?: number;
  courseLessons: API.Lesson[];
  onClose: () => void;
}> = ({ topic, courseId, courseLessons, onClose }) => {
  const { updateTopic, deleteTopic, onTopicUploaded } = useContext(Context);
  const [saveIsDisabled, setSaveIsDisabled] = useState(false);
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
    if (topic.isNew) {
      setSaveIsDisabled(true);
    }
  }, [type, topic]);

  const updateValue = useCallback(
    (key, value) => {
      setState((prevState) => ({
        ...prevState,
        [key]: value,
      }));
      setSaveIsDisabled(false);
    },
    [topic],
  );

  const updateValues = useCallback(
    (values) => {
      setState((prevState) => ({
        ...prevState,
        ...values,
      }));
    },
    [topic],
  );

  const handleSave = useCallback(
    (formData) => {
      if (updateTopic && state.id) {
        setLoading(true);

        updateTopic(state.id, formData)
          .then(() => setLoading(false))
          .catch(() => {
            setLoading(false);
          })
          .finally(() => onClose());
      }
    },
    [state, updateTopic, topic],
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

    const formData = getFormData(values);

    handleSave(formData);
  }, [state, handleSave, sortOrder]);

  const onDelete = useCallback(() => {
    if (topic.isNew) {
      return deleteTopic && state.id && deleteTopic(state.id);
    }
    setLoading(true);
    onClose();
    return deleteTopic && state.id && deleteTopic(state.id);
  }, [state, deleteTopic, topic]);

  return (
    <React.Fragment>
      <Card
        title={
          <>
            {getTypeIcon(getTypeName(topic))}{' '}
            {topic?.topicable_type && topic?.topicable_type.split('\\').pop()}{' '}
            <FormattedMessage id="type" />
          </>
        }
        extra={<TopicButtons onDelete={onDelete} loading={loading} />}
        actions={[
          <Button onClick={onClose} loading={loading}>
            <FormattedMessage id="Cancel" />
          </Button>,
          <Button type="primary" onClick={onFormSubmit} disabled={saveIsDisabled} loading={loading}>
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
            <Resources topicId={Number(topic.id)} folder={`course/${courseId}`} />
          </React.Fragment>
        )}

        <Divider>{getTypeName(topic)}</Divider>
        {!type && <Alert message={<FormattedMessage id="select_type_topic" />} type="info" />}
        {type && type === TopicType?.RichText && (
          <RichTextEditor
            directory={`course/${courseId}/lesson/${topic.lesson_id}/topic/${topic.id}/wysiwyg`}
            text={
              topic?.topicable_type === TopicType?.RichText ? topic?.topicable?.value || '' : ''
            }
            onChange={(value) => updateValue('value', value)}
          />
        )}
        {type &&
          (type === TopicType.Video ||
            type === TopicType.Audio ||
            type === TopicType.Image ||
            type === TopicType.PDF) && (
            <MediaUpload
              folder={`course/${courseId}`}
              type={type}
              topic={topic}
              currentState={state}
              onChange={() => setLoading(true)}
              onUpdate={(info) => {
                if (topic.id && onTopicUploaded) onTopicUploaded(topic.id, info);

                setState({
                  ...state,
                  id: info?.file?.response?.data?.id,
                  order: info.file.response.data?.order,
                  value: info?.file?.response.data?.topicable?.value,
                  topicable: info?.file?.response.data?.topicable,
                });
                setSaveIsDisabled(false);
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
        {type && type === TopicType.SCORM && (
          <ScormSelector
            value={Number(state.value)}
            onChange={(value) => updateValue('value', value)}
          />
        )}
      </Card>
    </React.Fragment>
  );
};

export default Topic;
