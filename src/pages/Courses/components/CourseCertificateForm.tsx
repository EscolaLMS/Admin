import React, { useCallback, useState } from 'react';

import ProForm from '@ant-design/pro-form';
import { message, Button, Space } from 'antd';
import { FormattedMessage } from 'umi';
import CertificatSelector from '@/components/Certificate';
import {
  unassign as unassignCertificate,
  setTemplate as postSetTemplate,
  template as fetchTemplate,
} from '@/services/escola-lms/certificate';

export const CourseCertificateForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  const [templateId, setTemplateId] = useState<number | null>(null);

  const updateValue = useCallback(
    (value) => {
      setTemplateId(value);
    },
    [templateId],
  );

  const onUnassign = useCallback(
    (value: number | null) => {
      unassignCertificate(Number(value), { assignable_id: id }).then((response) => {
        if (response.success) {
          message.success(response.message);
          updateValue(null);
        }
      });
    },
    [templateId],
  );

  return (
    <ProForm
      onFinish={async () => {
        postSetTemplate(Number(templateId), { assignable_id: id }).then((response) => {
          if (response.success) {
            message.success(response.message);
          }
        });
      }}
      request={() => {
        return fetchTemplate({
          assignable_class: 'EscolaLms\\Courses\\Models\\Course',
          assignable_id: Number(id),
        }).then((response) => {
          if (response.success) {
            return {
              template: response.data,
            };
          }
          return {
            template: [],
          };
        });
      }}
    >
      <ProForm.Item
        valuePropName="value"
        name="template"
        label={<FormattedMessage id="template" defaultMessage="Users" />}
      >
        <CertificatSelector value={templateId} onChange={(value) => updateValue(value)} />
      </ProForm.Item>
      <ProForm.Item name="template" valuePropName="value">
        <Space size="large" align="start">
          <Button onClick={() => onUnassign(templateId)}>
            <FormattedMessage id="clear_selection" />
          </Button>
        </Space>
      </ProForm.Item>
    </ProForm>
  );
};

export default CourseCertificateForm;
