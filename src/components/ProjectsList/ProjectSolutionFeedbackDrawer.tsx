import { DrawerForm, ProFormTextArea } from '@ant-design/pro-form';
import { message } from 'antd';
import React, { useCallback } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { getProjectSolution, updateProjectSolutionFeedback } from '@/services/escola-lms/projects';
import { TUTOR_FEEDBACK_MAX_LENGTH, normalizeTutorFeedback } from '@/utils/utils';

interface FormData {
  tutor_feedback: string;
}

interface Props {
  solution?: API.ProjectSolution;
  onClose?: () => void;
  onSuccess?: () => void;
}

export const ProjectSolutionFeedbackDrawer: React.FC<Props> = ({
  solution,
  onClose,
  onSuccess,
}) => {
  const intl = useIntl();

  const onFinish = useCallback(
    async (formData: FormData) => {
      if (solution?.id === undefined) return;
      const res = await updateProjectSolutionFeedback(solution.id, {
        feedback: normalizeTutorFeedback(formData.tutor_feedback),
      });

      if (!res.success) {
        message.error(intl.formatMessage({ id: 'error', defaultMessage: 'error' }));
        return;
      }

      message.success(intl.formatMessage({ id: 'success', defaultMessage: 'success' }));
      onSuccess?.();
    },
    [solution?.id, intl, onSuccess],
  );

  return (
    <DrawerForm<FormData>
      visible={!!solution}
      params={{ id: solution?.id }}
      request={async ({ id }) => {
        if (id === undefined) return { tutor_feedback: '' };
        const res = await getProjectSolution(id);
        const tutor_feedback =
          (res.success ? res.data?.tutor_feedback : solution?.tutor_feedback) ?? '';
        return { tutor_feedback };
      }}
      onVisibleChange={(visible) => !visible && onClose?.()}
      onFinish={onFinish}
      title={<FormattedMessage id="edit_comment" defaultMessage="Edit comment" />}
      drawerProps={{
        width: 478,
        destroyOnClose: true,
      }}
    >
      <ProFormTextArea
        name="tutor_feedback"
        label={<FormattedMessage id="tutor_feedback" defaultMessage="Lecturer comment" />}
        fieldProps={{
          maxLength: TUTOR_FEEDBACK_MAX_LENGTH,
          showCount: true,
          autoSize: { minRows: 4, maxRows: 10 },
        }}
        placeholder={intl.formatMessage({
          id: 'tutor_feedback',
          defaultMessage: 'Lecturer comment',
        })}
      />
    </DrawerForm>
  );
};

export default ProjectSolutionFeedbackDrawer;
