import { Select, Space, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useMemo, useState } from 'react';
import { FormattedMessage } from 'umi';
import TypeButtonDrawer from '../TypeButtonDrawer';
import Chart from './chart';
import ProCard from '@ant-design/pro-card';

type UserStatColumn = Record<string, number | string | API.FinishedTopicsUserStat> & {
  email: string;
  id: number;
};

const findH5PType = (topic: API.TopicH5P) => {
  if (topic.topicable.content.contents) {
    return Object.values(topic.topicable.content.contents)[0].library;
  }
  return 'H5P';
};

export const UserProgress: React.FC<{
  topics: API.Topic[];
  stats: API.FinishedTopicsUserStats[];
}> = ({ topics, stats }) => {
  const [showSeconds, setShowSeconds] = useState(false);
  const columns: ColumnsType<UserStatColumn> = useMemo(() => {
    return [
      {
        title: <FormattedMessage id="user" />,
        dataIndex: 'id',
        render: (id: number) => <TypeButtonDrawer type="App\Models\User" type_id={id} />,
      },
      {
        title: <FormattedMessage id="email" />,
        dataIndex: 'email',
      },
      ...topics.map((topic) => {
        let type: string | undefined = topic.topicable_type?.split('\\').pop();

        if (type === 'H5P') {
          type = findH5PType(topic as API.TopicH5P);
        }

        return {
          render: (row: API.FinishedTopicsUserStat | undefined) => {
            let result = 0;
            let minutes = 0;
            if (row) {
              if (row.started_at && row.finished_at) {
                result = 1;
              } else if (row.started_at) {
                result = 2;
              }
              minutes = row.seconds / 60;
            }

            switch (result) {
              case 1:
                return (
                  <Space>
                    <Tag>F</Tag>
                    {showSeconds && <small>{minutes.toFixed(2)}m</small>}
                  </Space>
                );
              case 2:
                return (
                  <Space>
                    <Tag>S</Tag>
                    {showSeconds && <small>{minutes.toFixed(2)}m</small>}
                  </Space>
                );
              case 0:
              default:
                return (
                  <React.Fragment>
                    <Tag>N</Tag>
                  </React.Fragment>
                );
            }
          },

          title: (
            <small>
              <Tag>{type}</Tag> {topic.title}
            </small>
          ),
          dataIndex: topic.id,
        };
      }),
    ];
  }, [topics, showSeconds]);

  const dataSource: UserStatColumn[] = useMemo(() => {
    return stats.map((userStat) =>
      topics.reduce(
        (acc, topic) => {
          const result = userStat.topics.find((userStatTopic) => userStatTopic.id === topic.id);
          return { ...acc, [Number(topic.id)]: result ?? 0 };
        },
        { email: userStat.email, id: userStat.id } as UserStatColumn,
      ),
    );
  }, [stats, topics]);

  return (
    <Table
      title={() => (
        <Space>
          <FormattedMessage id="Finished" defaultMessage="Finished" />: <Tag>F</Tag>
          <FormattedMessage id="Started" defaultMessage="Started" />: <Tag>S</Tag>
          <FormattedMessage id="NotStarted" defaultMessage="Not Started" />: <Tag>N</Tag>
          <FormattedMessage id="ShowMinutes" defaultMessage="Show minutes spent on topic:" />{' '}
          <Switch checked={showSeconds} onChange={(v) => setShowSeconds(v)} />
        </Space>
      )}
      columns={columns}
      dataSource={dataSource}
      size="small"
      scroll={{ x: 1500 }}
    />
  );
};

export const UserCourseFinish: React.FC<{ stats: API.FinishedCourseUserStats[] }> = ({ stats }) => {
  const columns: ColumnsType<{ email: string; finished_at: Date | string }> = useMemo(() => {
    return [
      {
        title: 'user',
        dataIndex: 'id',
        render: (id: number) => <TypeButtonDrawer type="App\Models\User" type_id={id} />,
      },
      {
        title: 'email',
        dataIndex: 'email',
      },
      {
        title: <FormattedMessage id="finished_at" defaultMessage="Finished at" />,
        dataIndex: 'finished_at',
      },
    ];
  }, []);

  const dataSource: { email: string; finished_at: Date | string }[] = useMemo(() => {
    return stats.map(({ id, email, finished_at }) => ({
      id,
      email,
      finished_at,
    }));
  }, [stats]);

  return (
    <Table
      title={() => (
        <Space>
          <FormattedMessage id="course.finished" defaultMessage="Finished" />
        </Space>
      )}
      columns={columns}
      dataSource={dataSource}
      size="small"
      scroll={{ x: 500 }}
    />
  );
};

export const UserCourseAttempts: React.FC<{ stats: API.CourseAttempts[] }> = ({ stats }) => {
  const [choosenUserEmail, setChoosenUserEmail] = useState<string | null>(null);
  const [choosenAttempt, setChoosenAttempt] = useState<number | null>(null);

  const dataSource = useMemo(() => {
    return stats.map((userStats) =>
      Object.values(userStats.attempts).flatMap(({ dates, attempt }) => {
        const { date, times } = Object.values(dates)[0];
        return {
          date,
          attempt,
          times: times.length,
          email: userStats.email,
        };
      }),
    );
  }, [stats]);

  const config = {
    xField: 'date',
    yField: 'times',
    seriesField: 'attempt',
    isStack: true,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    slider: {
      start: 0,
      end: 1,
    },
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return (
    <ProCard colSpan={12} layout="center">
      <Chart
        config={config}
        title={
          <Space>
            <FormattedMessage id="course.interactions_in_days" />
            <Select
              showSearch
              value={choosenUserEmail}
              onChange={(newValue) => {
                setChoosenUserEmail(newValue);
                setChoosenAttempt(null);
              }}
              placeholder={<FormattedMessage id="select_person" defaultMessage="Select a person" />}
            >
              {stats.map(({ id, email }) => (
                <Select.Option key={id} value={email}>
                  {email}
                </Select.Option>
              ))}
            </Select>
            <Select
              value={choosenAttempt}
              onChange={(newValue) => setChoosenAttempt(newValue)}
              disabled={choosenUserEmail === null}
              placeholder={<FormattedMessage id="select_attempt" defaultMessage="Select attempt" />}
            >
              {dataSource
                .flatMap((data) => data)
                .filter(({ email }) => email === choosenUserEmail)
                .map(({ attempt }) => (
                  <Select.Option value={attempt} key={attempt}>
                    <FormattedMessage id="attempt" defaultMessage="Attempt" /> {attempt}
                  </Select.Option>
                ))}
            </Select>
          </Space>
        }
        value={dataSource
          .flatMap((data) => data)
          .filter(({ email }) => email === choosenUserEmail)
          .filter(({ attempt }) =>
            Number.isInteger(choosenAttempt) ? attempt === choosenAttempt : true,
          )}
      />
    </ProCard>
  );
};
