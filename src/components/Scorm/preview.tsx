import { ScormPreview as ScormPlayer } from '@escolalms/scorm-player';
import React from 'react';
declare const REACT_APP_API_URL: string;

interface ScormPreviewProps {
  uuid: string;
}

const ScormPreview: React.FC<ScormPreviewProps> = ({ uuid }) => {
  const API_URL = REACT_APP_API_URL || window.REACT_APP_API_URL;

  // Register the Service Worker

  return (
    <div style={{ height: '100vh' }}>
      <ScormPlayer uuid={uuid} apiUrl={API_URL || ''} serviceWorkerUrl="/service-worker-scorm.js" />
    </div>
  );
};

export default ScormPreview;
