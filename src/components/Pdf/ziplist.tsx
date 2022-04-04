import React, { useState, useEffect, Fragment } from 'react';
import { message } from 'antd';

import { useCallback } from 'react';
import { FabricPreview } from '@/components/FabricEditor/preview';

import { pdf } from '@/services/escola-lms/pdfs';
import { saveAs } from 'file-saver';

import JSZip from 'jszip';

type State =
  | {
      state: 'init';
    }
  | {
      state: 'start';
      pdfs: any[];
    }
  | {
      state: 'processing';
      pdfs: any[];
    }
  | {
      state: 'ready';
      pdfs: any[];
    }
  | {
      state: 'finished';
    };

export const PdfZipList: React.FC<{
  pdfIds: number[];
  onProgress?: (proc: number) => void;
  onFinished?: () => void;
  filename?: string;
}> = ({ pdfIds, onProgress, onFinished, filename = 'package.zip' }) => {
  const [state, setState] = useState<State>({ state: 'init' });
  const [blobs, setBlobs] = useState<Blob[]>([]);

  const onFinishedLocal = useCallback(() => {
    const zip = new JSZip();

    blobs.forEach((blob, i) => zip.file(`${pdfIds[i]}.pdf`, blob));

    zip.generateAsync({ type: 'blob' }).then(function (content) {
      saveAs(content, filename);
      if (onFinished) {
        onFinished();
      }
    });
  }, [blobs, filename]);

  useEffect(() => {
    const fetch = async () => {
      const responses = await Promise.all(pdfIds.map((pdfId) => pdf(pdfId)));
      setState({
        state: 'start',
        pdfs: responses
          .filter((response) => response.success)
          .map((response) => response.success && response.data),
      });
    };
    fetch();
  }, [pdfIds]);

  useEffect(() => {
    if (state.state === 'processing') {
      if (state.pdfs.length === 0) {
        setState({
          state: 'finished',
        });
      } else {
        setState({
          state: 'start',
          pdfs: state.pdfs,
        });
      }
      if (onProgress) {
        onProgress(1 - state.pdfs.length / pdfIds.length);
      }
    }

    if (state.state === 'finished') {
      onFinishedLocal();
    }
  }, [state, pdfIds]);

  if (state.state === 'start') {
    return (
      <FabricPreview
        mode="blob"
        initialValue={state.pdfs[state.pdfs.length - 1].content}
        onError={(err) => {
          message.error(err.toString());
          setState({ state: 'processing', pdfs: state.pdfs.slice(0, -1) });
        }}
        onRendered={(blob) => {
          if (blob && blob instanceof Blob) {
            setBlobs((prevBlobs) => [...prevBlobs, blob]);
          }

          setState({ state: 'processing', pdfs: state.pdfs.slice(0, -1) });
        }}
      />
    );
  }

  return <Fragment></Fragment>;
};

export default PdfZipList;
