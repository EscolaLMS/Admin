import React, { useEffect } from 'react';
import { Form } from 'antd';
import ProForm, { ProFormText, ProFormSwitch, ModalForm } from '@ant-design/pro-form';

import { useIntl, FormattedMessage } from 'umi';
import CategoryTree from '@/components/CategoryTree';
import { category } from '@/services/escola-lms/category';

export const CategoryModalForm: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.CategoryListItem) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();

  const { visible, onVisibleChange, onFinish, id } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      category(id).then((response) => {
        form.setFieldsValue(response.data);
      });
    }
  }, [id, form]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: id ? 'editCategory' : 'newCategory',
        defaultMessage: id ? 'editCategory' : 'newCategory',
      })}
      width="400px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
    >
      <ProFormText
        label={<FormattedMessage id="name" defaultMessage="name" />}
        rules={[
          {
            required: true,
          },
        ]}
        width="md"
        name="name"
      />
      <ProFormText
        label={<FormattedMessage id="slug" defaultMessage="slug" />}
        width="md"
        name="slug"
      />
      <ProFormSwitch
        name="is_active"
        label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
      />
      <ProForm.Item
        name="parent_id"
        label={<FormattedMessage id="parent_category" defaultMessage="parent_category" />}
        valuePropName="value"
      >
        <CategoryTree />
      </ProForm.Item>
    </ModalForm>
  );
};

export default CategoryModalForm;
