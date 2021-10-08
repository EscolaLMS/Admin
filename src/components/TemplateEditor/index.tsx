import React, { useState, useEffect, useRef } from 'react';

// import { useIntl } from 'umi';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor-ckeditor5-build-classic-mention';

import './index.css';
import { Space, Typography, Tag, Divider } from 'antd';
import { FormattedMessage } from 'react-intl';

interface FormWysiwygProps {
  value?: string;
  onChange?: (value: string) => void;
  tokens: string[];
}

export const TemplateEditor: React.FC<FormWysiwygProps> = ({ value, onChange, tokens = [] }) => {
  const ref = useRef();

  const [key, setKey] = useState<string>(Math.random().toString());

  useEffect(() => {
    setKey(Math.random().toString());
  }, [tokens]);

  return (
    <div className="template-editor">
      <Divider>
        <FormattedMessage id="tokens" defaultMessage="posibble tokens:" />
      </Divider>
      <Space>
        <Typography>
          {tokens.map((token) => (
            <Tag key={token}>{token}</Tag>
          ))}
        </Typography>
      </Space>
      <Divider />
      <CKEditor
        key={key}
        ref={ref}
        config={{
          width: '210mm',
          height: '297mm',
          mention: {
            feeds: [
              {
                marker: '@',
                minimumCharacters: 1,
                feed: tokens,
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
        // @ts-ignore
        onChange={(event, editor) => {
          const data = editor.getData();
          return onChange && onChange(data);
        }}
      />
    </div>
  );
};

export default TemplateEditor;
