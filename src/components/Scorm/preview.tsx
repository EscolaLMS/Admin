import React, { useEffect, useState } from 'react';
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
  const [state, setState] = useState<{
    loading: boolean;
    iframeUrl: string | null;
    error: string | null;
  }>({
    loading: false,
    iframeUrl: null,
    error: null,
  });

  const API_URL = REACT_APP_API_URL || window.REACT_APP_API_URL;

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

  // **Backend Communication Functions**
  const post = async (data: any) => {
    console.log('TODO: Implement your BACKEND endpoint for set data:', data);
    // try {
    //   const response = await fetch(`${API_URL}/api/scorm/set/${uuid}`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    //   if (!response.ok) throw new Error('Failed to save SCORM data');
    // } catch (error) {
    //   console.error('SCORM Post Error:', error);
    // }
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  const get = async (key: string) => {
    console.log('TODO: Implement your BACKEND endpoint for get key:', key);
    // try {
    //   const response = await fetch(`${API_URL}/api/scorm/get/${uuid}/${key}`);
    //   if (!response.ok) throw new Error('Failed to get SCORM data');
    //   return await response.json();
    // } catch (error) {
    //   console.error('SCORM Get Error:', error);
    //   return null;
    // }
    return new Promise((resolve, reject) => {
      resolve(key);
    });
  };

  // **SCORM Initialization Functions**
  const initializeScorm12 = (settings: ScormSettings['data']): void => {
    window.API = new Scorm12API(settings as any);
    console.log('SCORM 1.2 Initialized');

    // window.API.on('LMSSetValue.cmi.*', (CMIElement: string, value: any) => {
    //   post({ cmi: { [CMIElement]: value } });
    // });

    // window.API.on('LMSGetValue.cmi.*', async (CMIElement: string) => {
    //   const value = await get(CMIElement);
    //   window.API.LMSSetValue(CMIElement, value);
    // });

    // window.API.on('LMSCommit', () => {
    //   post({ cmi: window.API.cmi });
    // });
  };

  const initializeScorm2004 = (settings: ScormSettings['data']): void => {
    window.API_1484_11 = new Scorm2004API(settings as any);
    console.log('SCORM 2004 Initialized');

    // window.API_1484_11.on('SetValue.cmi.*', (CMIElement: string, value: any) => {
    //   post({ cmi: { [CMIElement]: value } });
    // });

    // window.API_1484_11.on('GetValue.cmi.*', async (CMIElement: string) => {
    //   const value = await get(CMIElement);
    //   window.API_1484_11.SetValue(CMIElement, value);
    // });

    // window.API_1484_11.on('Commit', () => {
    //   post({ cmi: window.API_1484_11.cmi });
    // });
  };

  const initializeAICC = (settings: ScormSettings['data']): void => {
    window.API = new AICC(settings as any);
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
      if (!zipExists.ok) {
        // Attempt to create the ZIP if it doesn't exist
        console.log('Zip file does not exist:', zipUrl);
        const createZip = await fetch(`${API_URL}/api/scorm/zip/${scormUuid}`);
        if (!createZip.ok) throw new Error('Failed to create SCORM zip file');
        console.log('Zip file created:', zipUrl);
      }

      // Ask the SW to load the ZIP
      registration.active?.postMessage(zipUrl);

      navigator.serviceWorker.addEventListener('message', async (event: MessageEvent) => {
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
        // Construct the URL we want to load in the iframe
        const potentialIframeUrl = `${scormObj.PREFIX}/${scormSettings.entry_url}`;

        // 5) Double-check the file is actually served (avoid “app in app”).
        try {
          const headCheck = await fetch(potentialIframeUrl, { method: 'HEAD' });
          if (!headCheck.ok) {
            throw new Error(`SCORM entry file missing: ${headCheck.status}`);
          }
          setState({
            ...state,
            loading: false,
            iframeUrl: `${scormObj.PREFIX}/${scormSettings.entry_url}`,
          });
        } catch (err) {
          console.error('SCORM entry file missing or not accessible:', err);
          setState({ ...state, error: 'SCORM entry file missing or not accessible.' });
        }
      });
    } catch (error) {
      console.error('Failed to load SCORM SCO:', error);
      setState({ ...state, error: 'Failed to load SCORM SCO.' });
    }
  };

  // Effect to initialize the component
  useEffect(() => {
    (async () => {
      setState({ ...state, loading: true });

      const registration = await registerServiceWorker();
      if (!registration) {
        console.error('Service Worker registration failed.');
        setState({ ...state, error: 'Service Worker registration failed.' });
        return;
      }
      await loadScormSCO(uuid, registration);
    })();
  }, [uuid]);

  if (state.loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading SCORM...</div>;
  }

  if (state.error) {
    return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>{state.error}</div>;
  }

  if (state.iframeUrl) {
    return (
      <iframe
        src={state.iframeUrl}
        style={{ width: '100%', height: '1000px' }}
        title="SCORM Content"
      ></iframe>
    );
  }

  // If none of the above, return nothing or a fallback
  return null;
};

export default ScormPreview;
