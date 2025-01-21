const messagePatterns = [
  {
    regex: /^(Consultation|Course|Webinar|Questionnaire|Dictionary) updated successfully$/,
    translationKey: 'notifications.updateSuccessfully',
    extractModel: (message: string) => message.split(' ')[0],
  },
  {
    regex: /^(Consultation|Course|Webinar|Questionnaire|Dictionary) saved successfully$/,
    translationKey: 'notifications.createSuccessfully',
    extractModel: (message: string) => message.split(' ')[0],
  },
  {
    regex: /^(Product) updated$/,
    translationKey: 'notifications.updated',
    extractModel: (message: string) => message.split(' ')[0],
  },

  //TODO:  set other models and messages from backend here
];

export const getTranslationKeyAndModel = (message: string) => {
  for (const pattern of messagePatterns) {
    if (pattern.regex.test(message)) {
      return {
        translationKey: pattern.translationKey,
        model: pattern.extractModel ? pattern.extractModel(message) : undefined,
      };
    }
  }

  return { translationKey: null, model: null };
};
