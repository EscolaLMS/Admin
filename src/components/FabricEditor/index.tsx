import React, { useEffect, useMemo, useState } from 'react';

import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import type { fabric } from 'fabric';
import { debounce } from 'lodash';
import PreviewPDF from './preview';

import FabricEditorController from '@/components/FabricEditor/FabricEditorController';
import FabricEditorForm from '@/components/FabricEditor/FabricEditorForm';
import './index.css';

const FabricEditor: React.FC<{
  onUpdate?: (obj: Object) => void;
  initialValue: any;
  variables?: string[];
  width?: number;
  height?: number;
}> = ({ onUpdate, initialValue, width = 842, height = 592, variables = [] }) => {
  const [svg, setSvg] = useState<string>();
  const { editor, onReady } = useFabricJSEditor();

  const editorController = useMemo(
    () => (editor ? new FabricEditorController(editor) : undefined),
    [editor],
  );

  const onCanvasUpdate = () => {
    console.log('onCanvasUpdate');
    const obj = editor?.canvas.toJSON();
    return obj && onUpdate && onUpdate(obj);
  };

  useEffect(() => {
    const onUpdateDebounced = debounce(onCanvasUpdate, 500);

    if (editor && editor.canvas) {
      editor.canvas.on('after:render', onUpdateDebounced);
      //
      // editor.canvas.on('object:added', onUpdateDebounced);
      // editor.canvas.on('object:removed', onUpdateDebounced);
      // editor.canvas.on('object:modified', onUpdateDebounced);
      // editor.canvas.on('path:created', onUpdateDebounced);
      // editor.canvas.on('selection:updated', onUpdateDebounced);
      // editor.canvas.on('selection:cleared', onUpdateDebounced);

      // editor.canvas.on('event:changed', eventChanged);
      // editor.canvas.on('selection:changed', eventChanged);
      // editor.canvas.on('editing:entered', eventChanged);
      // editor.canvas.on('editing:exited', eventChanged);
    }

    return () => {
      if (editor && editor.canvas) {
        editor.canvas.off('after:render', onUpdateDebounced);

        // editor.canvas.off('object:added', onUpdateDebounced);
        // editor.canvas.off('object:removed', onUpdateDebounced);
        // editor.canvas.off('object:modified', onUpdateDebounced);
        // editor.canvas.off('path:created', onUpdateDebounced);
        // editor.canvas.off('selection:updated', onUpdateDebounced);
        // editor.canvas.off('selection:cleared', onUpdateDebounced);

        // editor.canvas.off('event:changed', eventChanged);
        // editor.canvas.off('selection:changed', eventChanged);
        // editor.canvas.off('editing:entered', eventChanged);
        // editor.canvas.off('editing:exited', eventChanged);
      }
    };
  }, [editor]);

  const onCanvasReady = (canvas: fabric.Canvas) => {
    if (initialValue) {
      try {
        const data = JSON.parse(initialValue);
        canvas.loadFromJSON(data, () => {});
      } catch (err) {
        // this is not a json
      }
    }
    onReady(canvas);
  };

  const onPreview = () => {
    return editor && setSvg(editor.canvas.toSVG());
  };

  return (
    <>
      <div>
        <div style={{ display: 'flex' }}>
          <div className="fakeA4" style={{ width, height }}>
            <FabricJSCanvas className="fakeA4-canvas" onReady={onCanvasReady} />
          </div>

          {editorController?.canvas && (
            <div style={{ maxWidth: '40%' }}>
              <FabricEditorForm
                editorController={editorController}
                activeObject={editorController.activeObject}
                variables={variables}
              />
            </div>
          )}
        </div>

        <button onClick={onPreview} type="button">
          Preview PDF without mock value
        </button>
        {svg && <PreviewPDF svgDef={svg} width={width} height={height} />}
      </div>
    </>
  );
};

export default FabricEditor;
