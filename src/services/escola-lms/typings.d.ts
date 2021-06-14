// @ts-ignore
/* eslint-disable */

declare namespace API {
  import { TopicType } from './course';

  type Category = {
    id: number;
    name: string;
    slug: string;
    is_active: boolean;
    parent_id?: number;
    icon?: string;
    icon_class: string;
    created_at: string;
    updated_at: string;
    pivot?: {
      course_id: number;
      category_id: number;
    };
    subcategories?: Category[];
  };

  type Tag = {
    id: number;
    title: string;
    morphable_type: string;
    morphable_id: number;
    created_at: string;
    updated_at: string;
  };

  type Course = {
    id?: number;
    created_at?: string;
    updated_at?: string;
    title?: string;
    summary?: string;
    image_path?: string;
    video_path?: string;
    base_price?: string;
    duration?: string;
    author_id?: number;
    image_url?: string;
    video_url?: string;
    categories?: Category[] | (number | string)[];
    tags?: Tag[] | string[];
  };

  type PaginatedList<Model> = {
    current_page: number;
    data: Model[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };

  type PaginatedListParams = {
    current_page: number;
    total: number;
    per_page: number;
  };

  type DefaultResponseSuccess<Model> = {
    success: true;
    data: Model;
    message: string;
  };

  type DataResponseSuccess<Model> = {
    data: Model;
  };

  type DefaultResponseError = {
    success: false;
    message: string;
    errors: {
      [key: string]: string[]; // list of errors
    };
  };

  type DefaultResponse<Model> = DefaultResponseSuccess<Model> | DefaultResponseError;

  type DataResponse<Model> = DataResponseSuccess<Model> | DefaultResponseError;

  type CourseList = DefaultResponse<PaginatedList<Course>>;

  type CourseListItem = Course;

  type PaginationParams = {
    order_by?: string;
    order?: 'ASC' | 'DESC';
    page?: number;
    per_page?: number;
  };

  type CourseParams = PageParams &
    PaginationParams & {
      title?: string;
      category_id?: number;
      author_id?: number;
      tag?: string;
    };

  type LoginRequest = {
    email: string;
    password: string;
  };

  type LoginResponse =
    | {
        success: true;
        token: string;
      }
    | DefaultResponseError;

  type User = {
    data: UserItem;
  };

  type UserItem = {
    id: number;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    created_at: string;
    onboarding_completed: boolean;
    email_verified: boolean;
    interests: string[];
  };

  type Lesson = {
    id?: number;
    created_at?: string;
    updated_at?: string;
    title?: string;
    order?: number;
    course_id?: number;
    duration?: string;
    topics?: Topic[];
  };

  type TopicBase = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    id?: number;
    order?: number;
    title?: string;
    value?: string | any;
    topicable_id?: number;
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

  type TopicRichText = TopicBase & {
    topicable_type: TopicType.RichText;
    topicable: {
      created_at?: string;
      updated_at?: string;
      id: number;
      value: string;
    };
  };

  type TopicOEmbed = TopicBase & {
    topicable_type: TopicType.OEmbed;
    topicable: {
      created_at?: string;
      updated_at?: string;
      id: number;
      value: string;
    };
  };

  type TopicAudio = TopicBase & {
    topicable_type: TopicType.Audio;
    topicable: {
      created_at?: string;
      updated_at?: string;
      length: number;
      url: string;
      value: string;
    };
  };

  type TopicVideo = TopicBase & {
    topicable_type: TopicType.Video;
    topicable: {
      created_at?: string;
      updated_at?: string;
      height: number;
      id: number;
      poster: string;
      poster_url: string;
      url: string;
      value: string;
      width: number;
    };
  };

  type TopicH5P = TopicBase & {
    topicable_type: TopicType.H5P;
    topicable: {
      created_at?: string;
      updated_at?: string;
      id: number;
      value: string;
    };
  };

  type TopicUnselected = TopicBase & {
    topicable_type?: TopicType.Unselected;
    topicable?: never;
  };

  type Topic = TopicUnselected | TopicRichText | TopicOEmbed | TopicAudio | TopicVideo | TopicH5P;

  type CourseProgram = Course & {
    lessons: Lesson[];
  };
}
