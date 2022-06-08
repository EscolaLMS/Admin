import type { ACTIVE_ELEMENT_FIELD_NAMES } from '@/components/FabricEditor/consts';

export type ActiveElementFieldName = typeof ACTIVE_ELEMENT_FIELD_NAMES[number];

// export type ActiveElementState = Record<ActiveElementFieldName, string | number | boolean>
// TODO: create this type by FabricEditorController().getForActive()
export type ActiveElementState = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  textAlign: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  linethrough: boolean;
  overline: boolean;
  fill: string;
  textBackgroundColor: string;
  backgroundColor: string;
  opacity: number;
  stroke: string;
  strokeWidth: number;
  text: string;
};
