import React, { useState, useEffect, useRef } from 'react';
import { Select } from 'antd';

import { allContent } from '@/services/escola-lms/h5p';

export const H5PContentSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange, multiple = false }) => {
  const ref = useRef();

  const [contents, setContents] = useState<API.H5PContentListItem[]>([]);

  useEffect(() => {
    allContent().then((response) => setContents(response));
  }, []);

  useEffect(() => {
    console.log(ref);
    if (contents.length) {
      if (!contents.find((content) => Number(content.id) === Number(value))) {
        allContent().then((response) => setContents(response));
      }
    }
  }, [value]);

  return (
    <Select
      ref={ref}
      loading={contents.length === 0}
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      placeholder="Select a H5P Content"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {contents.map((content) => (
        <Select.Option key={content.id.toString()} value={content.id.toString()}>
          <small>{content.id}</small> {content.title} ({content.library.title})
        </Select.Option>
      ))}
    </Select>
  );
};

export default H5PContentSelect;
