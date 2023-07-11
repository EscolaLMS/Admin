export function isCorrectCategoryType(
  category: string | number | string[] | number[] | undefined,
): category is number | undefined {
  const correctTypes = ['number', 'undefined'];

  return correctTypes.includes(typeof category);
}
