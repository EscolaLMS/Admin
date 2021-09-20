import React from 'react';
import Editor from 'rich-markdown-editor';
import { upload, resizedImage } from '@/services/escola-lms/files';
import './index.css';
import { useIntl } from 'umi';

interface FormWysiwygProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  directory?: string;
}

export const FormWysiwyg: React.FC<FormWysiwygProps> = ({
  value,
  onChange,
  directory = '/wysiwyg',
}) => {
  const intl = useIntl();
  return (
    <div className="form-wysiwyg-markdown">
      <Editor
        uploadImage={async (file) => {
          const result = await upload(file, directory);
          if (result.success) {
            const resizePath = result.data[0].name.includes('/')
              ? result.data[0].name
              : `${directory}${result.data[0].name}`;
            return resizedImage(resizePath, 1000);
          }
          throw new Error('Error while uploading');
        }}
        defaultValue={value || ''}
        onChange={(v) => onChange && onChange(v())}
        placeholder={intl.formatMessage({
          id: 'wysiwyg_placeholder',
        })}
      />
    </div>
  );
};

export default FormWysiwyg;
