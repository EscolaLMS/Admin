import PERMISSIONS from '@/consts/permissions';
import { isUserHavePermissions } from '@/services/escola-lms/permissions';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser: any }) {
  const { currentUser } = initialState;

  const havePermissions = isUserHavePermissions(currentUser);
  const dashboardPermission = havePermissions(PERMISSIONS.CoreDashboardAccess);
  const havePermissionsInDashboard = (...permissions: PERMISSIONS[]) =>
    dashboardPermission && havePermissions(...permissions);

  // const adminPermission =
  //   dashboardPermission && currentUser && currentUser.data.roles.includes('admin');

  // const tutorPermission =
  //   dashboardPermission &&
  //   currentUser &&
  //   (currentUser.data.roles.includes('tutor') || currentUser.data.roles.includes('admin'));

  return {
    dashboardPermission,

    userProfilePermission: havePermissionsInDashboard(PERMISSIONS.UserReadSelf),

    userListPermission: havePermissionsInDashboard(PERMISSIONS.UserList),
    userDetailsPermission: havePermissionsInDashboard(PERMISSIONS.UserRead),
    userCreatePermission: havePermissionsInDashboard(PERMISSIONS.UserCreate),

    userGroupListPermission: havePermissionsInDashboard(PERMISSIONS.UserGroupList),
    userGroupDetailsPermission: havePermissionsInDashboard(PERMISSIONS.UserGroupRead),

    orderListPermission: havePermissionsInDashboard(PERMISSIONS.CartOrderList),

    paymentListPermission: havePermissionsInDashboard(PERMISSIONS.PaymentList),

    courseListPermission: havePermissionsInDashboard(PERMISSIONS.CourseList),
    courseDetailsPermission: havePermissionsInDashboard(PERMISSIONS.CourseRead),

    h5pListPermission: havePermissionsInDashboard(PERMISSIONS.H5PList),
    h5pDetailsPermission: havePermissionsInDashboard(PERMISSIONS.H5PRead),

    scormListPermission: havePermissionsInDashboard(PERMISSIONS.ScormList),
    scormDetailsPermission: havePermissionsInDashboard(PERMISSIONS.ScormRead),

    pageListPermission: havePermissionsInDashboard(PERMISSIONS.PageList),
    pageDetailsPermission: havePermissionsInDashboard(PERMISSIONS.PageRead),

    templateListPermission: havePermissionsInDashboard(PERMISSIONS.TemplateList),
    templateDetailsPermission: havePermissionsInDashboard(PERMISSIONS.TemplateRead),

    fileListPermission: havePermissionsInDashboard(PERMISSIONS.FileList),

    categoryListPermission: havePermissionsInDashboard(PERMISSIONS.CategoryList),

    settingListPermission: havePermissionsInDashboard(PERMISSIONS.SettingsList),

    roleListPermission: havePermissionsInDashboard(PERMISSIONS.PermisionRoleList),
    roleDetailsPermission: havePermissionsInDashboard(PERMISSIONS.PermissionRoleUpdate),

    notificationListPermission: havePermissionsInDashboard(PERMISSIONS.NotificationListAll),

    reportListPermission: havePermissionsInDashboard(PERMISSIONS.ReportList),

    questionnaireListPermission: havePermissionsInDashboard(PERMISSIONS.QuestionnaireList),
    questionnaireDetailPermission: havePermissionsInDashboard(PERMISSIONS.QuestionnaireRead),
    webinarListPermission: havePermissionsInDashboard(PERMISSIONS.WebinarList),
    webinarDetailsPermission: havePermissionsInDashboard(PERMISSIONS.WebinarRead),

    consultationListPermission: havePermissionsInDashboard(PERMISSIONS.ConsultationList),
    consultationDetailsPermission: havePermissionsInDashboard(PERMISSIONS.ConsultationRead),

    stationaryEventsListPermission: havePermissionsInDashboard(PERMISSIONS.StationaryEventsList),
    stationaryEventsDetailsPermission: havePermissionsInDashboard(PERMISSIONS.StationaryEventsRead),

    loggedOut: !currentUser,
  };
}
