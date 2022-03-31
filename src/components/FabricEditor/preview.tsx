import React, { useEffect } from 'react';
import { jsPDF } from 'jspdf';

import 'svg2pdf.js';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import type { fabric } from 'fabric';

const PreviewPDF: React.FC<{
  svgDef: string;
  width: number;
  height: number;
  mode?: 'file' | 'blob';
}> = ({ svgDef, width, height }) => {
  useEffect(() => {
    const doc = new jsPDF('l', 'px', [width, height]);

    const parser = new DOMParser();
    const element = parser.parseFromString(svgDef, 'image/svg+xml');

    const bg = element.documentElement.querySelector('rect');

    // hack for background
    // svg2pdf.js don't support % units (for now)
    if (bg) {
      bg.setAttribute('width', width + 'px');
      bg.setAttribute('height', height + 'px');
    }

    doc.svg(element.documentElement).then(() => {
      // save the created pdf
      doc.save('myPDF.pdf');
    });
  }, [svgDef]);
  return <div></div>;
};

export const FabricPreview: React.FC<{
  onRendered: (result?: Blob | jsPDF) => void;
  onError?: (err: any) => void;
  initialValue: any;
  width?: number;
  height?: number;
  mode?: 'file' | 'blob';
}> = ({ initialValue, width = 842, height = 592, onRendered, mode = 'file', onError }) => {
  const { onReady } = useFabricJSEditor();

  const onCanvasReady = (canvas: fabric.Canvas) => {
    if (initialValue) {
      try {
        const data = typeof initialValue === 'string' ? JSON.parse(initialValue) : initialValue;
        canvas.loadFromJSON(data, () => {
          const svgDef = canvas.toSVG();
          const doc = new jsPDF('l', 'px', [width, height]);
          const parser = new DOMParser();
          const element = parser.parseFromString(svgDef, 'image/svg+xml');
          doc.svg(element.documentElement).then(() => {
            onRendered(mode === 'file' ? doc.save('myPDF.pdf') : doc.output('blob'));
          });
        });
      } catch (err) {
        if (onError) {
          onError(err);
        }
      }
    }
    onReady(canvas);
  };

  return (
    <div className="fakeA4" style={{ width, height }}>
      <FabricJSCanvas className="fakeA4-canvas" onReady={onCanvasReady} />
    </div>
  );
};

export default PreviewPDF;
