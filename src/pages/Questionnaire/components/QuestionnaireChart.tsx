import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import { Spin, Alert } from 'antd';
import { FormattedMessage } from 'umi';
import ProCard from '@ant-design/pro-card';
import { questionnaireReport } from '@/services/escola-lms/questionnaire';

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

type State =
  | {
      mode: 'init';
    }
  | {
      mode: 'loading';
    }
  | {
      mode: 'error';
      error: string;
    }
  | {
      mode: 'loaded';
      value: any;
    };

const QuestionnaireChart: React.FC<{ id: number; type: string }> = ({ id, type }) => {
  const [state, setState] = useState<State>({ mode: 'init' });

  useEffect(() => {
    setState({ mode: 'loading' });
    questionnaireReport(id)
      .then((response) => {
        if (response.success) {
          setState({
            mode: 'loaded',
            value: response.data.map((val) => ({
              label: val.title,
              value: val[type],
            })),
          });
        } else {
          setState({ mode: 'error', error: response.message });
        }
      })
      .catch((err) => setState({ mode: 'error', error: err.toString() }));
  }, [id, type]);

  return (
    <ProCard title={<FormattedMessage id={type} />} headerBordered style={{ height: '500px' }}>
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && <Pie {...config} data={state.value} />}
      {state.mode === 'error' && <Alert message={state.error} type="error" />}
    </ProCard>
  );
};

export default QuestionnaireChart;
