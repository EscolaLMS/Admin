import React, { useEffect, useMemo, useState } from 'react';
import { Button, Col, Row } from 'antd';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';
import type { fabric } from 'fabric';
import { debounce } from 'lodash';
import PreviewPDF from './preview';

import FabricEditorController from '@/components/FabricEditor/FabricEditorController';
import FabricEditorActiveElementForm from '@/components/FabricEditor/forms/FabricEditorActiveElementForm';
import FabricEditorBasicForm from '@/components/FabricEditor/forms/FabricEditorBasicForm';

import './index.css';
import { FormattedMessage } from 'umi';

const FabricEditor: React.FC<{
  onUpdate?: (obj: unknown) => void;
  initialValue: any;
  variables?: string[];
  width?: number;
  height?: number;
}> = ({ onUpdate, initialValue, width = 842, height = 595, variables = [] }) => {
  const [svg, setSvg] = useState<string>();
  const { editor, onReady } = useFabricJSEditor();

  const editorController = useMemo(
    () => (editor ? new FabricEditorController(editor) : undefined),
    [editor],
  );

  const onCanvasUpdate = () => {
    const obj = editor?.canvas.toJSON();
    return obj && onUpdate && onUpdate(obj);
  };

  useEffect(() => {
    const onUpdateDebounced = debounce(onCanvasUpdate, 500);

    if (editor && editor.canvas) {
      editor.canvas.on('after:render', onUpdateDebounced);
    }

    return () => {
      if (editor && editor.canvas) {
        editor.canvas.off('after:render', onUpdateDebounced);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="fabric-editor">
      <Row className="fabric-editor__top" gutter={50} justify="space-between">
        <Col>
          {editorController?.canvas && (
            <FabricEditorBasicForm editorController={editorController} variables={variables} />
          )}
        </Col>

        <Col>
          <Button onClick={onPreview} htmlType="button">
            <FormattedMessage id="fabric.preview" defaultMessage="fabric.preview" />
          </Button>
        </Col>
      </Row>
      <div className="fabric-editor__canvas fakeA4" style={{ width, height }}>
        <FabricJSCanvas className="fakeA4-canvas" onReady={onCanvasReady} />
      </div>
      <div className="fabric-editor__bottom">
        {editorController?.canvas && (
          <FabricEditorActiveElementForm
            editorController={editorController}
            activeObject={editorController.activeObject}
          />
        )}
      </div>
      {svg && <PreviewPDF svgDef={svg} width={width} height={height} />}
    </div>
  );
};

export default FabricEditor;
