import ProCard from '@ant-design/pro-card';
import { useParams, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { useIntl, FormattedMessage } from 'umi';
import UserForm from './form';
import Settings from './settings';

export default () => {
  const params = useParams<{ user?: string; tab?: string }>();

  const intl = useIntl();
  const { tab = 'user_info', user } = params;
  const isNew = typeof user === 'undefined';

  return (
    <PageContainer
      title={<FormattedMessage id={'settings'} />}
      header={{
        breadcrumb: {
          routes: [
            {
              path: `/users/${user}/user_info`,
              breadcrumbName: intl.formatMessage({
                id: 'menu.Settings',
              }),
            },

            {
              path: String(tab),
              breadcrumbName: String(tab),
            },
          ],
        },
      }}
    >
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => history.push(`/users/${user}/${key}`),
        }}
      >
        <ProCard.TabPane
          key="user_info"
          tab={isNew ? <FormattedMessage id="new_user" /> : <FormattedMessage id="edit_user" />}
        >
          <UserForm isNew={isNew} />
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane
            key={'settings'}
            tab={
              <span>
                <FormattedMessage id="user.settings" />
              </span>
            }
          >
            {user && <Settings user={user} isProfile={false} />}
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};
