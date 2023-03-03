import { useMemo, useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import ProForm, { ProFormSwitch, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

import {
  getTask as fetchTask,
  updateTask,
  createTask,
  completeTask,
  incompleteTask,
} from '@/services/escola-lms/tasks';
import UserSelect from '@/components/UserSelect';

import { PageContainer } from '@ant-design/pro-layout';

import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import { Related } from '@/components/RelatedCourseTopicLesson';
import { TaskNotes } from '@/components/TaskNotes';

export default () => {
  const intl = useIntl();
  const params = useParams<{ task?: string }>();
  const { task } = params;
  const isNew = task === 'new';

  const [data, setData] = useState<Partial<API.Task>>();
  const [loading, setLoading] = useState(false);
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetchTask(Number(task));
    if (response.success) {
      setData({
        ...response.data,
      });
    }
    setLoading(false);
  }, [task]);

  useEffect(() => {
    if (task === 'new') {
      setData({});
      return;
    }

    fetchData();
  }, [task, fetchData]);

  const formProps = useMemo(
    () => ({
      // @ts-ignore
      onFinish: async (values) => {
        let response: API.DefaultResponse<API.Task>;
        const postData:
          | EscolaLms.Tasks.Http.Requests.Admin.AdminCreateTaskRequest
          | EscolaLms.Tasks.Http.Requests.Admin.AdminUpdateTaskRequest = {
          ...values,
          related_id: values.related ? values.related.split(':')[1] : undefined,
          related_type: values.related ? values.related.split(':')[0] : undefined,
        };

        if (task === 'new') {
          response = await createTask(postData);
          if (response.success) {
            history.push(`/other/tasks/${response.data.id}`);
          }
        } else {
          response = await updateTask(Number(task), postData);
        }

        message.success(response.message);
      },
      initialValues: {
        ...data,
        user_id: data && data.user && data.user.id ? data.user.id : undefined,
        created_by_id:
          data && data.created_by && data.created_by.id ? data.created_by.id : undefined,
        related:
          data?.related_id && data.related_type
            ? `${data.related_type}:${data.related_id}`
            : undefined,
      },
    }),
    [data, task],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={isNew ? <FormattedMessage id="new_task" /> : <FormattedMessage id="edit_task" />}
    >
      <ProCard>
        <ProForm {...formProps} form={form}>
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
            <ProForm.Item
              name="user_id"
              label={<FormattedMessage id="assignee" />}
              tooltip={<FormattedMessage id="assignee" />}
              valuePropName="value"
              required
            >
              <UserSelect />
            </ProForm.Item>

            {!isNew && (
              <ProForm.Item
                name="created_by_id"
                label={<FormattedMessage id="created_by" />}
                tooltip={<FormattedMessage id="created_by" />}
                valuePropName="value"
              >
                <UserSelect disabled />
              </ProForm.Item>
            )}

            {!isNew && (
              <ProFormSwitch
                name="completed_at"
                label={<FormattedMessage id="completed_at" defaultMessage="Completed" />}
                tooltip={<FormattedMessage id="completed_at_tooltip" defaultMessage="Completed" />}
                fieldProps={{
                  onChange: (v) => {
                    (v ? completeTask(Number(task)) : incompleteTask(Number(task))).then(
                      (response) => {
                        message.success(response.message);
                      },
                    );
                  },
                }}
              />
            )}
          </ProForm.Group>

          <ProFormText name={'related'} shouldUpdate hidden />

          <ProForm.Item
            label={<FormattedMessage id="relates_to" defaultMessage="Relates to" />}
            tooltip={<FormattedMessage id="relates_to_tooltip" defaultMessage="Relates to" />}
            shouldUpdate
          >
            {(formRef) => {
              return (
                <Related
                  value={formRef.getFieldValue('related')}
                  onChange={(val) => {
                    formRef.setFieldValue('related', val);
                  }}
                />
              );
            }}
          </ProForm.Item>
          <ProFormTextArea
            width="md"
            name="description"
            label={<FormattedMessage id="description" />}
            tooltip={<FormattedMessage id="description" />}
            placeholder={intl.formatMessage({
              id: 'description',
            })}
          />
          {!isNew && (
            <ProCard title="notes" bordered>
              {data.notes && (
                <TaskNotes
                  notes={data.notes}
                  taskId={Number(task)}
                  onAdded={() => fetchData()}
                  onEdited={() => fetchData()}
                  onRemoved={() => fetchData()}
                />
              )}
            </ProCard>
          )}
          {loading && <Spin />}
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
