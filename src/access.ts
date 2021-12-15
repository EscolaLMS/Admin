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

  const adminPermission =
    dashboardPermission && currentUser && currentUser.data.roles.includes('admin');

  const tutorPermission =
    dashboardPermission &&
    currentUser &&
    (currentUser.data.roles.includes('tutor') || currentUser.data.roles.includes('admin'));

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

    courseListPermission: tutorPermission, // TODO: this permission not exist in api
    courseDetailsPermission: havePermissionsInDashboard(PERMISSIONS.CourseRead),

    h5pListPermission: tutorPermission, // TODO: this permission not exist in api
    h5pDetailsPermission: tutorPermission, // TODO: this permission not exist in api

    scormListPermission: tutorPermission, // TODO: this permission not exist in api
    scormDetailsPermission: tutorPermission, // TODO: this permission not exist in api

    pageListPermission: adminPermission, // TODO: this permission not exist in api
    pageDetailsPermission: adminPermission, // TODO: this permission not exist in api

    templateListPermission: adminPermission, // TODO: this permission not exist in api
    templateDetailsPermission: adminPermission, // TODO: this permission not exist in api

    fileListPermission: havePermissionsInDashboard(PERMISSIONS.FileList),

    categoryListPermission: tutorPermission, // TODO: this permission not exist in api

    settingListPermission: havePermissionsInDashboard(PERMISSIONS.SettingsList),

    roleListPermission: adminPermission, // TODO: this permission not exist in api
    roleDetailsPermission: havePermissionsInDashboard(PERMISSIONS.PermissionRoleUpdate),

    notificationListPermission: havePermissionsInDashboard(PERMISSIONS.NotificationListAll), // TODO: or NotificationList?

    reportListPermission: havePermissionsInDashboard(PERMISSIONS.ReportList),

    loggedOut: !currentUser,
  };
}
