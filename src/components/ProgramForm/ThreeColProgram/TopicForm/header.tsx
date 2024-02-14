import Tag from 'antd/lib/tag';
import React from 'react';
import { FormattedMessage } from 'umi';
import { getTypeIcon } from '.';
import { getTypeName } from './media';

const TopicHeader: React.FC<{ topic: API.Topic }> = ({ topic }) => {
  return (
    <span>
      {topic.isNew ? (
        <Tag color="#2db7f5">
          <FormattedMessage id="new" /> {getTypeName(topic)} {getTypeIcon(getTypeName(topic))}
        </Tag>
      ) : (
        <React.Fragment>
          <Tag color="#87d068">
            {getTypeName(topic)} {getTypeIcon(getTypeName(topic))}
          </Tag>
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
