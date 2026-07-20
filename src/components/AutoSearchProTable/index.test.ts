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

  const makeHarness = (kinds: Record<string, AutoSearchKind>) => {
    let values: Record<string, unknown> = {};
    const submit = jest.fn();
    const controller = createAutoSearchController((name) => kinds[name] ?? 'text', {
      submit,
      getValue: (name) => values[name],
      getValues: () => ({ ...values }),
    });
    // Mirror reality: the form value is updated before onValuesChange fires.
    const change = (name: string, value: unknown) => {
      values[name] = value;
      controller.onValuesChange({ [name]: value });
    };
    const seed = (v: Record<string, unknown>) => {
      values = { ...v };
      controller.syncSubmitted({ ...v });
    };
    return { controller, submit, change, seed };
  };

  describe('text', () => {
    it('does not fire below the minimum length, even after the debounce elapses', () => {
      const { submit, change } = makeHarness({ q: 'text' });
      change('q', 'ab');
      jest.advanceTimersByTime(DEBOUNCE_MS);
      expect(submit).not.toHaveBeenCalled();
    });

    it('fires once, 2s after the last keystroke of a >=3 char query', () => {
      const { submit, change } = makeHarness({ q: 'text' });
      change('q', 'abc');
      jest.advanceTimersByTime(DEBOUNCE_MS - 1);
      expect(submit).not.toHaveBeenCalled();
      jest.advanceTimersByTime(1);
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('resets the debounce on each keystroke', () => {
      const { submit, change } = makeHarness({ q: 'text' });
      change('q', 'abc');
      jest.advanceTimersByTime(DEBOUNCE_MS - 500);
      change('q', 'abcd');
      jest.advanceTimersByTime(DEBOUNCE_MS - 500);
      expect(submit).not.toHaveBeenCalled();
      jest.advanceTimersByTime(500);
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('fires immediately when a previously-applied text filter is cleared', () => {
      const { submit, change, seed } = makeHarness({ q: 'text' });
      seed({ q: 'abcde' });
      change('q', '');
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('does not fire when clearing a field that was never applied', () => {
      const { submit, change } = makeHarness({ q: 'text' });
      change('q', '');
      expect(submit).not.toHaveBeenCalled();
    });

    it('drops a pending trigger when shrunk below the minimum length', () => {
      const { submit, change } = makeHarness({ q: 'text' });
      change('q', 'abcde');
      change('q', 'ab');
      jest.advanceTimersByTime(DEBOUNCE_MS);
      expect(submit).not.toHaveBeenCalled();
    });
  });

  describe('select / date', () => {
    it('fires immediately on a real change', () => {
      const { submit, change } = makeHarness({ status: 'select' });
      change('status', 'published');
      expect(submit).toHaveBeenCalledTimes(1);
    });

    it('does not fire when the value is unchanged from the last request', () => {
      const { submit, controller } = makeHarness({ status: 'select' });
      controller.syncSubmitted({ status: 'published' });
      controller.onValuesChange({ status: 'published' });
      expect(submit).not.toHaveBeenCalled();
    });

    it('fires immediately when a select is cleared', () => {
      const { submit, change, seed } = makeHarness({ status: 'select' });
      seed({ status: 'published' });
      change('status', undefined);
      expect(submit).toHaveBeenCalledTimes(1);
    });
  });

  describe('multiselect', () => {
    it('does not fire on selection, fires once on blur when the value changed', () => {
      const { submit, change, controller } = makeHarness({ authors: 'multiSelect' });
      change('authors', [1]);
      change('authors', [1, 2]);
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
      const { submit, change, controller } = makeHarness({ authors: 'multiSelect' });
      change('authors', [1]);
      controller.onBlur(true);
      expect(submit).not.toHaveBeenCalled();
    });

    it('does not fire on blur when a selection was toggled back to empty', () => {
      const { submit, change, controller } = makeHarness({ authors: 'multiSelect' });
      change('authors', [1]);
      change('authors', []); // cleared, but nothing was applied before
      controller.onBlur(false);
      expect(submit).not.toHaveBeenCalled();
    });
  });
});
