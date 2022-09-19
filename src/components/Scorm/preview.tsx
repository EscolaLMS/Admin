import React from 'react';
declare const REACT_APP_API_URL: string;

const ScormPreview: React.FC<{ uuid: string }> = ({ uuid }) => {
  return (
    <iframe
      style={{ border: 'none', background: 'none', width: '100%', height: '100%' }}
      className="scorm-preview-player"
      src={`${window.REACT_APP_API_URL || REACT_APP_API_URL}/api/scorm/play/${uuid}`}
    />
  );
};

export default ScormPreview;
