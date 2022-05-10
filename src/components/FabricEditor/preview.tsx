import React, { useEffect } from 'react';
import { jsPDF } from 'jspdf';

import 'svg2pdf.js';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import type { fabric } from 'fabric';

import { arialFont } from './fonts/arial';
import { timesNewRomanFont } from './fonts/times';

import { monacoFont } from './fonts/monaco';

const fonts = [{ arial: 'ARIAL' }, { 'times new roman': 'times' }, { monaco: 'monaco' }];

const setFonts = (doc: any) => {
  doc.addFileToVFS('ARIAL-normal.ttf', arialFont);
  doc.addFont('ARIAL-normal.ttf', 'ARIAL', 'normal');
  doc.addFileToVFS('times-normal.ttf', timesNewRomanFont);
  doc.addFont('times-normal.ttf', 'times', 'normal');
  doc.addFileToVFS('monaco-normal.ttf', monacoFont);
  doc.addFont('monaco-normal.ttf', 'monaco', 'normal');
};

const fontsManager = (collection: any) => {
  collection.forEach((tspan: HTMLElement) => {
    const currFont = tspan.style['font-family'];
    const findFont = fonts.find((t) => currFont.toLowerCase() in t);
    if (findFont) {
      tspan.style.fontFamily = `${findFont[Object.keys(findFont)[0]]}`;
    }
  });
};

const PreviewPDF: React.FC<{
  svgDef: string;
  width: number;
  height: number;
  mode?: 'file' | 'blob';
}> = ({ svgDef, width = 840, height = 592 }) => {
  useEffect(() => {
    const doc = new jsPDF('l', 'px', [width, height]);

    setFonts(doc);

    const parser = new DOMParser();
    const element = parser.parseFromString(svgDef, 'image/svg+xml');

    const bg = element.documentElement.querySelector('rect');
    const texts = element.documentElement.querySelectorAll('tspan');
    // hack for background
    // svg2pdf.js don't support % units (for now)
    if (bg) {
      bg.setAttribute('width', width + 'px');
      bg.setAttribute('height', height + 'px');
    }
    if (texts) {
      fontsManager(texts);
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
}> = ({ initialValue, width = 840, height = 592, onRendered, mode = 'file', onError }) => {
  const { onReady } = useFabricJSEditor();

  const onCanvasReady = (canvas: fabric.Canvas) => {
    if (initialValue) {
      try {
        const data = typeof initialValue === 'string' ? JSON.parse(initialValue) : initialValue;

        canvas.loadFromJSON(data, () => {
          const svgDef = canvas.toSVG();

          const doc = new jsPDF('l', 'px', [width, height]);
          setFonts(doc);

          const parser = new DOMParser();
          const element = parser.parseFromString(svgDef, 'image/svg+xml');

          const bg = element.documentElement.querySelector('rect');
          const texts = element.documentElement.querySelectorAll('tspan');
          // const span = element.documentElement.querySelector('tspan');
          if (bg) {
            bg.setAttribute('width', width + 'px');
            bg.setAttribute('height', height + 'px');
          }

          if (texts) {
            fontsManager(texts);
          }

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
