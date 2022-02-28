// @ts-ignore
/* eslint-disable */

declare namespace API {
  enum TopicType {
    Unselected = '',
    RichText = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText',
    OEmbed = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed',
    Audio = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio',
    Video = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Video',
    H5P = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P',
    Image = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\Image',
    PDF = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF',
    SCORM = 'EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco',
  }

  enum EventTypes {
    OrderPaid = 'EscolaLms\\Cart\\Events\\OrderPaid',
    UserLogged = 'EscolaLms\\Auth\\Events\\UserLogged',
  }

  enum CourseStatus {
    draft = 'draft',
    published = 'published',
    archived = 'archived',
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

  // TODO: improve the optional keys for this task https://github.com/EscolaLMS/Admin/issues/138
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
    authors: string[];
    image_url?: string;
    poster_url?: string;
    video_url?: string;
    categories?: Category[] | (number | string)[];
    tags?: Tag[] | string[];
    scorm_id?: number;
    scorm_sco_id?: number;
    status: string;
    active_from?: string;
    active_to?: string;
    hours_to_complete?: number;
    purchasable?: boolean;
    boolean?: boolean;
    target_group?: string;
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
    data: Model[];
    meta: {
      current_page: number;
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      links: { url: string; label: string; active: boolean }[];
      next_page_url: string;
      path: string;
      per_page: number;
      prev_page_url: null;
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

  type DefaultMetaResponse<Model> =
    | (PaginatedMetaList<Model> & {
        message: string;
        success: true;
      })
    | DefaultResponseError;

  type DefaultResponse<Model> = DefaultResponseSuccess<Model> | DefaultResponseError;

  type DataResponse<Model> = DataResponseSuccess<Model> | DefaultResponseError;

  type CourseList = DefaultMetaResponse<Course>;

  type CourseListItem = Course;

  type CategoryList = DataResponseSuccess<Category[]>;

  type CategoryListItem = Category;

  type UserList = DefaultMetaResponse<UserItem>;

  type UserRow = DefaultResponse<UserItem>;

  type UserRowPassword = DefaultResponse<UserChangePassword>;

  type UserListItem = UserItem;

  type OrderList = DefaultMetaResponse<Order>;

  type OrderListItem = Order;

  type PaymentList = DefaultMetaResponse<Payment>;

  type PaymentListItem = Payment;

  type PageList = DefaultMetaResponse<Page>;

  type PageListItem = Page;

  type TemplateList = DefaultMetaResponse<Template>;

  type TemplateListItem = Template;

  type SettingsList = DefaultMetaResponse<Setting>;

  type RolesList = DefaultMetaResponse<Role>;

  type QuestionnaireList = DefaultMetaResponse<Questionnaire>;

  type NotificationList = DefaultMetaResponse<Notification>;

  type NotificationsEventsList = DefaultResponse<string[]>;

  type DeleteResponse = DefaultResponse;

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
      active?: boolean;
    };

  type H5PListParams = PageParams &
    PaginationParams & {
      title?: string;
      library_id?: number;
    };

  type LoginRequest = {
    email: string;
    password: string;
  };

  type LoginResponse = DefaultResponse<{ token: string }>;

  type LogoutResponse = DefaultResponse;

  export type ForgotRequest = {
    email: string;
    return_url: string;
  };

  export type ForgotResponse =
    | DefaultResponse<{ message: string; success: boolean }>
    | DefaultResponseError;

  export type ResetPasswordRequest = {
    token: string;
    password: string;
    email: string;
  };

  export type ResetPasswordResponse =
    | DefaultResponse<{ message: string; success: boolean }>
    | DefaultResponseError;

  type User = {
    data: UserItem;
  };

  type UserItem = {
    bio: string;
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
    path_avatar: string;
    avatar: string;
    roles: ('admin' | 'tutor' | 'student')[];
  };

