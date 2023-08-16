import React, { useState, useCallback } from 'react';
import { Modal, Button, Radio } from 'antd';
import { JsonEditor as Editor } from 'jsoneditor-react';
import { FormattedMessage } from 'umi';
import 'jsoneditor-react/es/editor.min.css';

type EditorMode = 'tree' | 'view' | 'form' | 'code' | 'text';

export const JsonEditor: React.FC<{
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hideModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const [mode, setMode] = useState<EditorMode>('code');

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)} size="small">
        <FormattedMessage id="json_editor" />
      </Button>
      <Modal
        title="JSON"
        open={isModalVisible}
        onOk={hideModal}
        onCancel={hideModal}
        destroyOnClose
      >
        <Radio.Group onChange={(e) => setMode(e.target.value)} value={mode}>
          <Radio value="tree">tree</Radio>
          <Radio value="view">view</Radio>
          <Radio value="form">form</Radio>
          <Radio value="code">code</Radio>
          <Radio value="text">text</Radio>
        </Radio.Group>
        <Editor key={mode} mode={mode} value={value} onChange={onChange} />
      </Modal>
    </div>
  );
};

export default JsonEditor;
