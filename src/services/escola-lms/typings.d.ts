declare module '*.less';

declare namespace API {
  import type * as Enum from './enums';

  type Nullable<T> = T | null | undefined;

  /// ---- ENUMS ----- ///

  type TopicType = Enum.TopicType;

  type EventTypes = Enum.EventTypes;

  type CourseStatus = Enum.CourseStatus;

  type TemplateChannelValue = Enum.TemplateChannelValue;

  type TemplateEvents = Enum.TemplateEvents;

  type VouchersTypes = Enum.VouchersTypes;

  type AttendanceValue = Enum.AttendanceValue;

  type CompetencyChallengeType = Enum.CompetencyChallengeType;

  type QuestionType = Enum.QuestionType;

  type TopicStatsKey = Enum.TopicStatsKey;

  type FieldType = Enum.FieldType;

  type BookmarkableType = Enum.BookmarkableType;

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
    name_with_breadcrumbs: string;
    description: Nullable<string>;
    slug: string;
    is_active: boolean;
    parent_id?: number;
    icon?: string;
    icon_class: string;
    created_at: string;
    updated_at: string;
    order: number;
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

  export type BookmarkNote = {
    id: number;
    value: Nullable<string>;
    bookmarkable_id: number;
    bookmarkable_type: BookmarkableType;
    user_id: number;
  };

  export type BookmarkNoteList = DefaultMetaResponse<BookmarkNote>;

  export type BookmarkNoteParams = PaginationParams & {
    order_by?: 'created_at' | 'id' | 'value';
    order?: 'ASC' | 'DESC';
    has_value?: boolean | 1 | 0;
    bookmarkable_id?: number;
    bookmarkable_ids?: number[];
    bookmarkable_type?: BookmarkableType;
    user_id?: number;
  };

  export type BookmarkNote = {
    id: number;
    value: Nullable<string>;
    bookmarkable_id: number;
    bookmarkable_type: BookmarkableType;
    user_id: number;
  };

  export type BookmarkNoteList = DefaultMetaResponse<BookmarkNote>;

  export type BookmarkNoteParams = PaginationParams & {
    order_by?: 'created_at' | 'id' | 'value';
    order?: 'ASC' | 'DESC';
    has_value?: boolean | 1 | 0;
    bookmarkable_id?: number;
    bookmarkable_ids?: number[];
    bookmarkable_type?: BookmarkableType;
    user_id?: number;
  };

  // TODO #138: improve the optional keys for this task https://github.com/EscolaLMS/Admin/issues/138
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
      authors?: number | number[];
      active?: boolean;
      status?: string;
      group_id?: number;
      tag?: string | string[];
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

  type WebinarsParams = PageParams &
    PaginationParams & {
      name?: string;
      category_id?: number;
      status?: string | string[];
      dateRange?: [string, string];
      date_from?: string;
      date_to?: string;
      'categories[]'?: number;
      tags?: string | string[];
      tag?: string | string[];
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
    roles: ('admin' | 'tutor' | 'student' | string)[];
    permissions: string[];
    password?: string;
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
    active_from?: Date | string;
    active_to?: Date | string;
    summary?: string;
    topics?: Topic[];
    isNew?: boolean;
    lessons?: Lesson[];
    parent_id?: number;
  };

  type CourseStatsParam =
    | 'EscolaLms\\Reports\\Stats\\Course\\AttendanceList'
    | 'EscolaLms\\Reports\\Stats\\Course\\AverageTime'
    | 'EscolaLms\\Reports\\Stats\\Course\\AverageTimePerTopic'
    | 'EscolaLms\\Reports\\Stats\\Course\\FinishedCourse'
    | 'EscolaLms\\Reports\\Stats\\Course\\FinishedTopics'
    | 'EscolaLms\\Reports\\Stats\\Course\\MoneyEarned'
    | 'EscolaLms\\Reports\\Stats\\Course\\PeopleBought'
    | 'EscolaLms\\Reports\\Stats\\Course\\PeopleFinished'
    | 'EscolaLms\\Reports\\Stats\\Course\\PeopleStarted';

  type CourseAttemptDateObject = {
    date: string;
    seconds_total: string[];
  };

  type CourseAttemptDates = Record<string, CourseAttemptDateObject>;

  type CourseAttemptObject = {
    attempt: number;
    dates: CourseAttemptDates;
  };

  type CourseAttempt = Record<number, CourseAttemptObject>;

