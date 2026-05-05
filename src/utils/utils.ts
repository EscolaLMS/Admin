import type { SortOrder } from 'antd/lib/table/interface';
import moment from 'moment';
const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);

declare const ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: string;

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

export const mapper = <T extends { id: string | number } | string | number>(
  item: T,
): string | number => (typeof item === 'object' ? item.id : item);

export const splitImagePath = (path: string) => {
  const pathTypes = ['course/', 'consultation/', 'webinar/', 'stationary-events/'];

  const foundPath = pathTypes.find((type) => {
    const includes = path.includes(type);

    return includes;
  });

  if (foundPath) {
    const result = '/' + path.substring(path.indexOf(foundPath));

    return result;
  }
  return null;
};

export const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

export const getLangInfo = (
  langCode: string,
): {
  lang: string;
  label: string;
  icon: string;
  title: string;
} => {
  const defaultLangUConfigMap = {
    'ar-EG': {
      lang: 'ar-EG',
      label: 'العربية',
      icon: '🇪🇬',
      title: 'لغة',
    },
    'az-AZ': {
      lang: 'az-AZ',
      label: 'Azərbaycan dili',
      icon: '🇦🇿',
      title: 'Dil',
    },
    'bg-BG': {
      lang: 'bg-BG',
      label: 'Български език',
      icon: '🇧🇬',
      title: 'език',
    },
    'bn-BD': {
      lang: 'bn-BD',
      label: 'বাংলা',
      icon: '🇧🇩',
      title: 'ভাষা',
    },
    'ca-ES': {
      lang: 'ca-ES',
      label: 'Catalá',
      icon: '🇨🇦',
      title: 'llengua',
    },
    'cs-CZ': {
      lang: 'cs-CZ',
      label: 'Čeština',
      icon: '🇨🇿',
      title: 'Jazyk',
    },
    'da-DK': {
      lang: 'da-DK',
      label: 'Dansk',
      icon: '🇩🇰',
      title: 'Sprog',
    },
    'de-DE': {
      lang: 'de-DE',
      label: 'Deutsch',
      icon: '🇩🇪',
      title: 'Sprache',
    },
    'el-GR': {
      lang: 'el-GR',
      label: 'Ελληνικά',
      icon: '🇬🇷',
      title: 'Γλώσσα',
    },
    'en-GB': {
      lang: 'en-GB',
      label: 'English',
      icon: '🇬🇧',
      title: 'Language',
    },
    'en-US': {
      lang: 'en-US',
      label: 'English',
      icon: '🇺🇸',
      title: 'Language',
    },
    'es-ES': {
      lang: 'es-ES',
      label: 'Español',
      icon: '🇪🇸',
      title: 'Idioma',
    },
    'et-EE': {
      lang: 'et-EE',
      label: 'Eesti',
      icon: '🇪🇪',
      title: 'Keel',
    },
    'fa-IR': {
      lang: 'fa-IR',
      label: 'فارسی',
      icon: '🇮🇷',
      title: 'زبان',
    },
    'fi-FI': {
      lang: 'fi-FI',
      label: 'Suomi',
      icon: '🇫🇮',
      title: 'Kieli',
    },
    'fr-BE': {
      lang: 'fr-BE',
      label: 'Français',
      icon: '🇧🇪',
      title: 'Langue',
    },
    'fr-FR': {
      lang: 'fr-FR',
      label: 'Français',
      icon: '🇫🇷',
      title: 'Langue',
    },
    'ga-IE': {
      lang: 'ga-IE',
      label: 'Gaeilge',
      icon: '🇮🇪',
      title: 'Teanga',
    },
    'he-IL': {
      lang: 'he-IL',
      label: 'עברית',
      icon: '🇮🇱',
      title: 'שפה',
    },
    'hi-IN': {
      lang: 'hi-IN',
      label: 'हिन्दी, हिंदी',
      icon: '🇮🇳',
      title: 'भाषा: हिन्दी',
    },
    'hr-HR': {
      lang: 'hr-HR',
      label: 'Hrvatski jezik',
      icon: '🇭🇷',
      title: 'Jezik',
    },
    'hu-HU': {
      lang: 'hu-HU',
      label: 'Magyar',
      icon: '🇭🇺',
      title: 'Nyelv',
    },
    'hy-AM': {
      lang: 'hu-HU',
      label: 'Հայերեն',
      icon: '🇦🇲',
      title: 'Լեզու',
    },
    'id-ID': {
      lang: 'id-ID',
      label: 'Bahasa Indonesia',
      icon: '🇮🇩',
      title: 'Bahasa',
    },
    'it-IT': {
      lang: 'it-IT',
      label: 'Italiano',
      icon: '🇮🇹',
      title: 'Linguaggio',
    },
    'is-IS': {
      lang: 'is-IS',
      label: 'Íslenska',
      icon: '🇮🇸',
      title: 'Tungumál',
    },
    'ja-JP': {
      lang: 'ja-JP',
      label: '日本語',
      icon: '🇯🇵',
      title: '言語',
    },
    'ku-IQ': {
      lang: 'ku-IQ',
      label: 'کوردی',
      icon: '🇮🇶',
      title: 'Ziman',
    },
    'kn-IN': {
      lang: 'zh-TW',
      label: 'ಕನ್ನಡ',
      icon: '🇮🇳',
      title: 'ಭಾಷೆ',
    },
    'ko-KR': {
      lang: 'ko-KR',
      label: '한국어',
      icon: '🇰🇷',
      title: '언어',
    },
    'lv-LV': {
      lang: 'lv-LV',
      label: 'Latviešu valoda',
      icon: '🇱🇮',
      title: 'Kalba',
    },
    'mk-MK': {
      lang: 'mk-MK',
      label: 'македонски јазик',
      icon: '🇲🇰',
      title: 'Јазик',
    },
    'mn-MN': {
      lang: 'mn-MN',
      label: 'Монгол хэл',
      icon: '🇲🇳',
      title: 'Хэл',
    },
    'ms-MY': {
      lang: 'ms-MY',
      label: 'بهاس ملايو‎',
      icon: '🇲🇾',
      title: 'Bahasa',
    },
    'nb-NO': {
      lang: 'nb-NO',
      label: 'Norsk',
      icon: '🇳🇴',
      title: 'Språk',
    },
    'ne-NP': {
      lang: 'ne-NP',
      label: 'नेपाली',
      icon: '🇳🇵',
      title: 'भाषा',
    },
    'nl-BE': {
      lang: 'nl-BE',
      label: 'Vlaams',
      icon: '🇧🇪',
      title: 'Taal',
    },
    'nl-NL': {
      lang: 'nl-NL',
      label: 'Vlaams',
      icon: '🇳🇱',
      title: 'Taal',
    },
    'pl-PL': {
      lang: 'pl-PL',
      label: 'Polski',
      icon: '🇵🇱',
      title: 'Język',
    },
    'pt-BR': {
      lang: 'pt-BR',
      label: 'Português',
      icon: '🇧🇷',
      title: 'Idiomas',
    },
    'pt-PT': {
      lang: 'pt-PT',
      label: 'Português',
      icon: '🇵🇹',
      title: 'Idiomas',
    },
    'ro-RO': {
      lang: 'ro-RO',
      label: 'Română',
      icon: '🇷🇴',
      title: 'Limba',
    },
    'ru-RU': {
      lang: 'ru-RU',
      label: 'Русский',
      icon: '🇷🇺',
      title: 'язык',
    },
    'sk-SK': {
      lang: 'sk-SK',
      label: 'Slovenčina',
      icon: '🇸🇰',
      title: 'Jazyk',
    },
    'sr-RS': {
      lang: 'sr-RS',
      label: 'српски језик',
      icon: '🇸🇷',
      title: 'Језик',
    },
    'sl-SI': {
      lang: 'sl-SI',
      label: 'Slovenščina',
      icon: '🇸🇱',
      title: 'Jezik',
    },
    'sv-SE': {
      lang: 'sv-SE',
      label: 'Svenska',
      icon: '🇸🇪',
      title: 'Språk',
    },
    'ta-IN': {
      lang: 'ta-IN',
      label: 'தமிழ்',
      icon: '🇮🇳',
      title: 'மொழி',
    },
    'th-TH': {
      lang: 'th-TH',
      label: 'ไทย',
      icon: '🇹🇭',
      title: 'ภาษา',
    },
    'tr-TR': {
      lang: 'tr-TR',
      label: 'Türkçe',
      icon: '🇹🇷',
      title: 'Dil',
    },
    'uk-UA': {
      lang: 'uk-UA',
      label: 'Українська',
      icon: '🇺🇰',
      title: 'Мова',
    },
    'vi-VN': {
      lang: 'vi-VN',
      label: 'Tiếng Việt',
      icon: '🇻🇳',
      title: 'Ngôn ngữ',
    },
    'zh-CN': {
      lang: 'zh-CN',
      label: '简体中文',
      icon: '🇨🇳',
      title: '语言',
    },
    'zh-TW': {
      lang: 'zh-TW',
      label: '繁體中文',
      icon: '🇭🇰',
      title: '語言',
    },
  };

  return (
    defaultLangUConfigMap[langCode as keyof typeof defaultLangUConfigMap] || {
      lang: '404',
      label: '404',
      icon: '🌐',
      title: '404',
    }
  );
};

