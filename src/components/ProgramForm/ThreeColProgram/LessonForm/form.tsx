import ProCard from '@ant-design/pro-card';
import ProForm, { ProFormDatePicker, ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import { Affix, Button, Col, Divider, Popconfirm, Row, Space } from 'antd';
import { isAfter, isBefore } from 'date-fns';
import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'umi';

import { Context } from '@/components/ProgramForm/Context';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import { ParentLesson } from '../ParentLesson';
import type { StateLesson } from './types';

export const LessonForm: React.FC<{
  lesson: StateLesson;
  onFinish: (values: Record<string, string>) => Promise<void>;
  onValuesChange: (changedValues: any, values: Record<string, string>) => void;
  onDelete: () => Promise<void>;
  onClone: () => void;
  initialValues: any;
  loading: boolean;
}> = ({ onFinish, onValuesChange, onDelete, onClone, initialValues, lesson, loading = false }) => {
  const { isAssistant } = useContext(Context);
  const [form] = ProForm.useForm();
  const activeFrom = ProForm.useWatch('active_from', form);
  const activeTo = ProForm.useWatch('active_to', form);

  const intl = useIntl();
  return (
    <ProForm
      form={form}
      submitter={{
        // Fully customize the entire area
        render: (props) => {
          return (
            <Row gutter={16}>
              <Col span={24 - 8}>
                <Row justify="center" className={'program__cta-footer'}>
                  <Affix offsetBottom={4}>
                    <Space size="large">
                      <Button
                        loading={loading}
                        type="primary"
                        key="submit"
                        onClick={() => props.form?.submit()}
                        {...props.submitButtonProps}
                      >
                        {lesson.isNew ? (
                          <FormattedMessage id="create" />
                        ) : (
                          <FormattedMessage id="save" />
                        )}
                      </Button>
                      {!lesson.isNew && (
                        <Button onClick={onClone} loading={loading}>
                          <FormattedMessage id="clone" />
                        </Button>
                      )}
                      <Popconfirm
                        key="delete"
                        onConfirm={onDelete}
                        title={<FormattedMessage id="deleteQuestion" />}
                        okText={<FormattedMessage id="yes" />}
                        cancelText={<FormattedMessage id="no" />}
                      >
                        <Button
                          type="primary"
                          danger
                          {...props.submitButtonProps}
                          loading={loading}
                        >
                          <FormattedMessage id="delete" />
                        </Button>
                      </Popconfirm>
                    </Space>
                  </Affix>
                </Row>
              </Col>
            </Row>
          );
        },
      }}
      layout="vertical"
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      initialValues={{ ...initialValues, summary: initialValues.summary || '' }}
      style={{ height: '100%' }}
    >
      <Row
        gutter={16}
        style={{
          height: '100%',
        }}
      >
        <Col span={24 - 8}>
          <Divider>
            <FormattedMessage id="lesson" />
          </Divider>
          <ProCard>
            <ProFormText
              name="title"
              label={<FormattedMessage id="title" />}
              tooltip={<FormattedMessage id="title" />}
              placeholder={intl.formatMessage({
                id: 'title',
              })}
              required
              labelCol={{
                span: 5,
              }}
            />
            <ProForm.Item
              name="summary"
              label={<FormattedMessage id="summary" />}
              tooltip={<FormattedMessage id="summary_tooltip" />}
              valuePropName="value"
              labelCol={{
                span: 5,
              }}
            >
              <WysiwygMarkdown
                directory={`course/${lesson.course_id}/lesson/${lesson.id}/wysiwyg`}
              />
            </ProForm.Item>
          </ProCard>
        </Col>
        <Col span={8}>
          <aside className={'program-sidebar program-sidebar--right'}>
            <ProFormText
              name="duration"
              label={<FormattedMessage id="duration" />}
              tooltip={<FormattedMessage id="duration" />}
              placeholder={intl.formatMessage({
                id: 'duration',
              })}
            />
            <ProFormSwitch name="active" label={<FormattedMessage id="is_active" />} />
            <ProFormDatePicker
              allowClear={false}
              width="lg"
              name="active_from"
              label={<FormattedMessage id="active_from" />}
              placeholder={intl.formatMessage({
                id: 'active_from',
                defaultMessage: 'active_from',
              })}
              rules={[
                {
                  validator: (_, value) => {
                    if (value && activeTo && isAfter(new Date(value), new Date(activeTo))) {
                      return Promise.reject(new Error(intl.formatMessage({ id: 'invalidDate' })));
                    }

                    return Promise.resolve();
                  },
                },
              ]}
            />
            <ProFormDatePicker
              allowClear={false}
              width="lg"
              name="active_to"
              label={<FormattedMessage id="active_to" />}
              placeholder={intl.formatMessage({
                id: 'active_to',
                defaultMessage: 'active_to',
              })}
              disabled={!activeFrom && !activeTo}
              rules={[
                {
                  validator(_, value) {
                    if (value && activeFrom && isBefore(new Date(value), new Date(activeFrom))) {
                      return Promise.reject(new Error(intl.formatMessage({ id: 'invalidDate' })));
                    }

                    return Promise.resolve();
                  },
                },
              ]}
            />
            <ParentLesson name="parent_id" currentLessonId={lesson?.id} />
            {isAssistant && (
              <ProFormText
                name="assistant_id"
                label={<FormattedMessage id="assistant_id" defaultMessage="Assistant ID" />}
                tooltip={<FormattedMessage id="assistant_id_tooltip" />}
                placeholder={intl.formatMessage({
                  id: 'Assistant ID',
                })}
              />
            )}
          </aside>
        </Col>
      </Row>
    </ProForm>
  );
};

export default LessonForm;
