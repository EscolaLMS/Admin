import type { ProColumns } from '@ant-design/pro-table';

import { MIN_QUERY_LENGTH, TRIGGER_MODE } from './consts';

/**
 * The kind of control a search field is — the vocabulary used when a page overrides a field via the
 * `autoSearch` prop. Each kind maps to a {@link AutoSearchTrigger} (see {@link KIND_TO_TRIGGER}):
 * - `text`        — debounced request once the value reaches {@link MIN_QUERY_LENGTH} chars.
 * - `number`      — debounced request (no minimum length).
 * - `select`      — request immediately on change.
 * - `date`        — request immediately on change.
 * - `multiSelect` — request when the control loses focus / dropdown closes.
 * - `off`         — never auto-triggers (column excluded from the search form).
 */
export type AutoSearchKind = 'text' | 'number' | 'select' | 'multiSelect' | 'date' | 'off';

/** When a field fires its request — the three behaviours the controller actually implements. */
export type AutoSearchTrigger =
  | { mode: typeof TRIGGER_MODE.DEBOUNCED; minChars: number }
  | { mode: typeof TRIGGER_MODE.ON_CHANGE }
  | { mode: typeof TRIGGER_MODE.ON_BLUR }
  | { mode: typeof TRIGGER_MODE.OFF };

/** Collapses the six user-facing kinds onto the three timing behaviours. */
export const KIND_TO_TRIGGER: Record<AutoSearchKind, AutoSearchTrigger> = {
  text: { mode: TRIGGER_MODE.DEBOUNCED, minChars: MIN_QUERY_LENGTH },
  number: { mode: TRIGGER_MODE.DEBOUNCED, minChars: 0 },
  select: { mode: TRIGGER_MODE.ON_CHANGE },
  date: { mode: TRIGGER_MODE.ON_CHANGE },
  multiSelect: { mode: TRIGGER_MODE.ON_BLUR },
  off: { mode: TRIGGER_MODE.OFF },
};

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
