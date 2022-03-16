import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import { updateUserInterests } from '@/services/escola-lms/user';
import ProForm from '@ant-design/pro-form';
import { message } from 'antd';
import { useMemo } from 'react';
import { FormattedMessage } from 'umi';

const UserCategories: React.FC<{ data: Partial<API.UserItem> | undefined }> = ({ data }) => {
  const formProps = useMemo(
    () => ({
      onFinish: async (values: Partial<API.UserItem>) => {
        const postData: Partial<API.UserItem> = {
          ...values,
        };

        const response: API.DefaultResponse<Partial<API.UserItem>> = await updateUserInterests(
          Number(data?.id),
          postData,
        );

        message.success(response.message);
      },
      initialValues: data,
    }),
    [data],
  );

  return (
    <ProForm {...formProps}>
      <ProForm.Item
        label={<FormattedMessage id="categories" />}
        name="interests"
        valuePropName="value"
      >
        <CategoryCheckboxTree />
      </ProForm.Item>
    </ProForm>
  );
};

export default UserCategories;
