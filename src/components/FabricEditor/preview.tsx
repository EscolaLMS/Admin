import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import 'svg2pdf.js';

const PreviewPDF: React.FC<{ svgDef: string; width: number; height: number }> = ({
  svgDef,
  width,
  height,
}) => {
  const [iframeSrc, setIframeSrc] = useState<string>();

  useEffect(() => {
    const doc = new jsPDF('l', 'px', [width, height]);

    const parser = new DOMParser();
    const element = parser.parseFromString(svgDef, 'image/svg+xml');

    doc.svg(element.documentElement).then(() => {
      // save the created pdf
      doc.save('myPDF.pdf');
    });
  }, [svgDef]);
  return <div>{iframeSrc && <iframe src={iframeSrc} />}</div>;
};

export default PreviewPDF;
