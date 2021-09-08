import component from './en-US/component';
import globalHeader from './en-US/globalHeader';
import menu from './en-US/menu';
import pwa from './en-US/pwa';
import settingDrawer from './en-US/settingDrawer';
import settings from './en-US/settings';
import pages from './en-US/pages';

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
  title: 'Title',
  options: 'Options',
  base_price: 'Base price',
  base_price_tooltip: 'Base Price. Use 0 for free course',
  duration: 'Duration',
  categories: 'Categories',
  tags: 'Tags',
  H5Ps: 'H5Ps',
  new: 'new',
  library: 'Library',
  'menu.Courses': 'Courses',
  'menu.Users': 'Users',
  'menu.User Form': 'Users',
  'menu.Welcome': 'Welcome',
  'menu.Course Form': 'Course Form',
  'menu.Form': 'Form',
  'menu.H5Ps': 'H5Ps',
  'menu.categories': 'Categories',
  'menu.Files': 'Files',
  'menu.Pages': 'Pages',
  'menu.Payments': 'Payments',
  'menu.Orders': 'Orders',
  'menu.SCORMs': 'SCORMs',
  'menu.settings': 'Settings',
  Active: 'Active',
  Inactive: 'Inactive',
  slug: 'Slug',
  name: 'Name',
  ID: 'ID',
  newCategory: 'Create new Category',
  editCategory: 'Edit Category',
  parent_category: 'Parent Category',
  is_active: 'Active?',
  parent_id: 'Parent Category',
  edit: 'Edit',
  delete: 'Delete',
  deleteQuestion: 'Are you sure to delete this record?',
  payments: 'Payments',
  order: 'Order',
  orders: 'Orders',
  amount: 'Amount',
  status: 'Status',
  users: 'Users',
  user: 'User',
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  email_resend: 'Email resent',
  password: 'Password',
  search: 'Search',
  search_tooltip_1: 'Will search through first_name, last_name and email',
  roles: 'Roles',
  verified: 'Verified',
  not_verified: 'Unverified',
  is_email_verified: 'Email verified?',
  email_verified: 'Email verified',
  dateRange: 'Date range',
  created_at: 'Created at',
  updated_at: 'Updated at',
  currency: 'Currency',
  subtotal: 'Subtotal',
  tax: 'Tax',
  total: 'Total',
  items: 'Items',
  author: 'Author',
  course: 'Course',
  select: 'Please select',
  select_tags: 'Select tags',
  select_person: 'Select a person',
  select_course: 'Select a course',
  select_type_topic: 'Select type of topic to continue',
  select_scorm_package: 'Select SCORM package',
  billable: 'Billable to',
  payable: 'Payable to',
  newH5P: 'New file H5P',
  H5P_scorm_preview: 'H5P. Scorm content preview',
  H5P_uploaded: 'New file H5P uploaded successfully',
  H5P_preview_title: 'H5P. HTML Content preview',
  H5P_new_content_title: 'H5p. Nowa treść HTML5',
  H5P_select_content: 'Select content for H5P',
  upload_click_here: 'Click here to add file',
  upload: 'Add file',
  preview: 'Preview',
  able_to_preview: 'Able to preview',
  loading_content: 'Loading content...',
  preview_content: 'Preview content',
  version: 'Version',
  SCOS: 'Sharable Content Objects',
  newScorm: 'New SCORM',
  scorm_uploaded: 'New SCORM uploaded',
  yes: 'Yes',
  no: 'No',
  cantDelete: "You can't delete this category because it's parent to others",
  group: 'Group',
  key: 'Key',
  type: 'Type',
  enumerable: 'Enumerable',
  public: 'Public',
  value: 'Value',
  editSetting: 'Edit',
  newSetting: 'Create',
  success: 'Success',
  error: 'Error',
  loading: 'Loading',
  subtitle: 'Subtitle',
  language: 'Language',
  level: 'Level',
  author_tutor: 'Author / Tutor',
  summary: 'Summary',
  summary_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  description: 'Description',
  description_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  attributes: 'Attributes',
  new_course: 'New course',
  media: 'Media',
  image: 'Image',
  video: 'Video',
  audio: 'Audio',
  categories_tags: 'Categories & Tags',
  program: 'Program',
  scorm: 'SCORM',
  add_new_lesson: 'Add new lesson',
  lesson: 'Lesson',
  topic: 'Topic',
  topics: 'Topics',
  add_new_topic: 'Add new topic',
  no_topics: 'There are no topics yet on this lesson',
  create: 'Create',
  save: 'Save',
  sort_element_up: 'Sort this element up',
  sort_element_down: 'Sort this element down',
  'h5p.description.header': 'H5P Info',
  'h5p.description.first': 'To assign Interactive HTML5 element to lesson topic you need to ',
  'h5p.description.second': 'create it first',
  'h5p.description.third': ' or use one ',
  'h5p.description.fourth': 'from the list',
  'h5p.description.fifth': " if it's already created. Press",
  'h5p.description.sixth':
    'button to see how does content looks like and see list of `XAPI` events.',
  my_profile: 'My profile',
  logout: 'Logout',
  bio: 'Bio',
  bio_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  avatar: 'avatar',
  avatar_placeholder: 'Add avatar to see preview',
  wysiwyg_placeholder:
    "Type here text to see the rich text editor features. Start with '/' to open formatting options or click on '+' button",
  edit_user: 'Edit user',
  new_user: 'New user',
  resend: 'Resend',
  back_home: 'Back to main page',
  '404_subtitle': 'Sorry, the page you visited does not exist',
  user_id: 'User ID: ',
  order_id: 'Order ID: ',
  course_id: 'Course ID: ',
  new_payment: 'new',
  paid: 'paid',
  cancelled: 'cancelled',
  failed: 'failed',
  clear_selection: 'clear selection',
  form: 'Form',
  none: 'Brak',
  too_many_chars: 'Too many characters',
};
