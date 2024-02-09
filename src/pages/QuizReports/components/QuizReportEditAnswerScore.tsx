import { DrawerForm, ProFormText } from '@ant-design/pro-form';
import React, { useCallback, useMemo } from 'react';
import { FormattedMessage } from 'umi';

import { updateQuizAnswer } from '@/services/escola-lms/gift_quiz';

interface FormData {
  score: number;
}

interface Props {
  answer?: API.AttemptAnswer;
  onClose?: () => void;
  onSuccess?: (data: API.AttemptAnswer) => void;
  onError?: (error: unknown) => void;
}

export const QuizReportEditAnswerScore: React.FC<Props> = ({
  answer,
  onClose,
  onSuccess,
  onError,
}) => {
  const onFinish = useCallback(
    async (formData: FormData) => {
      if (answer?.id === undefined) return;
      try {
        const res = await updateQuizAnswer(answer.id, formData);

        if (!res.success) {
          onError?.(res.errors);
          return;
        }

        onSuccess?.(res.data);
      } catch (e) {
        onError?.(e);
      }
    },
    [answer?.id],
  );

  const initialValues: Partial<FormData> = useMemo(
    () => ({ score: answer?.score }),
    [answer?.score],
  );

  return (
    <DrawerForm<FormData>
      visible={!!answer}
      initialValues={initialValues}
      onVisibleChange={(visible) => !visible && onClose?.()}
      onFinish={onFinish}
      title={<FormattedMessage id="edit_score" />}
      drawerProps={{
        width: 378,
        destroyOnClose: true,
      }}
    >
      <ProFormText
        name="score"
        label={<FormattedMessage id="student_score" />}
        required
        rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
      />
    </DrawerForm>
  );
};
