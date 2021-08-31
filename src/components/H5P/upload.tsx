import SecureUpload from '@/components/SecureUpload';
import React from 'react';

export const UploadH5P: React.FC<{
  onSuccess: () => void;
  onError: () => void;
}> = ({ onSuccess, onError }) => {
  return (
    <SecureUpload
      url="/api/hh5p/content/upload"
      name="h5p_file"
      accept=".h5p"
      onChange={(info) => {
        if (info.file.status === 'done') {
          if (info.file.response) {
            onSuccess();
          }
        }
        if (info.file.status === 'error') {
          onError();
        }
      }}
    />
  );
};

export default UploadH5P;
