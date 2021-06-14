import React from 'react';
import { getTypeName } from './media';
import Tag from 'antd/lib/tag';
const TopicHeader = ({ topic }) => {
  return (
    <span>
      {topic.isNew ? (
        <Tag color="#2db7f5">NEW</Tag>
      ) : (
        <Tag color="#87d068">{getTypeName(topic)}</Tag>
      )}{' '}
      {topic.title}
    </span>
  );
};

export default TopicHeader;
