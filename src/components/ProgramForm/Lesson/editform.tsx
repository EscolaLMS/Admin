import React from 'react';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import type { FormLayout } from 'antd/lib/form/Form.js';
import { useIntl, FormattedMessage } from 'umi';

export const LessonEditForm: React.FC<{
  lesson: API.Lesson;
  onInputChange: (value: any) => void;
  layout?: FormLayout;
}> = ({ lesson, onInputChange, layout = 'horizontal' }) => {
  const intl = useIntl();
  return (
    <Form name="basic" layout={layout} initialValues={lesson}>
      <Form.Item
        label={<FormattedMessage id="title" />}
        name="title"
        rules={[
          () => ({
            validator(_, value) {
              if (value.length <= 100) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(`
              ${intl.formatMessage({
                id: 'too_many_chars',
              })}, max 100`),
              );
            },
          }),
        ]}
      >
        <Input type="text" value={lesson.title} onChange={onInputChange} />
      </Form.Item>
    </Form>
  );
};

export default LessonEditForm;
