import React from 'react';

import FormWysiwygProps from '@/components/WysiwygMarkdown';

export const MediaText: React.FC<{
  text: string;
  onChange: (value: string) => void;
  directory: string;
}> = ({ text, onChange, directory = 'topics/new' }) => {
  return (
    <div>
      <FormWysiwygProps
        directory={directory}
        value={text}
        onChange={(value) => {
          onChange(value);
        }}
      />
    </div>
  );
};

export default MediaText;