export const roundPercentageList = (orig: number[], target?: number) => {
  if (!target) {
    // eslint-disable-next-line no-param-reassign
    target = 100;
  }

  const newVals = [];
  const len = orig.length;
  const marginOfErrors = [];

  let i = orig.length,
    j = 0,
    total = 0,
    change = 0,
    next,
    factor1,
    factor2;

  while (i--) {
    total += newVals[i] = Math.round(orig[i]);
  }

  change = total < target ? 1 : -1;

  while (total !== target) {
    for (i = 0; i < len; i++) {
      next = i === len - 1 ? 0 : i + 1;

      factor2 = errorFactor(orig[next], newVals[next] + change);
      factor1 = errorFactor(orig[i], newVals[i] + change);

      if (factor1 > factor2) {
        j = next;
      }
    }

    newVals[j] += change;
    total += change;
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  for (let i = 0; i < len; i++) {
    marginOfErrors[i] = newVals[i] && Math.abs(orig[i] - newVals[i]) / orig[i];
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  for (let i = 0; i < len; i++) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    for (let j = 0; j < len; j++) {
      if (j === i) continue;

      const roundUpFactor =
        errorFactor(orig[i], newVals[i] + 1) + errorFactor(orig[j], newVals[j] - 1);
      const roundDownFactor =
        errorFactor(orig[i], newVals[i] - 1) + errorFactor(orig[j], newVals[j] + 1);
      const sumMargin = marginOfErrors[i] + marginOfErrors[j];

      if (roundUpFactor < sumMargin) {
        newVals[i] = newVals[i] + 1;
        newVals[j] = newVals[j] - 1;
        marginOfErrors[i] = newVals[i] && Math.abs(orig[i] - newVals[i]) / orig[i];
        marginOfErrors[j] = newVals[j] && Math.abs(orig[j] - newVals[j]) / orig[j];
      }

      if (roundDownFactor < sumMargin) {
        newVals[i] = newVals[i] - 1;
        newVals[j] = newVals[j] + 1;
        marginOfErrors[i] = newVals[i] && Math.abs(orig[i] - newVals[i]) / orig[i];
        marginOfErrors[j] = newVals[j] && Math.abs(orig[j] - newVals[j]) / orig[j];
      }
    }
  }

  function errorFactor(oldNum: number, newNum: number) {
    return Math.abs(oldNum - newNum) / oldNum;
  }

  return newVals;
};

export const roundTo = (val: number, places = 2, divider?: number): number => {
  if (!val || typeof val !== 'number') return 0;
  const returnedValue = Math.round(val * Math.pow(10, places)) / Math.pow(10, places);
  if (divider) {
    return returnedValue / divider;
  }
  return returnedValue;
};

// Use inside sort function
// Example: array.sort(sortByKey<LangRow>(sortArr[0], sortArr[1] === 'ascend' ? false : true));
export const sortByKey = <T>(myKey: string, reverse: boolean = false) => {
  return function (a: T, b: T) {
    // TODO #1047 fix this function
    //@ts-ignore
    const comparison = a[myKey].localeCompare(b[myKey], undefined, {
      sensitivity: 'base',
    });
    return reverse ? comparison * -1 : comparison;
  };
};

export const sortArrayByKey = <T>(array: T[], key: string, reverse: boolean = false): T[] => {
  const sortedArray = array.slice().sort((a, b) => {
    const valueA = a[key as keyof T];
    const valueB = b[key as keyof T];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB;
    }

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB);
    }

    if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
      return valueA === valueB ? 0 : valueA ? -1 : 1;
    }

    throw new Error('Cannot compare values of different types.');
  });

  if (reverse) {
    return sortedArray.reverse();
  }

  return sortedArray;
};

