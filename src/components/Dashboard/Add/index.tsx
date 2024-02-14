import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Row, Space, Typography } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';

interface Props {
  onAddButtonClick: (key: string) => void;
  keys: string[];
}

const Add: React.FC<Props> = ({ onAddButtonClick, keys }) => (
  <div className="dashboard-draggable__component">
    <article className="dashboard-draggable__add">
      <Row align="middle" justify="center">
        <Typography.Title level={3}>
          <FormattedMessage id="add_new_component" />
        </Typography.Title>
      </Row>
      <Row align="middle" justify="center">
        <Space wrap style={{ justifyContent: 'center' }}>
          {keys.map((key) => (
            <Button
              icon={<PlusSquareOutlined />}
              size="small"
              type="primary"
              key={key}
              onClick={() => onAddButtonClick(key)}
            >
              {' '}
              <FormattedMessage id={key} />
            </Button>
          ))}
        </Space>
      </Row>
    </article>
  </div>
);

export default Add;
