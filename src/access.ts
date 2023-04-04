import PERMISSIONS from '@/consts/permissions';
import { isUserHavePermissions } from '@/services/escola-lms/permissions';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function (initialState: { currentUser: API.UserItem; config: API.Setting[] }) {
  const currentUser = initialState?.currentUser;

  const havePermissions = isUserHavePermissions(currentUser);
  const dashboardPermission = havePermissions(PERMISSIONS.CoreDashboardAccess);
  const havePermissionsInDashboard = (...permissions: PERMISSIONS[]) => {
    return dashboardPermission && havePermissions(...permissions);
  };

  const haveSettingsInDashboard = (settingName: string, expectedValue: string | number | boolean) =>
    initialState.config.find(({ key }) => key === settingName)?.data === expectedValue;

  return {
    dashboardPermission,

    userProfilePermission: havePermissionsInDashboard(PERMISSIONS.UserReadSelf),

    userListPermission: havePermissionsInDashboard(PERMISSIONS.UserList),
    userDetailsPermission: havePermissionsInDashboard(PERMISSIONS.UserRead),
    userCreatePermission: havePermissionsInDashboard(PERMISSIONS.UserCreate),

    userGroupListPermission: havePermissionsInDashboard(PERMISSIONS.UserGroupList),
    userGroupDetailsPermission: havePermissionsInDashboard(PERMISSIONS.UserGroupRead),

    analyticsPermission: havePermissionsInDashboard(
      PERMISSIONS.NotificationListAll,
      PERMISSIONS.ReportList,
      PERMISSIONS.TrackerList,
    ),

    configurationPermission: havePermissionsInDashboard(
      PERMISSIONS.FileList,
      PERMISSIONS.SettingsList,
      PERMISSIONS.TemplateRead,
      PERMISSIONS.TranslationList,
    ),

    orderListPermission: havePermissionsInDashboard(PERMISSIONS.CartOrderList),

    paymentListPermission: havePermissionsInDashboard(PERMISSIONS.PaymentList),

    coursesPermission: havePermissionsInDashboard(
      PERMISSIONS.CourseList,
      PERMISSIONS.H5PList,
      PERMISSIONS.ScormList,
      PERMISSIONS.CategoryList,
      PERMISSIONS.WebinarList,
    ),

    courseListPermission: havePermissionsInDashboard(PERMISSIONS.CourseList),
    courseDetailsPermission: havePermissionsInDashboard(PERMISSIONS.CourseRead),

    h5pListPermission: havePermissionsInDashboard(PERMISSIONS.H5PList),
    h5pDetailsPermission: havePermissionsInDashboard(PERMISSIONS.H5PRead),

    otherPermission: havePermissionsInDashboard(
      PERMISSIONS.ConsultationList,
      PERMISSIONS.StationaryEventsList,
      PERMISSIONS.QuestionnaireList,
      PERMISSIONS.PageList,
    ),

    scormListPermission: havePermissionsInDashboard(PERMISSIONS.ScormList),
    scormDetailsPermission: havePermissionsInDashboard(PERMISSIONS.ScormRead),

    pageListPermission: havePermissionsInDashboard(PERMISSIONS.PageList),
    pageDetailsPermission: havePermissionsInDashboard(PERMISSIONS.PageRead),

    templateListPermission: havePermissionsInDashboard(PERMISSIONS.TemplateList),
    templateDetailsPermission: havePermissionsInDashboard(PERMISSIONS.TemplateRead),

    fileListPermission: havePermissionsInDashboard(PERMISSIONS.FileList),

    categoryListPermission: havePermissionsInDashboard(PERMISSIONS.CategoryList),

    salesPermission: havePermissionsInDashboard(
      PERMISSIONS.CartOrderList,
      PERMISSIONS.PaymentList,
      PERMISSIONS.VoucherList,
      PERMISSIONS.ProductsManage,
    ),

    settingListPermission: havePermissionsInDashboard(PERMISSIONS.SettingsList),

    roleListPermission: havePermissionsInDashboard(PERMISSIONS.PermisionRoleList),
    roleDetailsPermission: havePermissionsInDashboard(PERMISSIONS.PermissionRoleUpdate),

    notificationListPermission: havePermissionsInDashboard(PERMISSIONS.NotificationListAll),

    reportListPermission: havePermissionsInDashboard(PERMISSIONS.ReportList),

    usersPermission: havePermissionsInDashboard(
      PERMISSIONS.UserList,
      PERMISSIONS.PermisionRoleList,
      PERMISSIONS.UserGroupList,
    ),

    questionnaireListPermission: havePermissionsInDashboard(PERMISSIONS.QuestionnaireList),
    questionnaireDetailPermission: havePermissionsInDashboard(PERMISSIONS.QuestionnaireRead),

    webinarListPermission: havePermissionsInDashboard(PERMISSIONS.WebinarList),
    webinarDetailsPermission: havePermissionsInDashboard(PERMISSIONS.WebinarRead),

    consultationListPermission: havePermissionsInDashboard(PERMISSIONS.ConsultationList),
    consultationDetailsPermission: havePermissionsInDashboard(PERMISSIONS.ConsultationRead),

    stationaryEventsListPermission: havePermissionsInDashboard(PERMISSIONS.StationaryEventsList),
    stationaryEventsDetailsPermission: havePermissionsInDashboard(PERMISSIONS.StationaryEventsRead),

    productsDetailsPermission: havePermissionsInDashboard(PERMISSIONS.ProductsList),
    productsListPermission: havePermissionsInDashboard(PERMISSIONS.ProductsManage),

    trackerListPermission: havePermissionsInDashboard(PERMISSIONS.TrackerList),

    voucherListPermission: havePermissionsInDashboard(PERMISSIONS.VoucherList),
    voucherDetailPermission: havePermissionsInDashboard(PERMISSIONS.VoucherRead),

    translationListPermission: havePermissionsInDashboard(PERMISSIONS.TranslationList),
    translationDetailPermission: havePermissionsInDashboard(PERMISSIONS.TranslationRead),

    loggedOut: !currentUser,

    taskListPermission: havePermissionsInDashboard(PERMISSIONS.TaskList),
    taskDetailsPermission: havePermissionsInDashboard(PERMISSIONS.TaskList),

    courseAccessListPermission:
      havePermissionsInDashboard(PERMISSIONS.CourseAccessList) &&
      haveSettingsInDashboard('showAccessRequestsInMenu', true),

    consultationAccessListPermission:
      havePermissionsInDashboard(PERMISSIONS.ConsultationAccessList) &&
      haveSettingsInDashboard('showConsultationRequestsInMenu', true),

    tasksPermission: () => true,
  };
}
