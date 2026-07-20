/** Minimum number of characters a text filter must contain before it auto-triggers a request. */
export const MIN_QUERY_LENGTH = 3;

/** Debounce (ms) applied to text/number filters after the user stops typing. */
export const DEBOUNCE_MS = 1000;

/** When a search field fires its request — the timing behaviours the controller implements. */
export const TRIGGER_MODE = {
  /** Fire after the user pauses typing (text/number inputs). */
  DEBOUNCED: 'debounced',
  /** Fire immediately on change (single select, date). */
  ON_CHANGE: 'onChange',
  /** Fire when the control loses focus / dropdown closes (multiselect). */
  ON_BLUR: 'onBlur',
  /** Never auto-triggers (non-searchable columns). */
  OFF: 'off',
} as const;

export type TriggerMode = (typeof TRIGGER_MODE)[keyof typeof TRIGGER_MODE];
