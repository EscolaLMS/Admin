import React from 'react';

const ScormPreview: React.FC<{ uuid: string }> = ({ uuid }) => {
  return (
    <iframe className="scorm-preview-player" src={`${REACT_APP_API_URL}/api/scorm/play/${uuid}`} />
  );
};

export default ScormPreview;
