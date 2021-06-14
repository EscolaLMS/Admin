import React, { useCallback, useEffect, useState, useContext } from 'react';
import { Context } from '@/context/curriculum';
import Button from 'antd/lib/button';
import Upload from 'antd/lib/upload';
import Form from 'antd/lib/form';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import { APIpath } from '@/services/api';

const CONFIG = {
  acceptedTypes: {
    audio: '.mp3,audio/*',
    video: '.mp3,video/*',
    document: '.doc,.docx,.pdf,.zip',
  },
  actionTypes: {
    audio: APIpath('topic/audio/save'),
    video: APIpath('topic/video/save'),
    document: APIpath('topic/document/save'),
  },
  namesTypes: {
    audio: 'topicaudio',
    video: 'topicvideo',
    document: 'topicdoc',
  },
};

export const MediaUploadForm = ({ id, type, onUpdate, setPreview, disabled }) => {
  const { token } = useContext(Context);

  const onChange = useCallback(
    (info) => {
      if (info.file.status === 'done') {
        onUpdate && onUpdate(info);
      }
    },
    [onUpdate],
  );

  return (
    <Upload
      className={'disabled'}
      disabled={disabled}
      onChange={onChange}
      name={CONFIG.namesTypes[type]}
      accept={CONFIG.acceptedTypes[type]}
      action={`${CONFIG.actionTypes[type]}/${id}`}
      headers={{
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }}
      beforeUpload={async (file) => {
        const f = await file;
        setPreview(f);
        return true;
      }}
    >
      <Button disabled={disabled} icon={<UploadOutlined />}>
        Click to upload {type}
      </Button>
    </Upload>
  );
};

export const MediaUploadPreview = ({ url, type, src }) => {
  let source = src ? src : url;

  switch (type) {
    case 'audio':
      return <audio preload="none" controls src={source} />;
    case 'video':
      return <video preload="none" controls src={source} />;
    case 'document':
      return <iframe src={source} width="500px" height="500px"></iframe>;
    default:
      return <Button preload="none" controls src={url} />;
  }
};

export const MediaUpload = ({ media, id, type = 'audio', onUpdate, onDelete }) => {
  if (!['audio', 'video', 'document'].includes(type)) {
    throw new Error(`${type} type is not supported`);
  }
  const [src, setSrc] = useState(null);
  const [preview, setPreview] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, ...media }));
  }, [media]);

  useEffect(() => {
    if (preview) {
      preparePreview(preview);
    }
  }, [preview]);

  const preparePreview = useCallback(
    (preview) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;

        const dataBlob = new Blob([new Uint8Array(dataUrl)], {
          type:
            type === 'video' ? 'video/mp4' : type === 'document' ? 'application/pdf' : 'audio/mp3',
        });

        setSrc(window.URL.createObjectURL(dataBlob));
      };
      if (type === 'video' || type === 'document' || type === 'audio') {
        reader.readAsArrayBuffer(preview);
      }
    },
    [preview],
  );

  const handleDelete = useCallback(() => {
    setSrc(null);
    setPreview(null);
    setState(-1);
    onDelete && onDelete();
  }, [id]);

  console.log(state, src);

  if (state && state.id) {
    return (
      <div>
        <Form wrapperCol={{ span: 10 }} layout="vertical" name="basic">
          <Form.Item label="Preview" name="Preview">
            <MediaUploadPreview url={state?.url} type={type} src={src} />
          </Form.Item>
          <Form.Item label="Upload to replace" name="upload">
            <MediaUploadForm
              id={id}
              type={type}
              onUpdate={onUpdate}
              setPreview={setPreview}
              disabled={typeof state?.id === 'number' || src !== null}
            />
          </Form.Item>
          <Form.Item label="Actions" name="actions">
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              danger
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
            >
              Remove {type}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  return (
    <div>
      {src !== null && (
        <div className="ant-col ant-form-item-label">
          <label htmlFor="Preview" title="Preview">
            Preview
          </label>
          <MediaUploadPreview url={state?.url} type={type} src={src} />
        </div>
      )}
      <MediaUploadForm
        id={id}
        type={type}
        onUpdate={onUpdate}
        setPreview={setPreview}
        disabled={typeof state?.id === 'number' || src !== null}
      />
    </div>
  );
};

export default MediaUpload;
