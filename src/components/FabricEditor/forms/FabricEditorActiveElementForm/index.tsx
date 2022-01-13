import React, { useEffect, useState, useCallback } from 'react';
import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { fabric } from 'fabric';

import type FabricEditorController from '@/components/FabricEditor/FabricEditorController';
import FabricEditorTextForm from '@/components/FabricEditor/forms/FabricEditorActiveElementForm/FabricEditorTextForm';
import FabricEditorObjectForm from '@/components/FabricEditor/forms/FabricEditorActiveElementForm/FabricEditorObjectForm';
import FabricEditorImageForm from '@/components/FabricEditor/forms/FabricEditorActiveElementForm/FabricEditorImageForm';
import FabricEditorLineForm from '@/components/FabricEditor/forms/FabricEditorActiveElementForm/FabricEditorLineForm';
import { ACTIVE_ELEMENT_FIELD_NAMES } from '@/components/FabricEditor/consts';
import type { ActiveElementFieldName, ActiveElementState } from '@/components/FabricEditor/types';

const FabricEditorActiveElementForm: React.FC<{
  editorController: FabricEditorController;
  activeObject?: fabric.Object;
}> = ({ editorController, activeObject }) => {
  const getNewState = useCallback(
    () =>
      Object.fromEntries(
        ACTIVE_ELEMENT_FIELD_NAMES.map((field: ActiveElementFieldName) => [
          field,
          editorController.getForActive(field),
        ]),
      ) as ActiveElementState,
    [editorController],
  );

  const [activeElementState, setActiveElementState] = useState<ActiveElementState>(getNewState());

  useEffect(() => {
    setActiveElementState(getNewState());

    const eventChanged = () => {
      setActiveElementState(getNewState());
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
  }, [getNewState, activeObject]);

  const onChangeActiveElement = useCallback(
    (prop: ActiveElementFieldName) => (value: string | number | boolean) => {
      setActiveElementState({
        ...activeElementState,
        [prop]: value,
      });

      editorController?.setForActive(prop, value);
    },
    [activeElementState, editorController],
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
      {activeObject && (
        <>
          {getFormForActiveElement(activeObject.type)}

          <hr />

          <Popconfirm
            title="Are you sure you want to delete object?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={() => editorController?.deleteSelected()}
          >
            <Button type="primary" danger htmlType="button">
              Remove object
            </Button>
          </Popconfirm>
        </>
      )}
    </>
  );
};

export default FabricEditorActiveElementForm;
