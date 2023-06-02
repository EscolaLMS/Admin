import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import { products as fetchProducts } from '@/services/escola-lms/products';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

export const ProductsSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[] | EscolaLms.Cart.Models.Product[];
  onChange?: (value: string | string[] | number | number[]) => void;
  type?: string;
}> = ({ value, onChange, multiple = false, type }) => {
  const [products, setProducts] = useState<EscolaLms.Cart.Models.Product[]>([]);
  const [fetching, setFetching] = useState(false);
  const [currProducts, setCurrProducts] = useState<number[]>([]);

  const abortController = useRef<AbortController>();

  const fetch = useCallback((search?: string) => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchProducts(
      { productable_type: type, name: search || undefined },
      { signal: abortController.current.signal },
    )
      .then((response) => {
        if (response.success) {
          setProducts(
            type
              ? response.data.filter(
                  (i) => i.type === 'single' && i.productables && i.productables[0].id,
                )
              : response.data,
          );
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      const val = Array.isArray(value) ? value : [value];
      const values: number[] = val.map((product) => {
        if (typeof product === 'object') {
          return Number((product as EscolaLms.Cart.Models.Product).id);
        }
        return Number(product);
      });

      setCurrProducts(values);
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  const onSearch = useCallback(
    (search: string) => {
      fetch(search);
    },
    [fetch],
  );

  const onDeselect = useCallback(() => {
    setCurrProducts([]);
  }, []);

  const handleOnChange = useCallback(
    (changedValue: string | string[] | number | number[]) => {
      if (!changedValue) {
        onDeselect();
      }
      if (onChange) {
        onChange(changedValue);
      }
    },
    [onChange, onDeselect],
  );

  return (
    <Select
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%', minWidth: '150px' }}
      value={currProducts}
      onChange={handleOnChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      onDeselect={onDeselect}
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
      {products.map((product) => (
        <Select.Option key={product.id} value={product.id}>
          {product.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default ProductsSelect;