  type UserChangePassword = {
    password: string;
    new_password: string;
    new_confirm_password: string;
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

  type CourseStats = {
    EscolaLmsReportsStatsCourseAverageTime: number;
    EscolaLmsReportsStatsCourseAverageTimePerTopic: {
      [key: string]: number;
    };
    EscolaLmsReportsStatsCourseMoneyEarned: number;
    EscolaLmsReportsStatsCoursePeopleBought: number;
    EscolaLmsReportsStatsCoursePeopleFinished: number;
    EscolaLmsReportsStatsCoursePeopleStarted: number;
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

  type TopicPDF = TopicBase & {
    topicable_type: TopicType.PDF;
    topicable: TopicableBase & {
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

  type TopicImage = TopicBase & {
    topicable_type: TopicType.Image;
    topicable: TopicableBase & {
      height: number;
      url: string;
      width: number;
    };
  };

  type TopicH5P = TopicBase & {
    topicable_type: TopicType.H5P;
    topicable: TopicableBase;
  };

  type TopicScorm = TopicBase & {
    topicable_type: TopicType.SCORM;
    topicable: TopicableBase;
  };

  type TopicUnselected = TopicBase & {
    topicable_type?: TopicType.Unselected;
    topicable?: never;
  };

  type Topic =
    | TopicUnselected
    | TopicRichText
    | TopicOEmbed
    | TopicAudio
    | TopicVideo
    | TopicH5P
    | TopicImage
    | TopicPDF
    | TopicScorm;

  type TopicNotEmpty =
    | TopicRichText
    | TopicOEmbed
    | TopicAudio
    | TopicVideo
    | TopicH5P
    | TopicImage
    | TopicPDF
    | TopicScorm;

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
    count_h5p: number;
  };

  type H5PContentList = PaginatedList<H5PContent>;

  type H5PContentListItem = H5PContent;

  type H5PContentParams = PageParams & PaginationParams;

  type OrderItem = {
    buyable_id: number;
    buyable_type: 'EscolaLms\\Cart\\Models\\Course';
    created_at: null;
    id: number;
    options: object;
    order_id: number;
    quantity: number;
    updated_at: string;
  };

  type Order = {
    created_at: string;
    id: number;
    items: OrderItem[];
    status: PaymentStatus;
    subtotal: string;
    tax: string;
    total: string;
    user_id: number;
  };

  type PaymentStatus = 'NEW' | 'PAID' | 'CANCELLED' | 'FAILED';

  type Payment = {
    amount: number;
    billable_id: number;
    billable_type: 'EscolaLms\\Core\\Models\\User' | 'App\\Models\\User';
    created_at: string;
    currency: string;
    description: string;
    id: number;
    order_id: string;
    payable_id: number;
    payable_type:
      | 'EscolaLms\\Cart\\Models\\Order'
      | 'App\\Models\\User'
      | 'EscolaLms\\Core\\Models\\User';
    status: PaymentStatus;
    updated_at: string;
  };

  type Page = {
    id: number;
    slug: string;
    title: string;
    active: boolean;
    author_id: number;
    author: UserItem;
    content: string;
  };

  type Template = {
    id: number;
    name: string;
    type: string;
    course_id: number;
    content: string;
    title: string;
    event?: string;
    channel?: string;
    sections?: TemplateSections[];
    created_at?: Date;
    default?: boolean;
  };

  type TemplateSections = {
    content: string;
    created_at?: Date;
    id?: number;
    key: string;
    template_id?: number;
    updated_at?: Date;
  };

  type TemplateField = {
    type: string;
    required_variables: string[];
    required: boolean;
    default_content: string;
    readonly: boolean;
  };

  type TemplateVariable = string;

  type TemplateVariables = Record<string, Record<string, TemplateVariable[]>>;

  type File = {
    name: string;
    created_at: string;
    mime: 'directory' | 'file';
    url: string;
  };

  type FileList = DefaultResponse<PaginatedList<File>>;

  type FileUpload = DefaultResponse<File[]>;

  type CERTIFICATE = {
    id: number;
    name: string;
    event: string;
    default: boolean;
    assignables: CERTIFICATE_ASSIGNABLES[];
    channel: number;
    selection: CERTIFICATE_SELECTION[];
    created_at: string;
    updated_at: string;
  };

  type CERTIFICATE_SELECTION = {
    id: number;
    key: string;
    template_id: number;
    content: string;
    created_at: string;
    updated_at: string;
  };

  type CERTIFICATE_ASSIGNABLES = {};

  type Template = CERTIFICATE[];

  type TemplateList = DefaultResponse<Template>;

  type SCORM = {
    id: number;
    resource_type: null;
    resource_id: number;
    version: 'scorm_12' | 'scorm_2004';
    hash_name: string;
    origin_file: string;
    origin_file_mime: string;
    ratio: number;
    uuid: string;
    created_at: string;
    updated_at: string;
    scos: SCORM_SCO[];
  };

  type SCORM_SCO = {
    id: number;
    scorm_id: number;
    uuid: string;
    sco_parent_id?: number;
    entry_url: string;
    identifier: string;
    title: string;
    visible?: 1 | 0;
    sco_parameters: any;
    launch_data?: any;
    max_time_allowed?: number;
    time_limit_action?: number;
    block?: number;
    score_int?: number;
    score_decimal?: number;
    completion_threshold?: number;
    prerequisites?: any;
    created_at?: string;
    updated_at?: string;
  };

  type SCORMUPloaded = {
    model: SCORM;
  };

  type ScormList = DefaultResponse<PaginatedList<SCORM>>;

  type ScormScosList = DefaultResponse<SCORM_SCO>;

  type TemplateItem = {
    assignable_class: string;
    assignable_id: number;
  };

  type SettingType = 'text' | 'markdown' | 'json' | 'file' | 'image';
  type SettingBase = {
    id: number;
    key: string;
    group: string;
    value: string;
    public: boolean;
    enumerable: boolean;
    sort: number;
    type: SettingType;
    data: any;
  };

  type Setting =
    | (SettingBase & {
        type: 'text';
        data: string;
      })
    | (SettingBase & {
        type: 'markdown';
        data: string;
      })
    | (SettingBase & {
        type: 'json';
        data: object;
      })
    | (SettingBase & {
        type: 'file';
        data: string;
      })
    | (SettingBase & {
        type: 'image';
        data: string;
      });

  type Role = {
    id: number;
    name: string;
    assigned?: boolean;
    guard_name?: string;
  };

  type Questionnaire = {
    id?: number;
    title: string;
    questions?: Question[];
    models?: QuestionnaireModel[];
    active: boolean;
  };

  type QuestionnaireModel = {
    id: number;
    model_class: string;
    title: string;
    model_id?: number;
    model_type_id?: number;
  };

  type Question = {
    id: number;
    title: string;
    questionnaire_id: id;
    description: string;
    position: number;
    active: boolean;
    type: string;
  };

  type Notification = {
    id: string;
    type: string;
    notifiable_type: string;
    notifiable_id: number;
    data: [];
    read_at: null | Date;
    created_at: Date;
    updated_at: Date;
    event: EventTypes;
  };

  type Config = {
    rules: string[];
    public: boolean;
    readonly: boolean;
    value: string | string[];
  };

  type Configs = Record<string, Record<string, Config>>;

  type ConfigsList = DefaultResponse<Configs>;

  type ConfigEntry = {
    key: keyof API.Configs;
    full_key: string;
  } & API.Config;

  type ConfigUpdateRequest = {
    config: Record<string, string>[];
  };

  type LinkedType =
    | {
        type: '';
        value: null;
      }
    | {
        type: 'App\\Models\\User' | 'EscolaLms\\Core\\Models\\User';
        value: API.UserItem;
      }
    | {
        type: 'EscolaLms\\Cart\\Models\\Order';
        value: API.Order;
      }
    | {
        type: 'EscolaLms\\Cart\\Models\\Course';
        value: API.Course;
      }
    | {
        type: 'EscolaLms\\Auth\\Models\\UserGroup';
        value: API.UserGroup;
      };

  type ReportType =
    | 'EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric'
    | 'EscolaLms\\Reports\\Metrics\\CoursesPopularityMetric'
    | 'EscolaLms\\Reports\\Metrics\\CoursesSecondsSpentMetric'
    | 'EscolaLms\\Reports\\Metrics\\TutorsPopularityMetric';

  type ReportItem = {
    label: string;
    value: number;
    measurable_id: number;
    measurable_type: 'EscolaLms\\Courses\\Models\\Course' | 'EscolaLms\\Auth\\Models\\User';
  };

  type Report = ReportItem[];

  type ReportList = DefaultResponse<Report>;

  type UserSetting = { [name: string]: string };

  type UserGroup = {
    id: number;
    name: string;
    name_with_breadcrumbs: string;
    parent_id: null | number;
    registerable: boolean;
    users: UserItem[];
  };

  type CourseAccess = {
    users: UserItem[] | number[];
    groups: UserGroup[] | number[];
  };

  type UserGroups = UserGroup[];

  type UserGroupRow = DefaultResponse<UserGroup>;

  type UserGroupAddRow = DefaultResponse<UserItem[]>;

  type UserGroupList = DefaultMetaResponse<UserGroup>;

  type UserGroupsParams = PageParams &
    PaginationParams & {
      search?: string;
      parent_id?: number;
    };

  type CourseAccessList = DefaultResponse<CourseAccess>;

  type Resource = {
    id: number;
    name: string;
    path: string;
    topic_id: number;
    url: string;
  };

  type ResourceList = DefaultResponse<Resource[]>;

  type ResourceRow = DefaultResponse<Resource>;

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

  type Dict = {
    [key: string]: string | Dict;
  };

  export type H5PObject = {
    baseUrl: string;
    url: string;
    postUserStatistics: boolean;
    ajax: { setFinished: string; contentUserData: string };
    saveFreq: boolean;
    siteUrl: string;
    l10n: Dict;
    hubIsEnabled: boolean;
    loadedJs: string[];
    loadedCss: string[];
    core: {
      styles: string[];
      scripts: string[];
    };
    editor?: {
      filesPath: string;
      fileIcon: { path: string; width: number; height: number };
      ajaxPath: string;
      libraryUrl: string;
      copyrightSemantics: Dict;
      metadataSemantics: Dict[];

      assets: {
        css: string[];
        js: string[];
      };
      deleteMessage: string;
      apiVersion: { majorVersion: number; minorVersion: number };
    };
    nonce: string;
    contents?: Record<
      string,
      {
        library: string;
        jsonContent: string;
        fullScreen: boolean;
        title: string;
        content: {
          id: number;
          library: {
            id: number;
            embedTypes: string;
            name: string;
          };
        };
        contentUserData: [
          {
            state: object;
          },
        ];
      }
    >;
  };
}
