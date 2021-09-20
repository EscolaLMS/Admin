import React from 'react';
import { getTypeName } from './media';
import Tag from 'antd/lib/tag';
import { FormattedMessage } from 'umi';

const TopicHeader: React.FC<{ topic: API.Topic }> = ({ topic }) => {
  return (
    <span>
      {topic.isNew ? (
        <Tag color="#2db7f5">
          <FormattedMessage id="new" />
        </Tag>
      ) : (
        <React.Fragment>
          <Tag color="#87d068">{getTypeName(topic)}</Tag>
          <Tag>
            {topic.active ? <FormattedMessage id="active" /> : <FormattedMessage id="inactive" />}
          </Tag>
          {topic.preview && (
            <Tag>
              <FormattedMessage id="preview" />
            </Tag>
          )}
        </React.Fragment>
      )}{' '}
      {topic.title}
    </span>
  );
};

export default TopicHeader;
