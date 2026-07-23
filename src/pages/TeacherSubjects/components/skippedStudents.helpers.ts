export interface PartitionedSkippedStudents {
  // students who exist in the system but belong to another group
  otherGroup: API.SkippedStudent[];
  // students who were not found in the system at all
  notInSystem: API.SkippedStudent[];
}

// Splits the backend `skipped_students` list into the two cases the modal shows separately.
export const partitionSkippedStudents = (
  skippedStudents: API.SkippedStudent[],
): PartitionedSkippedStudents => ({
  otherGroup: skippedStudents.filter((student) => student.found_in_system),
  notInSystem: skippedStudents.filter((student) => !student.found_in_system),
});

// Human-readable, comma-separated list of the groups a skipped student is assigned to.
export const formatSkippedStudentGroups = (groups: API.SkippedStudentGroup[]): string =>
  groups.map((group) => group.name).join(', ');
