import type { FinishedTopicsUserStats, FinishedTopicsUserStat } from './index';
import { Space, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useMemo, useState } from 'react';
import { FormattedMessage } from 'umi';
import TypeButtonDrawer from '../TypeButtonDrawer';

type UserStatColumn = Record<string, number | string | FinishedTopicsUserStat> & {
  email: string;
  id: number;
};

const findH5PType = (topic: API.TopicH5P) => {
  if (topic.topicable.content.contents) {
    return Object.values(topic.topicable.content.contents)[0].library;
  }
  return 'H5P';
};

export const UserProgress: React.FC<{ topics: API.Topic[]; stats: FinishedTopicsUserStats[] }> = ({
  topics,
  stats,
}) => {
  const [showSeconds, setShowSeconds] = useState(true);
  const columns: ColumnsType<UserStatColumn> = useMemo(() => {
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
      ...topics.map((topic) => {
        let type: string | undefined = topic.topicable_type?.split('\\').pop();

        if (type === 'H5P') {
          type = findH5PType(topic as API.TopicH5P);
        }

        return {
          render: (row: FinishedTopicsUserStat | undefined) => {
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
          <FormattedMessage id="ShowSeconds" defaultMessage="Show minutes spent on topic:" />{' '}
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
