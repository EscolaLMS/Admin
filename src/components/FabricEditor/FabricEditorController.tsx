import type { FabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';
import { isNaN, isNumber, isString } from 'lodash';
import { rgbOrRgbaToHex } from '@/components/FabricEditor/utils';

// type FabricObject = fabric.Object
export type FabricObjectKey = keyof fabric.Object;

// function capitalize(string: string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

const hasEditableSelection = (fabricObject: any): fabricObject is fabric.IText | fabric.Textbox => {
  return !!fabricObject.getSelectionStyles && !!fabricObject.isEditing;
};

const toBoolean = (value: unknown): boolean => {
  if (isString(value)) {
    if (value === 'false') return false;
    if (value === 'true') return true;
    if (!isNaN(value)) return !!+value;
  }
  return !!value;
};

const getColor = (color: unknown, defaultValue: string = '#ffffff00'): string => {
  const value = rgbOrRgbaToHex(color);
  if (!isString(value)) return defaultValue;
  return value === '' ? defaultValue : value;
};

const isTextType = (type?: string): boolean => {
  return type === 'text' || type === 'i-text' || type === 'textbox';
};

const propsAllowedInSelections = [
  // 'opacity',
  // 'fill',
  // 'stroke',
  // 'strokeWidth',
  // 'fontSize',
  // 'lineHeight',
  'charSpacing',

  'fontFamily',
  'fontSize',
  'lineHeight',
  'textAlign',
  'bold',
  'fontWeight',
  'italic',
  'fontStyle',
  'underline',
  'linethrough',
  'overline',
  'fill',
  'textBackgroundColor',
  'backgroundColor',
  'opacity',
  'stroke',
  'strokeWidth',
];

export default class FabricEditorController {
  editor: FabricJSEditor;

  constructor(editor: FabricJSEditor) {
    this.editor = editor;
  }

  get canvas() {
    return this.editor.canvas;
  }

  get activeObject() {
    return this.editor.canvas.getActiveObject();
  }

  addIText(text: string = 'sample itext') {
    const object = new fabric.IText(text);
    // object.set({ text })
    this.canvas.add(object);
  }

  addTextbox(text: string = 'sample itextbox') {
    const object = new fabric.Textbox(text);
    // object.set({ text })
    this.canvas.add(object);
  }

  addVariable(variable: string) {
    if (
      this.activeObject &&
      isTextType(this.activeObject.type) &&
      hasEditableSelection(this.activeObject)
    ) {
      const text = this.getForActive('text');
      const index = (this.activeObject as fabric.IText).selectionEnd || text.length - 1;
      this.setForActive('text', `${text.substring(0, index)} ${variable} ${text.substring(index)}`);
      return;
    }

    this.addTextbox(variable);
  }

  addCircle() {
    this.editor.addCircle();
  }
  addRectangle() {
    this.editor.addRectangle();
  }
  addLine() {
    this.editor.addLine();
  }

  addFile(fileInBase64: string) {
    fabric.Image.fromURL(fileInBase64, (img) => {
      img.set({ left: 0, top: 0 });

      const widthScale = (this.canvas.width || 1) / (img.width || 1);
      const heightScale = (this.canvas.height || 1) / (img.height || 1);
      const scale = Math.min(widthScale, heightScale);

      if (scale < 1) {
        img.scale(scale);
      }

      this.canvas.add(img);
    });
  }

  getEditorBackgroundColor() {
    return getColor(this.canvas.backgroundColor);
  }

  setEditorBackgroundColor(value: string) {
    return this.canvas.setBackgroundColor(getColor(value, ''), () => {
      this.canvas.requestRenderAll();
    });
  }

  deleteAll(clearBackground: boolean = true) {
    this.canvas.getObjects().forEach((object) => this.canvas.remove(object));
    this.canvas.discardActiveObject();

    if (clearBackground) {
      this.setEditorBackgroundColor('#ffffff00');
    }

    this.canvas.requestRenderAll();
  }

  deleteSelected() {
    this.canvas.getActiveObjects().forEach((object) => this.canvas.remove(object));
    this.canvas.discardActiveObject();
    this.canvas.requestRenderAll();
  }

  getForActive(propName: FabricObjectKey | string) {
    switch (propName) {
      case 'opacity':
        return this.getOpacity();
      case 'textAlign':
        return this.getTextAlign();
      case 'fontFamily':
        return this.getFontFamily();
      case 'fill':
      case 'stroke': // stroke color
      case 'backgroundColor':
      case 'textBackgroundColor':
        return this.getColorProp(propName);
      case 'bold':
        return this.getBold();
      case 'italic':
        return this.getItalic();
      case 'underline':
      case 'linethrough':
      case 'overline':
        return this.getBoolean(propName);
      case 'strokeWidth':
      case 'fontSize':
      case 'lineHeight':
      case 'charSpacing':
      case 'text':
      case 'splitByGrapheme':
      default:
        return this.getProp(propName);
    }
  }

  setForActive(propName: FabricObjectKey | string, value: unknown) {
    switch (propName) {
      case 'opacity':
        return this.setOpacity(value);
      case 'textAlign':
      case 'fontFamily':
        return this.setLowerCaseProp(propName, value);
      case 'strokeWidth':
      case 'fontSize':
        return this.setIntProp(propName, value);
      case 'lineHeight':
        return this.setFloatProp(propName, value);
      case 'fill':
      case 'stroke': // stroke color
      case 'backgroundColor':
      case 'textBackgroundColor':
        return this.setColorProp(propName, value);
      case 'bold':
        return this.setBold(value);
      case 'italic':
        return this.setItalic(value);
      case 'underline':
      case 'linethrough':
      case 'overline':
        return this.setBoolean(propName, value);
      case 'charSpacing':
      case 'text':
      case 'splitByGrapheme':
      default:
        return this.setProp(propName, value);
    }
  }

  // TODO: description
  private getProp(styleName: string, object = this.activeObject) {
    if (!object) return '';
    if (
      !propsAllowedInSelections.includes(styleName) ||
      !hasEditableSelection(object) ||
      !object.getSelectionStyles().length
    )
      return object[styleName] ?? '';

    return object.getSelectionStyles()?.[0]?.[styleName] ?? object[styleName] ?? '';
  }

  // TODO: description
  private setProp(styleName: string, value: unknown, object = this.activeObject) {
    if (!object) return;
    if (
      !propsAllowedInSelections.includes(styleName) ||
      !hasEditableSelection(object) ||
      !object.getSelectionStyles().length
    ) {
      object.set(styleName as FabricObjectKey, value);
    } else {
      object.setSelectionStyles({ [styleName]: value });
    }

    this.canvas.requestRenderAll();
  }

  private setIntProp(propName: string, value: unknown = '') {
    if ((isString(value) && !isNaN(value)) || isNumber(value)) {
      return this.setProp(propName, parseInt(value + '', 10));
    }
    console.error(`${value} is not ${propName} value`);
  }

  private setFloatProp(propName: string, value: unknown = '') {
    if ((isString(value) && !isNaN(value)) || isNumber(value)) {
      return this.setProp(propName, parseFloat(value + ''));
    }
    console.error(`${value} is not ${propName} value`);
  }

  private getBoolean(propName: string): boolean {
    return toBoolean(this.getProp(propName));
  }

  private setBoolean(propName: string, value: unknown = false) {
    this.setProp(propName, toBoolean(value));
  }

  private setLowerCaseProp(propName: string, value: unknown = '') {
    if (isString(value)) {
      return this.setProp(propName, value.toLowerCase());
    }
    console.error(`${value} is not ${propName} value`);
  }

  private getColorProp(propName: string, defaultValue?: string) {
    return getColor(this.getProp(propName), defaultValue);
  }

  private setColorProp(propName: string, value: unknown = '') {
    return this.setProp(propName, rgbOrRgbaToHex(value));
  }

  private getOpacity() {
    return this.getProp('opacity') * 100;
  }

  private setOpacity(value: unknown = '100') {
    if ((isString(value) && !isNaN(value)) || isNumber(value)) {
      return this.setProp('opacity', +value / 100);
    }
    console.error(`${value} is not opacity value`);
  }

  private getTextAlign() {
    const ta = this.getProp('textAlign').toLowerCase();
    return ta === '' ? 'left' : ta;
  }

  private getFontFamily() {
    return this.getProp('fontFamily').toLowerCase();
  }

  private getBold(): boolean {
    return this.getProp('fontWeight') === 'bold';
  }

  private setBold(value: unknown) {
    this.setProp('fontWeight', toBoolean(value) ? 'bold' : '');
  }

  private getItalic(): boolean {
    return this.getProp('fontStyle') === 'italic';
  }

  private setItalic(value: unknown) {
    this.setProp('fontStyle', toBoolean(value) ? 'italic' : '');
  }
}
