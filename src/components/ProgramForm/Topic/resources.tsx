import React, { useEffect, useCallback, useState, useRef } from 'react';
import { resources as fetchResources, deleteResource } from '@/services/escola-lms/course';
import { List, Button } from 'antd';
import { DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import SecureUpload from '@/components/SecureUpload';

export const Resources: React.FC<{ topicId: number }> = ({ topicId }) => {
  const [resources, setResources] = useState<API.Resource[]>();
  const controller = useRef<AbortController>();

  const fetch = useCallback(() => {
    if (controller.current) {
      controller.current.abort();
    }
    controller.current = new AbortController();

    fetchResources(topicId, { signal: controller.current.signal }).then((response) => {
      if (response && response.success) {
        setResources(response.data);
      }
    });
  }, [topicId]);

  const onUploaded = useCallback((response: API.ResourceRow) => {
    if (response && response.success) {
      fetchResources(topicId).then((fetchResponse) => {
        if (fetchResponse && fetchResponse.success) {
          setResources(fetchResponse.data);
        }
      });
    }
  }, []);

  const onRemove = useCallback(
    (resId: number) => {
      deleteResource(topicId, resId).then((response) => {
        if (response.success) {
          fetch();
        }
      });
    },
    [topicId],
  );

  useEffect(() => {
    fetch();
  }, [topicId]);

  return (
    <List
      size="small"
      itemLayout="horizontal"
      dataSource={resources}
      header={
        <SecureUpload
          url={`/api/admin/topics/${topicId}/resources`}
          name="resource"
          onChange={(response) =>
            response.file.status === 'done' && onUploaded(response.file.response)
          }
        />
      }
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              type="default"
              danger
              icon={<DeleteOutlined />}
              size="small"
              onClick={() => onRemove(item.id)}
            />,
          ]}
        >
          <List.Item.Meta
            avatar={
              <a href={item.url} target="_blank">
                <Button type="default" icon={<DownloadOutlined />} size="small" />
              </a>
            }
            description={
              <React.Fragment>
                <Button type="text" size="small">
                  {item.name}
                </Button>
              </React.Fragment>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default Resources;

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
