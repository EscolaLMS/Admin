declare module '*.less';

declare namespace API {
  import type * as Enum from './enums';

  /// ---- ENUMS ----- ///

  type TopicType = Enum.TopicType;

  type EventTypes = Enum.EventTypes;

  type CourseStatus = Enum.CourseStatus;

  type TemplateChannelValue = Enum.TemplateChannelValue;

  type TemplateEvents = Enum.TemplateEvents;

  type VouchersTypes = Enum.VouchersTypes;

  /// ---- ENUMS ----- ///

  /// ----- Ant Design Pro Types ----- ///
  type NoticeIconTabProps = {
    count?: number;
    showClear?: boolean;
    showViewMore?: boolean;
    style?: React.CSSProperties;
    title: string;
    tabKey: API.NoticeIconItemType;
    onClick?: (item: API.NoticeIconItem) => void;
    onClear?: () => void;
    emptyText?: string;
    clearText?: string;
    viewMoreText?: string;
    list: API.NoticeIconItem[];
    onViewMore?: (e: any) => void;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
    title?: string;
    slug?: string;
  };

  /// ----- Ant Design Pro Types ----- ///

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
    authors?: UserItem[] | number[];
    image_url?: string;
    poster_url?: string;
    video_url?: string;
    categories?: Category[] | (number | string)[];
    tags?: Tag[] | string[];
    scorm_id?: number;
    scorm_sco_id?: number;
    status?: string;
    active_from?: Date;
    active_to?: Date;
    hours_to_complete?: number;
    purchasable?: boolean;
    boolean?: boolean;
    target_group?: string;
    product?: EscolaLms.Cart.Models.Product;
    public?: boolean;
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
    errors: Record<string, string[]>;
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

  type CategoryList = DefaultMetaResponse<Category>;

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

  type TaskList = DefaultMetaResponse<EscolaLms.Tasks.Models.Task>;

  type TaskListItem = EscolaLms.Tasks.Models.Task;

  type Task = EscolaLms.Tasks.Models.Task & {
    notes: TaskNote[];
  };

  type TaskListParams = EscolaLms.Tasks.Http.Requests.Admin.AdminListTaskRequest &
    PageParams & {
      title?: string;
      user_id?: number;
      created_by_id?: number;
      related_type?: string;
      related_id?: number;
    };

