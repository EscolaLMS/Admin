import React, { useEffect, useRef } from 'react';
import type { SyntheticEvent } from 'react';
declare const REACT_APP_API_URL: string;

// @ts-ignore
import { ReportBro } from 'reportbro-designer';
import '../../../node_modules/reportbro-designer/dist/reportbro.css';
import './index.css';

import type { ReportBroTemplate } from './types';

const getMockedValueForVariable = (varname: string) => {
  switch (varname.toLocaleLowerCase()) {
    case 'varusername':
      return 'John Doe';
    case 'varcoursetitle':
      return 'How to be an LMS Expert';
    case 'varappname':
      return 'Wellms Headless LMS';
    default:
      return 'Lorem Ipsum';
  }
};

const addVariablesToTemplate = (
  template: ReportBroTemplate,
  variables: string[],
  required_variables: string[],
): ReportBroTemplate => {
  const maxId =
    Math.max.apply(
      null,
      template.parameters
        ? [template.parameters.map((p) => p.id), template.docElements.map((p) => p.id)].flat()
        : [1],
    ) + 1;

  const dict: Record<string, ReportBroTemplate['parameters'][number]> = template.parameters
    ? template.parameters.reduce((acc, curr) => {
        return { ...acc, [curr.name]: curr };
      }, {})
    : {};

  const tpl: Record<string, ReportBroTemplate['parameters'][number]> = variables
    .map((varname) => varname.replace('@', ''))

    .reduce((acc, curr, index) => {
      if (acc[curr]) {
        return {
          ...acc,
          [curr]: {
            ...acc[curr],
            id: maxId + index,
          },
        };
      }
      return {
        ...acc,
        [curr]: {
          id: maxId + index,
          name: curr,
          type: 'string',
          arrayItemType: 'string',
          eval: false,
          nullable: !required_variables.includes(curr),
          pattern: '',
          expression: '',
          showOnlyNameType: false,
          testData: getMockedValueForVariable(curr),
        },
      };
    }, dict);

  return Object.assign({}, template, { parameters: Object.values(tpl) });
};

export const PdfEditor: React.FC<{
  field: API.TemplateField;
  variables: string[];
  onTemplateSaved: (tpl: object) => void;
  reportBroTemplate?: ReportBroTemplate;
}> = ({ onTemplateSaved, reportBroTemplate = null, field, variables }) => {
  const ref = useRef<HTMLDivElement>(null);

  const stopPropagation = (e: SyntheticEvent) => {
    const tagName = (e.nativeEvent.target as HTMLElement).tagName.toLowerCase();
    switch (tagName) {
      case 'span':
      case 'button':
        e.nativeEvent.stopPropagation();
        e.nativeEvent.preventDefault();
      default:
        return;
    }
  };

  useEffect(() => {
    if (ref.current) {
      const rb = new ReportBro(ref.current, {
        enableSpreadsheet: false,
        additionalFonts: [{ name: 'Tangerine', value: 'tangerine' }],
        // src={`${window.REACT_APP_API_URL || REACT_APP_API_URL}/api/scorm/play/${uuid}`}
        //reportServerUrl: 'https://reportbro.stage.etd24.pl/reportbro/report/run', // TODO use env vars
        reportServerUrl: `${
          window.REACT_APP_API_URL || REACT_APP_API_URL
        }/api/pdfs/reportbro/report/run`, // TODO use env vars
        saveCallback: () => {
          onTemplateSaved(rb.getReport());
        },
      });

      if (reportBroTemplate) {
        rb.load(addVariablesToTemplate(reportBroTemplate, variables, field.required_variables));
      }
    }
  }, [ref]);

  return (
    <div ref={ref} className="pdf-editor" onClick={stopPropagation}>
      pdf editor
    </div>
  );
};

export default PdfEditor;
