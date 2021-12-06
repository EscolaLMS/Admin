export enum TopicType {
  RichText = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText',
  OEmbed = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed',
  Audio = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio',
  Video = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Video',
  H5P = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P',
  Image = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Image',
  PDF = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF',
}

export type TopicBase = {
  lesson_id?: number;
  created_at?: string;
  updated_at?: string;
  id?: number;
  order?: number;
  title?: string;
  value?: any;
  topicable_id?: number;
  isNew?: boolean;
  active?: boolean;
  preview?: boolean;
  can_skip: boolean;
  json?: object;
  /*
      topicable_type?:
        | TopicType.RichText
        | TopicType.OEmbed
        | TopicType.Audio
        | TopicType.H5P
        | TopicType.Unselected
        | TopicType.Video;
        */
};

export type TopicableBase = {
  created_at?: string;
  updated_at?: string;
  id: number;
  value: string;
};

export type TopicRichText = TopicBase & {
  topicable_type: TopicType.RichText;
  topicable: TopicableBase;
};

export type TopicOEmbed = TopicBase & {
  topicable_type: TopicType.OEmbed;
  topicable: TopicableBase;
};

export type TopicAudio = TopicBase & {
  topicable_type: TopicType.Audio;
  topicable: TopicableBase & {
    length: number;
    url: string;
  };
};

export type TopicPDF = TopicBase & {
  topicable_type: TopicType.PDF;
  topicable: TopicableBase & {
    url: string;
  };
};

export type TopicVideo = TopicBase & {
  topicable_type: TopicType.Video;
  topicable: TopicableBase & {
    height: number;
    poster: string;
    poster_url: string;
    url: string;
    width: number;
  };
};

export type TopicImage = TopicBase & {
  topicable_type: TopicType.Image;
  topicable: TopicableBase & {
    height: number;
    url: string;
    width: number;
  };
};

export type TopicH5P = TopicBase & {
  topicable_type: TopicType.H5P;
  topicable: TopicableBase;
};

export type TopicNotEmpty =
  | TopicRichText
  | TopicOEmbed
  | TopicAudio
  | TopicVideo
  | TopicH5P
  | TopicImage
  | TopicPDF;

export type TopicNew =
  | (Partial<TopicRichText> & { isNew: true; topicable_type: TopicType.RichText })
  | (Partial<TopicOEmbed> & { isNew: true; topicable_type: TopicType.OEmbed })
  | (Partial<TopicAudio> & { isNew: true; topicable_type: TopicType.Audio })
  | (Partial<TopicVideo> & { isNew: true; topicable_type: TopicType.Video })
  | (Partial<TopicH5P> & { isNew: true; topicable_type: TopicType.H5P })
  | (Partial<TopicImage> & { isNew: true; topicable_type: TopicType.Image })
  | (Partial<TopicPDF> & { isNew: true; topicable_type: TopicType.PDF });

export type TopicNewOrNotEmpty = TopicNotEmpty | TopicNew;
