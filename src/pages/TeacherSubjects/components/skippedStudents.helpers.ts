// Placeholder for a cell the backend left empty.
export const NO_VALUE = '-';

export interface PartitionedSkippedStudents {
  // students who exist in the system and are assigned to at least one other group
  otherGroup: API.SkippedStudent[];
  // students who could not be placed at all: absent from the system, or present but
  // without any group assignment
  notInSystem: API.SkippedStudent[];
}

// `found_in_system` alone is not enough to send a teacher to "the student's other group":
// a user that exists but has no group assignment has no group to go to, and would render an
// empty "Assigned group" cell under advice it cannot act on. Such rows are grouped with the
// unplaceable ones instead.
const isAssignedToOtherGroup = (student: API.SkippedStudent) =>
  student.found_in_system && student.user_groups.length > 0;

// Splits the backend `skipped_students` list into the two cases the modal shows separately.
export const partitionSkippedStudents = (
  skippedStudents: API.SkippedStudent[],
): PartitionedSkippedStudents => ({
  otherGroup: skippedStudents.filter(isAssignedToOtherGroup),
  notInSystem: skippedStudents.filter((student) => !isAssignedToOtherGroup(student)),
});

// Human-readable, comma-separated list of the groups a skipped student is assigned to.
export const formatSkippedStudentGroups = (groups: API.SkippedStudentGroup[]): string =>
  groups.length ? groups.map((group) => group.name).join(', ') : NO_VALUE;

export interface ParsedExamUpload {
  // rows the backend matched to a user in the target group — these are imported
  examResults: API.ExamResult[];
  // rows the backend could not place — these drive the skipped-students modal
  skippedStudents: API.SkippedStudent[];
  // null when the response carried nothing importable
  groupId: number | null;
}

// Reads the body of POST /api/admin/exams/parse. `response` comes straight from antd's
// upload (`info.file.response`), so it bypasses the umi request interceptor and is
// unvalidated — every field is treated as possibly absent.
export const readParseExamResponse = (
  response: API.DefaultResponse<API.ParseExamResponse> | undefined,
): ParsedExamUpload => {
  if (!response?.success) {
    return { examResults: [], skippedStudents: [], groupId: null };
  }

  return {
    // The backend no longer emits user_id:null rows, but keep the guard defensively.
    examResults: (response.data.results ?? []).filter(({ user_id }) => user_id !== null),
    // Absent until the backend ships `skipped_students` — then no modal shows.
    skippedStudents: response.data.skipped_students ?? [],
    groupId: response.data.group_id ?? null,
  };
};
