import React, { useState, useEffect } from 'react';
import { Divider, message, Space, Tag, Typography } from 'antd';
import ProForm, { ProFormText, ProFormSelect, ProFormCheckbox } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import {
  template as fetchTemplate,
  updateTemplate,
  createTemplate,
} from '@/services/escola-lms/templates';
import { PageContainer } from '@ant-design/pro-layout';
import PreviewButton from './components/PreviewButton';
import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import TemplateFields from '@/components/TemplateFields';
import { variables as fetchVariables } from '@/services/escola-lms/templates';

const objectToKeysDict = (obj: object): Record<string, string> =>
  obj ? Object.keys(obj).reduce((acc, curr) => ({ ...acc, [curr]: curr }), {}) : {};

// creates sections collections for post template
const createEntries = (data: object) => {
  return Object.entries(data).map((entry) => {
    return {
      key: entry[0],
      content: entry[1],
    };
  });
};

const objectFlatten = (data: object[]): Record<string, string> => Object.assign({}, ...data);

// helper function that throws away unnecessary keys to create a sections collection
const filterNotAllowedKeys = (values: object) => {
  const notAllowedKeys = ['name', 'event', 'channel', 'default'];
  return Object.keys(values)
    .filter((key) => !notAllowedKeys.includes(key))
    .reduce((obj, key) => {
      obj[key] = values[key];
      return obj;
    }, {});
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

export default () => {
  const intl = useIntl();
  const params = useParams<{ template?: string }>();
  const { template } = params;
  const isNew = template === 'new';

  const [saved, setSaved] = useState<boolean>(false);
  const [form] = ProForm.useForm();
  const [variables, setVariables] = useState<API.TemplateVariables>();
  const [tokens, setTokens] = useState<Tokens | undefined>(undefined);

  useEffect(() => {
    fetchVariables().then((response) => {
      setVariables(response.success ? response.data : {});
    });
  }, []);

  useEffect(() => {
    const values = form.getFieldsValue();

    const defaultValues =
      tokens &&
      Object.keys(tokens.sections).map((section) => {
        return {
          [section]: tokens.sections[section].default_content,
        };
      });

    if (defaultValues && template === 'new') {
      form.setFieldsValue({
        ...values,
        ...objectFlatten(defaultValues),
      });
    }
  }, [tokens]);

  const handleSetTokens = useCallback(
    (event: string, channel: string) => {
      if (event && channel) {
        const _tokens = variables && (variables[event][channel] as unknown);

        setTokens(_tokens as Tokens);
      }
    },
    [variables, template],
  );

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

      const obj = map && objectFlatten(map);

      form.setFieldsValue({
        ...response.data,
        ...obj,
      });
      handleSetTokens(String(response.data.event), String(response.data.channel));
      setSaved(true);
    }
  }, [template, variables]);

  const onFormFinish = useCallback(
    async (values: Partial<API.Template>) => {
      let response: API.DefaultResponse<API.Template>;

      const postData: Partial<API.Template> = {
        ...values,
        sections: createEntries(filterNotAllowedKeys(values)),
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

  useEffect(() => {
    if (template === 'new') {
      return;
    }

    fetchData();
  }, [template, variables]);

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
            const values = form.getFieldsValue();
            handleSetTokens(values.event, values.channel);
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
              rules={[{ required: true, message: 'Please select your country!' }]}
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
            <ProForm.Item label={<FormattedMessage id="set as default" />}>
              <ProFormCheckbox name="default" />
            </ProForm.Item>
            {!isNew && (
              <ProForm.Item label={<FormattedMessage id="preview" />}>
                <PreviewButton disabled={!saved} id={Number(template)} />
              </ProForm.Item>
            )}
          </ProForm.Group>

          {tokens &&
            tokens.sections &&
            Object.keys(tokens.sections).map((section, index) => {
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
            })}
          <Divider />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
