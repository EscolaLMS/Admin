import React, { useEffect, useRef } from 'react';
import type { SyntheticEvent } from 'react';
// @ts-ignore
import { ReportBro } from 'reportbro-designer';
import '../../../node_modules/reportbro-designer/dist/reportbro.css';
import './index.css';
const certificateData = require('./cerificate.json');

export const PdfEditor: React.FC<{
  onTemplateSaved: (tpl: object) => void;
  reportBroTemplate?: object;
}> = ({ onTemplateSaved, reportBroTemplate = null }) => {
  const ref = useRef<HTMLDivElement>(null);

  const stopPropagation = (e: SyntheticEvent) => {
    e.nativeEvent.stopPropagation();
    e.nativeEvent.preventDefault();
  };

  useEffect(() => {
    if (ref.current) {
      const rb = new ReportBro(ref.current, {
        enableSpreadsheet: false,
        additionalFonts: [{ name: 'Tangerine', value: 'tangerine' }],
        reportServerUrl: 'https://reportbro.stage.etd24.pl/reportbro/report/run',
        saveCallback: () => {
          onTemplateSaved(rb.getReport());
        },
      });
      rb.load(reportBroTemplate || certificateData);
    }
  }, [ref]);

  return (
    <div ref={ref} className="pdf-editor" onClick={stopPropagation}>
      pdf editor
    </div>
  );
};

export default PdfEditor;
