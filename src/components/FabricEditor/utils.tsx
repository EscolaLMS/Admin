import { isNaN, isString } from 'lodash';
import type { fabric } from 'fabric';
import { arialBoldFont } from './fonts/arial/bold';
import { arialNormalFont } from './fonts/arial/normal';
import { arialItalicFont } from './fonts/arial/italic';
import { verdanaFont } from './fonts/verdana/normal';
import { verdanaBoldFont } from './fonts/verdana/bold';
import { verdanaItalicFont } from './fonts/verdana/italic';
import { timesNewRomanFont } from './fonts/timesNewRoman/normal';
import { timesNewRomanBoldFont } from './fonts/timesNewRoman/bold';
import { timesNewRomanItalicFont } from './fonts/timesNewRoman/italic';
import { georgiaFont } from './fonts/georgia/normal';
import { georgiaBoldFont } from './fonts/georgia/bold';
import { georgiaItalicFont } from './fonts/georgia/italic';
import { arialBoldItalicFont } from './fonts/arial/bolditalic';
import { verdanaBoldItalicFont } from './fonts/verdana/bolditalic';
import { timesNewRomanBoldItalicFont } from './fonts/timesNewRoman/bolditalic';
import { georgiaBoldItalicFont } from './fonts/georgia/bolditalic';

const RGB_PATTERN =
  /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
const RGBA_PATTERN =
  /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;

export const isRgb = (rgb: unknown): rgb is string => {
  return isString(rgb) && RGB_PATTERN.test(rgb);
};

export const isRgba = (rgba: unknown): rgba is string => {
  return isString(rgba) && RGBA_PATTERN.test(rgba);
};

export function rgbToHex(rgb: unknown): string | unknown {
  if (!isRgb(rgb)) return rgb;

  // turn 'rgb(r,g,b)' into [r,g,b]
  const rgbToArray = (rgbString: string) => {
    const separator = rgbString.indexOf(',') > -1 ? ',' : ' ';

    return rgbString.substr(4).split(')')[0].split(separator);
  };

  /**
   * convert %s to 0–255
   * Example:
   * 75% -> 191
   * 75/100 = 0.75, * 255 = 191.25 -> 191
   */
  const convertColor = (color: string): string => {
    // @ts-ignore
    const converted =
      color.indexOf('%') > -1
        ? Math.round((+color.substr(0, color.length - 1) / 100) * 255).toString(16)
        : (+color).toString(16);
    return converted.length === 1 ? '0' + converted : converted;
  };

  return '#' + rgbToArray(rgb).map(convertColor).join('');
}

export function rgbaToHexa(rgba: unknown): string | unknown {
  if (!isRgba(rgba)) return rgba;

  // turn 'rgba(r,g,b,a)' into [r,g,b,a]
  const rgbaToArray = (rgbString: string) => {
    const separator = rgbString.indexOf(',') > -1 ? ',' : ' ';

    const arr = rgbString.substr(5).split(')')[0].split(separator);

    // strip the slash if using space-separated syntax
    if (arr.indexOf('/') > -1) {
      arr.splice(3, 1);
    }

    return arr;
  };

  /**
   * convert %s to 0–255
   * Example:
   * 75% -> 191
   * 75/100 = 0.75, * 255 = 191.25 -> 191
   */
  const convertColor = (color: string, index: number): string => {
    // @ts-ignore
    const p = color.substr(0, color.length - 1) / 100;

    const converted =
      color.indexOf('%') > -1 || index === 3
        ? Math.round(p * 255).toString(16)
        : (+color).toString(16);
    return converted.length === 1 ? '0' + converted : converted;
  };

  return '#' + rgbaToArray(rgba).map(convertColor).join('');
}

export function rgbOrRgbaToHex(color: unknown = ''): string | unknown {
  if (!isString(color)) return color;
  if (isRgb(color)) return rgbToHex(color);
  if (isRgba(color)) return rgbaToHexa(color);
  return color;
}

export const hasEditableSelection = (
  fabricObject: any,
): fabricObject is fabric.IText | fabric.Textbox => {
  return !!fabricObject.getSelectionStyles && !!fabricObject.isEditing;
};

export const toBoolean = (value: unknown): boolean => {
  if (isString(value)) {
    if (value === 'false') return false;
    if (value === 'true') return true;
    if (!isNaN(value)) return !!+value;
  }
  return !!value;
};

