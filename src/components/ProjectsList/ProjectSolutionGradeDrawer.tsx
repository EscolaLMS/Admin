import { QuestionCircleOutlined } from '@ant-design/icons';
import { DrawerForm, ProFormDigit } from '@ant-design/pro-form';
import { Space, Tooltip } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';

import {
  ProjectSolutionGradeFormData,
  useProjectSolutionGrade,
} from './useProjectSolutionGrade';

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
  const { effectiveMaxScore, minScore, loadInitial, onFinish, scoreRules } =
    useProjectSolutionGrade({ solution, maxScore, onSuccess });

  return (
    <DrawerForm<ProjectSolutionGradeFormData>
      visible={!!solution}
      params={{ id: solution?.id }}
      request={loadInitial}
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
        min={minScore}
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
        rules={scoreRules}
      />
    </DrawerForm>
  );
};

export default ProjectSolutionGradeDrawer;