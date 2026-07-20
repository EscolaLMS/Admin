// URL <-> semester-filter mapping for the Teacher Subjects list. Side-effect free
// (no umi `history`) so it's unit-testable in isolation — see helpers.test.ts.
// The component performs the actual history.replace with the string these produce.
export const SEMESTER_ID_PARAM = 'semester_id';

// Returns a number (so it matches the numeric <Select.Option> values)
// or undefined when absent or not a valid number, in which case no semester filter is applied.
export const parseSemesterId = (search: string): number | undefined => {
  const raw = new URLSearchParams(search).get(SEMESTER_ID_PARAM);
  if (!raw) {
    return undefined;
  }
  const parsed = Number(raw);
  return Number.isNaN(parsed) ? undefined : parsed;
};

// Builds the next location search string with the semester filter applied: sets
// the param when a semester is selected, removes it when cleared. Other existing
// params in `currentSearch` are preserved. Returns the query string without a
// leading `?`.
export const buildSemesterSearch = (currentSearch: string, semesterId?: number): string => {
  const params = new URLSearchParams(currentSearch);
  if (semesterId) {
    params.set(SEMESTER_ID_PARAM, String(semesterId));
  } else {
    params.delete(SEMESTER_ID_PARAM);
  }
  return params.toString();
};
