import { triggerManualEventForProduct } from '@/services/escola-lms/templates';
import { Button, Space, Tooltip, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import ProductsSelect from '../ProductsSelect';

export const TemplateManuallyTriggerProduct: React.FC<{
  templateId: number;
}> = ({ templateId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<string | number | string[] | number[]>();
  const intl = useIntl();

  const onTrigger = useCallback(() => {
    setLoading(true);
    if (typeof product === 'number') {
      triggerManualEventForProduct(Number(templateId), Number(product))
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
  }, [product, templateId]);

  return (
    <Space>
      <ProductsSelect
        multiple={false}
        value={product}
        onChange={(newProduct) => setProduct(newProduct)}
      />
      <Tooltip title={intl.formatMessage({ id: 'generate_pdf_products_tooltip' })}>
        <Button loading={loading} onClick={() => onTrigger()} disabled={!product}>
          <FormattedMessage id="generate" />
        </Button>
      </Tooltip>
    </Space>
  );
};

export default TemplateManuallyTriggerProduct;
