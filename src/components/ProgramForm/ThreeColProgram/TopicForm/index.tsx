import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '@/components/ProgramForm/Context';
import { getFormData } from '@/services/api';
import { Alert, Row, Col, Space, Affix } from 'antd';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import MediaUpload from './media/upload';
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
  CarryOutOutlined,
  PercentageOutlined,
} from '@ant-design/icons';
import ScormSelector from '@/components/Scorm';
import Project from './media/project';
import GiftQuiz from './media/giftquiz';

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
      case 'Project':
        return <CarryOutOutlined />;
      case 'GiftQuiz':
        return <PercentageOutlined />;
    }
  }
  return <ExclamationCircleOutlined />;
};

export const Topic: React.FC = () => {
  const {
    state,
    currentEditMode,
    updateTopic,
    deleteTopic,
    onTopicUploaded,
    cloneTopic,
    getLessons,
  } = useContext(Context);

  const topic =
    currentEditMode && currentEditMode.mode === 'topic' && currentEditMode.value
      ? currentEditMode.value
      : {};
  const [saveIsDisabled, setSaveIsDisabled] = useState(false);
  const [topics, setTopics] = useState<API.Topic>({
    ...topic,
    value: topic?.topicable?.value,
  });

  const type = topics.topicable_type;

  const [sortOrder /* , setSortOrder */] = useState(topics.order);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTopics((prevState) => {
      return {
        ...prevState,
        ...topic,
        value: type === topic?.topicable_type ? topic?.topicable?.value : '',
      };
    });
    if (topic?.isNew) {
      setSaveIsDisabled(
        true &&
          (topic.topicable_type !== TopicType.Project ||
            topic.topicable_type !== TopicType.GiftQuiz),
      );
    }
  }, [type, topic]);

  const updateValue = useCallback(
    (key: keyof API.Topic, value: any) => {
      setTopics((prevState) => ({
        ...prevState,
        [key]: value,
      }));
      setSaveIsDisabled(false);
    },
    [topic],
  );

  const updateValues = useCallback(
    (values: API.Topic) => {
      setTopics((prevState) => ({
        ...prevState,
        ...values,
      }));
    },
    [topic],
  );

  const handleSave = useCallback(
    (formData: FormData) => {
      if (updateTopic && topics.id) {
        setLoading(true);

        updateTopic(topics.id, formData)
          .then(() => setLoading(false))
          .catch(() => {
            setLoading(false);
          });
      }
    },
    [topics, updateTopic, topic],
  );

  const onFormSubmit = useCallback(() => {
    const values = {
      ...topics,
      active: topics.active ? 1 : 0,
      preview: topics.preview ? 1 : 0,
      can_skip: topics.can_skip ? 1 : 0,
      order: sortOrder,
      json: topics.json ? JSON.stringify(topics.json) : null,
    };

    if (
      (values.topicable_type === TopicType.Project ||
        values.topicable_type === TopicType.GiftQuiz) &&
      !values.value
    ) {
      values.value = 'theProject';
    }

    const formData = getFormData(values);

    handleSave(formData);
  }, [topics, handleSave, sortOrder]);

  const onDelete = useCallback(() => {
    if (topic?.isNew) {
      return deleteTopic && topics.id && deleteTopic(topics.id);
    }
    setLoading(true);
    return deleteTopic && topics.id && deleteTopic(topics.id);
  }, [topics, deleteTopic, topic]);

  const onClone = useCallback(() => {
    return topic.id && cloneTopic && cloneTopic(topic.id);
  }, [topic, cloneTopic]);

  return (
    <React.Fragment>
      <Row
        gutter={16}
        style={{
          height: '100%',
        }}
      >
        <Col span={24 - 8}>
          <Divider>
            {topic && getTypeIcon(getTypeName(topic))}{' '}
            {topic?.topicable_type && topic?.topicable_type.split('\\').pop()}{' '}
            <FormattedMessage id="type" />
          </Divider>
          {!type && <Alert message={<FormattedMessage id="select_type_topic" />} type="info" />}
          {type && type === TopicType?.RichText && (
            <RichTextEditor
              directory={`course/${state?.id}/lesson/${topic?.lesson_id}/topic/${topic?.id}/wysiwyg`}
              text={
                topic?.topicable_type === TopicType?.RichText ? topic?.topicable?.value || '' : ''
              }
              onChange={(value) => updateValue('value', value)}
            />
          )}
          {topic &&
            type &&
            (type === TopicType.Video ||
              type === TopicType.Audio ||
              type === TopicType.Image ||
              type === TopicType.PDF) && (
              <MediaUpload
                folder={`course/${state?.id}`}
                type={type}
                topic={topic}
                currentState={topics}
                onChange={() => setLoading(true)}
                onUpdate={(info) => {
                  if (topic.id && onTopicUploaded)
                    onTopicUploaded(info.file.response.data.id, info);

                  // refetch lessons to get if video is being transcoded
                  if (topic.topicable_type === TopicType.Video) {
                    setTimeout(() => {
                      if (getLessons) {
                        getLessons();
                      }
                    }, 5000);
                  }

                  setTopics({
                    ...topics,
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
            <Oembed text={topics.value} onChange={(value) => updateValue('value', value)} />
          )}
          {type && type === TopicType.Project && (
            <Project onChange={(value) => updateValue('value', value)} />
          )}
          {type && type === TopicType.GiftQuiz && (
            <GiftQuiz
              topicable={topics.topicable as API.TopicQuiz['topicable']}
              onAdded={() => {
                if (getLessons) {
                  getLessons();
                }
              }}
              onRemoved={() => {
                if (getLessons) {
                  getLessons();
                }
              }}
            />
          )}
          {type && type === TopicType.H5P && (
            <H5PForm id={topics.value} onChange={(value) => updateValue('value', value)} />
          )}
          {type && type === TopicType.SCORM && (
            <ScormSelector
              value={Number(topics.value)}
              onChange={(value) => updateValue('value', value)}
            />
          )}

          <Row justify="center" className={'program__cta-footer'}>
            <Affix offsetBottom={4}>
              <Space size="large">
                <Button loading={loading}>
                  <FormattedMessage id="cancel" />
                </Button>
                {!topic.isNew && (
                  <Button onClick={onClone} loading={loading}>
                    <FormattedMessage id="clone" />
                  </Button>
                )}
                <Button
                  type="primary"
                  onClick={onFormSubmit}
                  disabled={saveIsDisabled}
                  loading={loading}
                >
                  <FormattedMessage id="save" />
                </Button>
                <Button danger onClick={onDelete} loading={loading}>
                  <FormattedMessage id="delete" />
                </Button>
              </Space>
            </Affix>
          </Row>
        </Col>
        <Col span={8}>
          <aside className={'program-sidebar program-sidebar--right'}>
            {state?.lessons && (
              <TopicForm
                courseId={Number(state?.id)}
                courseLessons={state?.lessons}
                initialValues={topics}
                onValuesChange={(values) => updateValues(values)}
              />
            )}
            {!topics.isNew && (
              <React.Fragment>
                <Divider>
                  <FormattedMessage id="file_resources" />
                </Divider>
                <Resources topicId={Number(topic?.id)} folder={`course/${state?.id}`} />
              </React.Fragment>
            )}
          </aside>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Topic;
