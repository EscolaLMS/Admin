import { DrawerForm, ProFormTextArea } from '@ant-design/pro-form';
import { Button, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { getProjectSolution, updateProjectSolutionFeedback } from '@/services/escola-lms/projects';
import { TUTOR_FEEDBACK_MAX_LENGTH, normalizeTutorFeedback } from '@/utils/utils';

import { notifyResult } from './notify';

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
  const [submitting, setSubmitting] = useState(false);

  const onFinish = useCallback(
    async (formData: FormData) => {
      if (solution?.id === undefined) return;
      const res = await updateProjectSolutionFeedback(solution.id, {
        feedback: normalizeTutorFeedback(formData.tutor_feedback),
      });

      notifyResult(res.success, intl, onSuccess);
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
      onLoadingChange={setSubmitting}
      title={<FormattedMessage id="edit_comment" defaultMessage="Edit comment" />}
      // DrawerForm portals its submitter into the drawer footer, where the floating
      // accessibility widget covers it — render the buttons under the textarea instead.
      submitter={false}
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
      <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onClose} disabled={submitting}>
          <FormattedMessage id="cancel" defaultMessage="Cancel" />
        </Button>
        <Button type="primary" htmlType="submit" loading={submitting}>
          <FormattedMessage id="ok" defaultMessage="OK" />
        </Button>
      </Space>
    </DrawerForm>
  );
};

export default ProjectSolutionFeedbackDrawer;
