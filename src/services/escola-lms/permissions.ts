import type PERMISSIONS from '@/consts/permissions';

export const isUserHavePermissions =
  (currentUser: API.UserItem) =>
  (...permissions: PERMISSIONS[]) => {
    return permissions.some((permission) => (currentUser?.permissions || []).includes(permission));
  };
