import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'umi';
import { Button, message, Tooltip } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

import { createTeamsChat } from '@/services/escola-lms/chats';

interface Props {
  student_id: number;
}

export const CreateTeamsChatButton: React.FC<Props> = ({ student_id }) => {
  const [loading, setLoading] = useState(false);

  const onClick = useCallback(async () => {
    setLoading(true);
    const response = await createTeamsChat({ user_id: student_id });
    if (!response.success) {
      message.error(response.message);
      setLoading(false);
      return;
    }

    window.open(response.data.web_url, '_blank', 'noopener noreferrer');
    setLoading(false);
  }, []);

  return (
    <Tooltip title={<FormattedMessage id="msTeams" defaultMessage="teams" />}>
      <Button loading={loading} type="primary" icon={<ExportOutlined />} onClick={onClick} />
    </Tooltip>
  );
};
