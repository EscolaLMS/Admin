import SecureUploadBrowser from '@/components/SecureUpload/browser';
import { TopicType } from '@/services/escola-lms/enums';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Pagination, Progress, Row, Spin, Typography } from 'antd';
import type { UploadChangeParam, UploadFile } from 'antd/lib/upload';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FormattedMessage } from 'umi';
import './index.css';

import { Context } from '@/components/ProgramForm/Context';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const CONFIG = {
  acceptedTypes: {
    audio: '.mp3,audio/*',
    video: '.mp3,video/*',
    document: '.doc,.docx,.pdf,.zip',
    [TopicType.Audio]: '.mp3,audio/*',
    [TopicType.Video]: '.mp3,video/*',
    [TopicType.PDF]: '.pdf,application/pdf',
  },
};

const prepareObject = (data: Record<string, string | number | boolean | object | undefined>) => {
  const result: Record<string, string | number> = {};
  let key: string;
  for (key in data) {
    switch (typeof data[key]) {
      case 'boolean':
        result[key] = data[key] ? 1 : 0;
        break;
      case 'object':
        result[key] = JSON.stringify(data[key]);
        break;
      case 'string':
      case 'number':
        result[key] = data[key] as string | number;
        break;
      default:
        break;
    }
  }
  return result;
};

const PDFPreview: React.FC<{ file: string }> = ({ file }) => {
  const [nPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      {nPages === 0 ? (
        <Spin />
      ) : (
        <div style={{ margin: '0.5em 0' }}>
          <Typography>
            <FormattedMessage id="page" />:
          </Typography>
          <Pagination
            defaultPageSize={1}
            size="small"
            total={nPages}
            onChange={(page) => setPageNumber(page)}
            simple
          />
        </div>
      )}
      <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        <Page pageNumber={pageNumber} className="pdf-preview" />
      </Document>
    </div>
  );
};

const VideoProgress: React.FC<{ topic: API.TopicVideo }> = ({ topic }) => {
  const { getLessons } = useContext(Context);

  useEffect(() => {
    if (topic.json?.ffmpeg.state === 'coding') {
      const t = setTimeout(() => {
        if (getLessons) {
          getLessons();
        }
      }, 1000);
      return () => clearTimeout(t);
    }
    return;
  }, []);

  if (topic.json?.ffmpeg.state === 'coding') {
    return (
      <Typography>
        <FormattedMessage id="encoding_progress" defaultMessage="Encoding progress:" />
        <Progress percent={topic.json?.ffmpeg?.percentage} />
      </Typography>
    );
  }
  return <React.Fragment></React.Fragment>;
};

export const MediaUploadPreview: React.FC<{ topic: API.Topic; type: TopicType }> = ({
  type,
  topic,
}) => {
  if (topic && topic.topicable && 'url' in topic.topicable) {
    switch (type) {
      case TopicType.Audio:
        return topic.topicable_type === TopicType.Audio && topic.topicable?.url ? (
          <audio preload="none" controls src={topic.topicable.url} />
        ) : (
          <React.Fragment />
        );
      case TopicType.Video:
        return topic.topicable_type === TopicType.Video && topic.topicable?.url ? (
          <video controls src={topic.topicable.url} width="100%" />
        ) : (
          <React.Fragment />
        );
      case TopicType.Image:
        return topic.topicable_type === TopicType.Image && topic.topicable?.url ? (
          <img title="Topic image" src={topic.topicable.url} width="100%" />
        ) : (
          <React.Fragment />
        );
      case TopicType.PDF:
        return topic.topicable_type === TopicType.PDF && topic.topicable?.url ? (
          <PDFPreview file={topic.topicable.url} />
        ) : (
          <React.Fragment />
        );
      default:
        return <React.Fragment />;
    }
  }
  return <React.Fragment />;
};

export const MediaUploadForm: React.FC<{
  topic: API.Topic;
  currentState: API.Topic;
  type: TopicType.Audio | TopicType.Video | TopicType.Image | TopicType.PDF;
  onUpdate: (info: UploadChangeParam) => void;
  onChange: (info: UploadChangeParam) => void;
  disabled: boolean;
  folder: string;
  maxFiles?: number;
  clearListAfterUpload?: boolean;
}> = ({
  topic,
  type,
  onUpdate,
  disabled = false,
  currentState,
  onChange,
  folder,
  maxFiles,
  clearListAfterUpload,
}) => {
  const onInfoChange = useCallback(
    (info: UploadChangeParam<UploadFile<API.DefaultResponse<API.File>>>) => {
      if (info.file.status === 'done') {
        return onUpdate && onUpdate(info);
      }

      return onChange && onChange(info);
    },
    [onUpdate, onChange],
  );

  const data = {
    ...currentState,
    topicable_type: type,
    active: currentState.active ? 1 : 0,
    preview: currentState.preview ? 1 : 0,
    can_skip: currentState.can_skip ? 1 : 0,
  };

  // I delete these fields if they are null because validation does not allow them on the backend so if they are null the user has not edited them

  if (!data.introduction) {
    delete data?.introduction;
  }
  if (!data.description) {
    delete data?.description;
  }
  if (!data.summary) {
    delete data?.summary;
  }
  if (!data.json) {
    delete data?.json;
  }

  return (
    <React.Fragment>
      <Row>
        <SecureUploadBrowser
          folder={folder}
          onChange={onInfoChange}
          name="value"
          url={topic.isNew ? `/api/admin/topics` : `/api/admin/topics/${topic.id}?_method=PUT`}
          accept={CONFIG.acceptedTypes[type]}
          data={prepareObject(data)}
          maxFiles={maxFiles}
          clearListAfterUpload={clearListAfterUpload}
        >
          <Button disabled={disabled} icon={<UploadOutlined />}>
            Click to upload {type}
          </Button>
        </SecureUploadBrowser>
      </Row>
      <Row>
        <div style={{ padding: '0 12px' }}>
          {topic.topicable_type === TopicType.Video && (
            <VideoProgress topic={topic as API.TopicVideo} />
          )}
          <MediaUploadPreview type={type} topic={currentState} />
        </div>
      </Row>
    </React.Fragment>
  );
};

export default MediaUploadForm;
