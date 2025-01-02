import UserSelect from '@/components/UserSelect';
import {
  sendBulkNotification,
  sendBulkNotificationForAll,
} from '@/services/escola-lms/bulk-notifications';
import { BulkNotificationChannelsEnum } from '@/services/escola-lms/enums';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-components';
import ProForm, { ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { useCallback } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

const getChanngelType = (template?: 'push') => {
  if (template === 'push') {
    return BulkNotificationChannelsEnum.PUSH;
  }
  return BulkNotificationChannelsEnum.PUSH;
};

export default () => {
  const params = useParams<{ template: 'push'; id: string }>();
  const { template, id } = params;
  const isNew = id === 'new';
  const [form] = ProForm.useForm();
  const intl = useIntl();

  const onFormFinish = useCallback(
    async (values: Partial<API.BulkNotificationSectionsPost>) => {
      const isAnyUsers = values.users_ids && values.users_ids.length > 0;
      const section = {
        title: `${values.title}`,
        body: `${values.body}`,
        image_url: values.image_url,
        redirect_url: values.redirect_url,
      };

      if (isAnyUsers) {
        const res = await sendBulkNotification({
          channel: getChanngelType(template),
          sections: section,
          user_ids: values.users_ids,
        });
        if (res.success) {
          history.push('/users/notifications/push');
        }
        return;
      }
      const res = await sendBulkNotificationForAll({
        channel: getChanngelType(template),
        sections: section,
      });
      if (res.success) {
        history.push('/users/notifications/push');
      }
    },
    [template],
  );

  return (
    <PageContainer
      title={
        isNew ? (
          <span>
            <FormattedMessage id="new" /> {template}
          </span>
        ) : (
          <span>
            <FormattedMessage id="edit" /> {template}
          </span>
        )
      }
    >
      <ProCard size="small">
        <ProForm initialValues={{}} onFinish={onFormFinish} form={form}>
          <ProFormText
            name="title"
            label={<FormattedMessage id="title" />}
            placeholder={intl.formatMessage({
              id: 'title',
            })}
            rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
          />
          <ProFormTextArea
            name="body"
            label={<FormattedMessage id="content" />}
            placeholder={intl.formatMessage({
              id: 'content',
            })}
            rules={[{ required: true, message: <FormattedMessage id="select" /> }]}
          />
          <ProForm.Item
            name="users_ids"
            label={<FormattedMessage id="users" />}
            convertValue={(v) => {
              return v;
            }}
            valuePropName="value"
          >
            <UserSelect multiple />
          </ProForm.Item>
          {/* Uncomment when functionality will be ready on front */}
          {/* <ProFormText
            name="redirect_url"
            label={<FormattedMessage id="redirect_url" />}
            placeholder={intl.formatMessage({
              id: 'redirect_url',
            })}
          />
          <ProFormText
            name="image_url"
            label={<FormattedMessage id="image_url" />}
            placeholder={intl.formatMessage({
              id: 'image_url',
            })}
          /> */}
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
