import React, { useState, useEffect, useCallback } from 'react';

import { AppContext } from '@/components/ProgramForm/Context';
import CertificatSelector from '@/components/Certificate';
import { template as fetchTemplate } from '@/services/escola-lms/certificate';
import { Typography } from 'antd';
import { FormattedMessage } from 'umi';

export const ProgramForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  const { Text } = Typography;
  const [templates, setTemplates] = useState<API.CERTIFICATE[]>([]);
  const [templatesAssigned, seTemplatesAssigned] = useState<API.CERTIFICATE[]>([]);

  const updateValue = useCallback(
    (value) => {
      seTemplatesAssigned(value);
    },
    [templatesAssigned],
  );

  useEffect(() => {
    return fetchTemplate({
      assignable_class: 'EscolaLms\\Courses\\Models\\Course',
      assignable_id: Number(id),
    }).then((response) => {
      if (response.success) {
        setTemplates(response.data);
        seTemplatesAssigned(
          response.data.map((template) => (typeof template === 'object' ? template.id : template)),
        );
      }
    });
  }, []);

  return (
    <AppContext id={Number(id)}>
      <Text>
        <FormattedMessage id="CertificateTemplates" defaultMessage="Users" />
      </Text>
      <CertificatSelector
        multiple
        courseId={id}
        allTemplates={templates}
        value={templatesAssigned}
        onChange={(value) => updateValue(value)}
      />
    </AppContext>
  );
};

export default ProgramForm;