export const getColor = (color: unknown, defaultValue: string = '#ffffff00'): string => {
  const value = rgbOrRgbaToHex(color);
  if (!isString(value)) return defaultValue;
  return value === '' ? defaultValue : value;
};

export const isTextType = (type?: string): boolean => {
  return type === 'text' || type === 'i-text' || type === 'textbox';
};

export const fonts: Record<string, string[]> = {
  arial: ['Arial', 'Arial Bold', 'Arial Italic', 'Arial Bold Italic'],
  verdana: ['Verdana', 'Verdana Bold', 'Verdana Italic', 'Verdana Bold Italic'],
  'times new roman': [
    'Times New Roman',
    'Times New Roman Bold',
    'Times New Roman Italic',
    'Times New Roman Bold Italic',
  ],
  georgia: ['Georgia', 'Georgia Bold', 'Georgia Italic', 'Georgia Bold Italic'],
};

export const setFonts = (doc: any) => {
  // ARIAL
  doc.addFileToVFS('Arial-normal.ttf', arialNormalFont);
  doc.addFont('Arial-normal.ttf', 'Arial', 'normal');
  doc.addFileToVFS('Arial Bold-normal.ttf', arialBoldFont);
  doc.addFont('Arial Bold-normal.ttf', 'Arial Bold', 'bold');
  doc.addFileToVFS('Arial Italic-normal.ttf', arialItalicFont);
  doc.addFont('Arial Italic-normal.ttf', 'Arial Italic', 'italic');
  doc.addFileToVFS('Arial Bold Italic-normal.ttf', arialBoldItalicFont);
  doc.addFont('Arial Bold Italic-normal.ttf', 'Arial Bold Italic', 'bolditalic');

  // VERDANA
  doc.addFileToVFS('Verdana-normal.ttf', verdanaFont);
  doc.addFont('Verdana-normal.ttf', 'Verdana', 'normal');
  doc.addFileToVFS('Verdana Bold-normal.ttf', verdanaBoldFont);
  doc.addFont('Verdana Bold-normal.ttf', 'Verdana Bold', 'bold');
  doc.addFileToVFS('Verdana Italic-normal.ttf', verdanaItalicFont);
  doc.addFont('Verdana Italic-normal.ttf', 'Verdana Italic', 'italic');
  doc.addFileToVFS('Verdana Bold Italic-normal.ttf', verdanaBoldItalicFont);
  doc.addFont('Verdana Bold Italic-normal.ttf', 'Verdana Bold Italic', 'bolditalic');

  // TIMES NEW ROMAN
  doc.addFileToVFS('Times New Roman-normal.ttf', timesNewRomanFont);
  doc.addFont('Times New Roman-normal.ttf', 'Times New Roman', 'normal');
  doc.addFileToVFS('Times New Roman Bold-normal.ttf', timesNewRomanBoldFont);
  doc.addFont('Times New Roman Bold-normal.ttf', 'Times New Roman Bold', 'bold');
  doc.addFileToVFS('Times New Roman Italic-normal.ttf', timesNewRomanItalicFont);
  doc.addFont('Times New Roman Italic-normal.ttf', 'Times New Roman Italic', 'italic');
  doc.addFileToVFS('Times New Roman Bold Italic-normal.ttf', timesNewRomanBoldItalicFont);
  doc.addFont(
    'Times New Roman Bold Italic-normal.ttf',
    'Times New Roman Bold Italic',
    'bolditalic',
  );

  //GEORGIA
  doc.addFileToVFS('Georgia-normal.ttf', georgiaFont);
  doc.addFont('Georgia-normal.ttf', 'Georgia', 'normal');
  doc.addFileToVFS('Georgia Bold-normal.ttf', georgiaBoldFont);
  doc.addFont('Georgia Bold-normal.ttf', 'Georgia Bold', 'bold');
  doc.addFileToVFS('Georgia Italic-normal.ttf', georgiaItalicFont);
  doc.addFont('Georgia Italic-normal.ttf', 'Georgia Italic', 'italic');
  doc.addFileToVFS('Georgia Bold Italic-normal.ttf', georgiaBoldItalicFont);
  doc.addFont('Georgia Bold Italic-normal.ttf', 'Georgia Bold Italic', 'bolditalic');
};
