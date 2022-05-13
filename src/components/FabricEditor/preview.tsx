import React, { useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import type { fabric } from 'fabric';
import { fonts, setFonts } from './utils';
import 'svg2pdf.js';

const fontsManager = (collection: NodeListOf<SVGTSpanElement>) => {
  collection.forEach((tspan: SVGTSpanElement) => {
    const currFont = tspan.style['font-family'];

    const findedFont = fonts.find((t) => currFont.replace(/['"]+/g, '').toLowerCase() in t);
    if (findedFont) {
      if (tspan.style.fontWeight === 'bold' && tspan.style.fontStyle === 'italic') {
        tspan.style.fontFamily = `${findedFont[Object.keys(findedFont)[0]][3]}`;
      } else if (tspan.style.fontWeight === 'bold') {
        tspan.style.fontFamily = `${findedFont[Object.keys(findedFont)[0]][1]}`;
      } else if (tspan.style.fontStyle === 'italic') {
        tspan.style.fontFamily = `${findedFont[Object.keys(findedFont)[0]][2]}`;
      } else {
        tspan.style.fontFamily = `${findedFont[Object.keys(findedFont)[0]][0]}`;
      }
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
