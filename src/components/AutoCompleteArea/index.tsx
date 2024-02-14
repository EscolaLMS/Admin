import ReactTextareaAutocomplete from '@webscopeio/react-textarea-autocomplete';
import React from 'react';
// https://github.com/webscopeio/react-textarea-autocomplete
import '@webscopeio/react-textarea-autocomplete/style.css';
import { FormattedMessage } from 'umi';
import './index.css';

type ItemProps = {
  selected: boolean;
  entity: Variable;
};

type Variable = {
  name: string;
  required: boolean;
};

const Item = (props: ItemProps) => {
  return <div className={`${props.entity.required && 'required'}`}>@{`${props.entity.name}`}</div>;
};

const AutoCompleteArea: React.FC<{
  requiredVariables: string[];
  variables: string[];
  onChange: (value: string) => void;
  value: string;
  error: string[];
  styles?: React.CSSProperties;
}> = ({ requiredVariables, variables, onChange, value, error, styles }) => {
  const varsObject = variables.map((v: string) => ({
    name: v.substring(1),
    required: requiredVariables.includes(v),
  }));

  return (
    <React.Fragment>
      <ReactTextareaAutocomplete
        style={styles}
        className={`ant-input pro-field pro-field-lg rta__textarea_wide ${error.length && 'error'}`}
        onChange={(e) => onChange(e.target.value)}
        loadingComponent={() => <FormattedMessage id="loading" />}
        minChar={0}
        value={value}
        itemStyle={{ fontSize: '16px' }}
        trigger={{
          '@': {
            dataProvider: (token) => {
              return varsObject.filter((v) => v.name.startsWith(token));
            }, // @ts-ignore
            component: Item,
            output: (item, trigger) => {
              // @ts-ignore
              return `${trigger}${item.name}`;
            },
          },
        }}
      />
      <div role="alert" className="ant-form-item-explain-error">
        {error}
      </div>
    </React.Fragment>
  );
};

export default AutoCompleteArea;
