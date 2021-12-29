import React, { useEffect } from 'react';

import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';
import { debounce } from 'lodash';

/*

EITHER Implement this 

BUT BETTER is to pass images as urlencoded base64

fabric.Image.prototype.toObject = (function (toObject) {
  return function () {
    return fabric.util.object.extend(toObject.call(this), {
      src: this.toDataURL(),
    });
  };
})(fabric.Image.prototype.toObject);
*/

const FabricEditor: React.FC<{ onUpdate?: (obj: Object) => void; initialValue: any }> = ({
  onUpdate,
  initialValue,
}) => {
  const { editor, onReady } = useFabricJSEditor();
  const onAddElement = (element: string) => {
    if (editor && editor[element]) {
      editor[element]('sample');
    }
  };

  const onCanvasUpdate = () => {
    const obj = editor?.canvas.toJSON();
    return obj && onUpdate && onUpdate(obj);
  };

  useEffect(() => {
    const onUpdateDebounced = debounce(onCanvasUpdate, 500);

    if (editor && editor.canvas) {
      editor.canvas.on('object:added', onUpdateDebounced);
      editor.canvas.on('object:removed', onUpdateDebounced);
      editor.canvas.on('object:modified', onUpdateDebounced);
    }

    return () => {
      if (editor && editor.canvas) {
        editor.canvas.off('object:added', onUpdateDebounced);
        editor.canvas.off('object:removed', onUpdateDebounced);
        editor.canvas.off('object:modified', onUpdateDebounced);
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

  return (
    <div>
      <button onClick={() => onAddElement('addCircle')} type="button">
        Add circle
      </button>
      <button onClick={() => onAddElement('addRectangle')} type="button">
        Add Rectangle
      </button>
      <button onClick={() => onAddElement('addLine')} type="button">
        Add Line
      </button>
      <button onClick={() => onAddElement('addText')} type="button">
        Add Text
      </button>
      <FabricJSCanvas className="sample-canvas" onReady={onCanvasReady} />
    </div>
  );
};

export default FabricEditor;
