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
  multiple?: boolean;
  value?: string | string[] | Tag[];
  onChange?: (value: string | string[] | Tag[]) => void;
}> = (props) => {
  const { value, onChange, multiple } = props;

  const [tags, setTags] = useState<Tag[]>([]);
  const [currTags, setCurrTags] = useState<string[]>([]);

  useEffect(() => {
    tagsUnique().then((response) => setTags(response.data));
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      const val = Array.isArray(value) ? value : [value];
      const values: string[] = val.map((tag) => {
        if (typeof tag === 'object') {
          return tag.title;
        }
        return tag;
      });

      setCurrTags(values);
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <Select
      loading={tags.length === 0}
      showSearch
      allowClear
      placeholder={<FormattedMessage id="select_tags" defaultMessage="Select tags" />}
      optionFilterProp="children"
      mode={multiple ? 'multiple' : undefined}
      onChange={(changedValue) => {
        if (!changedValue) {
          setCurrTags([]);
        }
        if (onChange) {
          onChange(changedValue);
        }
      }}
      value={currTags}
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
