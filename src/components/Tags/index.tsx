import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { tagsUnique } from '@/services/escola-lms/tag';
import { FormattedMessage } from 'umi';

const { Option } = Select;

type Tag = {
  title: string;
};

export const Tags: React.FC<{
  state?: {
    type: number;
  };
  value?: string;
  onChange?: (value: string) => void;
}> = (props) => {
  const { value, onChange } = props;

  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    tagsUnique().then((response) => setTags(response.data));
  }, []);

  return (
    <Select
      loading={tags.length === 0}
      showSearch
      placeholder={<FormattedMessage id="select_tags" defaultMessage="Select tags" />}
      optionFilterProp="children"
      onChange={onChange}
      value={value}
    >
      {tags.map((tag) => (
        <Option value={tag.title} key={tag.title}>
          {tag.title}
        </Option>
      ))}
    </Select>
  );
};

export default Tags;
