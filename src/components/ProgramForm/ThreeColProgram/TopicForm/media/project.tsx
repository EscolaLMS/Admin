import React, { useEffect, useLayoutEffect, useState } from 'react';
import Embed from 'react-tiny-oembed';
import { Row, Input, Button } from 'antd';
import { FormattedMessage } from 'umi';

export const Project: React.FC<{ onChange: (value: string) => void }> = ({ onChange }) => {
  useEffect(() => {
    onChange('theProject');
  }, []);

  useLayoutEffect(() => {
    onChange('theProject');
  }, []);
  // const [currentValue, setCurrentValue] = useState<string>(text);
  // const [previewValue, setPreviewValue] = useState<string>(text);

  return (
    <React.Fragment>
      <Row>Project</Row>
    </React.Fragment>
  );
};

export default Project;
