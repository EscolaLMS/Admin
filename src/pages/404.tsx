import { Button, Result } from 'antd';
import React from 'react';
import { history, FormattedMessage } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle={<FormattedMessage id="404_subtitle" />}
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        <FormattedMessage id="back_home" />
      </Button>
    }
  />
);

export default NoFoundPage;
