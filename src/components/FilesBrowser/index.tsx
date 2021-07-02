import React, { useState, useEffect, useRef, useCallback } from 'react';

import { files, remove } from '@/services/escola-lms/files';
import { List, Button, Typography } from 'antd';

import { FolderOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import SecureUpload from '@/components/SecureUpload';

interface FormWysiwygProps {
  defaultDirectory?: string;
  onFile?: (value: string) => void;
}

export const FilesBrowser: React.FC<FormWysiwygProps> = ({ defaultDirectory = '/', onFile }) => {
  // TODO add pagination !!!
  const [directory, setDirectory] = useState(defaultDirectory);
  const [list, setList] = useState<API.File[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const controllerRef = useRef<AbortController | null>();

  const fetchFiles = useCallback((dir) => {
    const abort = () => controllerRef.current && controllerRef.current.abort();
    abort();

    controllerRef.current = new AbortController();
    setLoading(true);

    files({ directory: dir }, { signal: controllerRef.current?.signal })
      .then((response) => {
        setLoading(false);
        if (response.success) {
          const newList = response.data.data.map((file) => ({
            ...file,
            url: file.mime === 'directory' ? `${dir}/${file.name}` : file.url,
          }));
          const upDir: API.File = {
            url: dir.split('/').slice(0, -1).join('/'),
            name: '..',
            created_at: '',
            mime: 'directory',
          };
          setList([upDir, ...newList].filter((file) => file.url));
        }
      })
      .catch(() => setLoading(false));
    return () => {
      abort();
    };
  }, []);

  useEffect(() => {
    return fetchFiles(directory);
  }, [directory, fetchFiles]);

  const onRemove = useCallback(
    (url: string) => {
      setLoading(true);

      remove(url)
        .then(() => {
          fetchFiles(directory);
        })
        .catch(() => {
          setLoading(false);
        });
    },
    [directory, fetchFiles],
  );

  return (
    <div className="file-browser">
      <Typography.Text>
        Current dir is <Typography.Text code>{directory}</Typography.Text>
      </Typography.Text>
      <SecureUpload
        url="/api/admin/file/upload"
        name="file[]"
        data={{
          target: directory,
        }}
        onChange={(data) => data.file.status === 'done' && fetchFiles(directory)}
      />
      <List
        loading={loading}
        size="small"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                item.mime === 'directory' ? (
                  <Button type="primary" icon={<FolderOutlined />} size="small" />
                ) : (
                  <a href={item.url} target="_blank">
                    <Button type="default" icon={<DownloadOutlined />} size="small" />
                  </a>
                )
              }
              description={
                <React.Fragment>
                  {item.mime !== 'directory' && (
                    <Button
                      type="default"
                      danger
                      icon={<DeleteOutlined />}
                      size="small"
                      onClick={() => onRemove(item.url)}
                    />
                  )}
                  <Button
                    type="text"
                    size="small"
                    onClick={() =>
                      item.mime === 'directory'
                        ? setDirectory(item.url)
                        : onFile && onFile(item.url)
                    }
                  >
                    {item.name}
                  </Button>
                </React.Fragment>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default FilesBrowser;
