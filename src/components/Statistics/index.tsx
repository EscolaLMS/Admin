import { reports } from '@/services/escola-lms/reports';
import { TrophyOutlined } from '@ant-design/icons';
import { Alert, Spin, Statistic } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

interface LoadedValue {
  bestRated: API.Report;
  bestSelling: API.Report;
}

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
      value: LoadedValue;
    };

const Statistics: React.FC<{
  metric: Record<'bestRated' | 'bestSelling', API.ReportType>;
}> = ({ metric }) => {
  const [state, setState] = useState<State>({ mode: 'init' });

  useEffect(() => {
    setState({ mode: 'loading' });

    const bestRatedRequest = reports({ metric: metric.bestRated });
    const bestSellingRequest = reports({ metric: metric.bestSelling });

    Promise.all([bestRatedRequest, bestSellingRequest])
      .then((response) => {
        if (response.length) {
          const [bestRated, bestSelling] = response;

          if (bestRated.success && bestSelling.success) {
            setState({
              mode: 'loaded',
              value: {
                bestRated: bestRated.data,
                bestSelling: bestSelling.data,
              },
            });
          } else {
            setState({ mode: 'error', error: bestRated.message ?? bestSelling.message });
          }
        }
      })
      .catch((err) => setState({ mode: 'error', error: err.toString() }));
  }, [metric]);

  return (
    <>
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && (
        <div className="statistics">
          {state.value.bestSelling.slice(0, 2).map(({ label }, idx) => (
            <Statistic
              key={label}
              title={`${idx > 0 ? 'Top' : 'Best'} selling course`}
              prefix={<TrophyOutlined style={{ fontSize: '45px', color: '#FAD337' }} />}
              value={label}
            />
          ))}
          {state.value.bestRated.length > 0 && (
            <Statistic
              title={`Best rated course`}
              prefix={<TrophyOutlined style={{ fontSize: '45px', color: '#FAD337' }} />}
              value={state.value.bestRated[0].label}
            />
          )}
        </div>
      )}
      {state.mode === 'error' && <Alert message={state.error} type="error" />}
    </>
  );
};

export default Statistics;
