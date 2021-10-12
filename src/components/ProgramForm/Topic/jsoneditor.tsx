import React, { useState, useCallback } from 'react';
import { Modal, Button } from 'antd';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

export const JsonEditor: React.FC<{
  value?: string;
  onChange?: (value: string) => void;
}> = ({ value, onChange }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const hideModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <div>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Open Modal
      </Button>
      <Modal title="JSON" visible={isModalVisible} onOk={hideModal} onCancel={hideModal}>
        <Editor
          value={value}
          onChange={(newValue: string) => {
            return onChange && onChange(newValue);
          }}
        />
      </Modal>
    </div>
  );
};

export default JsonEditor;
