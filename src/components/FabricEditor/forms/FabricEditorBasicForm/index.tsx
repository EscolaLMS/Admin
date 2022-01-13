import React, { useCallback, useEffect, useState } from 'react';
import InputColor from '@/components/FabricEditor/fields/InputColor';
import type FabricEditorController from '@/components/FabricEditor/FabricEditorController';
import { Button, Col, Dropdown, Menu, Popconfirm, Row, Upload } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './index.css';

const FabricEditorBasicForm: React.FC<{
  editorController: FabricEditorController;
  variables: string[];
}> = ({ editorController, variables = [] }) => {
  const [editorState, setEditorState] = useState({
    backgroundColor: editorController.getEditorBackgroundColor(),
  });

  // first render
  useEffect(() => {
    const firstRender = () => {
      setEditorState({
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
    setEditorState({
      ...editorState,
      backgroundColor: editorController.getEditorBackgroundColor(),
    });
  }, [editorController]);

  const onChangeBackgroundColor = useCallback(
    (value: string) => {
      setEditorState({
        ...editorState,
        backgroundColor: value,
      });

      editorController.setEditorBackgroundColor(value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [editorController],
  );

  const onFile = useCallback((file) => {
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
  }, []);

  const menuAddObject = (
    <Menu>
      <Menu.Item key="1">
        <Button
          type="primary"
          block
          onClick={() => editorController?.addCircle()}
          htmlType="button"
        >
          Add Circle
        </Button>
      </Menu.Item>

      <Menu.Item key="2">
        <Button
          type="primary"
          block
          onClick={() => editorController?.addRectangle()}
          htmlType="button"
        >
          Add Rectangle
        </Button>
      </Menu.Item>

      <Menu.Item key="3">
        <Button type="primary" block onClick={() => editorController?.addLine()} htmlType="button">
          Add Line
        </Button>
      </Menu.Item>

      <Menu.Item key="4">
        <Upload
          beforeUpload={onFile}
          showUploadList={false}
          accept="image/*"
          className={'input-upload'}
        >
          <Button type="primary" block>
            Add Image
          </Button>
        </Upload>
      </Menu.Item>
    </Menu>
  );

  const menuAddText = (
    <Menu>
      <Menu.ItemGroup title="Text">
        <Menu.Item key="1">
          <Button
            type="primary"
            block
            onClick={() => editorController?.addTextbox()}
            htmlType="button"
          >
            Add Textbox
          </Button>
        </Menu.Item>

        <Menu.Item key="2">
          <Button
            type="primary"
            block
            onClick={() => editorController?.addIText()}
            htmlType="button"
          >
            Add Text
          </Button>
        </Menu.Item>
      </Menu.ItemGroup>

      <Menu.ItemGroup title="Variables">
        {variables.map((token) => (
          <Menu.Item key={token}>
            <Button
              type="primary"
              block
              onClick={() => editorController?.addVariable(token)}
              htmlType="button"
            >
              {`Add ${token}`}
            </Button>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div className="fabric-editor__form fabric-editor__form--basic">
      <h3 className="fabric-editor__form-title">Editor options</h3>

      <Row align="middle">
        <Col>
          <InputColor
            value={editorState.backgroundColor}
            onChange={onChangeBackgroundColor}
            label="Editor Background Color"
            name="backgroundColor"
            style={{ marginTop: '13px' }}
          />
        </Col>
        <Col>
          <Dropdown overlay={menuAddObject}>
            <Button>
              Add Object <DownOutlined />
            </Button>
          </Dropdown>

          <Dropdown overlay={menuAddText}>
            <Button>
              Add Text <DownOutlined />
            </Button>
          </Dropdown>

          <Popconfirm
            title="Are you sure you want to delete everything?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={() => editorController?.deleteAll()}
          >
            <Button type="primary" danger htmlType="button">
              Clear editor
            </Button>
          </Popconfirm>
        </Col>
      </Row>
    </div>
  );
};

export default FabricEditorBasicForm;
