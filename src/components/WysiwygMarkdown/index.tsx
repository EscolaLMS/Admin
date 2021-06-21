import React from 'react';
import Editor from 'rich-markdown-editor';

import './index.css';

interface FormWysiwygProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const FormWysiwyg: React.FC<FormWysiwygProps> = ({ value, onChange }) => {
  return (
    <div className="form-wysiwyg-markdown">
      <Editor
        defaultValue={value}
        onChange={(v) => onChange && onChange(v())}
        placeholder="Type here text to see the rich text editor features. Start with '/' to open formatting options or click on '+' button"
      />
    </div>
  );
};

export default FormWysiwyg;
