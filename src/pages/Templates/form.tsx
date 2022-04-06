import React, { useState, useEffect } from 'react';
import { Divider, message, Space, Spin, Tag, Typography } from 'antd';
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
import { FabricPreview } from '@/components/FabricEditor/preview';
import PdfList from '@/components/Pdf/list';
import { TemplateChannelValue, TemplateEvents } from '@/services/escola-lms/enums';
import { Collapse } from 'antd';
import TemplateManuallyTrigger from '@/components/TemplateManuallyTrigger';
import TemplateManuallyTriggerProduct from '@/components/TemplateManuallyTrigger/product';

const { Panel } = Collapse;

const variablesForChannel = (
  variables: API.TemplateVariables,
  channel: string,
): Record<string, string> => {
  return variables
    ? Object.keys(variables).reduce((acc, curr) => {
        if (variables[curr][channel]) {
          return { ...acc, [curr]: curr };
        }
        return acc;
      }, {})
    : {};
};

// creates sections collections for post template
const createEntries = (data: Record<string, string>): API.TemplateSections[] => {
  return Object.entries(data).map((entry) => {
    return {
      key: entry[0],
      content: entry[1],
    };
  });
};

const objectFlatten = (data: Record<string, string>[]): Record<string, string> =>
  Object.assign({}, ...data);

// helper function that throws away unnecessary keys to create a sections collection

const filterNotAllowedKeys = (values: Partial<API.Template>) => {
  const notAllowedKeys = ['name', 'event', 'default'];
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

const channels = TemplateChannelValue;

export default () => {
  const intl = useIntl();
  const params = useParams<{ template: 'email' | 'pdf' | 'sms'; id: string }>();

  const { template, id } = params;

  const isNew = id === 'new';

  const [saved, setSaved] = useState<boolean>(false);
  const [form] = ProForm.useForm();
  const [variables, setVariables] = useState<API.TemplateVariables>();
  const [tokens, setTokens] = useState<Tokens | undefined>(undefined);
  const [previewData, setPreviewData] = useState<any>();
  const [isManuallyTriggered, setIsManuallyTriggered] = useState<boolean>(false);

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

    if (defaultValues && isNew) {
      form.setFieldsValue({
        ...values,
        ...objectFlatten(defaultValues),
      });
    }
  }, [tokens]);

  const handleSetTokens = useCallback(
    (event: string) => {
      if (event && template) {
        const _tokens = variables && (variables[event][channels[template]] as unknown);

        setTokens(_tokens as Tokens);
      }
      setIsManuallyTriggered(event === TemplateEvents.ManuallyTriggeredEvent);
    },
    [variables, id],
  );

  const fetchData = useCallback(async () => {
    const response = await fetchTemplate(Number(id));
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
      handleSetTokens(String(response.data.event));
      setSaved(true);
    }
  }, [id, variables]);

  const onFormFinish = useCallback(
    async (values: Partial<API.Template>) => {
      let response: API.DefaultResponse<API.Template>;

      const postData: Partial<API.Template> = {
        ...values,
        channel: channels[template] as API.Template['channel'],
        sections: createEntries(filterNotAllowedKeys(values)),
      };

      if (isNew) {
        response = await createTemplate(postData);
        if (response.success) {
          history.push(`/templates/${template}/${response.data.id}`);
        }
      } else {
        response = await updateTemplate(Number(id), postData);
      }
      setSaved(true);
      message.success(response.message);
    },
    [variables, id],
  );

  useEffect(() => {
    if (isNew) {
      return;
    }

    fetchData();
  }, [id, variables]);

  return (
    <PageContainer
      title={
        isNew ? (
          <span>
            <FormattedMessage id="new" /> {template} <FormattedMessage id="template" />
          </span>
        ) : (
          <span>
            <FormattedMessage id="edit" /> {template} <FormattedMessage id="template" />
          </span>
        )
      }
    >
      <ProCard size="small">
        <ProForm
          initialValues={{}}
          onFinish={onFormFinish}
          form={form}
          onValuesChange={() => {
            const values = form.getFieldsValue();
            handleSetTokens(values.event);
            setSaved(false);
          }}
        >
          <ProForm.Group>
            <ProFormText
              width="sm"
              name="name"
              label={<FormattedMessage id="name" />}
              placeholder={intl.formatMessage({
                id: 'name',
              })}
              rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
            />
            <ProFormSelect
              name="event"
              width="lg"
              label={<FormattedMessage id="event" />}
              valueEnum={variables ? variablesForChannel(variables, channels[template]) : {}}
              placeholder={intl.formatMessage({
                id: 'event',
              })}
              rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
            />

            <ProForm.Item label={<FormattedMessage id="templates.set_as_default_template" />}>
              <ProFormCheckbox name="default" />
            </ProForm.Item>
          </ProForm.Group>

          {!isNew && (
            <ProForm.Group>
              <ProForm.Item label={<FormattedMessage id="preview" />}>
                <PreviewButton
                  disabled={!saved}
                  id={Number(id)}
                  type={template}
                  onPreviewData={(data) => {
                    if (data && data.data && data.data.content) {
                      setPreviewData(data.data.content);
                    }
                  }}
                />
              </ProForm.Item>

              {isManuallyTriggered && (
                <ProForm.Item
                  label={<FormattedMessage id="generate_pdf" />}
                  tooltip={<FormattedMessage id="generate_pdf_tooltip" />}
                >
                  <TemplateManuallyTrigger templateId={Number(id)} />
                </ProForm.Item>
              )}

              {isManuallyTriggered && (
                <ProForm.Item
                  label={<FormattedMessage id="generate_pdf" />}
                  tooltip={<FormattedMessage id="generate_pdf_tooltip" />}
                >
                  <TemplateManuallyTriggerProduct templateId={Number(id)} />
                </ProForm.Item>
              )}
            </ProForm.Group>
          )}

          {channels[template] === TemplateChannelValue.pdf && (
            <Collapse ghost destroyInactivePanel defaultActiveKey={[-1]}>
              <Panel header={<FormattedMessage id="generated_pdfs" />} key={0}>
                <PdfList template_id={Number(id)} />
              </Panel>
            </Collapse>
          )}

          {!tokens && !isNew ? (
            <Spin />
          ) : (
            tokens &&
            tokens.sections &&
            Object.keys(tokens.sections).map((section, index) => {
              const fieldItem = tokens.sections && tokens.sections[section];

              return (
                <React.Fragment key={section}>
                  {index === 0 && (
                    <React.Fragment>
                      <Divider>
                        <FormattedMessage id="templates.tokens" />
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
                  <TemplateFields name={section} field={fieldItem} variables={tokens.variables} />
                </React.Fragment>
              );
            })
          )}
          <Divider />
        </ProForm>
      </ProCard>
      {previewData && (
        <FabricPreview initialValue={previewData} onRendered={() => setPreviewData(undefined)} />
      )}
    </PageContainer>
  );
};
