import SecureUpload from '@/components/SecureUpload';
import React from 'react';

export const UploadScorm: React.FC<{
  onSuccess: (scorm: API.SCORM) => void;
  onError: (error: API.DefaultResponseError) => void;
}> = ({ onSuccess, onError }) => {
  return (
    <SecureUpload
      url="/api/admin/scorm/upload"
      name="zip"
      accept="application/zip"
      onChange={(info) => {
        if (info.file.response) {
          // @ts-ignore
          const { response }: { response: API.DefaultResponse<API.SCORMUPloaded> } =
            info.file.response;
          if (response.success) {
            onSuccess(response.data.model);
          } else {
            onError(response);
          }
        }
      }}
    />
  );
};

export default UploadScorm;
