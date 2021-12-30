import React, { useEffect, useState } from 'react';

import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import { fabric } from 'fabric';
import { debounce } from 'lodash';
import PreviewPDF from './preview';

import './index.css';
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

const FabricEditor: React.FC<{
  onUpdate?: (obj: Object) => void;
  initialValue: any;
  width: number;
  height: number;
}> = ({ onUpdate, initialValue, width = 842, height = 592 }) => {
  const [svg, setSvg] = useState<string>();
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

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files && e.target.files[0];
    // TODO implement max size here !
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result) {
          fabric.Image.fromURL(reader.result?.toString(), (myImg) => {
            //i create an extra var for to change some image properties
            var img1 = myImg.set({ left: 0, top: 0 });
            editor && editor.canvas.add(img1);
          });
        }
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
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

  const onPreview = () => {
    editor && setSvg(editor.canvas.toSVG());
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
      <input type="file" accept="image/*" onChange={onFile} />
      <div className="fakeA4" style={{ width, height }}>
        <FabricJSCanvas className="fakeA4-canvas" onReady={onCanvasReady} />
      </div>
      <button onClick={onPreview} type="button">
        Preview PDF without mock value
      </button>
      {svg && <PreviewPDF svgDef={svg} width={width} height={height} />}
    </div>
  );
};

export default FabricEditor;