export const createTableOrderObject = (
  sort: Record<string, SortOrder>,
  defaultSorter?: string,
): {
  order: 'ASC' | 'DESC' | undefined;
  order_by: string | undefined;
} => {
  const sortArr = sort && Object.entries(sort)[0];
  return {
    order_by: sortArr ? sortArr[0] : defaultSorter,
    order: sortArr
      ? sortArr[1] === 'ascend'
        ? 'ASC'
        : 'DESC'
      : defaultSorter
      ? 'DESC'
      : undefined,
  };
};

export const objectToQueryString = (params: Record<string, unknown>) =>
  Object.keys(params)
    .filter((key) => params[key])
    .map((key) => key + '=' + params[key])
    .join('&');

export const timeDisplay = (seconds: number) => {
  const duration = moment.duration(seconds, 'seconds');
  const secondsPart = duration.seconds() > 0 ? `${duration.seconds()}s` : '';
  const minutesPart = duration.minutes() > 0 ? `${duration.minutes()}m` : '';
  const hoursPart = duration.hours() > 0 ? `${duration.hours()}h` : '';

  const formattedTime = [hoursPart, minutesPart, secondsPart].filter(Boolean);

  return formattedTime;
};

export const redirectPrefix = () => {
  // return routerType() === "HashRouter" ? "/#" : "";
  return '';
};

