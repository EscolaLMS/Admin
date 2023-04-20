import React from 'react';
import RichMarkdownEditor2 from 'traverse-markdown-editor';
import { upload, resizedImage } from '@/services/escola-lms/files';
import './index.css';
import { useIntl } from 'umi';

interface FormWysiwygProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  directory?: string;
}

export const EmbedUploaded: React.FC<{ attrs: { href: string } }> = ({ attrs }) => {
  const href = attrs.href;
  const filename = href.split('/').pop();
  return (
    <p>
      <a rel="noreferrer" href={href} target="_blank">
        {filename}
      </a>
    </p>
  );
};

export const FormWysiwyg: React.FC<FormWysiwygProps> = ({
  value,
  onChange,
  directory = '/wysiwyg',
}) => {
  const intl = useIntl();

  return (
    <div className="form-wysiwyg-markdown">
      <RichMarkdownEditor2
        excludeBlockMenuItems={['Sketch']}
        embeds={[
          {
            matcher: (url) => {
              return true;
            },
            component: EmbedUploaded,
          },
        ]}
        uploadImage={async (file) => {
          const result = await upload(file, directory);

          if (result.success) {
            if (file.type.includes('image/')) {
              const resizePath = result.data[0].name.includes('/')
                ? result.data[0].name
                : `${directory}${result.data[0].name}`;
              return resizedImage(resizePath, 1000);
            }
            return result.data[0].url;
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
