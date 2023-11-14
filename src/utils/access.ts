import type PACKAGES from '@/consts/packages';

// TODO implement minimal versions
export const createHavePackageInstalled =
  (packages?: Record<string, string>) =>
  (
    packageName: PACKAGES,
    // ,minVersion: string = '0.0.0'
  ): boolean => {
    return Boolean(packages?.[packageName]);
  };
