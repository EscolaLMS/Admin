export const getTypeName = (topic: API.Topic): string => {
  if (typeof topic?.topicable_type !== 'string' || !topic.topicable_type) return 'Unknown';
  const types: string[] = (topic?.topicable_type || '').split('\\');

  return types.pop() || 'Unknown';
};
