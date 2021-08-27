import React, { useState, useCallback } from 'react';
import { Button } from 'antd';

import { order as fetchOrder } from '@/services/escola-lms/orders';

export const OrderRow: React.FC<{
  id: number;
  onLoaded: (order: API.Order) => void;
}> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();

    fetchOrder(id, { signal: controller.signal })
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
      Order ID: {id}
    </Button>
  );
};

export default OrderRow;
