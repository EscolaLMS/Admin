import React, { useMemo, useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { page as fetchPage, updatePage, createPage } from '@/services/escola-lms/pages';

import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';

import { useParams, history } from 'umi';
import { useCallback } from 'react';
import { useIntl, FormattedMessage } from 'umi';
import { slugify } from '@/services/escola-lms/slug';

export default () => {
  const intl = useIntl();
  const params = useParams<{ page?: string }>();
  const { page } = params;
  const isNew = page === 'new';

  const [data, setData] = useState<Partial<API.Page>>();
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    const response = await fetchPage(Number(page));
    if (response.success) {
      setData({
        ...response.data,
        content: response.data.content || '',
      });
    }
  }, [page]);

  useEffect(() => {
    if (page === 'new') {
      setData({});
      return;
    }

    fetchData();
  }, [page, fetchData]);

  const formProps = useMemo(
    () => ({
      // @ts-ignore
      onFinish: async (values) => {
        let response: API.DefaultResponse<API.Page>;
        const postData: Partial<API.Page> = {
          ...values,
          bio: values.bio ? values.bio : undefined,
        };

        if (page === 'new') {
          response = await createPage(postData);
          if (response.success) {
            history.push(`/pages/${response.data.id}`);
          }
        } else {
          response = await updatePage(Number(page), postData);
        }

        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, page],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={isNew ? <FormattedMessage id="new_page" /> : <FormattedMessage id="edit_page" />}
    >
      <ProCard>
        <ProForm
          {...formProps}
          form={form}
          onValuesChange={(values) => {
            if (values.title) {
              form.setFieldsValue({ slug: slugify(values.title) });
            }
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="title"
              label={<FormattedMessage id="title" />}
              tooltip={<FormattedMessage id="title" />}
              placeholder={intl.formatMessage({
                id: 'title',
              })}
              required
            />
            <ProFormText
              width="md"
              name="slug"
              label={<FormattedMessage id="slug" />}
              tooltip={<FormattedMessage id="slug_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'slug',
              })}
              required
            />
            <ProFormSwitch name="active" label={<FormattedMessage id="is_active" />} />
          </ProForm.Group>

          <ProForm.Item
            name="content"
            label={<FormattedMessage id="content" />}
            tooltip={<FormattedMessage id="content_tooltip" />}
            valuePropName="value"
          >
            <WysiwygMarkdown directory={`pages/${page}/wysiwyg`} />
          </ProForm.Item>
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
