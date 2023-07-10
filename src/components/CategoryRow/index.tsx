import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { Button, message } from 'antd';

import { category } from '@/services/escola-lms/category';

interface Props {
  id: number;
  onLoaded: (category: API.Category) => void;
}

const CategoryRow: React.FC<Props> = ({ id, onLoaded }) => {
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const fetch = useCallback(() => {
    setLoading(true);
    const controller = new AbortController();
    category(id)
      .then((response) => {
        setLoading(false);
        if (response.success) {
          onLoaded(response.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error?.data?.message) {
          message.error(
            intl.formatMessage({
              id: error.data.message,
            }),
          );
        }
      });

    return () => {
      controller.abort();
    };
  }, [id, onLoaded]);

  return (
    <Button loading={loading} onClick={fetch} size="small">
      <FormattedMessage id="categoryId" defaultMessage="Category ID: " />
      {id}
    </Button>
  );
};

export default CategoryRow;
