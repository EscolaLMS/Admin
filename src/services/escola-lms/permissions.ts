import PERMISSIONS from '@/consts/permissions';

export const isUserHavePermissions =
  (currentUser: API.UserItem) =>
  (...permissions: PERMISSIONS[]) => {
    return (currentUser?.permissions || []).includes(permissions[0]);
  };
