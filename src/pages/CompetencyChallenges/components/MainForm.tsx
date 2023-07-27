import React, { useCallback, useMemo } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';
import { message } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';

import UserSelect from '@/components/UserSelect';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import {
  createCompetencyChallenge,
  updateCompetencyChallenge,
} from '@/services/escola-lms/competency-challenges';
import { CompetencyChallengeType } from '@/services/escola-lms/enums';
import { useCompetencyChallengeContext } from '../context';

const typeOptions = Object.values(CompetencyChallengeType).map((value) => ({
  value,
  label: <FormattedMessage id={`CompetencyChallenges.types.${value}`} />,
}));

export const MainForm: React.FC = () => {
  const { competencyChallenge, refreshData } = useCompetencyChallengeContext();
  const params = useParams<{ id?: string }>();
  const competency_challenge_id = Number(params.id);

  const intl = useIntl();
  const [form] = ProForm.useForm();

  const isNew = Number.isNaN(competencyChallenge);

  const initialValues = useMemo(() => {
    if (!competencyChallenge?.data) return {};
    const { authors, ...restValues } = competencyChallenge?.data;

    return { ...restValues, authors: authors.map(({ id }) => id) };
  }, [competencyChallenge?.data]);

  const addCompetencyChallenge = useCallback(
    async ({ name, type, is_active = false }: API.CreateCompetencyChallenge) => {
      try {
        const res = await createCompetencyChallenge({ name, is_active, type });

        if (!res.success) {
          message.error(res.message);
          return;
        }

        message.success(intl.formatMessage({ id: res.message }));
        history.push(`/competency-challenges/${res.data.id}/main`);
        await refreshData();
      } catch {
        message.error(intl.formatMessage({ id: 'error' }));
      }
    },
    [],
  );

  const changeCompetencyChallenge = useCallback(
    async (formValues: API.UpdateCompetencyChallenge) => {
      try {
        // those values don't have inputs, so we have to do it manually
        const { image_url, image_path }: { image_url: string; image_path: string } =
          form.getFieldsValue(['image_url', 'image_path']);

        const res = await updateCompetencyChallenge(competency_challenge_id, {
          ...formValues,
          image_url,
          image_path,
        });

        if (!res.success) {
          message.error(res.message);
          return;
        }

        message.success(intl.formatMessage({ id: res.message }));
        await refreshData();
      } catch {
        message.error(intl.formatMessage({ id: 'error' }));
      }
    },
    [competency_challenge_id],
  );

  return (
    <ProForm
      form={form}
      initialValues={initialValues}
      onFinish={isNew ? addCompetencyChallenge : changeCompetencyChallenge}
    >
      <ProForm.Group title={<FormattedMessage id="CompetencyChallenges.base" />}>
        <ProFormText
          width="md"
          name="name"
          label={<FormattedMessage id="name" />}
          placeholder={intl.formatMessage({ id: 'name' })}
          required
          rules={[{ required: true, message: intl.formatMessage({ id: 'field_required' }) }]}
        />
        <ProFormSelect
          width="md"
          name="type"
          label={<FormattedMessage id="type" />}
          options={typeOptions}
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
                width: 440,
              }}
            >
              <WysiwygMarkdown directory={`competency-challenges/${competency_challenge_id}`} />
            </ProForm.Item>
            <ProFormTextArea width="lg" name="summary" label={<FormattedMessage id="summary" />} />
            <ProForm.Item
              name="authors"
              label={<FormattedMessage id="author" />}
              style={{ width: '100%', maxWidth: 440 }}
            >
              <UserSelect multiple />
            </ProForm.Item>
          </ProForm.Group>
          <ProFormImageUpload
            wrapInForm={false}
            folder={`/competency-challenges/${competency_challenge_id}`}
            title="image"
            action={`/api/admin/competency-challenges/${competency_challenge_id}?_method=PATCH`}
            src_name="image_url"
            form_name="image"
            getUploadedSrcField={(info) => info.file.response.data.image_url}
            setPath={(paths) => form.setFieldsValue(paths)}
          />
        </>
      )}
    </ProForm>
  );
};
