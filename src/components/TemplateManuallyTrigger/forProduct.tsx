import { TemplateEvents } from '@/services/escola-lms/enums';
import { triggerManualEventForProduct } from '@/services/escola-lms/templates';
import { Button, Space, Tooltip, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { TemplateSelect } from '../TemplateSelect';

export const TemplateManuallyTriggerForProduct: React.FC<{
  productId: number;
}> = ({ productId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [template, setTemplate] = useState<string | number | string[] | number[]>();
  const intl = useIntl();

  const onTrigger = useCallback(() => {
    setLoading(true);
    if (typeof template === 'number') {
      triggerManualEventForProduct(Number(template), productId)
        .then((response) => {
          if (response.success) {
            message.success(response.message);
          } else {
            message.error(response.message);
          }
        })
        .catch((err: any) => message.error(err.toString()))
        .finally(() => setLoading(false));
    }
  }, [template, productId]);

  return (
    <Space>
      <TemplateSelect
        params={{ event: TemplateEvents.ManuallyTriggeredEvent }}
        multiple={false}
        value={template}
        onChange={(newTemplate) => setTemplate(newTemplate)}
      />
      <Tooltip title={intl.formatMessage({ id: 'generate_pdf_for_products_tooltip' })}>
        <Button loading={loading} onClick={() => onTrigger()} disabled={!template}>
          <FormattedMessage id="generate" />
        </Button>
      </Tooltip>
    </Space>
  );
};

export default TemplateManuallyTriggerForProduct;
