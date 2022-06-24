import ProCard from '@ant-design/pro-card';
import { useParams, history } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { useIntl, FormattedMessage } from 'umi';
import UserForm from './form';

import UserCategories from './components/Categories';
import { useCallback, useEffect, useState } from 'react';
import { user as fetchUser } from '@/services/escola-lms/user';
import { categoriesArrToIds } from '@/utils/utils';
import LogsWidget from '@/components/LogsWidget';

export default () => {
  const params = useParams<{ user?: string; tab?: string }>();
  const [data, setData] = useState<Partial<API.UserItem>>();
  const intl = useIntl();
  const { tab = 'user_info', user } = params;
  const isNew = typeof user === 'undefined';

  const fetchData = useCallback(async () => {
    const response = await fetchUser(Number(user));
    if (response.success) {
      setData({
        ...response.data,
        interests: response.data.interests.map(categoriesArrToIds),
      });
    }
  }, [user]);

  useEffect(() => {
    if (isNew) {
      setData({});
      return;
    }

    fetchData();
  }, [user, fetchData]);

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
          <UserForm isNew={isNew} data={data} setData={setData} />
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane
            key={'categories'}
            tab={
              <span>
                <FormattedMessage id="categories" />
              </span>
            }
          >
            {data?.id && <UserCategories data={data} />}
          </ProCard.TabPane>
        )}
        {/* {!isNew && (
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
        )} */}
        {!isNew && (
          <ProCard.TabPane
            key={'logs'}
            tab={
              <span>
                <FormattedMessage id="user_logs" />
              </span>
            }
          >
            {user && <LogsWidget useAsWidget userID={Number(user)} />}
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};
