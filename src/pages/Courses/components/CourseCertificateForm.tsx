import React, { useCallback, useState } from 'react';

import { setTemplate as postSetTemplate } from '@/services/escola-lms/certificate';
import ProForm from '@ant-design/pro-form';
import { message, Button, Space } from 'antd';
import { FormattedMessage } from 'umi';
import CertificatSelector from '@/components/Certificate';
import { unassign as unassignCertificate } from '@/services/escola-lms/certificate';

export const CourseCertificateForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  const [templateId, setTemplateId] = useState(null);

  const updateValue = useCallback((value) => {
    setTemplateId(value);
  }, []);

  const onUnassign = useCallback((value: number | null) => {
    unassignCertificate(Number(value), { assignable_id: id }).then((response) => {
      if (response.success) {
        message.success(response.message);
      }
    });
  }, []);

  return (
    <ProForm
      onFinish={async () => {
        postSetTemplate(Number(templateId), { assignable_id: id }).then((response) => {
          if (response.success) {
            message.success(response.message);
          }
        });
      }}
    >
      <ProForm.Item label="Certificates" name="assignable_id" valuePropName="value">
        <Space size="large" align="start">
          <CertificatSelector onChange={(value) => updateValue(value)} />
          <Button onClick={() => onUnassign(templateId)}>
            <FormattedMessage id="clear_selection" />
          </Button>
        </Space>
      </ProForm.Item>
    </ProForm>
  );
};

export default CourseCertificateForm;
