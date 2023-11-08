import SecureUpload from '@/components/SecureUpload';
import React from 'react';

export const UploadScorm: React.FC<{
  onSuccess: (scorm: API.SCORM) => void;
  onError: (error: API.DefaultResponseError) => void;
  hideLabel?: boolean;
}> = ({ onSuccess, onError, hideLabel }) => {
  return (
    <SecureUpload<API.SCORMUPloaded>
      url="/api/admin/scorm/upload"
      name="zip"
      accept="application/zip"
      hideLabel={hideLabel}
      onChange={(info) => {
        if (!info.file.response || info.file.status !== 'done') return;
        const response = info.file.response;

        if (!response.success) {
          onError(response);
          return;
        }

        onSuccess(response.data.model);
      }}
    />
  );
};

export default UploadScorm;
