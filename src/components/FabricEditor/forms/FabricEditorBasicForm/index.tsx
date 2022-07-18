import React, { useCallback, useEffect, useState } from 'react';
import InputColor from '@/components/FabricEditor/fields/InputColor';
import type FabricEditorController from '@/components/FabricEditor/FabricEditorController';
import { Button, Col, Dropdown, Menu, Popconfirm, Row, Upload } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './index.css';
import { FormattedMessage, useIntl } from 'umi';

const FabricEditorBasicForm: React.FC<{
  editorController: FabricEditorController;
  variables: string[];
}> = ({ editorController, variables = [] }) => {
  const intl = useIntl();
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

  const onFile = useCallback((file: File) => {
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
          <FormattedMessage id="fabric.add_circle" />
        </Button>
      </Menu.Item>

      <Menu.Item key="2">
        <Button
          type="primary"
          block
          onClick={() => editorController?.addRectangle()}
          htmlType="button"
        >
          <FormattedMessage id="fabric.add_rectangle" />
        </Button>
      </Menu.Item>

      <Menu.Item key="3">
        <Button type="primary" block onClick={() => editorController?.addLine()} htmlType="button">
          <FormattedMessage id="fabric.add_line" />
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
            <FormattedMessage id="fabric.add_image" />
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
            <FormattedMessage id="fabric.add_textbox" />
          </Button>
        </Menu.Item>

        <Menu.Item key="2">
          <Button
            type="primary"
            block
            onClick={() => editorController?.addIText()}
            htmlType="button"
          >
            <FormattedMessage id="fabric.add_text" />
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
              <FormattedMessage id="fabric.add" /> {` ${token}`}
            </Button>
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div className="fabric-editor__form fabric-editor__form--basic">
      <h3 className="fabric-editor__form-title">
        <FormattedMessage id="fabric.editor_options" />
      </h3>

      <Row align="middle">
        <Col>
          <InputColor
            value={editorState.backgroundColor}
            onChange={onChangeBackgroundColor}
            label={intl.formatMessage({ id: 'fabric.editor_background_color' })}
            name="backgroundColor"
            style={{ marginTop: '13px' }}
          />
        </Col>
        <Col>
          <Dropdown overlay={menuAddObject}>
            <Button>
              <FormattedMessage id="fabric.add_object" /> <DownOutlined />
            </Button>
          </Dropdown>

          <Dropdown overlay={menuAddText}>
            <Button>
              <FormattedMessage id="fabric.add_text" /> <DownOutlined />
            </Button>
          </Dropdown>

          <Popconfirm
            title="Are you sure you want to delete everything?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={() => editorController?.deleteAll()}
          >
            <Button type="primary" danger htmlType="button">
              <FormattedMessage id="fabric.clear" />
            </Button>
          </Popconfirm>
        </Col>
      </Row>
    </div>
  );
};

export default FabricEditorBasicForm;
