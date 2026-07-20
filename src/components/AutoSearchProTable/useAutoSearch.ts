import type { ProFormInstance } from '@ant-design/pro-form';
import type { ProColumns } from '@ant-design/pro-table';
import type { MutableRefObject } from 'react';
import { useEffect, useMemo, useRef } from 'react';

import isEqual from 'lodash/isEqual';

import type { AutoSearchKind } from './classify';
import { classifyColumns } from './classify';
import { DEBOUNCE_MS, MIN_QUERY_LENGTH } from './consts';

export interface AutoSearchDeps {
  /** Trigger the actual request (ProTable form submit). */
  submit: () => void;
  /** Read the current value of a single filter field. */
  getValue: (name: string) => unknown;
  /** Read the current values of the whole search form. */
  getValues: () => Record<string, unknown>;
}

export interface AutoSearchOptions {
  minChars?: number;
  debounceMs?: number;
}

const isEmptyValue = (value: unknown): boolean =>
  value === undefined ||
  value === null ||
  value === '' ||
  (Array.isArray(value) && value.length === 0);

/**
 * Framework-agnostic engine implementing the autosearch rules. Kept free of React so the decision
 * logic can be unit-tested directly with fake timers and a stub {@link AutoSearchDeps}.
 */
export const createAutoSearchController = (
  getKind: (name: string) => AutoSearchKind,
  deps: AutoSearchDeps,
  options: AutoSearchOptions = {},
) => {
  const minChars = options.minChars ?? MIN_QUERY_LENGTH;
  const debounceMs = options.debounceMs ?? DEBOUNCE_MS;

  /** Snapshot of the form values as of the last request — the baseline for "did it actually change?". */
  let lastSubmitted: Record<string, unknown> = {};
  /** Last value observed for each field (tracks in-session edits, independent of the submit snapshot). */
  const prev: Record<string, unknown> = {};
  /** Multiselect fields touched since the last request; flushed on blur / dropdown close. */
  const dirty = new Set<string>();
  const timers = new Map<string, ReturnType<typeof setTimeout>>();

  const clearTimer = (name: string) => {
    const timer = timers.get(name);
    if (timer) {
      clearTimeout(timer);
      timers.delete(name);
    }
  };

  const clearAllTimers = () => {
    timers.forEach((timer) => clearTimeout(timer));
    timers.clear();
  };

  const doSubmit = () => {
    clearAllTimers();
    dirty.clear();
    deps.submit();
    lastSubmitted = { ...deps.getValues() };
  };

  const scheduleDebounced = (name: string) => {
    clearTimer(name);
    timers.set(
      name,
      setTimeout(() => {
        timers.delete(name);
        doSubmit();
      }, debounceMs),
    );
  };

  return {
    /**
     * Wire to the search form's `onValuesChange` — but used only as a trigger. ProForm strips nil
     * values from the change payload, so a cleared field is invisible there; instead we re-read the
     * whole form via `getValues()` and diff it against the tracked baseline to find what changed.
     */
    onValuesChange() {
      const current = deps.getValues() ?? {};
      const names = new Set<string>([...Object.keys(prev), ...Object.keys(current)]);

      names.forEach((name) => {
        const value = current[name];
        const previous = prev[name];
        if (isEqual(value, previous)) {
          return;
        }
        prev[name] = value;

        const kind = getKind(name);
        if (kind === 'off') {
          return;
        }

        // Field cleared — refetch only if it actually held a value (so emptying an already-empty
        // field doesn't fire a spurious request).
        if (isEmptyValue(value)) {
          clearTimer(name);
          dirty.delete(name);
          if (!isEmptyValue(previous)) {
            doSubmit();
          }
          return;
        }

        switch (kind) {
          case 'text':
            if (String(value).length >= minChars) {
              scheduleDebounced(name);
            } else {
              // 1-2 non-empty chars: never auto-fire; drop any pending trigger.
              clearTimer(name);
            }
            break;
          case 'number':
            scheduleDebounced(name);
            break;
          case 'select':
          case 'date':
            // The diff above already confirmed a real change from the last observed value.
            doSubmit();
            break;
          case 'multiSelect':
            dirty.add(name);
            break;
          default:
            break;
        }
      });
    },

    /**
     * Wire to a blur handler on the search-form container. Flushes pending multiselect changes when
     * focus leaves the control. Skips when focus moved to a button (e.g. "Search"/"Reset"), which
     * submits on its own — avoids a duplicate request.
     */
    onBlur(relatedIsButton: boolean) {
      if (dirty.size === 0) {
        return;
      }
      let changedAny = false;
      dirty.forEach((name) => {
        if (!isEqual(deps.getValue(name), lastSubmitted[name])) {
          changedAny = true;
        }
      });
      dirty.clear();
      if (changedAny && !relatedIsButton) {
        doSubmit();
      }
    },

    /** Re-baseline after a request that did not originate here (the "Search"/"Reset" buttons). */
    syncSubmitted(values?: Record<string, unknown>) {
      clearAllTimers();
      dirty.clear();
      lastSubmitted = { ...(values ?? {}) };
      // Keep the per-field baseline in sync so a later clear compares against the applied state
      // (and a Reset, which passes {}, drops any stale per-field values).
      Object.keys(prev).forEach((key) => delete prev[key]);
      Object.assign(prev, lastSubmitted);
    },

    dispose() {
      clearAllTimers();
    },
  };
};

