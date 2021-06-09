import React from 'react';
import Editor from 'rich-markdown-editor';

import './index.css';

interface FormWysiwygProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const FormWysiwyg: React.FC<FormWysiwygProps> = ({ value = 'lorem ipsum', onChange }) => {
  return (
    <div className="form-wysiwyg-markdown">
      <Editor defaultValue={value} onChange={(v) => onChange && onChange(v())} />
    </div>
  );
};

export default FormWysiwyg;
