export const ACTIVE_ELEMENT_FIELD_NAMES = [
  'fontFamily',
  'fontSize',
  'lineHeight',
  'textAlign',
  'bold',
  'italic',
  'underline',
  'linethrough',
  'overline',
  'fill',
  'textBackgroundColor',
  'backgroundColor',
  'opacity',
  'stroke',
  'strokeWidth',
  'text',
] as const;

export const PROPS_ALLOWED_IN_SELECTIONS = [
  'fontFamily',
  'fontSize',
  // 'lineHeight',
  // 'textAlign',
  'bold',
  'fontWeight', // for bold
  'italic',
  'fontStyle', // for italic
  'underline',
  'linethrough',
  'overline',
  'fill',
  'textBackgroundColor',
  // 'backgroundColor',
  // 'opacity',
  'stroke',
  'strokeWidth',
];

export const FONT_FAMILY = [
  'Arial',
  'Times New Roman',
  // 'Helvetica',
  // 'Myriad Pro',
  // 'Delicious',
  'Verdana',
  'Georgia',
  'Courier',
  // 'Comic Sans MS',
  // 'Impact',
  'Monaco',
  // 'Optima',
  // 'Hoefler Text',
  // 'Plaster',
  // 'Engagement',
];

export const TEXT_ALIGN = ['Left', 'Center', 'Right', 'Justify'];

export const FONT_SIZE = [...Array(50)].map((_value, index) => index + 1);

export const TEXT_STROKE_WIDTH = [...Array(6)].map((_value, index) => index);

export const IMAGE_STROKE_WIDTH = [...Array(15)].map((_value, index) => index);

export const LINE_STROKE_WIDTH = [...Array(15)].map((_value, index) => index);

export const OBJECT_STROKE_WIDTH = [...Array(6)].map((_value, index) => index);
