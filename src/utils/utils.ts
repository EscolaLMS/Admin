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
  return path?.split('storage')[1];
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
    defaultLangUConfigMap[langCode] || {
      lang: '404',
      label: '404',
      icon: '🌐',
      title: '404',
    }
  );
};
