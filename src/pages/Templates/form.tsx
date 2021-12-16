import React, { useState, useEffect } from 'react';
import { Alert, Button, Divider, message, Space, Tag, Typography } from 'antd';
import ProForm, { ProFormText, ProFormSelect } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import {
  template as fetchTemplate,
  updateTemplate,
  createTemplate,
  preview as previewTemplate,
} from '@/services/escola-lms/templates';
import { PageContainer } from '@ant-design/pro-layout';

import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import TemplateFields from '@/components/TemplateFields';
import { variables as fetchVariables } from '@/services/escola-lms/templates';

const objectToKeysDict = (obj: object): Record<string, string> =>
  obj ? Object.keys(obj).reduce((acc, curr) => ({ ...acc, [curr]: curr }), {}) : {};

const createEntries = (data: object) => {
  return Object.entries(data).map((entry) => {
    return {
      key: entry[0],
      content: entry[1],
    };
  });
};

type PreviewButtonState =
  | {
      state: 'ready';
    }
  | {
      state: 'loading';
    }
  | {
      state: 'loaded';
      data: Record<string, string>;
      message: React.ReactNode;
    }
  | {
      state: 'error';
      error: string;
    };

type Tokens = {
  assignableClass: string | null;
  class: string;
  required_variables: string[];
  variables: string[];
  sections: {
    [key: string]: API.TemplateField;
  };
};

const PreviewButton: React.FC<{ disabled: boolean; id: number }> = ({ disabled = false, id }) => {
  const [state, setState] = useState<PreviewButtonState>({ state: 'ready' });

  const onClick = useCallback(() => {
    setState({ state: 'loading' });
    previewTemplate(id)
      .then((data) => {
        if (data.success) {
          if (data.data.sent && data.data.to) {
            setState({
              state: 'loaded',
              data: data.data,
              message: `email sent to ${data.data.to}`,
            });
          } else if (data.data.url) {
            setState({
              state: 'loaded',
              data: data.data,
              message: (
                <React.Fragment>
                  Download{' '}
                  <a target="_blank" href={data.data.url}>
                    {data.data.filename}
                  </a>
                </React.Fragment>
              ),
            });
          } else {
            setState({ state: 'loaded', data: data.data, message: data.message });
          }
        } else {
          setState({ state: 'error', error: data.message });
        }
      })
      .catch(() => {
        setState({ state: 'error', error: 'error' });
      });
  }, [id]);
  return (
    <React.Fragment>
      <Button
        type="primary"
        loading={state.state === 'loading'}
        disabled={disabled}
        onClick={onClick}
      >
        <FormattedMessage id="preview" />
      </Button>
      {state.state === 'loaded' && (
        <Alert
          message={state.message}
          type="success"
          closable
          onClose={() => setState({ state: 'ready' })}
        ></Alert>
      )}
      {state.state === 'error' && (
        <Alert
          message={state.error}
          type="error"
          closable
          onClose={() => setState({ state: 'ready' })}
        ></Alert>
      )}
    </React.Fragment>
  );
};

export default () => {
  const intl = useIntl();
  const params = useParams<{ template?: string }>();
  const { template } = params;
  const isNew = template === 'new';

  const [saved, setSaved] = useState<boolean>(false);
  const [form] = ProForm.useForm();
  const [variables, setVariables] = useState<API.TemplateVariables>();

  useEffect(() => {
    fetchVariables().then((response) => {
      setVariables(response.success ? response.data : {});
    });
  }, []);

  const fetchData = useCallback(async () => {
    const response = await fetchTemplate(Number(template));
    if (response.success) {
      const map =
        response.data.sections &&
        response.data.sections.map((item) => {
          return {
            [item.key]: item.content,
          };
        });
      const obj = Object.assign({}, ...map);

      form.setFieldsValue({
        ...response.data,
        ...obj,
      });
      setSaved(true);
    }
  }, [template, variables]);

  useEffect(() => {
    if (template === 'new') {
      return;
    }

    fetchData();
  }, [template]);

  const onFormFinish = useCallback(
    async (values: Partial<API.Template>) => {
      let response: API.DefaultResponse<API.Template>;

      const notAllowed = ['name', 'event', 'channel'];

      const filtered = Object.keys(values)
        .filter((key) => !notAllowed.includes(key))
        .reduce((obj, key) => {
          obj[key] = values[key];
          return obj;
        }, {});

      const postData: Partial<API.Template> = {
        ...values,
        // TODO:error in validation? no need this type filed on backend
        type: values.event,
        sections: createEntries(filtered),
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
    [variables, template],
  );

  return (
    <PageContainer
      title={
        isNew ? <FormattedMessage id="new_template" /> : <FormattedMessage id="new_template" />
      }
    >
      <ProCard size="small">
        <ProForm
          initialValues={{}}
          onFinish={onFormFinish}
          form={form}
          onValuesChange={() => {
            setSaved(false);
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
              name="event"
              label={<FormattedMessage id="tpl_type" />}
              tooltip={<FormattedMessage id="tpl_type_tooltip" />}
              valueEnum={variables ? objectToKeysDict(variables) : {}}
              placeholder={intl.formatMessage({
                id: 'tpl_type_placeholder',
              })}
              rules={[{ required: true, message: 'Please select your country!' }]}
            />

            <ProForm.Item noStyle shouldUpdate>
              {(theForm) => {
                return (
                  <ProFormSelect
                    name="channel"
                    label={<FormattedMessage id="tpl_vars_set" />}
                    tooltip={<FormattedMessage id="tpl_vars_set_tooltip" />}
                    valueEnum={
                      variables ? objectToKeysDict(variables[theForm.getFieldValue('event')]) : {}
                    }
                    placeholder={intl.formatMessage({
                      id: 'tpl_vars_set_placeholder',
                    })}
                    rules={[{ required: true, message: 'Please select your country!' }]}
                  />
                );
              }}
            </ProForm.Item>

            {!isNew && (
              <ProForm.Item label={<FormattedMessage id="preview" />}>
                <PreviewButton disabled={!saved} id={Number(template)} />
              </ProForm.Item>
            )}
          </ProForm.Group>

          <ProForm.Item noStyle shouldUpdate>
            {(theForm) => {
              const tokens: Tokens =
                variables &&
                theForm.getFieldValue('event') &&
                theForm.getFieldValue('channel') &&
                variables[theForm.getFieldValue('event')][theForm.getFieldValue('channel')];

              return (
                tokens &&
                tokens.sections &&
                Object.keys(tokens.sections).map((section, index) => {
                  console.log(section, index);
                  const fieldItem = tokens.sections && tokens.sections[section];

                  return (
                    <React.Fragment>
                      {index === 0 && (
                        <React.Fragment>
                          <Divider>
                            <FormattedMessage id="tokens" defaultMessage="posibble variables:" />
                          </Divider>
                          <Space>
                            <Typography>
                              {tokens.variables.map((token) => (
                                <Tag color="orange" key={token}>
                                  {token}
                                </Tag>
                              ))}
                            </Typography>
                          </Space>
                        </React.Fragment>
                      )}
                      <Divider />
                      <TemplateFields name={section} field={fieldItem} />
                    </React.Fragment>
                  );
                })
              );
            }}
          </ProForm.Item>
          <Divider />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
