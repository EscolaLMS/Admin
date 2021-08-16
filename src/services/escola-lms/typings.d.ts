// @ts-ignore
/* eslint-disable */

declare namespace API {
  enum TopicType {
    Unselected = '',
    RichText = 'EscolaLms\\Courses\\Models\\TopicContent\\RichText',
    OEmbed = 'EscolaLms\\Courses\\Models\\TopicContent\\OEmbed',
    Audio = 'EscolaLms\\Courses\\Models\\TopicContent\\Audio',
    Video = 'EscolaLms\\Courses\\Models\\TopicContent\\Video',
    H5P = 'EscolaLms\\Courses\\Models\\TopicContent\\H5P',
  }

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

  type PaginatedMetaList<Model> = {
    links: {
      first: string;
      last: string;
      next: string;
      prev: string;
    };
    data: Model[];
    meta: {
      current_page: number;
      next_page_url: string;
      path: string;
      per_page: number;
      prev_page_url: string;
      to: number;
      total: number;
    };
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

  type CategoryList = DataResponseSuccess<Category[]>;

  type CategoryListItem = Category;

  type UserList = DefaultResponse<PaginatedMetaList<UserItem>>;

  type UserRow = DefaultResponse<UserItem>;

  type UserListItem = UserItem;

  type OrderList = PaginatedMetaList<Order>;

  type OrderListItem = Order;

  type PaymentList = PaginatedMetaList<Payment>;

  type PaymentListItem = Payment;

  type PageList = PaginatedMetaList<Page>;

  type PageListItem = Page;

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

  type LoginResponse = DefaultResponse<{ token: string }>;

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
    active?: boolean;
    summary?: string;
    topics?: Topic[];
    isNew?: boolean;
  };

  type TopicBase = {
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

  type TopicableBase = {
    created_at?: string;
    updated_at?: string;
    id: number;
    value: string;
  };

  type TopicRichText = TopicBase & {
    topicable_type: TopicType.RichText;
    topicable: TopicableBase;
  };

  type TopicOEmbed = TopicBase & {
    topicable_type: TopicType.OEmbed;
    topicable: TopicableBase;
  };

  type TopicAudio = TopicBase & {
    topicable_type: TopicType.Audio;
    topicable: TopicableBase & {
      length: number;
      url: string;
    };
  };

  type TopicVideo = TopicBase & {
    topicable_type: TopicType.Video;
    topicable: TopicableBase & {
      height: number;
      poster: string;
      poster_url: string;
      url: string;
      width: number;
    };
  };

  type TopicH5P = TopicBase & {
    topicable_type: TopicType.H5P;
    topicable: TopicableBase;
  };

  type TopicUnselected = TopicBase & {
    topicable_type?: TopicType.Unselected;
    topicable?: never;
  };

  type Topic = TopicUnselected | TopicRichText | TopicOEmbed | TopicAudio | TopicVideo | TopicH5P;

  type TopicNotEmpty = TopicRichText | TopicOEmbed | TopicAudio | TopicVideo | TopicH5P;

  type CourseProgram = Course & {
    lessons: Lesson[];
  };

  type H5PLibrary = {
    id: number;
    created_at: string;
    updated_at: string;
    name: string;
    title: string;
    runnable: number;
    restricted: number;
    fullscreen: number;
    embed_types: string;
    semantics: object;
    machineName: string;
    uberName: string;
    majorVersion: string;
    minorVersion: string;
    patchVersion: string;
    preloadedJs: string;
    preloadedCss: string;
    dropLibraryCss: string;
    tutorialUrl: string;
    hasIcon: string;
    libraryId: number;
  };

  type H5PContent = {
    id: number;
    created_at: string;
    updated_at: string;
    user_id: string | number;
    title: string;
    library_id: string;
    parameters: string;
    filtered: string;
    slug: string;
    embed_type: string;
    params: object;
    metadata: object;
    library: H5PLibrary;
    nonce: string;
  };

  type H5PContentList = PaginatedList<H5PContent>;

  type H5PContentListItem = H5PContent;

  type H5PContentParams = PageParams & PaginationParams;

  type Order = {
    // TODO update me
    id: number;
    total: number;
    user_id: number;
  };

  type Payment = {
    amount: number;
    billable_id: number;
    billable_type: string;
    created_at: string;
    currency: string;
    description: string;
    id: number;
    order_id: number;
    payable_id: null;
    payable_type: null;
    status: 'new' | 'paid'; // TODO: what are possible statuses ?
    updated_at: string;
  };

  type Page = {
    id: number;
    slug: string;
    title: string;
    author_id: number;
    author: UserItem;
    content: string;
  };

  type File = {
    name: string;
    created_at: string;
    mime: 'directory' | 'file';
    url: string;
  };

  type FileList = DefaultResponse<PaginatedList<File>>;

  type FileUpload = DefaultResponse<File[]>;
}
