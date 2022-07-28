import React, { useState } from 'react';
import Embed from 'react-tiny-oembed';
import { Row, Input, Button } from 'antd';
import { FormattedMessage } from 'umi';

export const Oembed: React.FC<{ text: string; onChange: (value: string) => void }> = ({
  text,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState<string>(text);
  const [previewValue, setPreviewValue] = useState<string>(text);

  return (
    <React.Fragment>
      <Row>
        <Input
          value={text}
          onChange={(e) => {
            setCurrentValue(e.target.value);
            onChange(e.target.value);
          }}
        />
        <Button onClick={() => setPreviewValue(currentValue)}>
          <FormattedMessage id="preview" />
        </Button>
      </Row>
      <Row>{previewValue && <Embed key={previewValue} url={previewValue} />}</Row>
    </React.Fragment>
  );
};

export default Oembed;
