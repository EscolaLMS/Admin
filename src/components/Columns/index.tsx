import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import ProCard from '@ant-design/pro-card';
import { useIntl } from 'umi';
import { Alert, Spin } from 'antd';
import { dataRangeStats } from '@/services/escola-lms/user';

const config = {
  isGroup: true,
  xField: 'date',
  yField: 'value',
  seriesField: 'name',
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
      value: Record<string, any>;
    };

const Columns: React.FC<{ metric: API.ReportType }> = ({ metric }) => {
  const [state, setState] = useState<State>({ mode: 'init' });
  const intl = useIntl();

  useEffect(() => {
    setState({ mode: 'loading' });

    dataRangeStats()
      .then((response) => {
        if (response.success) {
          setState({
            mode: 'loaded',
            value: Object.entries(response.data).reduce(
              (acc, value) => ({
                ...acc,
                [intl.formatMessage({
                  id: value[0].split('\\').pop(),
                })]: value[1],
              }),
              {},
            ),
          });
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
        <div>
          <Column
            {...config}
            data={[
              ...Object.entries({ ...state.value.ActiveUsers }).map(([key, val]) => ({
                date: key,
                name: 'Active users',
                value: val,
              })),
              ...Object.entries({ ...state.value.NewUsers }).map(([key, val]) => ({
                date: key,
                name: 'New users',
                value: val,
              })),
            ]}
          />
        </div>
      )}
      {state.mode === 'error' && <Alert message={state.error} type="error" />}
    </ProCard>
  );
};

export default Columns;
