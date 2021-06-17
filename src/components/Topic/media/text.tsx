import React from 'react';

import FormWysiwygProps from '@/components/WysiwygMarkdown';

export const MediaText: React.FC<{ text: string; onChange: (value: string) => void }> = ({
  text,
  onChange,
}) => {
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
