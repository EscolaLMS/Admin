import React, { useState, useEffect } from 'react';
import ProCard from '@ant-design/pro-card';
import { Alert, Spin, Statistic } from 'antd';
import { reports } from '@/services/escola-lms/reports';
import { TrophyOutlined } from '@ant-design/icons';
import './index.less';

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
      value: API.ReportItem[];
    };

const Statistics: React.FC<{ metric: API.ReportType; header?: boolean }> = ({ metric }) => {
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
    <ProCard headerBordered>
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && (
        <div className="statistics">
          {state.value.slice(0, 3).map(({ label }, idx) => (
            <Statistic
              key={label}
              title={`${idx > 0 ? 'Top' : 'Best'} selling course`}
              prefix={<TrophyOutlined style={{ fontSize: '45px', color: '#FAD337' }} />}
              value={label}
            />
          ))}
        </div>
      )}
      {state.mode === 'error' && <Alert message={state.error} type="error" />}
    </ProCard>
  );
};

export default Statistics;