  type CourseAttempts = {
    attempts: CourseAttempt & CourseAttempt[];
    email: string;
    id: number;
  };

  type FinishedCourseUserStats = {
    email: string;
    finished: boolean;
    finished_at: Date | string;
    id: number;
  };

  type FinishedTopicsUserStat = {
    id: number;
    finished_at: string;
    started_at: string;
    title: string;
    seconds: number;
  };

  type FinishedTopicsUserStats = {
    email: string;
    id: number;
    seconds_total: number;
    topics: FinishedTopicsUserStat[];
  };

  type CourseStatsAverageTimePerTopic = {
    title: string;
    average_time: number;
  };

  type CourseStats = {
    'EscolaLms\\Reports\\Stats\\Course\\AttendanceList': CourseAttempts[];
    'EscolaLms\\Reports\\Stats\\Course\\AverageTime': number;
    'EscolaLms\\Reports\\Stats\\Course\\AverageTimePerTopic': Record<
      string,
      CourseStatsAverageTimePerTopic
    >;
    'EscolaLms\\Reports\\Stats\\Course\\MoneyEarned': number;
    'EscolaLms\\Reports\\Stats\\Course\\PeopleBought': number;
    'EscolaLms\\Reports\\Stats\\Course\\PeopleFinished': number;
    'EscolaLms\\Reports\\Stats\\Course\\PeopleStarted': number;
    'EscolaLms\\Reports\\Stats\\Course\\FinishedCourse': FinishedCourseUserStats[];
    'EscolaLms\\Reports\\Stats\\Course\\FinishedTopics': FinishedTopicsUserStats[];
  };

  type GiftQuizTopicStat = {
    user_id: number;
    attempt: number; // index (1 based) of attempt
    attempt_date: Date | string;
    attempt_time: number; // time between attempt_start and attempt_end in seconds
    [`question_${number}`]: number; // points from certain question (number is id)
    summary: number; // points_sum/max_points -> percents (between 0 and 1)
  };

  type TopicStats = {
    [TopicStatsKey.QuizSummary]: GiftQuizTopicStat[];
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
      questions: AttemptGiftQuestion[];
      max_attempts?: number;
      max_execution_time?: number;
      min_pass_score?: number;
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
    | TopicProject
    | TopicQuiz;

  type TopicNotEmpty =
    | TopicRichText
    | TopicOEmbed
    | TopicAudio
    | TopicVideo
    | TopicH5P
    | TopicImage
    | TopicPDF
    | TopicScorm
    | TopicProject
    | TopicQuiz;

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

  type PaymentStatus = 'NEW' | 'PAID' | 'CANCELLED' | 'FAILED' | 'PROCESSING';
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

  type RecommenderTopicType =
    | OEmbed
    | PDF
    | Video
    | RichText
    | Image
    | H5P.Summary
    | H5P.FindTheWords
    | H5P.ImageHotspotQuestion
    | H5P.DragText
    | H5P.Blanks
    | H5P.TrueFalse
    | H5P.QuestionSet
    | H5P.Crossword
    | H5P.ImageJuxtaposition
    | H5P.Accordion
    | H5P.CoursePresentation
    | H5P.MultiMediaChoice
    | H5P.DragQuestion
    | H5P.SingleChoiceSet
    | H5P.MultiChoice
    | H5P.Column
    | H5P.GuessTheAnswer
    | H5P.MemoryGame
    | H5P.Flashcards
    | H5P.Chart
    | H5P.Cornell
    | H5P.InteractiveBook
    | H5P.Dialogcards
    | H5P.Agamotto
    | H5P.Collage
    | H5P.ImageSequencing
    | H5P.SortParagraphs
    | H5P.InteractiveVideo
    | H5P.Audio
    | H5P.ImageHotspots
    | H5P.Timeline
    | H5P.BranchingScenario
    | H5P.InfoWall
    | H5P.Essay
    | H5P.MarkTheWords
    | H5P.PersonalityQuiz
    | H5P.ImageSlider
    | H5P.KewArCode
    | H5P.ImagePair;

  type Recommender = {
    probability: number;
  };

  type RecommenderExercise = {
    topic_type: RecommenderTopicType;
    probability: number;
  };

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
    teachers: UserItem[] | number[];
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
    date: Date | string;
    user: UserItem;
    busy_terms?: string[];
  };

  type TemplateItem = {
    assignable_class: string;
    assignable_id: number;
  };

