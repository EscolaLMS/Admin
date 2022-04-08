import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import { FormattedMessage } from 'umi';
import { getProduct } from '@/services/escola-lms/products';

export const ProductRow: React.FC<{
  id: number;
  onLoaded: (course: EscolaLms.Cart.Models.Product) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    getProduct(id, { signal: controller.signal })
      .then((response) => {
        setLoading(false);
        if (response.success) {
          onLoaded(response.data);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [id, onLoaded]);

  return (
    <Button loading={loading} onClick={fetch} size="small">
      <FormattedMessage id="product_id" defaultMessage="Product ID: " />
      {id}
    </Button>
  );
};

export default ProductRow;
