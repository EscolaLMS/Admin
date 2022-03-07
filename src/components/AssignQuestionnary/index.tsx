import type { ModelTypes } from '@/pages/Questionnaire/form';
import { questionnaire } from '@/services/escola-lms/questionnaire';

import { FormattedMessage } from 'umi';
import ProForm from '@ant-design/pro-form';
import QuestionnaireSelect from '../QuestionnairesSelect';

const AssignQuestionnary: React.FC<{ modelType: ModelTypes; id: number }> = ({ modelType, id }) => {
  return (
    <div>
      <ProForm
        onFinish={async (values: Record<string, number[]>) => {
          const formatData = values.questionnaires.map((value) => ({
            model_id: value,
            model_type_id: modelType,
          }));
          console.log(formatData);
        }}
        request={() => {
          return questionnaire().then((response) => {
            if (response.success) {
              return {
                questionnaires: response.data
                  .filter((q) => q.models?.some((quest) => quest.model_id === id))
                  .map((q) => q.id),
              };
            }
            return {
              questionnaires: [],
            };
          });
        }}
      >
        <ProForm.Item
          valuePropName="value"
          name="questionnaires"
          label={<FormattedMessage id="users" defaultMessage="Users" />}
        >
          <QuestionnaireSelect multiple />
        </ProForm.Item>
      </ProForm>
    </div>
  );
};

export default AssignQuestionnary;