export type AutoSearchController = ReturnType<typeof createAutoSearchController>;

export interface UseAutoSearchArgs<T, V> {
  columns?: ProColumns<T, V>[];
  overrides?: Record<string, AutoSearchKind>;
  formRef: MutableRefObject<ProFormInstance | undefined>;
  options?: AutoSearchOptions;
}

/**
 * React binding for {@link createAutoSearchController}. Returns handlers to wire into ProTable's
 * search form (`onValuesChange`), submit/reset hooks, and a container blur handler.
 */
export const useAutoSearch = <T, V>({
  columns,
  overrides,
  formRef,
  options,
}: UseAutoSearchArgs<T, V>) => {
  const kinds = useMemo(() => classifyColumns(columns, overrides), [columns, overrides]);
  const kindsRef = useRef(kinds);
  kindsRef.current = kinds;

  const controllerRef = useRef<AutoSearchController>();
  if (!controllerRef.current) {
    controllerRef.current = createAutoSearchController(
      (name) => kindsRef.current[name] ?? 'text',
      {
        submit: () => formRef.current?.submit(),
        getValue: (name) => formRef.current?.getFieldValue(name),
        getValues: () => (formRef.current?.getFieldsValue?.() as Record<string, unknown>) ?? {},
      },
      options,
    );
  }

  useEffect(() => {
    // Seed the baseline from the form's initial values (set by ProTable before this effect runs),
    // so clearing a pre-populated filter — one never touched via onValuesChange nor a submit —
    // is still recognised as removing a value and refetches.
    const initial = formRef.current?.getFieldsValue?.() as Record<string, unknown> | undefined;
    if (initial && Object.keys(initial).length > 0) {
      controllerRef.current?.syncSubmitted(initial);
    }
    return () => controllerRef.current?.dispose();
  }, []);

  return {
    onValuesChange: () => controllerRef.current?.onValuesChange(),
    onSubmit: () =>
      controllerRef.current?.syncSubmitted(
        formRef.current?.getFieldsValue?.() as Record<string, unknown>,
      ),
    onReset: () => controllerRef.current?.syncSubmitted({}),
    onBlur: (event: React.FocusEvent<HTMLElement>) => {
      const related = event.relatedTarget as HTMLElement | null;
      const isButton = !!related && (related.tagName === 'BUTTON' || !!related.closest('button'));
      controllerRef.current?.onBlur(isButton);
    },
  };
};
