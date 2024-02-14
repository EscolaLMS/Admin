import { Select, Spin } from 'antd';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  getConsultation,
  consultations as getConsultations,
} from '@/services/escola-lms/consultations';
import { getCourse, course as getCourses } from '@/services/escola-lms/course';
import { getWebinar, webinars as getWebinars } from '@/services/escola-lms/webinars';
import type { DefaultOptionType, LabeledValue } from 'antd/lib/select';
import { FormattedMessage } from 'umi';

type CollectionModelItem = {
  id: number;
  name: string;
};

// this creates a simple state object with typegurad
const prepareObj = (arr: (API.Course | API.Webinar | API.Consultation)[]) =>
  arr.map((item: API.Course | API.Webinar | API.Consultation) => {
    if ('name' in item) {
      return {
        id: Number(item.id),
        name: item.name,
      };
    }

    return {
      id: Number(item.id),
      name: item.title ? item.title : '',
    };
  });

export const CollectionSelect: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string;
  onChange?: (
    value: string | string[] | number | number[] | LabeledValue | LabeledValue[],
    option: DefaultOptionType | DefaultOptionType[],
  ) => void;
  defaultValue?: string | string[] | number | number[] | LabeledValue | LabeledValue[];
  modelType?: string;
}> = ({ value, onChange, multiple = false, defaultValue, modelType = 'COURSE' }) => {
  const [modelCollection, setModelCollection] = useState<CollectionModelItem[]>([]);
  const [fetching, setFetching] = useState(false);

  const abortController = useRef<AbortController>();

  const modelCollectionMethod = useCallback(
    (params: Parameters<typeof getCourses>[0]) => {
      switch (modelType) {
        case 'COURSE':
          return getCourses(params, { signal: abortController?.current?.signal });
        case 'WEBINAR':
          return getWebinars(params, { signal: abortController?.current?.signal });
        case 'CONSULTATIONS':
          return getConsultations(params, { signal: abortController?.current?.signal });
        default:
          return getCourses(params, { signal: abortController?.current?.signal });
      }
    },
    [modelType, abortController],
  );
  const modelSingleMethod = useCallback(
    (id: string | number) => {
      switch (modelType) {
        case 'COURSE':
          return getCourse(Number(id), { signal: abortController.current?.signal });
        case 'WEBINAR':
          return getWebinar(Number(id), { signal: abortController.current?.signal });
        case 'CONSULTATIONS':
          return getConsultation(Number(id), { signal: abortController.current?.signal });
        default:
          return getCourse(Number(id), { signal: abortController.current?.signal });
      }
    },
    [modelType, abortController],
  );

  const fetch = useCallback(
    (search?: string) => {
      setFetching(true);
      if (abortController.current) {
        abortController.current.abort();
      }

      abortController.current = new AbortController();

      modelCollectionMethod(search ? { title: search } : {})
        .then((response) => {
          if (response.success) {
            setModelCollection(prepareObj(response.data));
          }
          setFetching(false);
        })
        .catch(() => setFetching(false));
    },
    [modelType],
  );

  const onSearch = useCallback(
    (search: string) => {
      fetch(search);
    },
    [fetch],
  );

  useEffect(() => {
    abortController.current = new AbortController();

    if (value) {
      modelSingleMethod(Number(value)).then((response) => {
        if (response) {
          if (response.success) {
            setModelCollection((prevCourses) => [...prevCourses, ...prepareObj([response.data])]);
          }
        }
      });
    }
    return () => {
      if (abortController.current) {
        abortController.current.abort();
      }
    };
  }, [value, modelType]);

  return (
    <Select<string | string[] | number | number[] | LabeledValue | LabeledValue[]>
      defaultValue={defaultValue}
      onFocus={() => fetch()}
      allowClear
      style={{ width: '100%' }}
      value={value}
      onChange={onChange}
      mode={multiple ? 'multiple' : undefined}
      showSearch
      onSearch={onSearch}
      placeholder={<FormattedMessage id="select_content" defaultMessage="select_content" />}
      optionFilterProp="children"
      filterOption={(input, option) => {
        if (option && option.children) {
          return option?.children?.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return true;
      }}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      optionLabelProp="label"
    >
      {modelCollection.map((modelItem: CollectionModelItem) => (
        <Select.Option key={modelItem.id} value={modelItem.id} label={modelItem.name}>
          {modelItem.name}
        </Select.Option>
      ))}
    </Select>
  );
};