  type TaskNote = EscolaLms.Tasks.Models.TaskNote & {
    note: string;
  };

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
      status?: string;
    };

  type CategoryParams = PageParams &
    PaginationParams & {
      name?: string;
      is_active?: string;
    };

  type ConsultationsParams = PageParams &
    PaginationParams & {
      name?: string;
      category_id?: number;
      status?: string | string[];
      dateRange?: [string, string];
      date_from?: string;
      date_to?: string;
      'categories[]'?: number;
    };

  type H5PListParams = PageParams &
    PaginationParams & {
      title?: string;
      library_id?: number;
    };

  type LoginRequest = {
    email: string;
    password: string;
    remember_me: boolean;
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
    interests: any;
    path_avatar: string;
    avatar: string;
    roles: ('admin' | 'tutor' | 'student')[];
    permissions: string[];
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
    lessons?: Lesson[];
    parent_id?: number;
  };

  type CourseStats = {
    EscolaLmsReportsStatsCourseAverageTime: number;
    EscolaLmsReportsStatsCourseAverageTimePerTopic: Record<string, number>;
    EscolaLmsReportsStatsCourseMoneyEarned: number;
    EscolaLmsReportsStatsCoursePeopleBought: number;
    EscolaLmsReportsStatsCoursePeopleFinished: number;
    EscolaLmsReportsStatsCoursePeopleStarted: number;
  };

  type DataRangeStats = {
    EscolaLmsReportsStatsUserNewUsers: Record<string, number>;
    EscolaLmsReportsStatsUserActiveUsers: Record<string, number>;
    EscolaLmsReportsStatsCourseStarted: any[];
    EscolaLmsReportsStatsCourseFinished: any[];
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
    can_skip?: boolean;
    json?: object &
      ?{
        ffmpeg:
          | {
              state: 'coding';
              percentage: number;
            }
          | {
              state: 'finished';
              path: string;
            };
      };
    introduction?: string;
    description?: string;
    summary?: string;
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

  type TopicProject = TopicBase & {
    topicable_type: TopicType.Project;
    topicable: TopicableBase & { notify_users?: string[] };
  };

  type TopicQuiz = TopicBase & {
    topicable_type: TopicType.GiftQuiz;
    topicable: TopicableBase & {
      questions: GiftQuestion[];
      max_attempts?: number;
      max_execution_time?: number;
    };
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
    topicable: TopicableBase & {
      content: H5PObject;
    };
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
    | TopicScorm
    | TopicProject;

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

  type OrderItem = EscolaLms.Cart.Models.OrderItem & {
    product_id: number;
    product_type: Enum.BuyableTypes;
  };

  interface Order extends EscolaLms.Cart.Models.Order {
    status: PaymentStatus;
  }

  type PaymentStatus = 'NEW' | 'PAID' | 'CANCELLED' | 'FAILED';
  type OrderStatus = 'PAID' | 'CANCELLED';

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
    user_id: number;
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
    channel?: TemplateChannel;
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
    type: 'mjml' | 'url' | 'fabric.js' | 'text' | 'html';
    required_variables: string[];
    required: boolean;
    default_content: string;
    readonly: boolean;
  };

  type TemplateVariable = string;

  type TemplateChannelVariable = {
    assignable_class: '';
    class: '';
    required_variables: string[];
    variables: string[];
    sections: Record<string, TemplateField>;
  };

  type TemplateVariables = Record<string, Record<string, TemplateChannelVariable>>;

  type File = {
    name: string;
    created_at: string;
    mime: 'directory' | 'file';
    url: string;
  };

  type FileList = DefaultResponse<PaginatedList<File>>;

  type FileUpload = DefaultResponse<File[]>;

  type Certificate = Template & {
    id: number;
    name: string;
    event: string;
    default: boolean;
    assignables: CertificateAssignables[];
    channel: TemplateChannel;
    selection: CertificateSelection[];
    created_at: string;
    updated_at: string;
  };

  type CertificateSelection = {
    id: number;
    key: string;
    template_id: number;
    content: string;
    created_at: string;
    updated_at: string;
  };

  type CertificateAssignables = object;

  type Certificates = Certificate[];

  type CertificateList = DefaultResponse<Certificates>;

  type TemplateChannel =
    | TemplateChannelValue.email
    | TemplateChannelValue.pdf
    | TemplateChannelValue.sms;

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

  type Consultation = {
    id: number;
    name: string;
    status: string;
    description: string;
    duration: string;
    author_id: number;
    author?: UserItem;
    base_price: number;
    active_to: string;
    active_from: string;
    created_at: string;
    updated_at: string;
    categories?: Category[] | (number | string)[];
    proposed_terms: (number | string)[];
    image_path?: string;
    image_url?: string;
    logotype_path?: string;
    logotype_url?: string;
    product?: EscolaLms.Cart.Models.Product;
  };

  type ConsultationAppointmentStatus = 'not_reported' | 'reported' | 'reject' | 'approved';

  type ConsultationAppointment = {
    consultation_term_id: number;
    duration: string;
    in_coming: boolean;
    is_ended: boolean;
    is_started: boolean;
    status: ConsultationAppointmentStatus;
    user: API.UserItem;
    date: Date | string;
    user: UserItem;
    busy_terms?: string[];
  };

  type TemplateItem = {
    assignable_class: string;
    assignable_id: number;
  };

  type SettingType = 'text' | 'markdown' | 'json' | 'file' | 'image' | 'boolean' | 'number';
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
        type: 'number';
        data: number;
      })
    | (SettingBase & {
        type: 'boolean';
        data: boolean;
      })
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

  type QuestionAnswer = EscolaLms.Questionnaire.Models.QuestionAnswer & {
    visible_on_front: boolean;
  };

  type Questionnaire = EscolaLms.Questionnaire.Models.Questionnaire & {
    models?: QuestionnaireModel[];
  };

  type QuestionnaireModel = EscolaLms.Questionnaire.Models.QuestionnaireModel & {
    model_type_title?: string;
    title?: string;
    model_title: string;
  };

  type Question = EscolaLms.Questionnaire.Models.Question;

  type QuestionnaireReport = {
    avg_rate: string;
    count_answers: number;
    question_id: number;
    sum_rate: number;
    title: string;
  };

  type QuestionnaireStars = {
    rates: object;
    sum_rates: number;
    count_answers: number;
    avg_rate: string;
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
        type:
          | 'App\\Models\\Order'
          | 'EscolaLms\\Cart\\Models\\Order'
          | 'EscolaLms\\Vouchers\\Models\\Order';
        value: API.Order;
      }
    | {
        type: 'App\\Models\\Course' | 'EscolaLms\\Cart\\Models\\Course';
        value: API.Course;
      }
    | {
        type: 'App\\Models\\Webinar' | 'EscolaLms\\Webinars\\Models\\Webinar';
        value: API.Webinar;
      }
    | {
        type: 'App\\Models\\User' | 'EscolaLms\\Auth\\Models\\UserGroup';
        value: API.UserGroup;
      }
    | {
        type:
          | 'App\\Models\\StationaryEvent'
          | 'EscolaLms\\StationaryEvents\\Models\\StationaryEvent';
        value: EscolaLms.StationaryEvents.Models.StationaryEvent;
      }
    | {
        type: 'Questionnaire';
        value: API.Questionnaire;
      }
    | {
        type: 'App\\Models\\Consultation' | 'EscolaLms\\Consultations\\Models\\Consultation';
        value: API.Consultation;
      }
    | {
        type: 'Product';
        value: EscolaLms.Cart.Models.Product;
      }
    | {
        type: 'Students';
        value: API.StudentUserGroup;
      };

  type ReportType =
    | 'EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric'
    | 'EscolaLms\\Reports\\Metrics\\CoursesPopularityMetric'
    | 'EscolaLms\\Reports\\Metrics\\CoursesSecondsSpentMetric'
    | 'EscolaLms\\Reports\\Metrics\\TutorsPopularityMetric'
    | 'EscolaLms\\Reports\\Metrics\\CoursesBestRatedMetric'
    | 'EscolaLms\\Reports\\Metrics\\CoursesTopSellingMetric';

  type ReportItem = {
    label: string;
    value: number;
    measurable_id: number;
    measurable_type: 'EscolaLms\\Courses\\Models\\Course' | 'EscolaLms\\Auth\\Models\\User';
  };

  type Report = ReportItem[];

  type ReportList = DefaultResponse<Report>;

  type UserSetting = Record<string, string>;

  type UserGroup = {
    id: number;
    name: string;
    name_with_breadcrumbs: string;
    parent_id: null | number;
    registerable: boolean;
    users: UserItem[];
    subgroups: UserGroup[];
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
    id?: string | number;
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

  export type Webinar = {
    id: number;
    name: string;
    status: string;
    description: string;
    duration: string;
    base_price: number;
    active_to: Date;
    active_from: Date;
    created_at: string;
    updated_at: string;
    trainers: UserItem[] | number[];
    image_path?: string;
    image_url?: string;
    tags?: Tag[] | string[];
    logotype_url?: string;
    logotype_path?: string;
    product?: EscolaLms.Cart.Models.Product;
  };

  type ProductableListItem = {
    productable_id: number;
    name: string;
    productable_type: string;
    id: number;
    morph_class: string;
    description: string;
    quantity?: number;
  };

  type ProductableResourceListItem = {
    class: string;
    description: string;
    id: number;
    name: string;
  };

  type ProductProductable = EscolaLms.Cart.Models.ProductProductable & {
    morph_class: string;
    name: string;
    description: string;
  };
  // I need to overwrite extra key by any, cause it could be any right now
  type ModelField = EscolaLms.ModelFields.Models.Metadata & { extra?: any };

  export type Translation = {
    group: string;
    key: string;
    text: Record<string, string>;
    id?: number;
  };

  export type TranslationRetrieve = {
    key: string;
    value: string;
  };

  type ConsultationAccessEnquiry = EscolaLms.ConsultationAccess.Models.ConsultationAccessEnquiry & {
    consultation_term: ConsultationAppointment;
    proposed_terms: EscolaLms.ConsultationAccess.Models.ConsultationAccessEnquiryProposedTerm[];
    meeting_link?: string;
  };

  type ConsultationAccessEnquiryList = DefaultMetaResponse<ConsultationAccessEnquiry>;

  type ConsultationAccessEnquiryListParams =
    EscolaLms.ConsultationAccess.Http.Requests.Admin.AdminListConsultationAccessEnquiryRequest &
      PageParams &
      PaginationParams & {
        user_id?: number;
        consultation_id?: number;
        status?: CourseAccessEnquiryStatus;
        proposed_at_from?: string;
        proposed_at_to?: string;
        is_coming?: boolean | 1 | 0;
      };

  type ConsultationAccessEnquiryListItem = ConsultationAccessEnquiry;

  type CourseAccessEnquiryList =
    DefaultMetaResponse<EscolaLms.CourseAccess.Models.CourseAccessEnquiry>;

  type CourseAccessEnquiryListItem = EscolaLms.CourseAccess.Models.CourseAccessEnquiry;

  type CourseAccessEnquiry = EscolaLms.CourseAccess.Models.CourseAccessEnquiry & {
    data: object;
  };

  type CourseAccessEnquiryStatus = 'pending' | 'approved';

  type CourseAccessEnquiryListParams =
    EscolaLms.CourseAccess.Http.Requests.Admin.AdminListCourseAccessEnquiryRequest &
      PageParams & {
        user_id?: number;
        course_id?: number;
        status?: CourseAccessEnquiryStatus;
      };

  type ProjectSolution = EscolaLms.TopicTypeProject.Models.ProjectSolution & {
    file_url: string;
  };

  type ProjectSolutionList = DefaultMetaResponse<ProjectSolution>;

  type ProjectSolutionListParams =
    EscolaLms.TopicTypeProject.Http.Requests.Admin.AdminListProjectSolutionRequest &
      PageParams & {
        user_id?: number;
        course_id?: number;
        topic_id?: number;
        order_by?: 'created_at' | 'id' | 'user_id' | 'topic_id';
        order?: 'ASC' | 'DESC';
      };

  type ConsultationAccessEnquiryList = DefaultMetaResponse<ConsultationAccessEnquiry>;

  /** GIFT Quiz types */
  type QuizQuestionBase = {
    id: number;
    question: string;
    score: number;
    title: string;
    value: string;
    type: QuestionType;
  };

  type QuizQuestion_MultipleChoice = QuizQuestionBase & {
    options: { answers: string[] };
    type: Enum.QuestionType.MULTIPLE_CHOICE;
  };
  type QuizQuestion_MultipleChoiceWithMultipleRightAnswers = QuizQuestionBase & {
    options: { answers: string[] };
    type: Enum.QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS;
  };
  type QuizQuestion_TrueFalse = QuizQuestionBase & {
    options: unknown[];
    type: Enum.QuestionType.TRUE_FALSE;
  };
  type QuizQuestion_ShortAnswers = QuizQuestionBase & {
    options: unknown[];
    type: Enum.QuestionType.SHORT_ANSWERS;
  };
  type QuizQuestion_Matching = QuizQuestionBase & {
    options: {
      sub_questions: string[];
      sub_answers: string[];
    };
    type: Enum.QuestionType.MATCHING;
  };
  type QuizQuestion_NumericalQuestion = QuizQuestionBase & {
    options: unknown[];
    type: Enum.QuestionType.NUMERICAL_QUESTION;
  };
  type QuizQuestion_Essay = QuizQuestionBase & {
    options: unknown[];
    type: Enum.QuestionType.ESSAY;
  };
  type QuizQuestion_Description = QuizQuestionBase & {
    options: unknown[];
    type: Enum.QuestionType.DESCRIPTION;
  };

  export type GiftQuestion =
    | QuizQuestion_MultipleChoice
    | QuizQuestion_MultipleChoiceWithMultipleRightAnswers
    | QuizQuestion_TrueFalse
    | QuizQuestion_ShortAnswers
    | QuizQuestion_Matching
    | QuizQuestion_NumericalQuestion
    | QuizQuestion_Essay
    | QuizQuestion_Description;

  type TextAnswer = { text: string };

  type MultipleAnswer = {
    multiple: string[];
  };
  type MatchingAnswer = { matching: Record<string, string> };
  type NumericAnswer = { numeric: number };
  type BooleanAnswer = { bool: boolean };

  type GiftQuizAnswer =
    | TextAnswer
    | MultipleAnswer
    | MatchingAnswer
    | NumericAnswer
    | BooleanAnswer;

  type AttemptAnswer = Omit<EscolaLms.TopicTypeGift.Models.AttemptAnswer, 'answer'> & {
    answer: GiftQuizAnswer;
  };

  type QuizAttempt = Omit<EscolaLms.TopicTypeGift.Models.QuizAttempt, 'questions' | 'answers'> & {
    id: number;
    user_id: number;
    topic_gift_quiz_id: number;
    started_at: Date | string;
    end_at: Date | string | null;
    max_score: number;
    result_score: number | null;
    is_ended: boolean;
  };

  type QuizAttemptDetails = QuizAttempt & {
    questions: GiftQuestion[];
    answers: AttemptAnswer[];
  };

  type QuizAttemptsParams = EscolaLms.TopicTypeGift.Http.Requests.ListQuizAttemptRequest &
    PaginationParams & {
      topic_gift_quiz_id: number;
      dateRange?: [string, string];
      date_from?: string;
      date_to?: string;
    };

  type Vouchers = EscolaLms.Vouchers.Http.Requests.ListCouponsRequest &
    API.PageParams &
    API.PaginationParams & {
      name?: string;
      code?: string;
      dateRange?: [string, string];
      active_from?: string;
      active_to?: string;
    };

  type TemplatesParams = EscolaLms.Templates.Http.Requests.TemplateListingRequest &
    API.PageParams &
    API.PaginationParams & {
      name?: string;
    };

  type SubjectGroups = {
    id: number;
    name: string;
    parent_id: number;
  };

  type Subject = {
    id: number;
    name: string;
  };

  type SubjectSemester = {
    id: number;
    name: string;
    type: string;
    year: string;
  };

  type Semester = {
    id: number;
    name: string;
    type: string;
    speciality: string;
    study_plan_id: number;
    academic_year_id: number;
  };

  type Subjects = {
    id: number;
    group_id: number;
    semester: SubjectSemester;
    subject: Subject;
    groups: SubjectGroups[];
  };

  type SemestersList = DefaultMetaResponse<Semester>;
  type SubjectsList = DefaultMetaResponse<Subjects>;
  type SubjectParams = PageParams & PaginationParams & { semester_id?: number };
  type SubjectRow = DefaultResponse<Subjects>;

  type StudentUser = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: number | string | null;
    is_active: boolean;
    email_verified_at: string;
    path_avatar: string | null;
    gender: string | null;
    age: number | string | null;
    country: string | null;
    city: string | null;
    street: string | null;
    postcode: number | string | null;
    created_at: Date | string | null;
    updated_at: Date | string | null;
    points: number;
    notification_channels: number | string | null;
    access_to_directories: number | string | null;
    current_timezone: string;
    deleted_at: Date | string | null;
    external_id: string;
    email_additional: string;
    academic_teacher_id: number | null;
    student_id: number;
    login: string | null;
    avatar_url: number | string | null;
    pivot: {
      group_id: number;
      user_id: number;
    };
    academic_teacher_id: number | null;
  };

  type StudentUserGroup = {
    id: number;
    name: string;
    users: StudentUser[];
  };

  type StudentGroupRow = DefaultResponse<StudentUserGroup[]>;
  type ExamsParams = PaginationParams & {
    semester_subject_id?: number;
    subject_id?: number;
    semester_id?: number;
  };

  type StudentAttendance = {
    user_id: number;
    value: AttendanceValue;
  };

  type GroupAttendanceSchedule = {
    id: number;
    date_from: Date | string;
    date_to: Date | string;
    subject_id: number;
    group_id: number;
    semester_id: number;
    teacher_id: number;
    term_status_id: number;
    attendances: StudentAttendance[];
  };

  type AttendanceScheduleList = DefaultResponse<GroupAttendanceSchedule[]>;
  type ChangeStudentAttendance = DefaultResponse<StudentAttendance[]>;

  type ExamResult = {
    result: number;
    user_id: number;
    first_name: string;
    last_name: string;
    email: string;
  };

  type ExamSemester = {
    id: number;
    name: string;
    type: string;
    year: string;
  };

  type Exam = {
    id: number;
    semester_subject_id: number;
    semester: ExamSemester;
    title: string;
    type: Enum.ExamGradeType;
    weight: number;
    passed_at: Date | string;
    results: ExamResult[];
    created_at: Date | string;
    user_id: number;
  };

  type CreateExamResult = {
    user_id: number;
    result: number;
  };

  type CreateExamRequest = {
    semester_subject_id: number;
    title: string;
    type: string;
    weight: number;
    passed_at: Date | string;
    results: CreateExamResult[];
  };

  type CreateExamResultRequest = {
    result: number;
  };

  type ParseExamFileRequest = {
    semester_subject_id: number;
    type: Enum.ExamGradeType;
  };

  type GradeScale = {
    name: string;
    grade: number;
    grade_value: number;
  };

  type SubjectGradeScale = GradeScale & {
    id: number;
    s_subject_scale_form_id: number;
  };

  type SubjectTutorGrades = {
    id: number;
    tutor_id: number;
    semester_subject_id: number;
    grade_scale: GradeScale[];
  };

  type CreateSubjectTutorGradesRequest = {
    grade_scale: GradeScale[];
  };

  type SemesterSubjectTutor = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };

  type SemesterSubjectTutors = {
    id: number; // semester_subject_id,
    tutors: SemesterSubjectTutor[];
  };

  type FinalGradeItemUser = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };

  type GradeTerm = {
    id: number;
    name: string;
  };

  type FinalGradeItemGrade = {
    id: number;
    grade_name: string;
    grade_value: number;
    grade_date: Date | string;
    grade_term: GradeTerm;
  };

  type FinalGradeItem = {
    id: number;
    user: FinalGradeItemUser;
    group_id: number;
    s_subject_scale_form_id: number;
    grades: FinalGradeItemGrade[];
  };

  type UserAttendanceSchedule = Omit<API.GroupAttendanceSchedule, 'attendances'> & {
    attendance: API.StudentAttendance;
  };

  type CreateFinalGradeRequest = {
    lesson_group_user_id: number;
    grade_term_id: number;
    grade_scale_id: number;
  };

  type UpdateFinalGradeRequest = {
    grade_scale_id: number;
  };
}

