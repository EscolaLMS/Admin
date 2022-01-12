import React, { useCallback } from 'react';
import InputColor from '@/components/FabricEditor/InputColor';

const STROKE_WIDTH = [...Array(6)].map((_value, index) => index);

const FabricEditorObjectForm: React.FC<{
  values: Object;
  onChange: (propName: string) => (value: string | number) => void;
}> = ({ values, onChange }) => {
  const onChangeField = useCallback(
    (propName: string) => (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
      console.log('propName', propName);
      console.log('event.currentTarget.value', event.currentTarget.value);
      onChange(propName)(event.currentTarget.value);
    },
    [onChange],
  );

  const onChangeColorField = useCallback(
    (propName: string) => (value: string) => {
      console.log('propName', propName);
      console.log('value', value);
      onChange(propName)(value);
    },
    [onChange],
  );

  return (
    <div className="fabric-editor__section">
      <h3 className="fabric-editor__section-title">Object options</h3>

      <div className="fabric-editor__group">
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="fill">
            Object Background Color:{' '}
          </label>
          <InputColor
            className="fabric-editor__field fabric-editor__field--color"
            name="fill"
            value={values.fill}
            onChange={onChangeColorField('fill')}
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

export default FabricEditorObjectForm;
