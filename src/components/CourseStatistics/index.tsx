import React, { useState, useEffect } from 'react';
import ProCard from '@ant-design/pro-card';
import { getCourseStats } from '@/services/escola-lms/course';
import { Spin, Alert, Typography } from 'antd';
import Chart from './chart';
import { useIntl, FormattedMessage } from 'umi';

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

const config = {
  xField: 'type',
  yField: 'value',
  seriesField: 'type',
  legend: false,
  isRange: true,
  title: null,
  tooltip: {
    showTitle: false,
  },
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  interactions: [
    {
      type: 'active-region',
      enable: false,
    },
  ],
  columnBackground: { style: { fill: 'rgba(0,0,0,0.1)' } },
};

interface courseStats {
  type: string;
  value: number;
}

const CourseStatistics: React.FC<{ courseId: string }> = ({ courseId }) => {
  const [state, setState] = useState<State>({ mode: 'init' });
  const { Text } = Typography;
  const intl = useIntl();

  useEffect(() => {
    setState({ mode: 'loading' });
    getCourseStats(Number(courseId))
      .then((response) => {
        if (response.success) {
          setState({
            mode: 'loaded',
            value: Object.entries(response.data).map((element) => {
              return {
                type: intl.formatMessage({
                  id: element[0].split('\\').pop(),
                }),
                value: element[1],
              };
            }),
          });
        } else {
          setState({ mode: 'error', error: response.message });
        }
      })
      .catch((err) => setState({ mode: 'error', error: err.toString() }));
  }, []);

  return (
    <ProCard split="vertical">
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && (
        <>
          <Text>
            <FormattedMessage id="MoneyEarned" />
            {`: ${
              state.value.find(
                (element: courseStats) =>
                  element.type.split('\\').pop() === intl.formatMessage({ id: 'MoneyEarned' }),
              ).value
            }`}
          </Text>

          <ProCard colSpan={12} layout="center">
            <Chart
              config={config}
              title={<FormattedMessage id="People" />}
              value={state.value.filter((element: courseStats) => {
                const type = element.type.split('\\').pop();
                return (
                  type === intl.formatMessage({ id: 'PeopleBought' }) ||
                  type === intl.formatMessage({ id: 'PeopleFinished' }) ||
                  type === intl.formatMessage({ id: 'PeopleStarted' })
                );
              })}
            />
          </ProCard>
          <ProCard colSpan={12} layout="center">
            <Chart
              config={config}
              title={<FormattedMessage id="AverageTimePerTopic" />}
              value={Object.entries(
                state.value.find(
                  (element: courseStats) =>
                    element.type.split('\\').pop() ===
                    intl.formatMessage({ id: 'AverageTimePerTopic' }),
                ).value,
              ).map((element) => {
                return { type: element[0], value: element[1] };
              })}
            >
              <Text>
                <FormattedMessage id="AverageTime" />
                {`: 
                    ${
                      state.value.find(
                        (element: courseStats) =>
                          element.type.split('\\').pop() ===
                          intl.formatMessage({ id: 'AverageTime' }),
                      ).value
                    }
                  `}
              </Text>
            </Chart>
          </ProCard>
        </>
      )}
      {state.mode === 'error' && <Alert message={state.error} type="error" />}
    </ProCard>
  );
};

export default CourseStatistics;
