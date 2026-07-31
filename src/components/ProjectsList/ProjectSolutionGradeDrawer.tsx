import { QuestionCircleOutlined } from '@ant-design/icons';
import { DrawerForm, ProFormDigit } from '@ant-design/pro-form';
import { Space, Tooltip, message } from 'antd';
import React, { useCallback } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { getProjectSolution, gradeProjectSolution } from '@/services/escola-lms/projects';

interface FormData {
  score?: number;
}

interface Props {
  solution?: API.ProjectSolution;
  maxScore?: number;
  onClose?: () => void;
  onSuccess?: () => void;
}

export const ProjectSolutionGradeDrawer: React.FC<Props> = ({
  solution,
  maxScore,
  onClose,
  onSuccess,
}) => {
  const intl = useIntl();

  // Max score is fixed by the project topic (not editable here); shown next to the score input.
  const effectiveMaxScore = maxScore ?? solution?.max_score ?? undefined;

  const onFinish = useCallback(
    async (formData: FormData) => {
      if (solution?.id === undefined || formData.score == null || effectiveMaxScore == null) return;

      const res = await gradeProjectSolution(solution.id, {
        score: Number(formData.score),
        max_score: Number(effectiveMaxScore),
      });

      if (!res.success) {
        message.error(intl.formatMessage({ id: 'error', defaultMessage: 'error' }));
        return;
      }

      message.success(intl.formatMessage({ id: 'success', defaultMessage: 'success' }));
      onSuccess?.();
    },
    [solution?.id, effectiveMaxScore, intl, onSuccess],
  );

  return (
    <DrawerForm<FormData>
      visible={!!solution}
      params={{ id: solution?.id }}
      request={async ({ id }) => {
        if (id === undefined) return { score: undefined };
        const res = await getProjectSolution(id);
        const data = res.success ? res.data : solution;
        return { score: data?.score ?? undefined };
      }}
      onVisibleChange={(visible) => !visible && onClose?.()}
      onFinish={onFinish}
      title={<FormattedMessage id="grade_project_solution" defaultMessage="Grade project" />}
      drawerProps={{
        width: 478,
        destroyOnClose: true,
      }}
    >
      <ProFormDigit
        name="score"
        label={<FormattedMessage id="score" defaultMessage="Score" />}
        min={0}
        fieldProps={{
          precision: 2,
          style: { width: '100%' },
          // The score is the only editable value; the max score is shown as a read-only
          // suffix with a helper icon explaining where it comes from.
          addonAfter: (
            <Space size={4}>
              <span>/ {effectiveMaxScore ?? '—'}</span>
              <Tooltip
                title={
                  <FormattedMessage
                    id="max_score_set_on_project"
                    defaultMessage="Max score is set on the project topic and cannot be changed here."
                  />
                }
              >
                <QuestionCircleOutlined />
              </Tooltip>
            </Space>
          ),
        }}
        rules={[
          {
            required: true,
            message: <FormattedMessage id="field_required" defaultMessage="Field is required" />,
          },
          {
            validator: (_rule, value) => {
              if (value == null) return Promise.resolve();
              if (value < 0)
                return Promise.reject(
                  new Error(
                    intl.formatMessage({
                      id: 'score_must_be_positive',
                      defaultMessage: 'Score must be 0 or greater.',
                    }),
                  ),
                );
              if (effectiveMaxScore != null && value > effectiveMaxScore)
                return Promise.reject(
                  new Error(
                    intl.formatMessage({
                      id: 'score_must_not_exceed_max',
                      defaultMessage: 'Score cannot exceed max score.',
                    }),
                  ),
                );
              return Promise.resolve();
            },
          },
        ]}
      />
    </DrawerForm>
  );
};

export default ProjectSolutionGradeDrawer;
