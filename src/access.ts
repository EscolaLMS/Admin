import PERMISSIONS from '@/consts/permissions';
import { isUserHavePermissions } from '@/services/escola-lms/permissions';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser: any }) {
  const { currentUser } = initialState;

  const havePermissions = isUserHavePermissions(currentUser);

  const adminPermission = currentUser && currentUser.data.roles.includes('admin');
  const tutorPermission =
    currentUser &&
    (currentUser.data.roles.includes('tutor') || currentUser.data.roles.includes('admin'));

  return {
    dashboardPermission: true,

    userProfilePermission: havePermissions(PERMISSIONS.UserReadSelf),

    userListPermission: havePermissions(PERMISSIONS.UserList),
    userDetailsPermission: havePermissions(PERMISSIONS.UserRead),

    userGroupListPermission: havePermissions(PERMISSIONS.UserGroupList),
    userGroupDetailsPermission: havePermissions(PERMISSIONS.UserGroupRead),

    orderListPermission: havePermissions(PERMISSIONS.CartOrderList),

    paymentListPermission: havePermissions(PERMISSIONS.PaymentList),

    courseListPermission: tutorPermission, // TODO: this permission not exist in api
    courseDetailsPermission: havePermissions(PERMISSIONS.CourseRead),

    h5pListPermission: tutorPermission, // TODO: this permission not exist in api
    h5pDetailsPermission: tutorPermission, // TODO: this permission not exist in api

    scormListPermission: tutorPermission, // TODO: this permission not exist in api
    scormDetailsPermission: tutorPermission, // TODO: this permission not exist in api

    pageListPermission: adminPermission, // TODO: this permission not exist in api
    pageDetailsPermission: adminPermission, // TODO: this permission not exist in api

    templateListPermission: adminPermission, // TODO: this permission not exist in api
    templateDetailsPermission: adminPermission, // TODO: this permission not exist in api

    fileListPermission: havePermissions(PERMISSIONS.FileList),

    categoryListPermission: tutorPermission, // TODO: this permission not exist in api

    settingListPermission: havePermissions(PERMISSIONS.SettingsList),

    roleListPermission: adminPermission, // TODO: this permission not exist in api
    roleDetailsPermission: havePermissions(PERMISSIONS.PermissionRoleUpdate),

    notificationListPermission: havePermissions(PERMISSIONS.NotificationListAll), // TODO: or NotificationList?

    reportListPermission: havePermissions(PERMISSIONS.ReportList),

    loggedOut: !currentUser,
  };
}
