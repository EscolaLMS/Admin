import type PERMISSIONS from '@/consts/permissions';
import { useCallback } from 'react';
import { useModel } from 'umi';

export const usePermissions = () => {
  const { initialState } = useModel('@@initialState');
  const userPermissions = initialState?.currentUser?.permissions || [];

  const checkPermission = useCallback(
    (userPermission: PERMISSIONS): boolean => {
      if (Array.isArray(userPermissions)) {
        return !!userPermissions?.find((role) => role.includes(userPermission));
      }
      return false;
    },
    [userPermissions],
  );

  return {
    checkPermission,
  };
};
