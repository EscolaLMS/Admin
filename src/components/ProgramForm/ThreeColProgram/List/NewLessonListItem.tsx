import { ExportOutlined, FolderOutlined } from '@ant-design/icons';
import type { TreeDraggableProvided } from '@atlaskit/tree/dist/types/components/TreeItem/TreeItem-types';
import { Button, Input, Tooltip } from 'antd';
import React, { useState } from 'react';
import { FormattedMessage } from 'umi';

export const NewLessonListItem = React.forwardRef<
  HTMLDivElement,
  {
    initialValue: API.Lesson;
    onCreate: (title: string) => void;
  } & TreeDraggableProvided['draggableProps'] &
    TreeDraggableProvided['dragHandleProps']
>(({ initialValue, onCreate, ...draggableProps }, ref) => {
  const [value, setValue] = useState('');

  return (
    <div
      className="program-sidebar__list-item program-sidebar__list-item--lesson-new"
      ref={ref}
      {...draggableProps}
    >
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
    </div>
  );
});
