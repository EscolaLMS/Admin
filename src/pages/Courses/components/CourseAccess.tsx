import React from 'react';

import { FormattedMessage } from 'umi';
import { access as fetchAccess, setAccess as postSetAccess } from '@/services/escola-lms/course';
import UserSelect from '@/components/UserSelect';
import ProForm from '@ant-design/pro-form';
import { message } from 'antd';
import UserGroupSelect from '@/components/UserGroupSelect';

export const CourseAccessForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  return (
    <ProForm
      onFinish={async (values: API.CourseAccess) => {
        postSetAccess(Number(id), values).then((response) => {
          if (response.success) {
            message.success(response.message);
          }
        });
      }}
      request={() => {
        return fetchAccess(Number(id)).then((response) => {
          if (response.success) {
            return {
              users: response.data.users.map((user) => (typeof user === 'object' ? user.id : user)),
              groups: response.data.groups.map((group) =>
                typeof group === 'object' ? group.id : group,
              ),
            };
          }
          return {
            users: [],
            groups: [],
          };
        });
      }}
    >
      <ProForm.Item
        valuePropName="value"
        name="users"
        label={<FormattedMessage id="users" defaultMessage="Users" />}
      >
        <UserSelect multiple />
      </ProForm.Item>
      <ProForm.Item
        valuePropName="value"
        name="groups"
        label={<FormattedMessage id="groups" defaultMessage="Groups" />}
      >
        <UserGroupSelect multiple />
      </ProForm.Item>
    </ProForm>
  );
};

export default CourseAccessForm;
