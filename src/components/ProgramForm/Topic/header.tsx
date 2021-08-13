import React from 'react';
import { getTypeName } from './media';
import Tag from 'antd/lib/tag';

const TopicHeader: React.FC<{ topic: API.Topic }> = ({ topic }) => {
  return (
    <span>
      {topic.isNew ? (
        <Tag color="#2db7f5">NEW</Tag>
      ) : (
        <React.Fragment>
          <Tag color="#87d068">{getTypeName(topic)}</Tag>
          <Tag>{topic.active ? 'Active' : 'Inactive'}</Tag>
          {topic.preview && <Tag>Preview</Tag>}
        </React.Fragment>
      )}{' '}
      {topic.title}
    </span>
  );
};

export default TopicHeader;
