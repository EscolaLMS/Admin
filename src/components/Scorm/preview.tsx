import React, { useEffect, useRef, useState } from 'react';
import { AICC, Scorm12API, Scorm2004API } from 'scorm-again';

declare const REACT_APP_API_URL: string;

interface ScormSettings {
  data: {
    entry_url_zip: string;
    entry_url: string;
  };
}

declare global {
  interface Window {
    ScormSettings: ScormSettings | undefined;
    API: any;
    API_1484_11: any;
  }
}

const ScormPreview: React.FC<{ uuid: string }> = ({ uuid }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [iframeUrl, setIframeUrl] = useState<string>('');
  const API_URL = REACT_APP_API_URL || window.REACT_APP_API_URL;
  const iframeContainer = useRef<HTMLDivElement>(null);
  // Register the Service Worker
  const registerServiceWorker = async (
    url: string = '/service-worker-scorm.js',
  ): Promise<ServiceWorkerRegistration | null> => {
    try {
      const registration = await navigator.serviceWorker.register(url);
      if (registration.active) {
        return registration;
      }
      return new Promise((resolve) => {
        (registration.installing || registration.waiting)?.addEventListener('statechange', () => {
          resolve(registration);
        });
      });
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return null;
    }
  };

  // SCORM Initialization Functions
  const initializeScorm12 = (settings: ScormSettings['data']): void => {
    console.log({ settings });
    window.API = new Scorm12API({
      entryUrlZip: settings.entry_url_zip,
      entryUrl: settings.entry_url,
    });
    console.log('SCORM 1.2 Initialized');
  };

  const initializeScorm2004 = (settings: ScormSettings['data']): void => {
    console.log({ settings });
    window.API_1484_11 = new Scorm2004API(settings);
    console.log('SCORM 2004 Initialized');
  };

  const initializeAICC = (settings: ScormSettings['data']): void => {
    window.API = new AICC(settings);
    console.log('AICC Initialized');
  };

  // Load SCORM SCO
  const loadScormSCO = async (
    scormUuid: string,
    registration: ServiceWorkerRegistration,
  ): Promise<void> => {
    try {
      const response = await fetch(`${API_URL}/api/scorm/show/${scormUuid}`);
      if (!response.ok) throw new Error('Failed to fetch SCORM settings');
      const settings: ScormSettings = await response.json();
      window.ScormSettings = settings;

      const zipUrl = settings.data.entry_url_zip;
      const zipExists = await fetch(zipUrl, { method: 'HEAD' });

      if (zipExists.ok) {
        console.log('Zip file exists:', zipUrl);
        registration.active?.postMessage(zipUrl);
      } else {
        console.log('Zip file does not exist:', zipUrl);
        const createZip = await fetch(`${API_URL}/api/scorm/zip/${uuid}`);
        if (createZip.ok) {
          console.log('Zip file created:', zipUrl);
          await loadScormSCO(scormUuid, registration);
        } else {
          throw new Error('Failed to create SCORM zip file');
        }
      }

      navigator.serviceWorker.addEventListener('message', (event: MessageEvent) => {
        console.log('Service Worker Message:', event.data);
        const { scormObj } = event.data;
        const scormSettings = window.ScormSettings?.data;

        if (!scormSettings) {
          console.error('SCORM settings are undefined');
          return;
        }

        switch (scormObj.version) {
          case '2004':
            initializeScorm2004(scormSettings);
            break;
          case 'AICC':
            initializeAICC(scormSettings);
            break;
          default:
            initializeScorm12(scormSettings);
        }

        setIframeUrl(`${scormObj.PREFIX}/${scormSettings.entry_url}`);
        setLoading(false);
      });
    } catch (error) {
      console.error('Failed to load SCORM SCO:', error);
    }
  };

  // Effect to initialize the component
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const registration = await registerServiceWorker();
      if (registration) {
        await loadScormSCO(uuid, registration);
      } else {
        console.error('Service Worker registration failed.');
      }
    };
    init();
  }, [uuid]);

  return (
    <div>
      {loading ? (
        <div id="loading" style={{ textAlign: 'center', padding: '20px' }}>
          Loading SCORM...
        </div>
      ) : (
        <iframe
          src={iframeUrl}
          style={{ width: '100%', height: '1000px' }}
          title="SCORM Content"
        ></iframe>
      )}
    </div>
  );
};

export default ScormPreview;
