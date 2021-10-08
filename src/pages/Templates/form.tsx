import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import ProForm, { ProFormText, ProFormSelect } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import {
  template as fetchTemplate,
  updateTemplate,
  createTemplate,
} from '@/services/escola-lms/templates';
import { PageContainer } from '@ant-design/pro-layout';

import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import TemplateEditor from '@/components/TemplateEditor';
import { FilePdfFilled } from '@ant-design/icons';
import AuthenticatedLinkButton from '@/components/AuthenticatedLinkButton';
import { variables as fetchVariables } from '@/services/escola-lms/templates';

export default () => {
  const intl = useIntl();
  const params = useParams<{ template?: string }>();
  const { template } = params;
  const isNew = template === 'new';

  const [data, setData] = useState<Partial<API.Template>>();
  const [saved, setSaved] = useState<boolean>(false);

  const [form] = ProForm.useForm();

  const [variables, setVariables] = useState<API.TemplateVariables>();

  useEffect(() => {
    fetchVariables().then((response) => setVariables(response.success ? response.data : {}));
  }, []);

  const fetchData = useCallback(async () => {
    const response = await fetchTemplate(Number(template));
    if (response.success) {
      setData({
        ...response.data,
        content: response.data.content || '',
      });
      setSaved(true);
    }
  }, [template]);

  useEffect(() => {
    if (template === 'new') {
      setData({});
      return;
    }

    fetchData();
  }, [template, fetchData]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: Partial<API.Template>) => {
        let response: API.DefaultResponse<API.Template>;
        const postData: Partial<API.Template> = {
          ...values,
        };

        if (template === 'new') {
          response = await createTemplate(postData);
          if (response.success) {
            history.push(`/templates/${response.data.id}`);
          }
        } else {
          response = await updateTemplate(Number(template), postData);
        }
        setSaved(true);
        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, template],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        isNew ? <FormattedMessage id="new_template" /> : <FormattedMessage id="new_template" />
      }
    >
      <ProCard>
        <ProForm
          {...formProps}
          form={form}
          onValuesChange={(values) => {
            if (values.content) {
              setSaved(false);
            }
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label={<FormattedMessage id="name" />}
              tooltip={<FormattedMessage id="name_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'name',
              })}
              required
            />
            <ProFormSelect
              name="select"
              label="Select"
              valueEnum={{ pdf: 'pdf', email: 'email' }}
              placeholder="Please select a country"
              rules={[{ required: true, message: 'Please select your country!' }]}
            />

            <ProFormText
              width="sm"
              name="vars_set"
              initialValue="certificates"
              label={<FormattedMessage id="vars_set" />}
              tooltip={<FormattedMessage id="vars_set_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'vars_set',
              })}
              disabled
              required
            />
            <ProForm.Item label={<FormattedMessage id="preview" />}>
              <AuthenticatedLinkButton
                url={`/api/admin/templates/${template}/preview`}
                filename="preview.pdf"
                type="primary"
                disabled={!saved}
                icon={<FilePdfFilled />}
              >
                <FormattedMessage id="preview_pdf" />
              </AuthenticatedLinkButton>
            </ProForm.Item>
          </ProForm.Group>

          <ProForm.Item
            name="content"
            label={<FormattedMessage id="content" />}
            tooltip={<FormattedMessage id="content_tooltip" />}
            valuePropName="value"
            required
          >
            <TemplateEditor />
          </ProForm.Item>
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
