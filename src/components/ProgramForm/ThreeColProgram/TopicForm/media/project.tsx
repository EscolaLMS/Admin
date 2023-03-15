import React, { useEffect, useLayoutEffect } from 'react';
import { Row } from 'antd';
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
      <Row>
        <FormattedMessage
          id="project_description"
          defaultMessage="Project has nothing to setup here. Add title and description in the right side panel"
        />
      </Row>
    </React.Fragment>
  );
};

export default Project;
