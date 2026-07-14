import { EditOutlined } from '@ant-design/icons';
import { Button, Input, Space, Typography, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { TUTOR_FEEDBACK_MAX_LENGTH, normalizeTutorFeedback } from '@/utils/utils';

interface Props {
  value?: string | null;
  editable?: boolean;
  onSave: (value: string | null) => Promise<boolean>;
}

const TutorFeedback: React.FC<Props> = ({ value, editable = false, onSave }) => {
  const intl = useIntl();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value ?? '');
  const [submitting, setSubmitting] = useState(false);

  const startEditing = useCallback(() => {
    setText(value ?? '');
    setEditing(true);
  }, [value]);

  const handleSave = useCallback(async () => {
    setSubmitting(true);
    try {
      const success = await onSave(normalizeTutorFeedback(text));
      if (success) {
        message.success(intl.formatMessage({ id: 'success', defaultMessage: 'success' }));
        setEditing(false);
      } else {
        message.error(intl.formatMessage({ id: 'error', defaultMessage: 'error' }));
      }
    } catch {
      // Thrown request errors are surfaced globally by the request errorHandler in app.tsx
    } finally {
      setSubmitting(false);
    }
  }, [intl, onSave, text]);

  if (editing) {
    return (
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input.TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoSize={{ minRows: 3, maxRows: 8 }}
          maxLength={TUTOR_FEEDBACK_MAX_LENGTH}
          showCount
          disabled={submitting}
          placeholder={intl.formatMessage({
            id: 'tutor_feedback',
            defaultMessage: 'Lecturer comment',
          })}
        />
        <Space>
          <Button type="primary" loading={submitting} onClick={handleSave}>
            <FormattedMessage id="save" defaultMessage="Save" />
          </Button>
          <Button disabled={submitting} onClick={() => setEditing(false)}>
            <FormattedMessage id="cancel" defaultMessage="Cancel" />
          </Button>
        </Space>
      </Space>
    );
  }

  const hasComment = !!(value && value.trim().length);

  return (
    <Space align="start" style={{ width: '100%', justifyContent: 'space-between' }}>
      {hasComment ? (
        <Typography.Text style={{ whiteSpace: 'pre-wrap' }}>{value}</Typography.Text>
      ) : (
        <Typography.Text type="secondary">
          <FormattedMessage id="no_comment" defaultMessage="No comment" />
        </Typography.Text>
      )}
      {editable && (
        <Button size="small" icon={<EditOutlined />} onClick={startEditing}>
          {hasComment ? (
            <FormattedMessage id="edit_comment" defaultMessage="Edit comment" />
          ) : (
            <FormattedMessage id="add_comment" defaultMessage="Add comment" />
          )}
        </Button>
      )}
    </Space>
  );
};

export default TutorFeedback;
