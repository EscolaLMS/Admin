import React, { useCallback } from 'react';
import { Col, Row, Button } from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import { TopicType } from '@/services/escola-lms/course';

import SecureUpload from '@/components/SecureUpload';
import type { UploadChangeParam } from 'antd/lib/upload';

const CONFIG = {
  acceptedTypes: {
    audio: '.mp3,audio/*',
    video: '.mp3,video/*',
    document: '.doc,.docx,.pdf,.zip',
    [TopicType.Audio]: '.mp3,audio/*',
    [TopicType.Video]: '.mp3,video/*',
  },
};

export const MediaUploadPreview: React.FC<{ topic: API.Topic; type: TopicType }> = ({
  type,
  topic,
}) => {
  switch (type) {
    case TopicType.Audio:
      return topic.topicable_type === TopicType.Audio && topic.topicable?.url ? (
        <audio preload="none" controls src={topic.topicable.url} />
      ) : (
        <React.Fragment />
      );
    case TopicType.Video:
      return topic.topicable_type === TopicType.Video && topic.topicable?.url ? (
        <video controls src={topic.topicable.url} width="100%" />
      ) : (
        <React.Fragment />
      );
    default:
      return <React.Fragment />;
  }
};

export const MediaUploadForm: React.FC<{
  topic: API.Topic;
  currentState: API.Topic;
  type: TopicType.Audio | TopicType.Video;
  onUpdate: (info: UploadChangeParam) => void;
  onChange: (info: UploadChangeParam) => void;
  disabled: boolean;
}> = ({ topic, type, onUpdate, disabled = false, currentState, onChange }) => {
  const onInfoChange = useCallback(
    (info) => {
      if (info.file.status === 'done') {
        return onUpdate && onUpdate(info);
      }
      return onChange && onChange(info);
    },
    [onUpdate, onChange],
  );

  const data = {
    ...currentState,
    topicable_type: type,
  };

  return (
    <Row>
      <Col span={12}>
        <SecureUpload
          onChange={onInfoChange}
          name="value"
          url={topic.isNew ? `/api/topics` : `/api/topics/${topic.id}?_method=PUT`}
          accept={CONFIG.acceptedTypes[type]}
          data={data}
        >
          <Button disabled={disabled} icon={<UploadOutlined />}>
            Click to upload {type}
          </Button>
        </SecureUpload>
      </Col>
      <Col span={12}>
        <div style={{ padding: '0 12px' }}>
          <MediaUploadPreview type={type} topic={topic} />
        </div>
      </Col>
    </Row>
  );
};

export default MediaUploadForm;
