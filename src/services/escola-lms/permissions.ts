import PERMISSIONS from '@/consts/permissions';

export const isUserHavePermissions =
  (currentUser: any) =>
  (...permissions: PERMISSIONS[]) => {
    return (currentUser?.data.permissions || []).includes(...permissions);
  };
