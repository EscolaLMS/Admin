export type Status = { ch1: boolean; ch2: boolean };

export type AttendanceMap = Record<API.AttendanceValue | 'notSelected', Status>;
