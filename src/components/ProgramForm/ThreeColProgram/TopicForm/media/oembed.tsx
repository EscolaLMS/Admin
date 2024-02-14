import { Button, Input, Row } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage } from 'umi';

import { OEmbed } from '@/components/OEmbed';

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
      <Row>{previewValue && <OEmbed key={previewValue} url={previewValue} />}</Row>
    </React.Fragment>
  );
};

export default Oembed;
