import type { ProColumns } from '@ant-design/pro-table';

/**
 * The behaviour bucket a search-form control falls into. Drives when an automatic request fires:
 * - `text`        — debounced request once the value reaches {@link MIN_QUERY_LENGTH} chars.
 * - `number`      — debounced request (no minimum length).
 * - `select`      — request immediately on change (if the value actually changed).
 * - `multiSelect` — request when the control loses focus / dropdown closes (if the value changed).
 * - `date`        — request immediately on change (if the value changed).
 * - `off`         — never auto-triggers (column excluded from the search form).
 */
export type AutoSearchKind = 'text' | 'number' | 'select' | 'multiSelect' | 'date' | 'off';

const DATE_VALUE_TYPES = new Set([
  'date',
  'dateTime',
  'dateWeek',
  'dateMonth',
  'dateQuarter',
  'dateYear',
  'dateRange',
  'dateTimeRange',
  'time',
  'timeRange',
]);

const NUMBER_VALUE_TYPES = new Set(['digit', 'digitRange', 'money', 'percent', 'second']);

const SELECT_VALUE_TYPES = new Set([
  'select',
  'checkbox',
  'radio',
  'radioButton',
  'cascader',
  'treeSelect',
]);

const MULTIPLE_MODES = new Set(['multiple', 'tags']);

/** Best-effort form field name for a column (matches the key antd/ProForm uses in the search form). */
export const columnFieldName = <T, V>(column: ProColumns<T, V>): string | undefined => {
  if (column.key !== undefined && column.key !== null) {
    return String(column.key);
  }
  const { dataIndex } = column;
  if (dataIndex === undefined || dataIndex === null) {
    return undefined;
  }
  return Array.isArray(dataIndex) ? dataIndex.join('.') : String(dataIndex);
};

const hasMultipleMode = <T, V>(column: ProColumns<T, V>): boolean => {
  const fieldProps = column.fieldProps;
  const mode =
    fieldProps && typeof fieldProps === 'object'
      ? (fieldProps as { mode?: string }).mode
      : undefined;
  return mode !== undefined && MULTIPLE_MODES.has(mode);
};

/** Infer the {@link AutoSearchKind} of a column from its ProTable config (before any explicit override). */
export const inferKind = <T, V>(column: ProColumns<T, V>): AutoSearchKind => {
  if (column.search === false || column.hideInSearch) {
    return 'off';
  }

  const valueType = typeof column.valueType === 'string' ? column.valueType : undefined;

  // A `valueEnum` renders a Select; `mode: multiple`/`tags` makes it a multiselect.
  if (column.valueEnum) {
    return hasMultipleMode(column) ? 'multiSelect' : 'select';
  }

  if (valueType && SELECT_VALUE_TYPES.has(valueType)) {
    return hasMultipleMode(column) ? 'multiSelect' : 'select';
  }

  if (valueType && DATE_VALUE_TYPES.has(valueType)) {
    return 'date';
  }

  if (valueType && NUMBER_VALUE_TYPES.has(valueType)) {
    return 'number';
  }

  // Custom controls injected via `renderFormItem` can't be inspected; default to `select`
  // (fire-on-change is safe and can be overridden per view via the `autoSearch` prop).
  if (column.renderFormItem) {
    return 'select';
  }

  return 'text';
};

/**
 * Build a `fieldName -> AutoSearchKind` map for a set of columns, applying explicit overrides on top
 * of inference. Columns without a resolvable field name are skipped.
 */
export const classifyColumns = <T, V>(
  columns: ProColumns<T, V>[] | undefined,
  overrides?: Record<string, AutoSearchKind>,
): Record<string, AutoSearchKind> => {
  const kinds: Record<string, AutoSearchKind> = {};

  columns?.forEach((column) => {
    const name = columnFieldName(column);
    if (!name) {
      return;
    }
    kinds[name] = inferKind(column);
  });

  if (overrides) {
    Object.entries(overrides).forEach(([name, kind]) => {
      kinds[name] = kind;
    });
  }

  return kinds;
};
