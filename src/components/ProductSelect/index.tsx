import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin, Tag } from 'antd';

import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

import { productables as fetchProductables } from '@/services/escola-lms/products';

const transformListItemToValueKey = (input: API.ProductableListItem): string =>
  `${input.productable_type}:${input.productable_id}`;

const transformInputItemToValueKey = (input: API.ProductableResourceListItem): string =>
  `${input.class}:${input.id}`;

export const ProductSelect: React.FC<{
  multiple?: boolean;
  value?: API.ProductableResourceListItem[];
  onChange?: (value: string | string[] | number | number[]) => void;
  disabled?: boolean;
}> = ({ value, onChange, multiple = false, disabled = false }) => {
  const [productables, setProductables] = useState<API.ProductableListItem[]>([]);
  const [fetching, setFetching] = useState(false);
  const [currProductables, setCurrProductables] = useState<string[]>([]);

  const abortController = useRef<AbortController>();

  const setProductablesFromResponse = useCallback(
    (responseProductables: API.ProductableListItem[]) => {
      setProductables((prevProductables) =>
        [...prevProductables, ...responseProductables].filter(
          (productable, index, arr) =>
            arr.findIndex(
              (fproductable) => fproductable.productable_id === productable.productable_id,
            ) === index,
        ),
      );
    },
    [],
  );

  const fetch = useCallback(() => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchProductables({ signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          setProductablesFromResponse(response.data);
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      const val = Array.isArray(value) ? value : [value];
      const values: string[] = val.map((productable) => {
        if (typeof productable === 'object') {
          return transformInputItemToValueKey(productable as API.ProductableResourceListItem);
        }
        return String(productable);
      });

      setCurrProductables(values);
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <Select
      disabled={disabled}
      allowClear
      style={{ width: '100%', minWidth: '150px' }}
      value={currProductables}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      placeholder={<FormattedMessage id="select_product" defaultMessage="Select a product" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return (
            option?.children
              ?.toString()
              .toLowerCase()
              .indexOf((input && input.toLowerCase()) || '') >= 0
          );
        }
        return false;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
    >
      {productables.map((productable) => (
        <Select.Option
          key={productable.productable_id}
          value={transformListItemToValueKey(productable)}
        >
          <Tag>
            <FormattedMessage
              id={productable.productable_type.split('\\').pop()}
              defaultMessage={productable.productable_type.split('\\').pop()}
            />
          </Tag>{' '}
          {productable.name} <small>id:{productable.productable_id}</small>
        </Select.Option>
      ))}
    </Select>
  );
};

export default ProductSelect;
