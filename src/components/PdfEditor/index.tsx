import type { SyntheticEvent } from 'react';
import React, { useEffect, useRef } from 'react';
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

function isObject(obj: unknown): obj is Record<string, unknown> {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}

function isReportBroTemplate(obj: unknown | ReportBroTemplate): obj is ReportBroTemplate {
  return (
    isObject(obj) &&
    typeof obj?.version === 'number' &&
    isObject(obj?.documentProperties) &&
    Array.isArray(obj?.styles) &&
    Array.isArray(obj?.parameters) &&
    Array.isArray(obj?.docElements)
  );
}

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
  onTemplateUpdated?: (tpl: object) => void;
}> = ({ onTemplateSaved, reportBroTemplate = null, field, variables, onTemplateUpdated }) => {
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
        fonts: [{ name: 'Open Sans', value: 'Open Sans' }],
        defaultFont: 'Open Sans',
        // src={`${window.REACT_APP_API_URL || REACT_APP_API_URL}/api/scorm/play/${uuid}`}
        reportServerUrl: `${
          window.REACT_APP_API_URL || REACT_APP_API_URL
        }/api/pdfs/reportbro/report/run`,
        saveCallback: () => {
          onTemplateSaved(rb.getReport());
        },
        cmdExecutedCallback: () => {
          if (onTemplateUpdated) {
            onTemplateUpdated(rb.getReport());
          }
        },
      });

      if (reportBroTemplate && isReportBroTemplate(reportBroTemplate)) {
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
