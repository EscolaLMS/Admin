import React, { useEffect } from 'react';
import { Form } from 'antd';
import ProForm, { ProFormText, ProFormSwitch, ModalForm } from '@ant-design/pro-form';
import { slugify } from '@/services/escola-lms/slug';
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
    if (typeof id === 'number' && id > 0) {
      category(id).then((response) => {
        form.setFieldsValue(response.data);
      });
    }
  }, [id, form]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: typeof id === 'number' && id > 0 ? 'editCategory' : 'newCategory',
        defaultMessage: typeof id === 'number' && id > 0 ? 'editCategory' : 'newCategory',
      })}
      width="400px"
      visible={visible}
      onVisibleChange={onVisibleChange}
      onFinish={onFinish}
      onValuesChange={(values) => {
        if (values.name) {
          form.setFieldsValue({ slug: slugify(values.name) });
        }
      }}
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
        width="md"
        name="slug"
        label={<FormattedMessage id="slug" />}
        placeholder={intl.formatMessage({
          id: 'slug',
        })}
        disabled
        required
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
