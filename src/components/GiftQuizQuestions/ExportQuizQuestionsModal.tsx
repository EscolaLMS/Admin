import React, { useCallback, useMemo } from 'react';
import { parse } from '@escolalms/gift-pegjs';
import { FormattedMessage, useIntl } from 'umi';
import ProForm, { ModalForm, ProFormSelect } from '@ant-design/pro-form';

import { exportQuizQuestions } from '@/services/escola-lms/gift_quiz';

interface FormData {
  ids: number[];
}
interface Props {
  quiz_id: number;
  quizQuestions: API.QuizQuestion[];
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
}

export const ExportQuizQuestionsModal: React.FC<Props> = ({
  quiz_id,
  quizQuestions,
  visible,
  onVisibleChange,
}) => {
  const [form] = ProForm.useForm<FormData>();
  const intl = useIntl();

  const onFormSubmit = useCallback(
    async ({ ids }: FormData) => {
      try {
        const response = await exportQuizQuestions({ quiz_id, ids });
        if (response instanceof Blob) {
          const downloadLink = document.createElement('a');

          downloadLink.href = window.URL.createObjectURL(response);
          downloadLink.download = `quiz_questions_${quiz_id}.xlsx`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      } catch (e) {
        console.error(e);
      } finally {
        onVisibleChange(false);
      }
    },
    [quiz_id],
  );

  const questionsOptions = useMemo(
    () =>
      quizQuestions.map(({ id, value }) => {
        const giftQuestionArr = parse(value);

        if (!giftQuestionArr?.[0] || !('stem' in giftQuestionArr[0])) {
          return {
            value: id,
            label: intl.formatMessage({ id: 'ExportQuestions.questionTitle' }, { id }),
          };
        }

        const label = giftQuestionArr[0].stem.text;
        return { value: id, label };
      }),
    [quizQuestions],
  );

  return (
    <ModalForm
      title={<FormattedMessage id="exportQuestions" />}
      form={form}
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFormSubmit}
    >
      <ProFormSelect
        mode="multiple"
        options={questionsOptions}
        name="ids"
        label={<FormattedMessage id="questions" />}
        required
        rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
      />
    </ModalForm>
  );
};
