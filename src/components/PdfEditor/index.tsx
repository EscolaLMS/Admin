import React, { useEffect, useRef } from 'react';
import type { SyntheticEvent } from 'react';
// @ts-ignore
import { ReportBro } from 'reportbro-designer';
import '../../../node_modules/reportbro-designer/dist/reportbro.css';
import './index.css';
const certificateData = require('./cerificate.json');

import type { ReportBroTemplate } from './types';

const getMockedValueForVariable = (varname: string) => {
  switch (varname.toLocaleLowerCase()) {
    case '@varusername':
      return 'John Doe';
    case '@varcoursetitle':
      return 'How to be an LMS Expert';
    case '@varappname':
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
  console.log('addVariablesToTemplate', template, variables, required_variables);

  const maxId = Math.max.apply(
    null,
    template.parameters.map((p) => p.id),
  );

  const dict: Record<string, ReportBroTemplate['parameters'][number]> = template.parameters.reduce(
    (acc, curr) => {
      return { ...acc, [curr.name]: curr };
    },
    {},
  );

  const tpl: Record<string, ReportBroTemplate['parameters'][number]> = variables
    .map((varname) => varname.replace('@', ''))
    .map((varname) => {
      console.log('c', varname);
      return varname;
    })
    .reduce((acc, curr, index) => {
      if (acc[curr]) {
        return acc;
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

  console.log('Object.values(tpl)', Object.values(tpl), dict);

  return Object.assign({}, template, { parameters: Object.values(tpl) });
};

export const PdfEditor: React.FC<{
  field: API.TemplateField;
  variables: string[];
  onTemplateSaved: (tpl: object) => void;
  reportBroTemplate?: object;
}> = ({ onTemplateSaved, reportBroTemplate = null, field, variables }) => {
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

      console.log('start', reportBroTemplate, certificateData);

      rb.load(
        addVariablesToTemplate(
          reportBroTemplate || certificateData,
          variables,
          field.required_variables,
        ),
      );
    }
  }, [ref]);

  return (
    <div ref={ref} className="pdf-editor" onClick={stopPropagation}>
      pdf editor
    </div>
  );
};

export default PdfEditor;
