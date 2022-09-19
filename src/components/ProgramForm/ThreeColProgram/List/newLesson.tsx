import React, { useState } from 'react';
import { FolderOutlined, ExportOutlined } from '@ant-design/icons';

import { FormattedMessage } from '@@/plugin-locale/localeExports';
import { Button, Input, Tooltip } from 'antd';

export const NewLessonListItem: React.FC<{
  initialValue: API.Lesson;
  onCreate: (title: string) => void;
}> = ({ initialValue, onCreate }) => {
  const [value, setValue] = useState<string>('');
  return (
    <React.Fragment>
      <FolderOutlined />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={initialValue.title}
      />
      <div>
        <Tooltip placement="right" title={<FormattedMessage id="create" />}>
          <Button
            disabled={!value}
            size="small"
            className="btn-create-lesson"
            type="primary"
            icon={<ExportOutlined />}
            onClick={() => onCreate(value)}
          />
        </Tooltip>
      </div>
    </React.Fragment>
  );
};

export default NewLessonListItem;
