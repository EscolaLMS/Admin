import React, { useCallback, useState } from 'react';
import { Col, Row, Button, Pagination, Spin, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { TopicType } from '@/services/escola-lms/course';
import SecureUpload from '@/components/SecureUpload';
import type { UploadChangeParam } from 'antd/lib/upload';
import { Document, pdfjs, Page } from 'react-pdf';

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

const PDFPreview: React.FC<{ file: string }> = ({ file }) => {
  const [nPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div>
      {nPages === 0 ? (
        <Spin />
      ) : (
        <React.Fragment>
          <Typography>Page:</Typography>
          <Pagination
            defaultPageSize={1}
            size="small"
            total={nPages}
            onChange={(page) => setPageNumber(page)}
          />
        </React.Fragment>
      )}
      <Document file={file} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export const MediaUploadPreview: React.FC<{ topic: API.Topic; type: TopicType }> = ({
  type,
  topic,
}) => {
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
        <img src={topic.topicable.url} width="100%" />
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
};

export const MediaUploadForm: React.FC<{
  topic: API.Topic;
  currentState: API.Topic;
  type: TopicType.Audio | TopicType.Video | TopicType.Image | TopicType.PDF;
  onUpdate: (info: UploadChangeParam) => void;
  onChange: (info: UploadChangeParam) => void;
  disabled: boolean;
}> = ({ topic, type, onUpdate, disabled = false, currentState, onChange }) => {
  const onInfoChange = useCallback(
    (info) => {
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

  return (
    <Row>
      <Col span={12}>
        <SecureUpload
          onChange={onInfoChange}
          name="value"
          url={topic.isNew ? `/api/admin/topics` : `/api/admin/topics/${topic.id}?_method=PUT`}
          accept={CONFIG.acceptedTypes[type]}
          data={data}
        >
          <Button disabled={disabled} icon={<UploadOutlined />}>
            Click to upload {type}
          </Button>
        </SecureUpload>
      </Col>
      <Col span={12}>
        <div style={{ padding: '0 12px' }}>
          <MediaUploadPreview type={type} topic={topic} />
        </div>
      </Col>
    </Row>
  );
};

export default MediaUploadForm;