declare module 'jsoneditor-react' {
  export class JsonEditor extends React.Component<JsonEditorProps> {
    jsonEditor: any;
  }

  type Mode = 'tree' | 'view' | 'form' | 'code' | 'text';

  interface JsonEditorProps {
    value: any;
    /** Set the editor mode. Default 'tree' */
    mode?: Mode;
    /** Initial field name for root node */
    name?: string;
    /** Validate the JSON object against a JSON schema. */
    schema?: any;
    /** Schemas that are referenced using the $ref property */
    schemaRefs?: object;
    /**
     * If true, object keys in 'tree', 'view' or 'form' mode list be listed alphabetically
     * instead by their insertion order.
     * */
    sortObjectKeys?: boolean;

    /** Set a callback function triggered when json in the JSONEditor change */
    onChange?: (value: any) => void;
    /**
     * Set a callback function triggered when an error occurs.
     * Invoked with the error as first argument.
     * The callback is only invoked for errors triggered by a users action,
     * like switching from code mode to tree mode or clicking
     * the Format button whilst the editor doesn't contain valid JSON.
     */
    onError?: (error: any) => void;
    /** Set a callback function triggered right after the mode is changed by the user. */
    onModeChange?: (mode: Mode) => void;
    onClassName?: (args: { path: any; field: str; value: any }) => void;

