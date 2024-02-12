import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Modal, Form, Input, Button, List, Space, Typography } from 'antd';
import {
  bookmarkNote,
  createBookmarkNote,
  updateBookmarkNote,
  deleteBookmarkNote,
} from '@/services/escola-lms/bookmark_notes';
import { BookmarkableType } from '@/services/escola-lms/enums';
import { FormattedMessage } from 'umi';

interface UserProps {
  name: string;
  userId: number;
  groupId: number;
}

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  user: UserProps;
}

interface EditingNote {
  currentNoteId?: number;
  currentText: string;
}

interface NotePagination {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
}

const BookmarkNoteModal: FC<ModalProps> = ({ visible, onClose, user }) => {
  const { Text } = Typography;
  const { name, groupId, userId } = user;
  const [noteText, setNoteText] = useState('');
  const [newNote, setNewNote] = useState(false);
  const [notes, setNotes] = useState<API.BookmarkNote[]>([]);
  const [editingNote, setEditingNote] = useState<EditingNote | null>(null);
  const [pagination, setPagination] = useState<NotePagination>({
    current_page: 1,
    per_page: 5,
    last_page: 1,
    total: 0,
  });

  const getNotes = async (page?: number) => {
    const response = await bookmarkNote({
      bookmarkable_id: groupId,
      bookmarkable_type: BookmarkableType.Group,
      user_id: userId,
      page,
      per_page: pagination.per_page,
    });
    if (response.success) {
      setNotes(response.data);
      setPagination(response.meta);
    }
  };

  const handleSaveNote = async () => {
    const response = await createBookmarkNote({
      value: noteText,
      bookmarkable_id: groupId,
      bookmarkable_type: BookmarkableType.Group,
      user_id: userId,
    });
    if (response.success) {
      getNotes();
      setNewNote(false);
      setNoteText('');
    }
  };

  const handleDeleteNote = async (noteId: number) => {
    const response = await deleteBookmarkNote(noteId);

    if (response.success) {
      getNotes();
    }
  };

  const handleEditNote = async (noteId: number) => {
    const response = await updateBookmarkNote(noteId, {
      value: editingNote?.currentText || '',
      bookmarkable_id: groupId,
      bookmarkable_type: BookmarkableType.Group,
      user_id: userId,
    });

    if (response.success) {
      getNotes();
      setEditingNote(null);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <Modal
      title={
        <Space>
          <FormattedMessage id="notes" />
          <Text>{`(${name})`}</Text>
        </Space>
      }
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          <FormattedMessage id="cancel" />
        </Button>,
      ]}
    >
      <List
        dataSource={notes}
        pagination={{
          onChange: (page) => getNotes(page),
          pageSize: pagination.per_page,
          total: pagination.total,
          current: pagination.current_page,
        }}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button key={item.id} danger onClick={() => handleDeleteNote(item.id)}>
                <FormattedMessage id="delete" />
              </Button>,
              editingNote?.currentNoteId === item.id ? (
                <Space>
                  <Button onClick={() => handleEditNote(item.id)}>
                    <FormattedMessage id="save" />
                  </Button>

                  <Button onClick={() => setEditingNote(null)}>
                    <FormattedMessage id="cancel" />
                  </Button>
                </Space>
              ) : (
                <Button
                  key={item.id}
                  onClick={() =>
                    setEditingNote({ currentNoteId: item.id, currentText: item.value || '' })
                  }
                >
                  <FormattedMessage id="edit" />
                </Button>
              ),
            ]}
          >
            {editingNote?.currentNoteId === item.id && editingNote?.currentText !== null ? (
              <Input.TextArea
                value={editingNote?.currentText}
                onChange={(e) =>
                  setEditingNote((prev) => ({
                    ...prev,
                    currentText: e.target.value,
                  }))
                }
              />
            ) : (
              item.value
            )}
          </List.Item>
        )}
      />

      {newNote ? (
        <>
          <Form layout="vertical">
            <Form.Item label={<FormattedMessage id="new_note" />}>
              <Input.TextArea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </Form.Item>
          </Form>
          <Space>
            <Button type="primary" onClick={handleSaveNote}>
              <FormattedMessage id="save" />
            </Button>
            <Button type="primary" onClick={() => setNewNote(false)}>
              <FormattedMessage id="cancel" />
            </Button>
          </Space>
        </>
      ) : (
        <Button key="new" type="primary" onClick={() => setNewNote(true)}>
          <FormattedMessage id="add_note" />
        </Button>
      )}
    </Modal>
  );
};

export default BookmarkNoteModal;
