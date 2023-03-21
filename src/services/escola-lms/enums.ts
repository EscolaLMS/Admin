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
