import React, { useState, useEffect, useRef, useCallback } from 'react';

import { files, remove, findFile } from '@/services/escola-lms/files';
import { List, Button, Typography, Space, Pagination, Input } from 'antd';

import { FolderOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { useIntl, FormattedMessage } from 'umi';

import SecureUpload from '@/components/SecureUpload';

import './index.css';

interface FormWysiwygProps {
  hideDeleteBtn?: boolean;
  forceLoading?: boolean;
  defaultDirectory?: string;
  onFile?: (file: API.File, directory?: string) => void;
}

type FileBrowserState = {
  loading: boolean;
  name: string;
  directory: string;
  current_page: number;
  data?: API.File[];
  per_page: number;
  last_page: number;
  total: number;
};

const FilesBrowserActions: React.FC<{
  directory: string;
  onUploaded: (dir: string, file: API.File) => void;
}> = ({ directory, onUploaded }) => {
  return (
    <Space align="start">
      <Typography.Text>
        <FormattedMessage id="pages.files.filesBrowser" />
        <Typography.Text code>{directory}</Typography.Text>
      </Typography.Text>
      <SecureUpload
        url="/api/admin/file/upload"
        name="file[]"
        data={{
          target: directory,
        }}
        onUpload={(response) => {
          if (response.success) {
            onUploaded(directory, response.data);
          }
        }}
      />
    </Space>
  );
};

export const FilesBrowser: React.FC<FormWysiwygProps> = ({
  defaultDirectory = '/',
  onFile,
  hideDeleteBtn = false,
  forceLoading = false,
}) => {
  const intl = useIntl();
  const [state, setState] = useState<FileBrowserState>({
    loading: false,
    name: '',
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

  const handleSuccessResponse = useCallback(
    (response: API.FileList, dir: string) => {
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
            ...response.data.data.map((file: API.File) => ({
              ...file,
              url: file.mime === 'directory' ? `${dir}/${file.name}` : file.url,
            })),
          ].filter((file: API.File) => {
            if (dir === '/' || dir === defaultDirectory) {
              return file.name !== '..';
            }
            return true;
          }),
          directory: dir,
          loading: false,
        }));
      }
    },
    [setLoading],
  );

  const fetchFiles = useCallback(
    (dir: string, page = 1) => {
      const abort = () => controllerRef.current && controllerRef.current.abort();
      abort();

      controllerRef.current = new AbortController();

      setLoading(true);

      files({ directory: dir, page }, { signal: controllerRef.current?.signal })
        .then((response) => {
          if (response.success) {
            handleSuccessResponse(response, dir);
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

  const findByInputValue = useCallback(
    (dir: string, input: string, page = 1) => {
      const abort = () => controllerRef.current && controllerRef.current.abort();
      abort();

      controllerRef.current = new AbortController();

      setLoading(true);

      findFile({ directory: dir, name: input, page }, { signal: controllerRef.current?.signal })
        .then((response) => {
          if (response.success) {
            handleSuccessResponse(response, dir);
          }
        })
        .catch(() => setLoading(false));
      return () => {
        abort();
      };
    },
    [setLoading],
  );

  return (
    <div className="file-browser">
      <div className="file-browser__header">
        <Input
          placeholder={intl.formatMessage({
            id: 'search_file',
          })}
          className="file-browser__input"
          onChange={(e) =>
            setState((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
          value={state.name}
        />
        <div>
          <Button className="file-browser__button" onClick={() => fetchFiles(state.directory)}>
            <FormattedMessage id="reset" />
          </Button>
          <Button
            className="file-browser__button"
            type="primary"
            onClick={() => findByInputValue(state.directory, state.name)}
          >
            <FormattedMessage id="query" />
          </Button>
        </div>
      </div>
      <List
        loading={state.loading || forceLoading}
        size="small"
        itemLayout="horizontal"
        dataSource={state.data}
        header={
          <FilesBrowserActions
            directory={state.directory}
            onUploaded={(dir, file) => {
              if (file) {
                fetchFiles(dir);
                if (onFile) {
                  onFile(file, dir);
                }
              }
            }}
          />
        }
        footer={
          <FilesBrowserActions
            directory={state.directory}
            onUploaded={(dir, file) => {
              fetchFiles(dir);
              if (file && onFile) {
                onFile(file, dir);
              }
            }}
          />
        }
        renderItem={(item) => (
          <List.Item
            actions={
              item.mime !== 'directory' && !hideDeleteBtn
                ? [
                    <Button
                      key="dir"
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
                  <a href={item.url} target={'_blank'} rel="noreferrer">
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
                      item.mime === 'directory'
                        ? fetchFiles(item.url)
                        : onFile && onFile(item, state.directory)
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