  type SettingType =
    | 'text'
    | 'markdown'
    | 'json'
    | 'file'
    | 'image'
    | 'boolean'
    | 'number'
    | 'array';
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
      })
    | (SettingBase & {
        type: 'array';
        data: any[];
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
  type QuestionnaireModel = {
    id: number;
    title: string;
    model_class: string;
    created_at: string | null;
    updated_at: string | null;
  };

  type QuestionnaireQuestionModel = {
    id: number;
    model_id: number;
    model_title: string;
    model_type_class: string;
    model_type_id: number;
    model_type_title: string;
    display_frequency_minutes: number | null;
    target_group: 'user' | 'author' | null;
  };

  type Questionnaire = Pick<
    EscolaLms.Questionnaire.Models.Questionnaire,
    'active' | 'id' | 'title'
  > & {
    models: QuestionnaireQuestionModel[];
    questions: QuestionnaireQuestion[];
  };

  type QuestionnaireQuestion = {
    active: boolean;
    description: string;
    id: number;
    position: number;
    public_answers: boolean;
    questionnaire_id: number;
    title: string;
    type: Enum.QuestionnaireQuestionType;
  };

  type QuestionnaireReport = {
    avg_rate: string;
    count_answers: number;
    question_id: number;
    sum_rate: number;
    title: string;
  };

  type QuestionnaireStars = {
    // TODO FIX THIS TYPE
    rates: Record<number, number>;
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
      }
    | {
        type: 'EscolaLms\\TopicTypeGift\\Models\\GiftQuiz';
        value: API.GiftQuiz;
      }
    | {
        type: 'Category';
        value: API.Category;
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
    token?: string;
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
    image_path?: string | null;
    image_url?: string;
    tags?: Tag[] | string[];
    logotype_url?: string;
    logotype_path?: string | null;
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
  type ModelField = Omit<EscolaLms.ModelFields.Models.Metadata, 'type'> & {
    extra?: any;
    type: FieldType;
  };

  export type Translation = {
    group: string;
    key: string;
    text: Record<string, string>;
    id?: number;
    public?: boolean;
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
      PageParams &
      PaginationParams & {
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
  type QuizQuestion = {
    id: number;
    type: QuestionType;
    category_id?: Nullable<number>;
    order: Nullable<number>;
    score: number;
    value: string; // in GIFT grammar
  };

  type CreateQuizQuestion = {
    topic_gift_quiz_id: number;
    value: string;
    score: number;
    order?: Nullable<number>;
    category_id?: Nullable<number>;
  };

  type QuizQuestionBase = {
    id: number;
    question: string;
    score: number;
    title: string;
    value: string;
    type: QuestionType;
    order: Nullable<number>;
    category_id?: Nullable<number>;
  };

  type QuizQuestion_MultipleChoice = QuizQuestionBase & {
    options: { answers: string[] };
    type: QuestionType.MULTIPLE_CHOICE;
  };
  type QuizQuestion_MultipleChoiceWithMultipleRightAnswers = QuizQuestionBase & {
    options: { answers: string[] };
    type: QuestionType.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS;
  };
  type QuizQuestion_TrueFalse = QuizQuestionBase & {
    type: QuestionType.TRUE_FALSE;
  };
  type QuizQuestion_ShortAnswers = QuizQuestionBase & {
    type: QuestionType.SHORT_ANSWERS;
  };
  type QuizQuestion_Matching = QuizQuestionBase & {
    options: {
      sub_questions: string[];
      sub_answers: string[];
    };
    type: QuestionType.MATCHING;
  };
  type QuizQuestion_NumericalQuestion = QuizQuestionBase & {
    type: QuestionType.NUMERICAL_QUESTION;
  };
  type QuizQuestion_Essay = QuizQuestionBase & {
    type: QuestionType.ESSAY;
  };
  type QuizQuestion_Description = QuizQuestionBase & {
    type: QuestionType.DESCRIPTION;
  };

  export type AttemptGiftQuestion =
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
    course: Pick<Course, 'id' | 'title'>;
    id: number;
    started_at: Date | string;
    end_at: Date | string | null;
    is_ended: boolean;
    max_score: number;
    min_pass_score: number | null;
    result_score: number | null;
    topic_gift_quiz_id: number;
    user: Pick<User, 'id' | 'first_name' | 'last_name' | 'email'>;
    user_id: number;
  };

  type QuizAttemptDetails = QuizAttempt & {
    questions: AttemptGiftQuestion[];
    answers: AttemptAnswer[];
    topic: Topic;
  };

  type QuizAttemptsParams = EscolaLms.TopicTypeGift.Http.Requests.ListQuizAttemptRequest &
    PaginationParams & {
      topic_gift_quiz_id: number;
      dateRange?: [string, string];
      date_from?: string;
      date_to?: string;
      course_id?: number;
      user_id?: number;
    };

  type GiftQuiz = {
    id: number;
    value: string;
    type: string;
    max_attempts: number;
    max_execution_time: number;
    questions: QuizQuestion[];
  };

  type UpdateGiftQuiz = {
    max_attempts: number;
    max_execution_time: number;
    value: string;
  };

  type UpdateGiftQuizAnswer = {
    score?: number;
    feedback?: string;
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
    ms_teams_web_url: string | null;
    ms_teams_team_id: string; // uuid
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
    student_id?: number;
    group_id?: number;
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
    is_outdated: boolean;
  };

  type AttendanceScheduleList = DefaultResponse<GroupAttendanceSchedule[]>;
  type ChangeStudentAttendance = DefaultResponse<StudentAttendance[]>;

  type ScheduleData = {
    id: number;
    date_from: Date | string;
    date_to: Date | string;
    ms_teams_join_url: string | null;
    tutor: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
    };
    subject: {
      id: number;
      name: string;
    };
    semester: {
      id: number;
      name: string;
      type: string;
      year: string;
    };
    term_status: {
      id: number;
      name: string;
    };
    group: {
      id: number;
      name: string;
    };
  };

  type ScheduleList = DefaultResponse<ScheduleData[]>;

  type ExamResult = {
    result: number | string | null;
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
    weight?: number;
    passed_at: Date | string;
    results: ExamResult[];
    created_at: Date | string;
    user_id: number;
    group_id: number;
  };

  type CreateExamResult = {
    user_id: number;
    result: number | string | null;
  };

  type CreateExamRequest = {
    semester_subject_id: number;
    title: string;
    type: string;
    weight?: number;
    group_id: number;
    passed_at: Date | string;
    results: CreateExamResult[];
  };

  type CreateExamResultRequest = {
    result: number | string | null;
  };

  type ParseExamFileRequest = {
    semester_subject_id: number;
    group_id: number;
    type: Enum.ExamGradeType;
  };

  type GradeScale = {
    name: string;
    grade: number;
    grade_value: number;
  };

  type SubjectTutorGradeScale = {
    s_subject_scale_form_id: number;
    scale: GradeScale[];
  };

  type SubjectTutorGrades = {
    id: number;
    tutor_id: number;
    semester_subject_id: number;
    grade_scale: SubjectTutorGradeScale[] | null;
  };

  type CreateSubjectTutorGradesRequest = {
    grade_scale: SubjectTutorGradeScale[];
  };

  type SubjectGradeScale = GradeScale & {
    id: number;
    s_subject_scale_form_id: number;
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
    tutor_id: number;
    s_subject_scale_form_id: number;
    grades: FinalGradeItemGrade[];
    semester_closed?: boolean;
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

  type LessonTopicId = number;
  type Index = number;

  type CoursesSortOrderItem = [LessonTopicId, Index];

  type CoursesSortRequest = {
    class: 'Lesson' | 'Topic';
    orders: CoursesSortOrderItem[];
    course_id: number;
  };

  type CreateTeamsChatRequest = {
    user_id: number;
  };

  type TeamsChat = {
    web_url: string; //url
  };

  type PCGFileDataDoneBy = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };

  type PCGFileData = {
    url: string;
    version: string;
    class_type: 'EscolaLms\\PcgExport\\Exports\\PcgExport';
    created_at: Date | string;
    created_by: PCGFileDataDoneBy;
    exported_at: Date | string;
    exported_by: PCGFileDataDoneBy;
  };

  type PCGFileExportsHistoryParams = PaginationParams & {
    group_id?: number;
    created_by?: number;
    exported_by?: number;
    class_type?: string;
  };

  type PCGFileExportsHistoryItem = PCGFileData & {
    id: number;
    params: PCGFileExportsHistoryParams;
  };

  type AppCurrency = {
    default: string;
    enum: string[];
  };

  type PublicSettings = Record<string, string | Record<string, string>> & {
    currencies?: AppCurrency;
    consents?: Record<string, string>;
    faq?: Record<string, string>;
    homepage?: Record<string, Record<string, string>>;
    register?: Record<string, string>;
    env?: string;
    stripe?: {
      publishable_key: string;
    };
    global?: Record<string, string>;
    images?: Record<string, string>;
  };

  type ExportStatForCourseStat = 'EscolaLms\\Reports\\Stats\\Course\\FinishedTopics';

  type ExportStatForCourseParams = {
    stat: ExportStatForCourseStat;
  };

  type CompetencyChallengesParams = PaginationParams & { name?: string; is_active?: boolean };

  type CompetencyChallengeScale = {
    category: API.Category;
    competency_challenge_id: number;
    id: number;
    scale_min: number;
  };

  type CompetencyChallenge = {
    id: number;
    name: string;
    category?: API.Category;
    created_at: Date | string;
    updated_at: Date | string;
    type: CompetencyChallengeType;
    description: string | null;
    summary: string;
    image_path: string | null;
    is_active: boolean;
    is_highlighted: boolean;
    quiz_id: number;
    scales: CompetencyChallengeScale[];
    authors: UserItem[];
    categories: number[];
  };

  type CreateCompetencyChallenge = {
    name: string;
    is_active: boolean;
    is_highlighted: boolean;
    type: CompetencyChallengeType;
    category_id?: number;
  };

  type UpdateCompetencyChallenge = CreateCompetencyChallenge & {
    authors?: number[];
    summary?: string;
    description?: string;
    image_url?: string;
    image_path?: string;
  };

  type CreateCompetencyChallengeScale = {
    scale_min: number;
    category_id: number;
    competency_challenge_id: number;
  };

  type ExportGiftQuizQuestionsParamsByIds = {
    quiz_id: number;
    ids: number[]; //question ids
  };

  type ExportGiftQuizQuestionsParamsByCategoryIds = {
    quiz_id: number;
    category_ids: number[];
  };

  export type ExportGiftQuizQuestionsParams =
    | ExportGiftQuizQuestionsParamsByIds
    | ExportGiftQuizQuestionsParamsByCategoryIds;

  // BulkNotifications

  type BulkNotificationsParams = PaginationParams & {
    channel?: BulkNotificationChannelsEnum;
  };

  type BulkNotificationSections = {
    id: number;
    key: BulkNotificationSectionsKeysEnum;
    value: string;
  };

  type BulkNotificationSectionsPost = {
    title: string;
    body: string;
    image_url?: string;
    redirect_url?: string;
    data?: object;
    users_ids?: number[];
  };

  type BulkNotification = {
    id?: number;
    channel: BulkNotificationChannelsEnum;
    sections: BulkNotificationSections[];
    users?: number[];
  };

  type BulkNotificationBody = {
    channel: BulkNotificationChannelsEnum;
    sections: BulkNotificationSectionsPost;
    user_ids?: number[];
  };

  type BulkNotificationsList = DefaultMetaResponse<BulkNotification>;

  // DICTIONARY

  type DictionariesParams = PaginationParams & {
    name?: string;
    slug?: string;
  };

  type Dictionaries = {
    id: number;
    name: string;
    slug: string;
    free_views_count: number;
    created_at: string;
    updated_at: string;
  };

  type DictionariesList = DefaultMetaResponse<Dictionaries>;

  type DictionariesCreate = {
    name: string;
    free_views_count: number;
  };

  // DICTIONARY WORDS

  type DictionaryWordsParams = PaginationParams & {
    word?: string;
    dictionary_id?: number;
    'category_ids[]'?: number[];
  };

  type DictionaryWordsCategory = {
    id: number;
    name: string;
    name_with_breadcrumbs: string;
  };

  type DictionaryWordData = {
    id?: number;
    title?: string;
    description?: string;
    video_url?: string;
  };

  type DictionaryWords = {
    id: number;
    dictionary_id: number;
    word: string;
    description: string;
    created_at: string;
    updated_at: string;
    categories: DictionaryWordsCategory[];
    data?: {
      descriptions?: API.DictionaryWordData[];
    };
  };

  type DictionaryWordsList = DefaultMetaResponse<DictionaryWords>;

  type DictionaryWordCreate = {
    word: string;
    dictionary_id: number;
    description: string;
    categories?: number[];
    data?: {
      descriptions?: API.DictionaryWordData[];
    };
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

declare global {
  interface Window {
    REACT_APP_API_URL?: string;
  }
}
