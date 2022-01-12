import React, { useEffect, useState, useCallback } from 'react';
import type FabricEditorController from '@/components/FabricEditor/FabricEditorController';
import type { fabric } from 'fabric';
import FabricEditorTextForm from '@/components/FabricEditor/FabricEditorTextForm';
import FabricEditorObjectForm from '@/components/FabricEditor/FabricEditorObjectForm';
import FabricEditorImageForm from '@/components/FabricEditor/FabricEditorImageForm';
import FabricEditorLineForm from '@/components/FabricEditor/FabricEditorLineForm';
import FabricEditorEditorForm from '@/components/FabricEditor/FabricEditorEditorForm';
import { Tag } from 'antd';

// TODO: done: wszystkie pola tekstu działają w dwie strony
// TODO: done: dodać formularz do innych rzeczy niż text
// TODO: done: resize img
// TODO: done: usuwanie elementów
// TODO: done: usuwanie wszystkich elementów i przywracanie oryginalnego tła
// TODO: dodać wklejanie zmiennych
// TODO: jakoś zgrabnie to ostylować

const fieldsNames = [
  // text fields
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
];

const FabricEditorForm: React.FC<{
  editorController: FabricEditorController;
  activeObject?: fabric.Object;
  variables?: string[];
}> = ({ editorController, activeObject, variables = [] }) => {
  const [activeElementState, setActiveElementState] = useState(
    Object.fromEntries(fieldsNames.map((field) => [field, editorController.getForActive(field)])),
  );
  const [editorState, setEditorState] = useState({
    rendered: false,
    backgroundColor: editorController.getEditorBackgroundColor(),
  });

  // first render
  useEffect(() => {
    const firstRender = () => {
      setEditorState({
        rendered: true,
        backgroundColor: editorController.getEditorBackgroundColor(),
      });

      editorController.canvas.off('after:render', firstRender);
    };

    editorController.canvas.on('after:render', firstRender);

    return () => {
      editorController.canvas.off('after:render', firstRender);
    };
  }, []);

  useEffect(() => {
    setActiveElementState(
      Object.fromEntries(fieldsNames.map((field) => [field, editorController.getForActive(field)])),
    );

    const eventChanged = () => {
      setActiveElementState(
        Object.fromEntries(
          fieldsNames.map((field) => [field, editorController.getForActive(field)]),
        ),
      );
    };

    if (activeObject && activeObject.on) {
      activeObject.on('selection:changed', eventChanged);
      activeObject.on('editing:exited', eventChanged);
    }

    return () => {
      if (activeObject && activeObject.off) {
        activeObject.off('selection:changed', eventChanged);
        activeObject.off('editing:exited', eventChanged);
      }
    };
  }, [activeObject]);

  useEffect(() => {
    setEditorState({
      ...editorState,
      backgroundColor: editorController.getEditorBackgroundColor(),
    });
  }, [editorController]);

  const onChangeActiveElement = useCallback(
    (prop: string) => (value: string | number | boolean) => {
      setActiveElementState({
        ...activeElementState,
        [prop]: value,
      });

      editorController?.setForActive(prop, value);
    },
    [activeElementState, editorController],
  );

  const onChangeEditor = useCallback(
    (prop: string) => (value: string) => {
      setEditorState({
        ...editorState,
        [prop]: value,
      });

      if (prop === 'backgroundColor') {
        editorController.setEditorBackgroundColor(value);
      } else {
        console.error('wrong prop', prop);
      }
    },
    [editorController],
  );

  const getFormForActiveElement = (type?: string) => {
    switch (type) {
      case 'text':
      case 'i-text':
      case 'textbox':
        return (
          <FabricEditorTextForm values={activeElementState} onChange={onChangeActiveElement} />
        );
      case 'image':
        return (
          <FabricEditorImageForm values={activeElementState} onChange={onChangeActiveElement} />
        );
      case 'line':
        return (
          <FabricEditorLineForm values={activeElementState} onChange={onChangeActiveElement} />
        );
      default:
        return (
          <FabricEditorObjectForm values={activeElementState} onChange={onChangeActiveElement} />
        );
    }
  };

  return (
    <>
      {editorController.canvas && (
        <>
          <FabricEditorEditorForm
            editorController={editorController}
            values={editorState}
            onChange={onChangeEditor}
          />
        </>
      )}

      <div>
        {variables.map((token) => (
          <button key={token} onClick={() => editorController?.addVariable(token)} type="button">
            <Tag color="orange">{token}</Tag>
          </button>
        ))}
      </div>

      {activeObject && (
        <>
          {getFormForActiveElement(activeObject.type)}

          <hr />

          <button
            style={{ background: 'red' }}
            onClick={() => editorController?.deleteSelected()}
            type="button"
          >
            Remove object
          </button>
        </>
      )}
    </>
  );
};

export default FabricEditorForm;
