import { triggerManualEvent } from '@/services/escola-lms/templates';
import { Button, Space, Tooltip, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'umi';
import UserSelect from '../UserSelect';

import { useIntl } from 'umi';

export const TemplateManuallyTrigger: React.FC<{
  templateId: number;
}> = ({ templateId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<string | number | number[] | string[]>([]);
  const intl = useIntl();

  const onTrigger = useCallback(() => {
    setLoading(true);
    triggerManualEvent(Number(templateId), users as number[])
      .then((response) => {
        if (response.success) {
          message.success(response.message);
        } else {
          message.error(response.message);
        }
      })
      .catch((err: any) => message.error(err.toString()))
      .finally(() => setLoading(false));
  }, [users, templateId]);

  return (
    <Space>
      <UserSelect multiple value={users} onChange={(values) => setUsers(values)} />
      <Tooltip title={intl.formatMessage({ id: 'generate_pdf_users_tooltip' })}>
        <Button
          loading={loading}
          onClick={() => onTrigger()}
          disabled={!(users as number[]).length}
        >
          <FormattedMessage id="generate" />
        </Button>
      </Tooltip>
    </Space>
  );
};

export default TemplateManuallyTrigger;
