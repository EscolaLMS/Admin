/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser: any }) {
  const { currentUser } = initialState;

  return {
    adminPermission: currentUser && currentUser.data.roles.includes('admin'),
    tutorPermission:
      currentUser &&
      (currentUser.data.roles.includes('tutor') || currentUser.data.roles.includes('admin')),
    loggedOut: !currentUser,
  };
}
