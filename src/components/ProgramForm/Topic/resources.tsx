import React from 'react';

export default () => <React.Fragment />;
/*

import React, { useCallback, useEffect, useState, useContext, useRef } from 'react';
import { Context } from '@/context/curriculum';
import { getFormData } from '@/services/api';
import Divider from 'antd/lib/divider';
import List from 'antd/lib/list';
import Skeleton from 'antd/lib/skeleton';
import Button from 'antd/lib/button';
import Popconfirm from 'antd/lib/popconfirm';
import Upload from 'antd/lib/upload';
import Tag from 'antd/lib/tag';
import { APIpath } from '@/services/api';
import { UploadOutlined } from '@ant-design/icons';

export const ResourceUploadForm = ({ topic_id, onUpload }) => {
  const { token, id, updateLesson } = useContext(Context);

  const onChange = useCallback((info) => {
    if (info.file.status === 'done') {
      onUpload && onUpload(info);
      //message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      //message.error(`${info.file.name} file upload failed.`);
    }
  });

  return (
    <Upload
      onChange={onChange}
      name="topicres"
      action={`${APIpath('topic/resource/save')}/${id}`}
      headers={{
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      }}
    >
      <Button icon={<UploadOutlined />}>Click to upload new resource</Button>
    </Upload>
  );
};

export const ResourceIcon = ({ resource }) => {
  return <Tag>{resource.file_type}</Tag>;
  switch (resource.file_type) {
    case 'pdf':
      return <i size="2em">{resource.file_type}</i>;
    default:
      return <i size="2em">{resource.file_type}</i>;
  }
};

export const Resources = ({ resources, quizId }) => {
  const [state, setState] = useState(resources);
  const [loading, setLoading] = useState(false);

  const fileRef = useRef();

  const { addResource, removeResource } = useContext(Context);

  const uploadFile = useCallback(() => {
    const formData = getFormData({});
    formData.append('topicres', fileRef.current.files[0]);
    setLoading(true);
    addResource(quizId, formData).then(() => setLoading(false));
  }, [fileRef]);

  const onUpload = useCallback((info) => console.log(info), []);

  const onDelete = useCallback((resource_id) => {
    setLoading(true);
    removeResource(resource_id).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    setState(resources);
  }, [resources]);

  return (
    <React.Fragment>
      <List
        loading={loading}
        header={<div>Resources</div>}
        bordered
        dataSource={state}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Popconfirm
                title="Are you sure to delete this resource?"
                onConfirm={() => onDelete(item.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button danger size="small">
                  delete
                </Button>
              </Popconfirm>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<ResourceIcon resource={item} />}
                title={
                  <a href={item.url} target="_blank">
                    {item.file_name}
                  </a>
                }
              />
            </Skeleton>
          </List.Item>
        )}
      />
      <Divider />

      <ResourceUploadForm id={quizId} onUpload={onUpload} />
    </React.Fragment>
  );
};

export default Resources;
 */
