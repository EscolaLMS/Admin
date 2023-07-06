import ProFormImageUpload from '@/components/ProFormImageUpload';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { FormattedMessage, useIntl } from '@@/plugin-locale/localeExports';
import ProForm, { ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import React from 'react';

interface Props {
  competency_challenge_id: number;
  data?: API.CompetencyChallenge;
}

export const MainForm: React.FC<Props> = ({ data, competency_challenge_id }) => {
  const intl = useIntl();
  const [form] = ProForm.useForm();

  const isNew = Number.isNaN(competency_challenge_id);

  return (
    <ProForm form={form} initialValues={data} onFinish={async (values) => console.log(values)}>
      <ProForm.Group title={<FormattedMessage id="CompetencyChallenges.base" />}>
        <ProFormText
          width="lg"
          name="name"
          label={<FormattedMessage id="name" />}
          placeholder={intl.formatMessage({ id: 'name' })}
          required
          rules={[{ required: true, message: intl.formatMessage({ id: 'field_required' }) }]}
        />
        <ProFormSwitch name="is_active" label={<FormattedMessage id="is_active" />} />
      </ProForm.Group>
      {!isNew && (
        <>
          <ProForm.Group title={<FormattedMessage id="CompetencyChallenges.additional" />}>
            <ProForm.Item
              name="description"
              label={<FormattedMessage id="description" />}
              valuePropName="value"
              style={{
                width: 697,
              }}
            >
              <WysiwygMarkdown directory={`competency-challenges/${competency_challenge_id}`} />
            </ProForm.Item>
          </ProForm.Group>
          <ProFormImageUpload
            wrapInForm={false}
            folder={`competency-challenges/${competency_challenge_id}`}
            title="image"
            action={`/api/admin/competency-challenges/${competency_challenge_id}`}
            src_name="image_path"
            form_name="image"
            getUploadedSrcField={(info) => info.file.response.data.image_path}
            setPath={(removedPath) => console.log({ removedPath })}
          />
        </>
      )}
    </ProForm>
  );
};
