import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import { reports } from '@/services/escola-lms/reports';
import { Spin, Alert } from 'antd';
import { FormattedMessage } from 'umi';
import ProCard from '@ant-design/pro-card';

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
      return ''.concat((percent * 100).toFixed(0), '%');
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
      value: API.Report;
    };

const PieChart: React.FC<{ metric: API.ReportType }> = ({ metric }) => {
  const [state, setState] = useState<State>({ mode: 'init' });

  useEffect(() => {
    setState({ mode: 'loading' });
    reports({ metric })
      .then((response) => {
        if (response.success) {
          setState({ mode: 'loaded', value: response.data });
        } else {
          setState({ mode: 'error', error: response.message });
        }
      })
      .catch((err) => setState({ mode: 'error', error: err.toString() }));
  }, [metric]);

  return (
    <ProCard
      title={<FormattedMessage id={metric.split('\\').pop()} defaultMessage={metric.split('\\').pop()} />}
      headerBordered
    >
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && <Pie {...config} data={state.value} />}
      {state.mode === 'error' && <Alert message={state.error} type="error" />}
    </ProCard>
  );
};

export default PieChart;
