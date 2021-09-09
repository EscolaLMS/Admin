import React from 'react';

import { FormattedMessage } from 'umi';
import { access as fetchAccess } from '@/services/escola-lms/course';
import UserSelect from '@/components/UserSelect';
import ProForm from '@ant-design/pro-form';

export const CourseAccessForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  return (
    <ProForm
      onValuesChange={(v) => console.log('values', v)}
      onFinish={async (values: API.CourseAccess) => {
        console.log(values);
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
      <ProForm.Group direction="horizontal">
        <ProForm.Item
          valuePropName="value"
          name="users"
          label={<FormattedMessage id="users" defaultMessage="Users" />}
        >
          <UserSelect multiple />
        </ProForm.Item>
        <ProForm.Item>User group goes here</ProForm.Item>
      </ProForm.Group>
    </ProForm>
  );
};

export default CourseAccessForm;
