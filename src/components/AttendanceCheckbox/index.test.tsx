/**
 * @jest-environment jsdom
 */
import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { createIntl } from 'react-intl';

import plPL from '@/locales/pl-PL';
import { changeStudentAttendance } from '@/services/escola-lms/attendances';
import { AttendanceValue } from '@/services/escola-lms/enums';
import AttendanceCheckbox from './index';

const mockIntl = createIntl({
  locale: 'pl-PL',
  messages: {
    present: plPL.present,
    not_exercising: plPL.not_exercising,
    excused_absence: plPL.excused_absence,
  },
});

// called at render time, after mockIntl is initialised
jest.mock('umi', () => ({ useIntl: () => mockIntl }));

jest.mock('@/services/escola-lms/attendances', () => ({
  changeStudentAttendance: jest.fn(),
}));

type SaveResponse = Awaited<ReturnType<typeof changeStudentAttendance>>;

const changeAttendance = changeStudentAttendance as jest.MockedFunction<
  typeof changeStudentAttendance
>;

const renderCell = (attendance: API.AttendanceValue | null, onSuccess = jest.fn()) => {
  render(
    <AttendanceCheckbox
      groupAttendanceScheduleId={7}
      studentId={42}
      attendance={attendance}
      onSuccess={onSuccess}
    />,
  );
  const [present, second] = screen.getAllByRole('checkbox') as HTMLInputElement[];
  return { present, second, onSuccess };
};

describe('AttendanceCheckbox', () => {
  beforeEach(() => {
    changeAttendance.mockReset();
  });

  it.each([
    [AttendanceValue.PRESENT, true, false],
    [AttendanceValue.PRESENT_NOT_EXERCISING, true, true],
    [AttendanceValue.EXCUSED_ABSENCE, false, true],
    [AttendanceValue.ABSENT, false, false],
    [null, false, false],
  ])('shows %s as present=%s, second=%s', (attendance, presentChecked, secondChecked) => {
    const { present, second } = renderCell(attendance);

    expect(present.checked).toBe(presentChecked);
    expect(second.checked).toBe(secondChecked);
  });

  it.each([
    [AttendanceValue.PRESENT, 'Niećwiczący'],
    [AttendanceValue.ABSENT, 'Nieobecność usprawiedliwiona'],
  ])('hints what each checkbox means when %s', (attendance, secondHint) => {
    const { present, second } = renderCell(attendance);

    expect(screen.getByTitle('Obecny').contains(present)).toBe(true);
    expect(screen.getByTitle(secondHint).contains(second)).toBe(true);
  });

  it('saves the new value, disables the cell while saving and reports success', async () => {
    let resolveSave: (value: SaveResponse) => void = () => {};
    changeAttendance.mockReturnValueOnce(
      new Promise<SaveResponse>((resolve) => {
        resolveSave = resolve;
      }),
    );
    const { present, second, onSuccess } = renderCell(null);
    const spinnerShown = () => !!document.querySelector('.ant-spin');

    expect(spinnerShown()).toBe(false);

    fireEvent.click(present);

    expect(changeAttendance).toHaveBeenCalledWith(7, 42, AttendanceValue.PRESENT);
    expect(present.disabled).toBe(true);
    expect(second.disabled).toBe(true);
    expect(spinnerShown()).toBe(true);

    await act(async () => resolveSave({ success: true } as SaveResponse));

    expect(present.checked).toBe(true);
    expect(present.disabled).toBe(false);
    expect(spinnerShown()).toBe(false);
    expect(onSuccess).toHaveBeenCalledWith(AttendanceValue.PRESENT, 7, 42);
  });

  it('keeps the previous value when saving fails', async () => {
    changeAttendance.mockResolvedValueOnce({ success: false } as SaveResponse);
    const { present, onSuccess } = renderCell(null);

    await act(async () => {
      fireEvent.click(present);
    });

    expect(present.checked).toBe(false);
    expect(onSuccess).not.toHaveBeenCalled();
  });
});
