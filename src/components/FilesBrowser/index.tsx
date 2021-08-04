import React, { useState, useEffect, useRef, useCallback } from 'react';

import { files, remove } from '@/services/escola-lms/files';
import { List, Button, Typography, Space, Pagination } from 'antd';

import { FolderOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import SecureUpload from '@/components/SecureUpload';

interface FormWysiwygProps {
  defaultDirectory?: string;
  onFile?: (value: string) => void;
}

type FileBrowserState = {
  loading: boolean;
  directory: string;
  current_page: number;
  data?: API.File[];
  per_page: number;
  last_page: number;
  total: number;
};

const FilesBrowserActions: React.FC<{ directory: string; onUploaded: (dir: string) => void }> = ({
  directory,
  onUploaded,
}) => {
  return (
    <Space align="start">
      <Typography.Text>
        Current dir is <Typography.Text code>{directory}</Typography.Text>
      </Typography.Text>
      <SecureUpload
        url="/api/admin/file/upload"
        name="file[]"
        data={{
          target: directory,
        }}
        onChange={(data) => data.file.status === 'done' && onUploaded(directory)}
      />
    </Space>
  );
};

export const FilesBrowser: React.FC<FormWysiwygProps> = ({ defaultDirectory = '/', onFile }) => {
  const [state, setState] = useState<FileBrowserState>({
    loading: false,
    directory: defaultDirectory,
    current_page: 1,
    data: undefined,
    per_page: 1,
    last_page: 1,
    total: 0,
  });

  const controllerRef = useRef<AbortController | null>();

  const setLoading = useCallback((loading: boolean) => {
    setState((prevState) => ({
      ...prevState,
      loading,
    }));
  }, []);

  const fetchFiles = useCallback(
    (dir, page = 1) => {
      const abort = () => controllerRef.current && controllerRef.current.abort();
      abort();

      controllerRef.current = new AbortController();

      setLoading(true);

      files({ directory: dir, page }, { signal: controllerRef.current?.signal })
        .then((response) => {
          if (response.success) {
            setState((prevState) => ({
              ...prevState,
              ...response.data,
              data: [
                {
                  url: dir.split('/').slice(0, -1).join('/'),
                  name: '..',
                  created_at: '',
                  mime: 'directory',
                } as API.File,
                ...response.data.data.map((file) => ({
                  ...file,
                  url: file.mime === 'directory' ? `${dir}/${file.name}` : file.url,
                })),
              ].filter((file: API.File) => {
                if (dir === '/') {
                  return file.name !== '..';
                }
                return true;
              }),
              directory: dir,
              loading: false,
            }));
          }
        })
        .catch(() => setLoading(false));
      return () => {
        abort();
      };
    },
    [setLoading],
  );

  useEffect(() => {
    return fetchFiles(defaultDirectory);
  }, [defaultDirectory, fetchFiles]);

  const onRemove = useCallback(
    (url: string) => {
      setLoading(true);

      remove(url)
        .then(() => {
          fetchFiles(state.directory);
        })
        .catch(() => {
          setLoading(false);
        });
    },
    [fetchFiles, setLoading, state.directory],
  );

  return (
    <div className="file-browser">
      <List
        loading={state.loading}
        size="small"
        itemLayout="horizontal"
        dataSource={state.data}
        header={
          <FilesBrowserActions directory={state.directory} onUploaded={(dir) => fetchFiles(dir)} />
        }
        footer={
          <FilesBrowserActions directory={state.directory} onUploaded={(dir) => fetchFiles(dir)} />
        }
        renderItem={(item) => (
          <List.Item
            actions={
              item.mime !== 'directory'
                ? [
                    <Button
                      type="default"
                      danger
                      icon={<DeleteOutlined />}
                      size="small"
                      onClick={() => onRemove(item.url)}
                    />,
                  ]
                : []
            }
          >
            <List.Item.Meta
              avatar={
                item.mime === 'directory' ? (
                  <Button
                    type="primary"
                    icon={<FolderOutlined />}
                    size="small"
                    onClick={() => fetchFiles(item.url)}
                  />
                ) : (
                  <a href={item.url} target="_blank">
                    <Button type="default" icon={<DownloadOutlined />} size="small" />
                  </a>
                )
              }
              description={
                <React.Fragment>
                  <Button
                    type="text"
                    size="small"
                    onClick={() =>
                      item.mime === 'directory' ? fetchFiles(item.url) : onFile && onFile(item.url)
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
      <Pagination
        pageSizeOptions={[]}
        current={state.current_page}
        total={state.total}
        pageSize={state.per_page}
        onChange={(page) => fetchFiles(state.directory, page)}
      />
    </div>
  );
};

export default FilesBrowser;
