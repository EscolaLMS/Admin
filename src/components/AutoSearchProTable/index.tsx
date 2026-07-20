import type { ProFormInstance } from '@ant-design/pro-form';
import type { ProTableProps } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { MutableRefObject } from 'react';
import { useRef } from 'react';

import type { AutoSearchKind } from './classify';
import { useAutoSearch } from './useAutoSearch';

export type { AutoSearchKind } from './classify';

export type AutoSearchProTableProps<
  DataType extends Record<string, any>,
  Params extends Record<string, any> = Record<string, any>,
  ValueType = 'text',
> = ProTableProps<DataType, Params, ValueType> & {
  /**
   * Per-field override of the inferred control kind, keyed by the column's `dataIndex`/`key`. Use it
   * for `renderFormItem` columns whose control can't be inferred (e.g. a custom multiselect).
   * Pass `false` to opt this table out of autosearch entirely.
   */
  autoSearch?: Record<string, AutoSearchKind> | false;
};

/**
 * Drop-in replacement for `ProTable` that automatically fires the search request as the user edits
 * the built-in QueryFilter, alongside (not replacing) the "Search" button. Rules:
 * - text: request after ≥ 3 chars and a 2 s pause; clearing fires immediately.
 * - single select / date: request on change (only if the value changed).
 * - multiselect: single request on dropdown close / focus loss (only if the value changed).
 *
 * Everything else (columns, request, buttons, i18n) is untouched. Tables with `search={false}` or
 * `autoSearch={false}` render a plain `ProTable`.
 */
function AutoSearchProTable<
  DataType extends Record<string, any>,
  Params extends Record<string, any> = Record<string, any>,
  ValueType = 'text',
>(props: AutoSearchProTableProps<DataType, Params, ValueType>) {
  const { autoSearch, ...tableProps } = props;

  const internalFormRef = useRef<ProFormInstance>();
  const formRef =
    (tableProps.formRef as MutableRefObject<ProFormInstance | undefined> | undefined) ??
    internalFormRef;

  const auto = useAutoSearch<DataType, ValueType>({
    columns: tableProps.columns,
    overrides: autoSearch === false ? undefined : autoSearch,
    formRef,
  });

  const disabled = tableProps.search === false || autoSearch === false;
  if (disabled) {
    return <ProTable<DataType, Params, ValueType> {...tableProps} />;
  }

  const { form, onSubmit, onReset } = tableProps;

  const mergedForm: ProTableProps<DataType, Params, ValueType>['form'] = {
    ...form,
    onValuesChange: (changedValues, values) => {
      form?.onValuesChange?.(changedValues, values);
      auto.onValuesChange(changedValues as Record<string, unknown>);
    },
  };

  const handleSubmit = (params: Params) => {
    auto.onSubmit();
    onSubmit?.(params);
  };

  const handleReset = () => {
    auto.onReset();
    onReset?.();
  };

  return (
    <div style={{ display: 'contents' }} onBlur={auto.onBlur}>
      <ProTable<DataType, Params, ValueType>
        {...tableProps}
        formRef={formRef}
        form={mergedForm}
        onSubmit={handleSubmit}
        onReset={handleReset}
      />
    </div>
  );
}

export default AutoSearchProTable;
