import React from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'umi';

// TODO add fetch fn onClick
export const GiftQuizRow: React.FC<{
  id: number;
}> = ({ id }) => (
  <Button size="small">
    <FormattedMessage id="gift_quiz_id" defaultMessage="GIFT Quiz ID: " />
    {id}
  </Button>
);

export default GiftQuizRow;
