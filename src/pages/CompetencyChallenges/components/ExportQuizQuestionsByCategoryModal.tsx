import ProForm, { ModalForm } from '@ant-design/pro-form';
import React, { useCallback } from 'react';
import { FormattedMessage } from 'umi';

import { exportQuizQuestions } from '@/services/escola-lms/gift_quiz';
import { CompetencyChallengeCategoryTree } from './CompetencyChallengeCategoryTree';

interface FormData {
  category_ids: number[];
}
interface Props {
  quiz_id: number;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
}

export const ExportQuizQuestionsByCategoryModal: React.FC<Props> = ({
  quiz_id,
  visible,
  onVisibleChange,
}) => {
  const [form] = ProForm.useForm<FormData>();

  const onFormSubmit = useCallback(
    async ({ category_ids }: FormData) => {
      try {
        const response = await exportQuizQuestions({ quiz_id, category_ids });
        if (response instanceof Blob) {
          const downloadLink = document.createElement('a');

          downloadLink.href = window.URL.createObjectURL(response);
          downloadLink.download = `quiz_${quiz_id}_questions_by_category_id.xlsx`;
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

  return (
    <ModalForm
      title={<FormattedMessage id="exportQuestions" />}
      form={form}
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFormSubmit}
    >
      <ProForm.Item
        name="category_ids"
        label={<FormattedMessage id="categories" />}
        required
        rules={[{ required: true, message: <FormattedMessage id="field_required" /> }]}
      >
        <CompetencyChallengeCategoryTree multiple type="question" />
      </ProForm.Item>
    </ModalForm>
  );
};
