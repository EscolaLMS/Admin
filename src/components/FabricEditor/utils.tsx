import { isString } from 'lodash';

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
        ? Math.round((color.substr(0, color.length - 1) / 100) * 255).toString(16)
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
