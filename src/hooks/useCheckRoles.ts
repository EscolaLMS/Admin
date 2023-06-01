import { useCallback } from 'react';
import { useModel } from 'umi';

export const useCheckRoles = () => {
  const { initialState } = useModel('@@initialState');
  const userRoles = initialState?.currentUser?.roles || [];

  const checkRoles = useCallback((settingName: string): boolean => {
    const settingsData = initialState?.config?.find((item) => item.key === settingName)?.data;
    if (Array.isArray(userRoles) && Array.isArray(settingsData)) {
      return userRoles.every((role) => settingsData.includes(role));
    }
    if (typeof settingsData === 'boolean') {
      return settingsData;
    }
    return false;
  }, []);

  return {
    checkRoles,
  };
};
