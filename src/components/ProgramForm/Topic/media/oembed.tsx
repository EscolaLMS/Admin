import React, { useState } from 'react';
import Embed from 'react-tiny-oembed';
import { Row, Col, Input, Button } from 'antd';
import { FormattedMessage } from 'umi';

export const Oembed: React.FC<{ text: string; onChange: (value: string) => void }> = ({
  text,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(text);
  const [previewValue, setPreviewValue] = useState<string>();

  return (
    <Row>
      <Col span={12}>
        <Row>
          <Col span={12}>
            <Input
              value={text}
              onChange={(e) => {
                setCurrentValue(e.target.value);
                onChange(e.target.value);
              }}
            />
          </Col>
          <Col span={12}>
            <Button onClick={() => setPreviewValue(currentValue)}>
              <FormattedMessage id="preview" />
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={12}>{previewValue && <Embed key={previewValue} url={previewValue} />}</Col>
    </Row>
  );
};

export default Oembed;
