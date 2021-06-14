import React, { useCallback, useState } from 'react';
import { Input } from 'antd';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';

import FormWysiwygProps from '@/components/WysiwygMarkdown';

export const MediaText = ({ text, onChange }) => {
  return (
    <div>
      <FormWysiwygProps
        value={text}
        onChange={(value) => {
          onChange(value);
        }}
      />
    </div>
  );
};

export default MediaText;
