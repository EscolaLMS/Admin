import { DATETIME_FORMAT } from '@/consts/dates';
import { format } from 'date-fns';

import { EMPTY_PLACEHOLDER } from './utils';

export const safeDate = (value?: string | null, fmt: string = DATETIME_FORMAT): string => {
  if (!value) return EMPTY_PLACEHOLDER;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? EMPTY_PLACEHOLDER : format(date, fmt);
};