export const ANALYSIS_COLORS = {
  green: '#52c41a',
  orange: '#faad14',
  red: '#f5222d',
  border: '#f0f0f0',
  textSecondary: '#8c8c8c',
  bgLight: '#fbfbfb',
  white: '#ffffff',
  darkText: '#434343',
};

export const getLabelColorByValue = (val: number) => {
  if (val < 35) return ANALYSIS_COLORS.red;
  if (val < 70) return ANALYSIS_COLORS.orange;
  return ANALYSIS_COLORS.green;
};

export const getRatingLabelColorByValue = (val: number) => {
  if (val < 3.5) return ANALYSIS_COLORS.red;
  if (val < 7.0) return ANALYSIS_COLORS.orange;
  return ANALYSIS_COLORS.green;
};

export enum EmotionKey {
  SURPRISED = 'surprised',
  DISGUSTED = 'disgusted',
  SAD = 'sad',
  FEARFUL = 'fearful',
  HAPPY = 'happy',
  ANGRY = 'angry',
  NEUTRAL = 'neutral',
}

export const EMOTION_POOL = [
  { icon: '😳', key: EmotionKey.SURPRISED, labelId: `emotion_${EmotionKey.SURPRISED}` },
  { icon: '🤢', key: EmotionKey.DISGUSTED, labelId: `emotion_${EmotionKey.DISGUSTED}` },
  { icon: '🙁', key: EmotionKey.SAD, labelId: `emotion_${EmotionKey.SAD}` },
  { icon: '😨', key: EmotionKey.FEARFUL, labelId: `emotion_${EmotionKey.FEARFUL}` },
  { icon: '😆', key: EmotionKey.HAPPY, labelId: `emotion_${EmotionKey.HAPPY}` },
  { icon: '😡', key: EmotionKey.ANGRY, labelId: `emotion_${EmotionKey.ANGRY}` },
  { icon: '😐', key: EmotionKey.NEUTRAL, labelId: `emotion_${EmotionKey.NEUTRAL}` },
] as const;

export type EmotionType = (typeof EMOTION_POOL)[number]['key'];

export const formatPercent = (val: string | number) => {
  const num = typeof val === 'string' ? parseFloat(val) : val;
  return isNaN(num) ? '0' : Math.round(num * 100).toString();
};

export const formatRating = (rating: number | string): string => {
  const num = typeof rating === 'string' ? parseFloat(rating) : rating;

  if (isNaN(num)) return '0.00';

  return num.toFixed(2);
};

export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const formatExpirationTime = (ms: number | null) => {
  if (!ms || ms <= 0) return '0s';
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (num: number) => num.toString().padStart(2, '0');
  return hours > 0 ? `${hours}h ${pad(minutes)}m ${pad(seconds)}s` : `${minutes}m ${pad(seconds)}s`;
};

export type SortableValue = string | number;
export type SortAccessors<T> = Record<string, (item: T) => SortableValue>;

export function applySort<T>(
  data: T[],
  sort: Record<string, 'ascend' | 'descend'> | undefined,
  accessors: SortAccessors<T>,
): T[] {
  const sortArr = sort && Object.entries(sort)[0];
  if (!sortArr) return data;

  const [key, order] = sortArr;
  const accessor = accessors[key];
  if (!accessor) return data;

  const asc = order === 'ascend';

  return [...data].sort((a, b) => {
    const valA = accessor(a);
    const valB = accessor(b);
    if (valA < valB) return asc ? -1 : 1;
    if (valA > valB) return asc ? 1 : -1;
    return 0;
  });
}
