enum PERMISSIONS {
  /* -------- EscolaLMS/Core -------- */

  CoreDashboardAccess = 'access dashboard', // TODO: unused in api

  /* -------- EscolaLMS/Auth -------- */

  // USER
  UserManage = 'user_manage', // pozwala na cofnięcie `soft delete` lub na `twarde usunięcie` użytkownika

  UserCreate = 'user_create',
  UserRead = 'user_read',
  UserReadSelf = 'user_read_self', // user's own details
  UserReadCourseOwned = 'user_read_owned', // reading user details in courses for which you are the author
  UserUpdate = 'user_update',
  UserUpdateSelf = 'user_update_self', // edit own user
  UserDelete = 'user_delete',
  UserDeleteSelf = 'user_delete_self', // remove own user (TODO: hard or soft?)
  UserList = 'user_list',
  UserListCourseOwned = 'user_list_authored', // listing users in courses of which you are the author

  // USER GROUP
  UserGroupCreate = 'user-group_create',
  UserGroupRead = 'user-group_read',
  UserGroupReadSelf = 'user-group_read_self', // details of the group you belong to (for tutors)
  UserGroupUpdate = 'user-group_update',
  UserGroupDelete = 'user-group_delete',
  UserGroupMemberAdd = 'user-group_member-add',
  UserGroupMemberRemove = 'user-group_member-remove',
  UserGroupList = 'user-group_list',
  UserGroupListSelf = 'user-group_list_self', // TODO: unused in api

  UserInterestUpdate = 'user-interest_update', // this is used to indicate which courses (or categories?) the user is interested in // TODO: unused in api
  UserInterestUpdateSelf = 'user-interest_update_self', // TODO: unused in api

  // these permissions are for arbitrary metadata assigned to a user
  UserSettingUpdate = 'user-setting_update',
  UserSettingUpdateSelf = 'user-setting_update_self',

  /* -------- EscolaLMS/settings -------- */

  SettingsManage = 'settings_manage', // TODO: unused in api
  SettingsCreate = 'settings_create',
  SettingsRead = 'settings_read',
  SettingsUpdate = 'settings_update',
  SettingsDelete = 'settings_delete',
  SettingsList = 'settings_list',

  // is to edit Laravel settings that are loaded from /config files via the api in the Settings package
  SettingsConfigList = 'settings_config_list',
  SettingsConfigUpdate = 'settings_config_update',

  /* -------- EscolaLMS/Cart -------- */

  CartOrderList = 'cart_order_list',
  CartOrderListCourseOwned = 'cart_order_list_course-authored', // order listings for courses of which you are the author (for tutor)

  /* -------- EscolaLMS/Files -------- */

  FileUpload = 'upload:files',
  FileMove = 'move:files',
  FileDelete = 'delete:files',
  FileList = 'list:files',

  /* -------- EscolaLMS/Courses -------- */

  CourseList = 'course_list',
  CourseCreate = 'course_create',
  CourseRead = 'course_read',
  CourseUpdate = 'course_update',
  CourseDelete = 'course_delete',
  CourseUpdateAuthored = 'course_update_authored',
  CourseDeleteAuthored = 'course_delete_authored',
  CourseReadAuthored = 'course_read_authored',

  /* -------- EscolaLMS/H5P -------- */

  H5PList = 'h5p_list',
  H5PRead = 'h5p_read',
  H5PCreate = 'h5p_create',
  H5PDelete = 'h5p_delete',
  H5PUpdate = 'h5p-update',
  H5PLibraryList = 'h5p_library_list',
  H5PLibraryRead = 'h5p_library_read',
  H5PLibraryCreate = 'h5p_library_create',
  H5PLibraryDelete = 'h5p_library_delete',
  H5PLibraryUpdate = 'h5p_library_update',

  /* -------- EscolaLMS/payments -------- */

  PaymentRead = 'payment_read',
  PaymentList = 'payment_list',

  /* -------- EscolaLMS/Categories -------- */

  CategoryList = 'category_list',
  CategoryRead = 'category_read',
  CategoryCreate = 'category_create',
  CategoryUpdate = 'category_update',
  CategoryDelete = 'category_delete',

  /* -------- EscolaLMS/pages -------- */

  PageList = 'page_list',
  PageRead = 'page_read',
  PageCreate = 'page_create',
  PageUpdate = 'page_update',
  PageDelete = 'page_delete',

  /* -------- EscolaLMS/Scorm -------- */

  ScormList = 'scorm_list',
  ScormRead = 'scorm_read',
  ScormCreate = 'scorm_create',
  ScormUpdate = 'scorm_update',
  ScormDelete = 'scorm_delete',
  ScormGetTrack = 'scorm_track-read',
  ScormSetTrack = 'scorm_track-update',

  /* -------- EscolaLMS/Reports -------- */

  ReportList = 'report_list',

  /* -------- EscolaLMS/Courses-Import-Export -------- */

  CourseExport = 'course-import-export_export',
  CourseImport = 'course-import-export_import',
  CourseExportAuthored = 'course-import-export_export_authored',

  /* -------- EscolaLMS/Permissions -------- */

  PermissionRoleManage = 'permission_role_manage',
  PermisionRoleList = 'permission_role_list',
  PermissionRoleCreate = 'permission_role_create',
  PermissionRoleDelete = 'permission_role_delete',
  PermissionRoleRead = 'permission_role_read',
  PermissionRoleUpdate = 'permission_role_update', // access to edit permissions

  /* -------- EscolaLMS/Templates -------- */

  TemplateList = 'template_list',
  TemplateRead = 'template_read',
  TemplateCreate = 'template_create',
  TemplateDelete = 'template_delete',
  TemplateUpdate = 'template_update',

  /* -------- EscolaLMS/Notifications -------- */

  NotificationListAll = 'dashboard-app_notification-list_access', // ability to read all notifications (including those not belonging to you)
  NotificationList = 'dashboard-app_notification-list_access_self',
}

export default PERMISSIONS;
