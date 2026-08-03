export const NO_VALUE = '-';

export interface PartitionedSkippedStudents {
  otherGroup: API.SkippedStudent[];
  notInSystem: API.SkippedStudent[];
}

const isAssignedToOtherGroup = (student: API.SkippedStudent) =>
  student.found_in_system && student.user_groups.length > 0;

export const partitionSkippedStudents = (
  skippedStudents: API.SkippedStudent[],
): PartitionedSkippedStudents => ({
  otherGroup: skippedStudents.filter(isAssignedToOtherGroup),
  notInSystem: skippedStudents.filter((student) => !isAssignedToOtherGroup(student)),
});

export const formatSkippedStudentGroups = (groups: API.SkippedStudentGroup[]): string =>
  groups.length ? groups.map((group) => group.name).join(', ') : NO_VALUE;

export interface ParsedExamUpload {
  examResults: API.ExamResult[];
  skippedStudents: API.SkippedStudent[];
  groupId: number | null;
}

export const readParseExamResponse = (
  response: API.DefaultResponse<API.ParseExamResponse> | undefined,
): ParsedExamUpload => {
  if (!response?.success) {
    return { examResults: [], skippedStudents: [], groupId: null };
  }

  return {
    examResults: (response.data.results ?? []).filter(({ user_id }) => user_id !== null),
    skippedStudents: response.data.skipped_students ?? [],
    groupId: response.data.group_id ?? null,
  };
};
