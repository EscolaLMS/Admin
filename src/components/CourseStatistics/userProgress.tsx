import React, { useMemo, useState } from 'react';
import { Row, Select, Space, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ProCard from '@ant-design/pro-card';
import { Column } from '@ant-design/plots';
import { FormattedMessage, useIntl } from 'umi';
import ScrollContainer from 'react-indiana-drag-scroll';

import TypeButtonDrawer from '../TypeButtonDrawer';
import { ExportStatsButton } from './ExportStatsButton';

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
  course_id: number;
  topics: API.Topic[];
  stats: API.FinishedTopicsUserStats[];
}> = ({ course_id, topics, stats }) => {
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
                    <Tag color="success">F</Tag>
                    {showSeconds && <small>{minutes.toFixed(2)}m</small>}
                  </Space>
                );
              case 2:
                return (
                  <Space>
                    <Tag color="blue">S</Tag>
                    {showSeconds && <small>{minutes.toFixed(2)}m</small>}
                  </Space>
                );
              case 0:
              default:
                return (
                  <React.Fragment>
                    <Tag color="error">N</Tag>
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
        <Row justify="space-between" align="middle">
          <Space>
            <FormattedMessage id="Finished" defaultMessage="Finished:" />{' '}
            <Tag color="success">F</Tag>
            <FormattedMessage id="Started" defaultMessage="Started:" /> <Tag color="blue">S</Tag>
            <FormattedMessage id="NotStarted" defaultMessage="Not Started:" />{' '}
            <Tag color="error">N</Tag>
            <FormattedMessage id="ShowMinutes" defaultMessage="Show minutes spent on topic:" />{' '}
            <Switch checked={showSeconds} onChange={(v) => setShowSeconds(v)} />
          </Space>
          <ExportStatsButton course_id={course_id} />
        </Row>
      )}
      columns={columns}
      dataSource={dataSource}
      size="small"
      scroll={{ x: 1500 }}
      components={{
        table: (props: React.HTMLAttributes<HTMLTableElement>) => (
          <ScrollContainer horizontal={true} style={{ maxWidth: 'auto' }} hideScrollbars={false}>
            <table {...props} />
          </ScrollContainer>
        ),
      }}
    />
  );
};

export const UserCourseFinish: React.FC<{
  stats: API.FinishedCourseUserStats[];
  attempts: API.CourseAttempts[];
}> = ({ stats, attempts }) => {
  const columns: ColumnsType<{ email: string; finished_at: Date | string }> = useMemo(() => {
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
      {
        title: <FormattedMessage id="attempt" defaultMessage="Attempt" />,
        dataIndex: 'attempt',
      },
      {
        title: <FormattedMessage id="finished_at" defaultMessage="Finished at" />,
        dataIndex: 'finished_at',
      },
    ];
  }, []);

  const dataSource: { email: string; finished_at: Date | string }[] = useMemo(() => {
    return stats.map(({ id, email, finished_at }) => {
      const courseAttempts = attempts?.find((attempt) => attempt.id === id);
      return {
        id,
        email,
        finished_at,
        attempt: courseAttempts?.attempts.length || 0,
      };
    });
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
  const intl = useIntl();

  const dataSource = useMemo(() => {
    return stats.flatMap((userStats) =>
      Object.values(userStats.attempts).flatMap(({ dates, attempt }) => {
        const datesValue = Object.values(dates).flatMap(({ date, seconds_total }) => {
          return {
            date,
            attempt,
            seconds_total,
            email: userStats.email,
          };
        });

        return datesValue;
      }),
    );
  }, [stats]);

  const config: any = {
    xField: 'date',
    yField: 'seconds_total',
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
    <ProCard
      title={
        <Space>
          <FormattedMessage id="course.interactions_time_in_days" />
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
            {[
              ...new Set(
                dataSource
                  .filter(({ email }) => email === choosenUserEmail)
                  .map(({ attempt }) => attempt),
              ),
            ].map((attempt) => (
              <Select.Option value={attempt} key={attempt}>
                <FormattedMessage id="attempt" defaultMessage="Attempt" /> {attempt}
              </Select.Option>
            ))}
          </Select>
        </Space>
      }
      colSpan={12}
      layout="center"
    >
      <div style={{ overflow: 'auto', minHeight: '400px', width: '100%' }}>
        <Column
          {...config}
          tooltip={{
            title: `${intl.formatMessage({ id: 'attempt' })}`,
            formatter: (datum) => {
              const minutes = Math.floor(+datum.seconds_total / 60);
              const seconds = +datum.seconds_total > 60 ? +datum.seconds_total - minutes * 60 : 0;

              return {
                name: datum.attempt,
                value: `${minutes}m ${seconds}s`,
              };
            },
          }}
          data={dataSource
            .filter(({ email }) => email === choosenUserEmail)
            .filter(({ attempt }) =>
              Number.isInteger(choosenAttempt) ? attempt === choosenAttempt : true,
            )}
        />
      </div>
    </ProCard>
  );
};
