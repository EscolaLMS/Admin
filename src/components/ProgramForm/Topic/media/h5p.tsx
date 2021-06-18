import React from 'react';

export default () => <React.Fragment />;

// eslint-disable-next-line no-lone-blocks

/*
import React, { useCallback, useEffect, useState, useContext } from "react";
import { Context } from "@/context/curriculum";
import Form from "antd/lib/form";
import Button from "antd/lib/button";
import Select from "antd/lib/select";
import Divider from "antd/lib/divider";
import { usePortals } from "react-portal-hook";

const { Option } = Select;

export const MediaInteractive = ({ media, onUpdate }) => {
  const [state, setState] = useState(
    media && media.id ? parseInt(media.id) : -1
  );
  const { h5ps } = useContext(Context);

  const portalManager = usePortals();

  const showPreview = useCallback(iframe => {
    // Calling this from anywhere in your app will render a notification
    portalManager.open(
      portal => (
        <div className="iframe-portal">
          <Button type="primary" onClick={() => portal.close()}>
            Close Preview
          </Button>
          <div className="iframe">
            <iframe src={iframe} />
          </div>
        </div>
      ),
      {
        appendTo: document && document.getElementById("course-portal")
      }
    );
  }, []);

  useEffect(() => {
    if (media && media.id) {
      setState(parseInt(media.id));
    }
  }, [media]);

  return (
    <Form wrapperCol={{ span: 10 }} layout="vertical">
      <Form.Item label="Select interactive Element">
        <Select value={state} onChange={value => setState(value)}>
          <Option value={-1} disabled>
            Select h5p content
          </Option>
          {h5ps.map(h5p => (
            <Option key={h5p.id} value={h5p.id}>
              {h5p.title} <small>({h5p.library.title})</small>
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Actions">
        <Button
          type="primary"
          onClick={e => {
            e.preventDefault();
            onUpdate && onUpdate(state);
          }}
        >
          Save interactive element
        </Button>

        {state && state != -1 && (
          <React.Fragment>
            <Divider type="vertical" />
            <Button
              onClick={e => {
                e.preventDefault();
                showPreview(`/admin/h5p/h5p/embed/${state}`);
              }}
            >
              Preview Element
            </Button>
            <Divider type="vertical" />
            <Button href={`/admin/h5p/h5p/${state}/edit`} target="_blank">
              Edit Element
            </Button>
          </React.Fragment>
        )}
      </Form.Item>
    </Form>
  );
};

export default MediaInteractive;
*/