    /** Provide a version of the Ace editor. Only applicable when mode is code */
    ace?: object;
    /** Provide a instance of ajv,the library used for JSON schema validation. */
    ajv?: object;
    /** Set the Ace editor theme, uses included 'ace/theme/jsoneditor' by default. */
    theme?: string;
    /**
     * Enables history, adds a button Undo and Redo to the menu of the JSONEditor.
     * Only applicable when mode is 'tree' or 'form'. Default to false
     */
    history?: boolean;
    /**
     * Adds navigation bar to the menu
     * the navigation bar visualize the current position on the
     * tree structure as well as allows breadcrumbs navigation. Default to true
     */
    navigationBar?: boolean;
    /**
     * Adds status bar to the buttom of the editor
     * the status bar shows the cursor position and a count of the selected characters.
     * Only applicable when mode is 'code' or 'text'. Default to true
     */
    statusBar?: boolean;
    /** Enables a search box in the upper right corner of the JSONEditor. Default to true */
    search?: boolean;
    /** Create a box in the editor menu where the user can switch between the specified modes. */
    allowedModes?: Mode[];

    /** Html element, or react element to render */
    tag?: string | HTMLElement;
    /** html element custom props */
    htmlElementProps?: object;
    /** callback to get html element reference */
    innerRef?: (ref: any) => void;
  }
}
