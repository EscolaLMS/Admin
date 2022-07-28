import React from 'react';
import { Button, Popconfirm, Col, Row, Space, Affix } from 'antd';
import ProForm, { ProFormText, ProFormSwitch } from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import ProCard from '@ant-design/pro-card';

export const LessonForm: React.FC<{
  lesson: API.Lesson;
  onFinish: (values: Record<string, string>) => Promise<void>;
  onValuesChange: (changedValues: any, values: Record<string, string>) => void;
  onDelete: () => Promise<void>;
  onClone: () => void;
  initialValues: any;
  loading: boolean;
}> = ({ onFinish, onValuesChange, onDelete, onClone, initialValues, lesson, loading = false }) => {
  const intl = useIntl();
  return (
    <ProForm
      submitter={{
        // Fully customize the entire area
        render: (props) => {
          return (
            <Row gutter={16}>
              <Col span={24 - 8}>
                <Row justify="center" className={'program__cta-footer'}>
                  <Affix offsetBottom={0}>
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
      layout={'horizontal'}
      onFinish={onFinish}
      onValuesChange={(a, b) => {
        onValuesChange(a, b);
      }}
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
          </aside>
        </Col>
      </Row>
    </ProForm>
  );
};

export default LessonForm;
