export enum TopicType {
  Unselected = '',
  RichText = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText',
  OEmbed = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed',
  Audio = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio',
  Video = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Video',
  H5P = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P',
  Image = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Image',
  PDF = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF',
  SCORM = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco',
  Project = 'EscolaLms\\TopicTypeProject\\Models\\Project',
  GiftQuiz = 'EscolaLms\\TopicTypeGift\\Models\\GiftQuiz',
}

export enum EventTypes {
  OrderPaid = 'EscolaLms\\Cart\\Events\\OrderPaid',
  UserLogged = 'EscolaLms\\Auth\\Events\\UserLogged',
}

export enum CourseStatus {
  draft = 'draft',
  published = 'published',
  archived = 'archived',
}

export enum TemplateChannelValue {
  email = 'EscolaLms\\TemplatesEmail\\Core\\EmailChannel',
  pdf = 'EscolaLms\\TemplatesPdf\\Core\\PdfChannel',
  sms = 'EscolaLms\\TemplatesSms\\Core\\SmsChannel',
}

export enum TemplateEvents {
  ManuallyTriggeredEvent = 'EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent',
}

export enum VouchersTypes {
  cart_fixed = 'cart_fixed',
  cart_percent = 'cart_percent',
  product_fixed = 'product_fixed',
  product_percent = 'product_percent',
}

export type BuyableTypes =
  | 'App\\Models\\Course'
  | 'App\\Models\\Consultation'
  | 'App\\Models\\Webinar'
  | 'App\\Models\\StationaryEvent'
  | 'EscolaLms\\Courses\\Models\\Course'
  | 'EscolaLms\\Consultations\\Models\\Consultation'
  | 'EscolaLms\\Webinars\\Models\\Webinar'
  | 'EscolaLms\\StationaryEvents\\Models\\StationaryEvent';

export enum QuestionType {
  MULTIPLE_CHOICE = 'multiple_choice',
  MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS = 'multiple_choice_with_multiple_right_answers',
  TRUE_FALSE = 'true_false',
  SHORT_ANSWERS = 'short_answers',
  MATCHING = 'matching',
  NUMERICAL_QUESTION = 'numerical_question',
  ESSAY = 'essay',
  DESCRIPTION = 'description',
}

export enum AttendanceValue {
  PRESENT = 'present',
  PRESENT_NOT_EXERCISING = 'present_not_exercising',
  ABSENT = 'absent',
  EXCUSED_ABSENCE = 'excused_absence',
}

export enum ExamGradeType {
  Manual = 'manual',
  ManualPass = 'manual_pass',
  ManualGrades = 'manual_grades',
  TeamsForms = 'teams_forms',
  TeamsLecture = 'teams_lecture',
  TestPortal = 'test_portal',
}

export enum ExamGradePassType {
  Passed = 'zal',
  Failed = 'nie zal',
}

export enum CompetencyChallengeType {
  Simple = 'simple',
  Complex = 'complex',
}

export enum TopicStatsKey {
  QuizSummary = 'EscolaLms\\Reports\\Stats\\Topic\\QuizSummaryForTopicTypeGIFT',
}

export enum FieldType {
  Boolean = 'boolean',
  Number = 'number',
  Varchar = 'varchar',
  Text = 'text',
  Json = 'json',
}

export enum QuestionnaireQuestionType {
  Rate = 'rate',
  Text = 'text',
  Review = 'review',
}

export enum RecommenderType {
  Exercise = 'exercise',
  Course = 'course',
  Info = 'info',
}

export enum BookmarkableType {
  Group = 'EscolaLms\\PcgIntegration\\Models\\Group',
}

export enum BulkNotificationChannelsEnum {
  PUSH = 'EscolaLms\\BulkNotifications\\Channels\\PushNotificationChannel',
}

export enum BulkNotificationSectionsKeysEnum {
  TITLE = 'title',
  BODY = 'body',
  IMAGE = 'image_url',
  REDIRECT_URL = 'redirect_url'
}
