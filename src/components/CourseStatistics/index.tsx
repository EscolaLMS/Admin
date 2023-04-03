import React, { useState, useEffect } from 'react';
import ProCard from '@ant-design/pro-card';
import { getCourseStats, program as fetchProgram } from '@/services/escola-lms/course';
import { Spin, Alert, Typography } from 'antd';
import Chart from './chart';
import { useIntl, FormattedMessage } from 'umi';
import { getFlatTopics } from '@/components/ProgramForm/Context';
import { UserProgress } from './userProgress';

export type FinishedTopicsUserStat = {
  id: number;
  finished_at: string;
  started_at: string;
  title: string;
  seconds: number;
};

export type FinishedTopicsUserStats = {
  email: string;
  id: number;
  topics: FinishedTopicsUserStat[];
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

const config = {
  xField: 'type',
  yField: 'value',
  seriesField: 'type',
  isRange: false,
  title: null,
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
  const [topics, setTopics] = useState<API.Topic[]>([]);
  const { Text } = Typography;
  const intl = useIntl();

  useEffect(() => {
    setState({ mode: 'loading' });

    Promise.all([fetchProgram(Number(courseId)), getCourseStats(Number(courseId))]).then(
      ([programResponse, statsResponse]) => {
        if (programResponse.success && statsResponse.success) {
          setTopics(getFlatTopics(programResponse.data.lessons));
          setState({
            mode: 'loaded',
            value: Object.entries(statsResponse.data).map((element) => {
              const type = intl.formatMessage({
                id: element[0].split('\\').pop(),
              });
              return {
                type,
                value: element[1],
              };
            }),
          });
        }
      },
    );
  }, []);

  return (
    <ProCard split="vertical">
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && (
        <>
          <UserProgress
            topics={topics}
            stats={
              state.value.find((element: courseStats) => element.type.includes('FinishedTopics'))
                ?.value as FinishedTopicsUserStats[]
            }
          />

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
              valueLabel={intl.formatMessage({ id: 'seconds', defaultMessage: 'seconds' })}
              value={Object.entries(
                state.value.find(
                  (element: courseStats) =>
                    element.type.split('\\').pop() ===
                    intl.formatMessage({ id: 'AverageTimePerTopic' }),
                ).value,
              ).map((element) => {
                return {
                  type: element[0],
                  value: element[1],
                  topic: topics.find((topic) => topic.id === Number(element[0])),
                };
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
