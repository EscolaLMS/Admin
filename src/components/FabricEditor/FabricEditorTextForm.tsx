import React, { useCallback } from 'react';
import InputColor from '@/components/FabricEditor/InputColor';

const FONT_FAMILY = [
  'Arial',
  'Helvetica',
  'Myriad Pro',
  'Delicious',
  'Verdana',
  'Georgia',
  'Courier',
  'Comic Sans MS',
  'Impact',
  'Monaco',
  'Optima',
  'Hoefler Text',
  'Plaster',
  'Engagement',
];

const TEXT_ALIGN = ['Left', 'Center', 'Right', 'Justify'];

const FONT_SIZE = [...Array(120)].map((_value, index) => index + 1);
const STROKE_WIDTH = [...Array(6)].map((_value, index) => index);

const FabricEditorTextForm: React.FC<{
  values: Object;
  onChange: (propName: string) => (value: number | string | boolean) => void;
}> = ({ values, onChange }) => {
  const onChangeField = useCallback(
    (propName: string) => (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
      onChange(propName)(event.currentTarget.value);
    },
    [onChange],
  );

  const onChangeCheckbox = useCallback(
    (propName: string) => (event: React.FormEvent<HTMLInputElement>) => {
      onChange(propName)(event.currentTarget.checked);
    },
    [onChange],
  );

  const onChangeColorField = useCallback(
    (propName: string) => (value: string) => {
      onChange(propName)(value);
    },
    [onChange],
  );

  return (
    <div className="fabric-editor__section">
      <h3 className="fabric-editor__section-title">Text options</h3>

      <div className="fabric-editor__group">
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="fontFamily">
            Font family:
          </label>
          <select
            className="fabric-editor__field fabric-editor__field--select"
            name="fontFamily"
            value={values.fontFamily}
            onChange={onChangeField('fontFamily')}
          >
            {FONT_FAMILY.map((font) => (
              <option key={font} value={font.toLowerCase()}>
                {font}
              </option>
            ))}
          </select>
        </div>

        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="fontSize">
            Font size:
          </label>
          <select
            className="fabric-editor__field fabric-editor__field--select"
            name="fontSize"
            value={values.fontSize}
            onChange={onChangeField('fontSize')}
          >
            {FONT_SIZE.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="lineHeight">
            Line height:
          </label>
          <input
            className="fabric-editor__field fabric-editor__field--number"
            name="lineHeight"
            value={values.lineHeight}
            onChange={onChangeField('lineHeight')}
            type="number"
            min="0"
            max="10"
            step="0.1"
          />
        </div>
      </div>

      <div className="fabric-editor__group">
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="textAlign">
            Text align:
          </label>
          <select
            className="fabric-editor__field fabric-editor__field--select"
            name="textAlign"
            value={values.textAlign}
            onChange={onChangeField('textAlign')}
          >
            {TEXT_ALIGN.map((align) => (
              <option key={align} value={align.toLowerCase()}>
                {align}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="fabric-editor__group">
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="bold">
            Bold
            <input
              className="fabric-editor__field fabric-editor__field--checkbox"
              name="bold"
              value={values.bold}
              checked={values.bold}
              onChange={onChangeCheckbox('bold')}
              type="checkbox"
            />
          </label>
        </div>
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="italic">
            Italic
            <input
              className="fabric-editor__field fabric-editor__field--checkbox"
              name="italic"
              value={values.italic}
              checked={values.italic}
              onChange={onChangeCheckbox('italic')}
              type="checkbox"
            />
          </label>
        </div>
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="underline">
            Underline
            <input
              className="fabric-editor__field fabric-editor__field--checkbox"
              name="underline"
              value={values.underline}
              checked={values.underline}
              onChange={onChangeCheckbox('underline')}
              type="checkbox"
            />
          </label>
        </div>
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="linethrough">
            Linethrough
            <input
              className="fabric-editor__field fabric-editor__field--checkbox"
              name="linethrough"
              value={values.linethrough}
              checked={values.linethrough}
              onChange={onChangeCheckbox('linethrough')}
              type="checkbox"
            />
          </label>
        </div>
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="overline">
            Overline
            <input
              className="fabric-editor__field fabric-editor__field--checkbox"
              name="overline"
              value={values.overline}
              checked={values.overline}
              onChange={onChangeCheckbox('overline')}
              type="checkbox"
            />
          </label>
        </div>
      </div>

      <div className="fabric-editor__group">
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="fill">
            Text Color:{' '}
          </label>
          <InputColor
            className="fabric-editor__field fabric-editor__field--color"
            name="fill"
            value={values.fill}
            onChange={onChangeColorField('fill')}
          />
        </div>

        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="textBackgroundColor">
            Background text color:
          </label>
          <InputColor
            className="fabric-editor__field fabric-editor__field--color"
            name="textBackgroundColor"
            value={values.textBackgroundColor}
            onChange={onChangeColorField('textBackgroundColor')}
          />
        </div>

        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="backgroundColor">
            Background color:
          </label>
          <InputColor
            className="fabric-editor__field fabric-editor__field--color"
            name="backgroundColor"
            value={values.backgroundColor}
            onChange={onChangeColorField('backgroundColor')}
          />
        </div>

        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="opacity">
            Opacity:{' '}
          </label>
          <input
            className="fabric-editor__field fabric-editor__field--range"
            name="opacity"
            value={values.opacity}
            onChange={onChangeField('opacity')}
            type="range"
          />
        </div>
      </div>

      <div className="fabric-editor__group">
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="stroke">
            Stroke color:
          </label>
          <InputColor
            className="fabric-editor__field fabric-editor__field--color"
            name="stroke"
            value={values.stroke}
            onChange={onChangeColorField('stroke')}
          />
        </div>

        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="strokeWidth">
            Stroke width:
          </label>
          <select
            className="fabric-editor__field fabric-editor__field--select"
            name="strokeWidth"
            value={values.strokeWidth}
            onChange={onChangeField('strokeWidth')}
          >
            {STROKE_WIDTH.map((width) => (
              <option key={width} value={width}>
                {width}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FabricEditorTextForm;
