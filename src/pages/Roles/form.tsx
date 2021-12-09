import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Divider, Checkbox } from 'antd';
import ProForm from '@ant-design/pro-form';
import { Form } from 'antd';
import ProCard from '@ant-design/pro-card';
import { permisions, setRolePermisions } from '@/services/escola-lms/roles';
import { PageContainer } from '@ant-design/pro-layout';

import { useParams, FormattedMessage } from 'umi';
import { useCallback } from 'react';

export default () => {
  const params = useParams<{ name: string }>();
  const { name } = params;

  const [data, setData] = useState<Partial<API.Role[]>>([]);
  const [selectedPermisions, setSelectedPermisions] = useState([]);
  const [form] = Form.useForm();

  const fetchData = useCallback(async () => {
    const response = await permisions(name);
    if (response.success) {
      setData(response.data);
    }
  }, [name]);

  useEffect(() => {
    fetchData();
  }, [name, fetchData]);

  const formProps = useMemo(
    () => ({
      onFinish: async () => {
        try {
          const request = await setRolePermisions(name, { permissions: [...selectedPermisions] });
          const response = await request;
          if (response.success) {
            message.success(response.message);
          }
        } catch (error: any) {
          console.log({ error });
          message.error(error.data.message);
        }
      },
      initialValues: data,
    }),
    [data, name, selectedPermisions],
  );

  const handleChange = useCallback(
    (checkedValues) => {
      setSelectedPermisions(checkedValues);
    },
    [name],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer title={<FormattedMessage id="edit_user_group" />}>
      <ProCard>
        <ProForm {...formProps} form={form}>
          <ProForm.Group>
            {!!data.length && (
              <Checkbox.Group
                name="checkbox"
                style={{ width: '100%' }}
                defaultValue={[...data.filter((item) => item?.assigned).map((item) => item?.name)]}
                onChange={handleChange}
                options={
                  data &&
                  data.map((item) => {
                    return {
                      value: item?.name,
                      label: item?.name,
                    };
                  })
                }
              />
            )}
          </ProForm.Group>

          <Divider />
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};
