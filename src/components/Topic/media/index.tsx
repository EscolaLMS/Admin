export const getTypeName = (topic: API.Topic) => {
  const types = topic.topicable_type.split('\\');
  return types.pop();
};
