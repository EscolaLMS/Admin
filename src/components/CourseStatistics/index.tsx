import { CourseTopicsStatistics } from '@/components/CourseTopicsStatistics';
import { getFlatTopics } from '@/components/ProgramForm/Context';
import { program as fetchProgram, getCourseStats } from '@/services/escola-lms/course';
import ProCard from '@ant-design/pro-card';
import { Alert, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import Chart from './chart';
import { UserCourseAttempts, UserCourseFinish, UserProgress } from './userProgress';

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
      // TODO #1009 add type
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
  value:
    | API.CourseAttempts[]
    | Record<string, API.CourseStatsAverageTimePerTopic>
    | number
    | API.FinishedCourseUserStats[]
    | API.FinishedTopicsUserStats[];
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
            value: Object.entries(statsResponse.data).map(([key, value]) => {
              const type = intl.formatMessage({
                id: key.split('\\').pop(),
              });
              return {
                type,
                value,
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
            course_id={Number(courseId)}
            topics={topics}
            stats={
              state.value.find((element: courseStats) => element.type.includes('FinishedTopics'))
                ?.value as API.FinishedTopicsUserStats[]
            }
          />

          <UserCourseFinish
            stats={
              state.value.find((element: courseStats) => element.type.includes('FinishedCourse'))
                ?.value as API.FinishedCourseUserStats[]
            }
            attempts={
              state.value.find((element: courseStats) => element.type.includes('AttendanceList'))
                ?.value as API.CourseAttempts[]
            }
          />

          <UserCourseAttempts
            stats={
              state.value.find((element: courseStats) => element.type.includes('AttendanceList'))
                ?.value as API.CourseAttempts[]
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
              ).map((element) => ({
                type: element[0],
                value: (element[1] as API.CourseStatsAverageTimePerTopic)?.average_time,
                topic: topics.find((topic) => topic.id === Number(element[0])),
              }))}
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
          <ProCard>
            <CourseTopicsStatistics flatTopics={topics} />
          </ProCard>
        </>
      )}
      {state.mode === 'error' && <Alert message={state.error} type="error" />}
    </ProCard>
  );
};

export default CourseStatistics;
