import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { FormattedMessage } from 'umi';
import { allContent } from '@/services/escola-lms/h5p';
import { searchSubstring } from '@/utils/utils';

export const H5PContentSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange, multiple = false }) => {
  const [contents, setContents] = useState<API.H5PContentListItem[]>([]);

  useEffect(() => {
    allContent().then((response) => response.success && setContents(response.data));
  }, []);

  useEffect(() => {
    if (contents.length) {
      if (!contents.find((content) => Number(content.id) === Number(value))) {
        allContent().then((response) => response.success && setContents(response.data));
      }
    }
  }, [value]);

  return (
    <Select
      loading={contents.length === 0}
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      placeholder={<FormattedMessage id="H5P_select_content" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        const h5pTitle = option?.children?.slice(1, option?.children.length).join('');
        return searchSubstring(h5pTitle, input);
      }}
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
