import { useCallback, useState } from 'react';
import type { UploadChangeParam } from 'antd/lib/upload';
import { Button, message, Modal } from 'antd';
import SecureUpload from '@/components/SecureUpload';
import FilesBrowser from '@/components/FilesBrowser';
import request from 'umi-request';
import type { RequestOptionsInit } from 'umi-request';
import { FormattedMessage } from 'umi';
import { FolderOpenOutlined } from '@ant-design/icons';
import { PropsWithChildren } from 'react';
import type { SecureUploadType } from './index';

type AnyResponse = API.DefaultResponse<any>;

const post = async (url: string, body: Record<string, string>, options?: RequestOptionsInit) => {
  return request<API.DefaultResponse<EscolaLms.ModelFields.Models.Metadata>>(url, {
    method: 'POST',
    data: body,
    ...(options || {}),
  });
};

const fixDirName = (inputDir: string) => {
  let dir = inputDir.split('//').join('/');
  dir = dir[dir.length - 1] === '/' ? dir : `${dir}/`;
  dir = dir[0] === '/' ? dir.slice(1) : dir;
  return dir;
};

const getUploadChangeSuccessParam = (data: any): UploadChangeParam => ({
  file: {
    status: 'done',
    uid: 'fileFromBrowser',
    name: 'fileFromBrowser',
    response: data,
  },
  fileList: [],
});

function SecureUploadBrowser<Type = API.File>({
  folder,
  onResponse,
  ...props
}: PropsWithChildren<
  SecureUploadType<Type> & { folder: string; onResponse?: (response: AnyResponse) => void }
>) {
  const [showBrowser, setShowBrowser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { url, name, onChange } = props;

  const closeModal = useCallback(() => {
    setShowBrowser(false);
  }, []);

  return (
    <div>
      <Button onClick={() => setShowBrowser(true)} icon={<FolderOpenOutlined />}>
        {' '}
        <FormattedMessage id="browse" />
      </Button>

      {showBrowser && (
        <Modal visible={showBrowser} onCancel={closeModal} onOk={closeModal} width="60vw">
          <FilesBrowser
            forceLoading={loading}
            hideDeleteBtn={true}
            defaultDirectory={folder}
            onFile={(file, dir) => {
              if (dir) {
                setLoading(true);
                const path = `${fixDirName(dir)}${file.name}`;
                post(url, { [name]: path })
                  .then((response: AnyResponse) => {
                    setLoading(false);
                    if (onResponse) {
                      onResponse(response);
                    }
                    if (response.success) {
                      closeModal();
                      if (onChange) {
                        onChange(getUploadChangeSuccessParam(response));
                      }
                    } else {
                      message.error(response.message);
                    }
                  })
                  .catch((err) => {
                    setLoading(false);
                    if ('data' in err) {
                      message.error(err.data.message);
                    } else {
                      message.error('Unknown Error');
                    }
                  });
              }
            }}
          />
        </Modal>
      )}

      <SecureUpload {...props} />
    </div>
  );
}

export default SecureUploadBrowser;
