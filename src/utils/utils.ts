const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export const searchSubstring = (string: string = '', substring: string = '') => {
  return string.toLowerCase().includes(substring.toLowerCase());
};

export const categoriesArrToIds = (
  category:
    | EscolaLms.Auth.Models.User
    | API.Category
    | EscolaLms.Categories.Models.Category
    | string
    | number,
) => (typeof category === 'object' ? category.id : category);

export const tagsArrToIds = (tag: API.Tag | string) => (typeof tag === 'object' ? tag.title : tag);

export const splitImagePath = (path: string) => {
  return path?.split('storage')[1];
};
