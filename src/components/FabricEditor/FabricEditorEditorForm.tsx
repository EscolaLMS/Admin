import React, { useCallback } from 'react';
import InputColor from '@/components/FabricEditor/InputColor';
import type FabricEditorController from '@/components/FabricEditor/FabricEditorController';

const FabricEditorEditorForm: React.FC<{
  editorController: FabricEditorController;
  values: { backgroundColor: string };
  onChange: (propName: string) => (value: string) => void;
}> = ({ editorController, values, onChange }) => {
  const onChangeColorField = useCallback(
    (propName: string) => (value: string) => {
      onChange(propName)(value);
    },
    [onChange],
  );

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files && e.target.files[0];
    // TODO implement max size here !
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          editorController?.addFile(reader.result?.toString());
        }
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  };

  return (
    <div className="fabric-editor__section">
      <h3 className="fabric-editor__section-title">Editor options</h3>

      <div className="fabric-editor__group">
        <div className="fabric-editor__field-container">
          <label className="fabric-editor__field-label" htmlFor="backgroundColor">
            Editor Background Color:{' '}
          </label>
          <InputColor
            className="fabric-editor__field fabric-editor__field--color"
            name="backgroundColor"
            value={values.backgroundColor}
            onChange={onChangeColorField('backgroundColor')}
          />
        </div>
      </div>

      <div className="fabric-editor__group">
        <button onClick={() => editorController?.addCircle()} type="button">
          Add circle
        </button>
        <button onClick={() => editorController?.addRectangle()} type="button">
          Add Rectangle
        </button>
        <button onClick={() => editorController?.addLine()} type="button">
          Add Line
        </button>

        <button onClick={() => editorController?.addTextbox()} type="button">
          Add Textbox
        </button>
        <button onClick={() => editorController?.addIText()} type="button">
          Add Text
        </button>

        <input type="file" accept="image/*" onChange={onFile} />

        <hr />

        <button
          style={{ background: 'red' }}
          onClick={() => editorController?.deleteAll()}
          type="button"
        >
          Remove All
        </button>
      </div>
    </div>
  );
};

export default FabricEditorEditorForm;
