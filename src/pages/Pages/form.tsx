import { createPage, page as fetchPage, updatePage } from '@/services/escola-lms/pages';
import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import { Spin, message } from 'antd';
import { useEffect, useMemo, useState } from 'react';

import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { PageContainer } from '@ant-design/pro-layout';

import { slugify } from '@/services/escola-lms/slug';
import { useCallback } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

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
      setData({
        active: false,
      });
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
              rules={[
                {
                  validator: async (_, value) => {
                    if (!value) {
                      return Promise.reject(
                        new Error(
                          intl.formatMessage({
                            id: 'field_required',
                            defaultMessage: 'field_required',
                          }),
                        ),
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            />
            <ProFormText
              width="md"
              name="slug"
              label={<FormattedMessage id="slug" />}
              tooltip={<FormattedMessage id="slug_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'slug',
              })}
              disabled
              required
              rules={[
                {
                  validator: async (_, value) => {
                    if (!value) {
                      return Promise.reject(
                        new Error(
                          intl.formatMessage({
                            id: 'field_required',
                            defaultMessage: 'field_required',
                          }),
                        ),
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            />
            <ProFormSwitch name="active" label={<FormattedMessage id="is_active" />} />
          </ProForm.Group>

          <ProForm.Item
            name="content"
            label={<FormattedMessage id="content" />}
            tooltip={<FormattedMessage id="content_tooltip" />}
            valuePropName="value"
            required
            rules={[
              {
                validator: async (_, value) => {
                  if (!value) {
                    return Promise.reject(
                      new Error(
                        intl.formatMessage({
                          id: 'field_required',
                          defaultMessage: 'field_required',
                        }),
                      ),
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <WysiwygMarkdown directory={`pages/${page}/wysiwyg`} />
          </ProForm.Item>
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
