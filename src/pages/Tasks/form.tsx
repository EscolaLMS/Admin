import { useMemo, useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import ProForm, { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

import { getTask as fetchTask, updateTask, createTask } from '@/services/escola-lms/tasks';
import UserSelect from '@/components/UserSelect';

import { PageContainer } from '@ant-design/pro-layout';

import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import { Related } from '@/components/RelatedCourseTopicLesson';

export default () => {
  const intl = useIntl();
  const params = useParams<{ task?: string }>();
  const { task } = params;
  const isNew = task === 'new';

  const [data, setData] = useState<Partial<API.Task>>();
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    const response = await fetchTask(Number(task));
    if (response.success) {
      setData({
        ...response.data,
      });
    }
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
          bio: values.bio ? values.bio : undefined,
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
          <Related />

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
          </ProForm.Group>
          <ProFormTextArea
            width="md"
            name="description"
            label={<FormattedMessage id="description" />}
            tooltip={<FormattedMessage id="description" />}
            placeholder={intl.formatMessage({
              id: 'description',
            })}
            required
          />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
