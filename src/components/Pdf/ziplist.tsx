import React, { useState, useEffect } from 'react';

import { useCallback } from 'react';
import { saveAs } from 'file-saver';

import JSZip from 'jszip';

declare const REACT_APP_API_URL: string;

export const PdfZipList: React.FC<{
  pdfIds: number[];
  onProgress?: (proc: number) => void;
  onFinished?: () => void;
  filename?: string;
}> = ({ pdfIds, onProgress, onFinished, filename = 'package.zip' }) => {
  const [blobs, setBlobs] = useState<Blob[]>([]);

  const onFinishedLocal = useCallback(
    (allBlobs: Blob[]) => {
      const zip = new JSZip();

      allBlobs.forEach((blob, i) => zip.file(`${pdfIds[i]}.pdf`, blob));

      zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, filename);
        if (onFinished) {
          onFinished();
        }
      });
    },
    [blobs, filename],
  );

  useEffect(() => {
    pdfIds.forEach((pdfId) => {
      const result = fetch(
        `${window.REACT_APP_API_URL || REACT_APP_API_URL}/api/pdfs/generate/${pdfId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
        },
      );

      result
        .then((response) => response.blob())
        .then((pdfBlob) => {
          if (pdfBlob && pdfBlob instanceof Blob) {
            setBlobs((prevBlobs) => {
              const progress = (prevBlobs.length + 1) / pdfIds.length;
              if (onProgress) {
                onProgress(progress);
              }
              if (progress >= 1) {
                onFinishedLocal([...prevBlobs, pdfBlob]);
              }
              return [...prevBlobs, pdfBlob];
            });
          }
        });
    });

    /*

      const fetch = async () => {
        const responses = await Promise.all(pdfIds.map((pdfId) => generatedPdf(pdfId)));
        setState({
          state: 'start',
          finishedPdfs: responses
            .filter((response) => response.success)
            .map((response) => response.success && response.data),
        });
      };
      fetch();      

      */
  }, [pdfIds]);

  /*

  useEffect(() => {
    if (state.state === 'processing') {
      if (state.finishedPdfs.length === 0) {
        setState({
          state: 'finished',
        });
      } else {
        setState({
          state: 'start',
          finishedPdfs: state.finishedPdfs,
        });
      }
      if (onProgress) {
        onProgress(1 - state.finishedPdfs.length / pdfIds.length);
      }
    }

    if (state.state === 'finished') {
      onFinishedLocal();
    }
  }, [state, pdfIds]);

  */

  return (
    <p>
      Progress {blobs.length} / {pdfIds.length}
    </p>
  );
};

export default PdfZipList;
