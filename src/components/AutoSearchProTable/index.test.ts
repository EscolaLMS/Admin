import type { ProColumns } from '@ant-design/pro-table';
import { expect } from '@jest/globals';

import type { AutoSearchKind } from './classify';
import { classifyColumns, inferKind } from './classify';
import { DEBOUNCE_MS } from './consts';
import { createAutoSearchController } from './useAutoSearch';

const col = (c: Partial<ProColumns<any>>): ProColumns<any> => c as ProColumns<any>;

describe('classify', () => {
  it('infers kinds from column config', () => {
    expect(inferKind(col({ dataIndex: 'name' }))).toBe('text');
    expect(inferKind(col({ dataIndex: 'name', valueType: 'textarea' }))).toBe('text');
    expect(inferKind(col({ dataIndex: 'age', valueType: 'digit' }))).toBe('number');
    expect(inferKind(col({ dataIndex: 'created', valueType: 'dateRange' }))).toBe('date');
    expect(inferKind(col({ dataIndex: 'status', valueEnum: { a: { text: 'a' } } }))).toBe('select');
    expect(inferKind(col({ dataIndex: 'role', valueType: 'select' }))).toBe('select');
    expect(
      inferKind(col({ dataIndex: 'roles', valueType: 'select', fieldProps: { mode: 'multiple' } })),
    ).toBe('multiSelect');
    expect(
      inferKind(
        col({ dataIndex: 'status', valueEnum: { a: { text: 'a' } }, fieldProps: { mode: 'tags' } }),
      ),
    ).toBe('multiSelect');
  });

  it('treats renderFormItem columns as select by default', () => {
    expect(inferKind(col({ dataIndex: 'authors', renderFormItem: () => null }))).toBe('select');
  });

  it('marks non-searchable columns as off', () => {
    expect(inferKind(col({ dataIndex: 'id', search: false }))).toBe('off');
    expect(inferKind(col({ dataIndex: 'id', hideInSearch: true }))).toBe('off');
  });

  it('classifies a column set and applies overrides on top', () => {
    const kinds = classifyColumns(
      [
        col({ dataIndex: 'name' }),
        col({ dataIndex: 'authors', renderFormItem: () => null }),
        col({ key: 'tag', dataIndex: ['tag', 'id'], renderFormItem: () => null }),
      ],
      { authors: 'multiSelect' },
    );
    expect(kinds).toEqual({ name: 'text', authors: 'multiSelect', tag: 'select' });
  });
});

describe('autosearch controller', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  // The controller diffs the live form snapshot (getValues) against its baseline; the harness mirrors
  // a real form: `set` mutates the snapshot (deleting a key models a cleared/nil field) then triggers.
  const makeHarness = (kinds: Record<string, AutoSearchKind>) => {
    let values: Record<string, unknown> = {};
    const submit = jest.fn();
    const controller = createAutoSearchController((name) => kinds[name] ?? 'text', {
      submit,
      getValue: (name) => values[name],
      getValues: () => ({ ...values }),
    });
    const set = (name: string, value: unknown) => {
      if (value === undefined) delete values[name];
      else values[name] = value;
      controller.onValuesChange();
    };
    const seed = (v: Record<string, unknown>) => {
      values = { ...v };
      controller.syncSubmitted({ ...v });
    };
    return { controller, submit, set, seed };
  };

  describe('text', () => {
    it('does not fire below the minimum length, even after the debounce elapses', () => {
      const { submit, set } = makeHarness({ q: 'text' });
      set('q', 'ab');
      jest.advanceTimersByTime(DEBOUNCE_MS);
      expect(submit).not.toHaveBeenCalled();
    });

    it('fires once, one debounce interval after the last keystroke of a >=3 char query', () => {
      const { submit, set } = makeHarness({ q: 'text' });
      set('q', 'abc');
      jest.advanceTimersByTime(DEBOUNCE_MS - 1);
      expect(submit).not.toHaveBeenCalled();
      jest.advanceTimersByTime(1);
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('resets the debounce on each keystroke', () => {
      const { submit, set } = makeHarness({ q: 'text' });
      set('q', 'abc');
      jest.advanceTimersByTime(DEBOUNCE_MS - 500);
      set('q', 'abcd');
      jest.advanceTimersByTime(DEBOUNCE_MS - 500);
      expect(submit).not.toHaveBeenCalled();
      jest.advanceTimersByTime(500);
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('fires immediately when a previously-applied text filter is cleared', () => {
      const { submit, set, seed } = makeHarness({ q: 'text' });
      seed({ q: 'abcde' });
      set('q', '');
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('does not fire when clearing a field that was never applied', () => {
      const { submit, set } = makeHarness({ q: 'text' });
      set('q', '');
      expect(submit).not.toHaveBeenCalled();
    });

    it('drops a pending trigger when shrunk below the minimum length', () => {
      const { submit, set } = makeHarness({ q: 'text' });
      set('q', 'abcde');
      set('q', 'ab');
      jest.advanceTimersByTime(DEBOUNCE_MS);
      expect(submit).not.toHaveBeenCalled();
    });
  });

  describe('select / date', () => {
    it('fires immediately on a real change', () => {
      const { submit, set } = makeHarness({ status: 'select' });
      set('status', 'published');
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('does not fire when the value is unchanged from the baseline', () => {
      const { submit, set, seed } = makeHarness({ status: 'select' });
      seed({ status: 'published' });
      set('status', 'published'); // same value -> no diff -> no request
      expect(submit).not.toHaveBeenCalled();
    });

    it('fires when a select is cleared (even though the change payload is empty)', () => {
      const { submit, set, seed } = makeHarness({ status: 'select' });
      seed({ status: 'published' });
      set('status', undefined); // cleared: field drops out of the snapshot
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('fires when a date filter set this session is cleared', () => {
      const { submit, set } = makeHarness({ created: 'date' });
      set('created', '2024-01-01'); // change -> fires (1)
      set('created', undefined); // clear -> fires (2)
      expect(submit).toHaveBeenCalledTimes(2);
    });
  });

  describe('multiselect', () => {
    it('does not fire on selection, fires once on blur when the value changed', () => {
      const { submit, set, controller } = makeHarness({ authors: 'multiSelect' });
      set('authors', [1]);
      set('authors', [1, 2]);
      expect(submit).not.toHaveBeenCalled();
      controller.onBlur(false);
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('does not fire on blur when nothing changed (dropdown opened and closed)', () => {
      const { submit, controller } = makeHarness({ authors: 'multiSelect' });
      controller.onBlur(false);
      expect(submit).not.toHaveBeenCalled();
    });

    it('does not fire when focus moves to a button (Search/Reset submits on its own)', () => {
      const { submit, set, controller } = makeHarness({ authors: 'multiSelect' });
      set('authors', [1]);
      controller.onBlur(true);
      expect(submit).not.toHaveBeenCalled();
    });

    it('fires once when a multiselect is cleared to empty (and not again on the following blur)', () => {
      const { submit, set, controller } = makeHarness({ authors: 'multiSelect' });
      set('authors', [1]); // deferred (dirty), no request yet
      set('authors', []); // cleared -> fires immediately
      expect(submit).toHaveBeenCalledTimes(1);
      controller.onBlur(false);
      expect(submit).toHaveBeenCalledTimes(1);
    });
  });
});
