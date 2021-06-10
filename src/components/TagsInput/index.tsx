import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { tagsUnique } from '@/services/escola-lms/tag';

const { Option } = Select;

type Tag = {
  title: string;
};

export const TagsInput: React.FC<{
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
      mode="tags"
      showSearch
      style={{ width: '100%' }}
      placeholder="Select a Tag"
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

export default TagsInput;
