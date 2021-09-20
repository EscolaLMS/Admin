import React from 'react';

// import { useIntl } from 'umi';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface FormWysiwygProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const TemplateEditor: React.FC<FormWysiwygProps> = (/* { value, onChange  } */) => {
  // const intl = useIntl();
  return (
    <div className="form-wysiwyg-markdown">
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
};

export default TemplateEditor;
