import React, { useState, useEffect } from 'react';

// import { useIntl } from 'umi';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor-ckeditor5-build-classic-mention';

import { variables as fetchVariables } from '@/services/escola-lms/templates';

import './index.css';
import { Spin } from 'antd';

interface FormWysiwygProps {
  value?: string;
  onChange?: (value: string) => void;
  varSet: string;
}

export const TemplateEditor: React.FC<FormWysiwygProps> = ({
  value,
  onChange,
  varSet = 'certificate',
}) => {
  const [variables, setVariables] = useState<API.TemplateVariables>();

  useEffect(() => {
    fetchVariables().then((response) => setVariables(response.success ? response.data : {}));
  }, []);
  if (variables === undefined) {
    return <Spin />;
  }
  return (
    <div className="template-editor">
      <CKEditor
        config={{
          width: '210mm',
          height: '297mm',
          mention: {
            feeds: [
              {
                marker: '@',
                minimumCharacters: 1,
                feed: variables[varSet],
              },
            ],
          },
        }}
        editor={ClassicEditor}
        data={value || ''}
        /*
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        */
        onChange={(event, editor) => {
          const data = editor.getData();
          return onChange && onChange(data);
        }}
      />
    </div>
  );
};

export default TemplateEditor;
