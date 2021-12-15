enum PERMISSIONS {
  /* -------- EscolaLMS/Core -------- */

  CoreDashboardAccess = 'access dashboard', // TODO: unused in api

  /* -------- EscolaLMS/Auth -------- */

  // USER
  UserManage = 'user manage', // pozwala na cofnięcie `soft delete` lub na `twarde usunięcie` użytkownika

  UserCreate = 'user create',
  UserRead = 'user read',
  UserReadSelf = 'user read self', // user's own details
  UserReadCourseOwned = 'user read owned', // reading user details in courses for which you are the author
  UserUpdate = 'user update',
  UserUpdateSelf = 'user update self', // edit own user
  UserDelete = 'user delete',
  UserDeleteSelf = 'user delete self', // remove own user (TODO: hard or soft?)
  UserList = 'user list any',
  UserListCourseOwned = 'user list owned', // listing users in courses of which you are the author

  // USER GROUP
  UserGroupCreate = 'user group create',
  UserGroupRead = 'user group read',
  UserGroupReadSelf = 'user group read self', // details of the group you belong to (for tutors)
  UserGroupUpdate = 'user group update',
  UserGroupDelete = 'user group delete',
  UserGroupMemberAdd = 'user group member add',
  UserGroupMemberRemove = 'user group member remove',
  UserGroupList = 'user group list',
  UserGroupListSelf = 'user group list self', // TODO: unused in api

  UserInterestUpdate = 'user interest update', // this is used to indicate which courses (or categories?) the user is interested in // TODO: unused in api
  UserInterestUpdateSelf = 'user interest update self', // TODO: unused in api

  // these permissions are for arbitrary metadata assigned to a user
  UserSettingUpdate = 'user setting update',
  UserSettingUpdateSelf = 'user setting update self',

  /* -------- EscolaLMS/settings -------- */

  SettingsManage = 'settings manage', // TODO: unused in api

  SettingsCreate = 'settings create',
  SettingsRead = 'settings read',
  SettingsUpdate = 'settings update',
  SettingsDelete = 'settings delete',
  SettingsList = 'settings list any',

  // is to edit Laravel settings that are loaded from /config files via the api in the Settings package
  SettingsConfigList = 'config list',
  SettingsConfigUpdate = 'config update',

  /* -------- EscolaLMS/Cart -------- */

  CartOrderList = 'list orders',
  CartOrderListCourseOwned = 'list authored orders', // order listings for courses of which you are the author (for tutor)

  /* -------- EscolaLMS/Files -------- */

  FileUpload = 'upload:files',
  FileMove = 'move:files',
  FileDelete = 'delete:files',
  FileList = 'list:files',

  /* -------- EscolaLMS/Courses -------- */

  CourseCreate = 'create course',
  CourseRead = 'attend course',
  CourseUpdate = 'update course',
  CourseDelete = 'delete course',

  /* -------- EscolaLMS/payments -------- */

  PaymentRead = 'view payment', // TODO: unused in api
  PaymentList = 'search all payments', // TODO: unused in api

  /* -------- EscolaLMS/Categories -------- */

  CategoryCreate = 'create category',
  CategoryUpdate = 'update category',
  CategoryDelete = 'delete category',

  /* -------- EscolaLMS/pages -------- */

  PageCreate = 'create pages',
  PageUpdate = 'update pages',
  PageDelete = 'delete pages',

  /* -------- EscolaLMS/Scorm -------- */

  ScormCreate = 'create Scorm',
  ScormUpdate = 'update Scorm',
  ScormDelete = 'delete Scorm',

  /* -------- EscolaLMS/Reports -------- */

  ReportList = 'display reports',

  /* -------- EscolaLMS/Courses-Import-Export -------- */

  CourseExport = 'export course', // TODO: unused in api
  CourseImport = 'import course', // TODO: unused in api

  /* -------- EscolaLMS/Permissions -------- */

  PermissionRoleUpdate = 'administrate roles', // access to edit permissions

  /* -------- EscolaLMS/Notifications -------- */

  NotificationListAll = 'read all notifications', // ability to read all notifications (including those not belonging to you)
  NotificationList = 'read notifications events list',
}

export default PERMISSIONS;
