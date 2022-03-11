import React from 'react';
import { Pie } from '@ant-design/charts';
import { Spin, Alert } from 'antd';
import { FormattedMessage } from 'umi';
import ProCard from '@ant-design/pro-card';
import type { QuestionnaireRaportState } from './Raports';

const config = {
  appendPadding: 10,
  angleField: 'value',
  colorField: 'label',
  radius: 0.9,
  label: {
    type: 'inner',
    offset: '-30%',

    content: function content(_ref: Record<string, any>) {
      const percent = _ref.percent as number;
      return percent >= 0.01 ? ''.concat((percent * 100).toFixed(0), '%') : '';
    },
    style: {
      fontSize: 14,
      textAlign: 'center',
    },
  },
  interactions: [{ type: 'element-active' }],
};

const QuestionnaireChart: React.FC<{ state: QuestionnaireRaportState; type: string }> = ({
  state,
  type,
}) => {
  return (
    <ProCard title={<FormattedMessage id={type} />} headerBordered style={{ height: '500px' }}>
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && state.value.length > 0 ? (
        <Pie
          {...config}
          data={state.value.map((val: Record<string, number | string>) => ({
            label: val.title,
            value: val[type],
          }))}
        />
      ) : (
        state.mode !== 'loading' && (
          <p>
            <FormattedMessage id="no_data" defaultMessage="no_data" />
          </p>
        )
      )}
      {state.mode === 'error' && <Alert message={state.error.data.message} type="error" />}
    </ProCard>
  );
};

export default QuestionnaireChart;
