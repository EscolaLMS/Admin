import { createTaskNote, deleteTaskNote, updateTaskNote } from '@/services/escola-lms/tasks';
import { Button, Input, List } from 'antd';
import { Fragment, useCallback, useState } from 'react';
import { FormattedMessage } from 'umi';

export const TaskNoteItemList: React.FC<{
  taskId: number;
  note: API.TaskNote;
  onRemoved: () => void;
  onEdited: () => void;
}> = ({ note, onRemoved, onEdited, taskId }) => {
  const [value, setValue] = useState(note.note);
  return (
    <List.Item
      actions={[
        <Button
          key={'update'}
          size="small"
          type="primary"
          onClick={() =>
            updateTaskNote(note.id, {
              task_id: taskId,
              note: value,
            }).then(() => {
              if (onEdited) {
                onEdited();
              }
            })
          }
        >
          <FormattedMessage id="Notes.edit_note" defaultMessage="Edit Note" />
        </Button>,
        <Button
          key={'delete'}
          size="small"
          danger
          onClick={() =>
            deleteTaskNote(note.id).then(() => {
              if (onRemoved) {
                onRemoved();
              }
            })
          }
        >
          <FormattedMessage id="Notes.delete_note" defaultMessage="Delete Note" />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Fragment>
            <FormattedMessage id="Notes.created_by" defaultMessage="Created by" />
            <br />
            {note.user?.first_name} {note.user?.last_name}
          </Fragment>
        }
        description={<Input.TextArea value={value} onChange={(e) => setValue(e.target.value)} />}
      />
    </List.Item>
  );
};

export const TaskNotes: React.FC<{
  taskId: number;
  notes: API.TaskNote[];
  onAdded?: () => void;
  onRemoved?: () => void;
  onEdited?: () => void;
}> = ({ notes, onAdded, onRemoved, onEdited, taskId }) => {
  const [newNoteValue, setNewNoteValue] = useState('');
  const [loading, setLoading] = useState(false);

  const onNew = useCallback(() => {
    setLoading(true);
    createTaskNote({
      task_id: taskId,
      note: newNoteValue,
    })
      .catch((err) => console.log('err', err))
      .then(() => {
        setNewNoteValue('');
        if (onAdded) {
          onAdded();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [newNoteValue, taskId]);
  return (
    <div>
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={[...notes, 0]}
        renderItem={(item) => {
          if (Number.isInteger(item)) {
            return (
              <List.Item
                actions={[
                  <Button
                    key={'new'}
                    size="small"
                    type="primary"
                    onClick={() => {
                      onNew();
                    }}
                  >
                    <FormattedMessage id="Notes.create_note" defaultMessage="Create Note" />
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Fragment>
                      <FormattedMessage id="Notes.new_note" defaultMessage="New note" />
                    </Fragment>
                  }
                  description={
                    <Input.TextArea
                      value={newNoteValue}
                      onChange={(e) => setNewNoteValue(e.target.value)}
                    />
                  }
                />
              </List.Item>
            );
          }
          return (
            typeof item === 'object' && (
              <TaskNoteItemList
                taskId={taskId}
                note={item}
                onRemoved={() => onRemoved && onRemoved()}
                onEdited={() => onEdited && onEdited()}
              />
            )
          );
        }}
      />
    </div>
  );
};
