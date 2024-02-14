import { Button, Result } from 'antd';
import React from 'react';
import { FormattedMessage, history } from 'umi';

const RestrictedPage: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle={<FormattedMessage id="403_subtitle" />}
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        <FormattedMessage id="back_home" />
      </Button>
    }
  />
);

export default RestrictedPage;
