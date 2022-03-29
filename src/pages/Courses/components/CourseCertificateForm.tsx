import React from 'react';

import { AppContext } from '@/components/ProgramForm/Context';
import CertificateSelector from '@/components/Certificate';
import { Typography } from 'antd';
import { FormattedMessage } from 'umi';

export const ProgramForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  const { Text } = Typography;

  return (
    <AppContext id={Number(id)}>
      <Text>
        <FormattedMessage id="CertificateTemplates" defaultMessage="Users" />
      </Text>
      <CertificateSelector
        assignable_class="EscolaLms\Courses\Models\Course"
        assignable_id={Number(id)}
        multiple
      />
    </AppContext>
  );
};

export default ProgramForm;
