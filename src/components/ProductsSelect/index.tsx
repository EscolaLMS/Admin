import React, { useState, useEffect, useRef } from 'react';
import { Select, Spin } from 'antd';

import {
  products as fetchProducts,
  getProduct as fetchProduct,
} from '@/services/escola-lms/products';
import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

export const UserSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[] | EscolaLms.Cart.Models.Product[];
  onChange?: (value: string | string[] | number | number[]) => void;
}> = ({ value, onChange, multiple = false }) => {
  const [products, setProducts] = useState<EscolaLms.Cart.Models.Product[]>([]);
  const [fetching, setFetching] = useState(false);
  const [currUsers, setCurrUsers] = useState<number[]>([]);

  const cache = useRef<EscolaLms.Cart.Models.Product[]>();
  const abortController = useRef<AbortController>();

  const setProductsFromResponse = useCallback((responseUsers: EscolaLms.Cart.Models.Product[]) => {
    setProducts((prevUsers) =>
      [...prevUsers, ...responseUsers].filter(
        (user, index, arr) => arr.findIndex((fuser) => fuser.id === user.id) === index,
      ),
    );
  }, []);

  useEffect(() => {
    cache.current = products;
  }, [products]);

  const fetch = useCallback(() => {
    setFetching(true);
    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();
    fetchProducts({}, { signal: abortController.current.signal })
      .then((response) => {
        if (response.success) {
          setProductsFromResponse(response.data);
        }
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, []);

  const onSearch = useCallback(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    const controller = new AbortController();
    if (value) {
      const val = Array.isArray(value) ? value : [value];
      const values: number[] = val.map((user) => {
        if (typeof user === 'object') {
          return Number((user as EscolaLms.Cart.Models.Product).id);
        }
        return Number(user);
      });

      setCurrUsers(values);

      values
        .filter((id) => !cache.current?.find((user) => user.id === id))
        .forEach((v) => {
          fetchProduct(Number(v), { signal: controller.signal }).then((response) => {
            if (response && response.success) {
              setProductsFromResponse([response.data]);
            }
          });
        });
    }
    return () => {
      controller.abort();
    };
  }, [value]);

  return (
    <Select
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%', minWidth: '150px' }}
      value={currUsers}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_person" defaultMessage="Select a person" />}
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

export default UserSelect;
