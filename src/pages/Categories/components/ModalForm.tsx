import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import ProForm, { ProFormText, ProFormSwitch, ModalForm } from '@ant-design/pro-form';
import { slugify } from '@/services/escola-lms/slug';
import { useIntl, FormattedMessage } from 'umi';
import CategoryTree from '@/components/CategoryTree';
import { category } from '@/services/escola-lms/category';
import ProFormImageUpload from '@/components/ProFormImageUpload';

export const CategoryModalForm: React.FC<{
  id?: number | false;
  visible: boolean;
  onVisibleChange: (visible: boolean) => void;
  onFinish: (formData: API.CategoryListItem & { icon_path: null }) => Promise<boolean | void>;
}> = (props) => {
  const intl = useIntl();
  const [deletedIcon, setDeletedIcon] = useState(false);
  const { visible, onVisibleChange, onFinish, id } = props;

  const [form] = Form.useForm();

  useEffect(() => {
    setDeletedIcon(false);
    if (typeof id === 'number' && id > 0) {
      category(id).then((response) => {
        form.setFieldsValue(response.data);
      });
    } else {
      form.resetFields();
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
      onFinish={(values) =>
        deletedIcon ? onFinish({ ...values, icon_path: null }) : onFinish({ ...values })
      }
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
        name="name"
      />
      <ProFormText
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
        initialValue={false}
      />
      <ProForm.Item
        name="parent_id"
        label={<FormattedMessage id="parent_category" defaultMessage="parent_category" />}
        valuePropName="value"
      >
        <CategoryTree />
      </ProForm.Item>
      {id !== -1 && (
        <ProFormImageUpload
          folder={`categories/${id}`}
          wrapInForm={false}
          title="icon"
          action={`/api/admin/categories/${id}`}
          src_name="icon"
          form_name="icon"
          getUploadedSrcField={(info) => info.file.response.data.icon}
          setPath={(removed: Record<string, string>) => {
            if (removed.icon_path === '') {
              setDeletedIcon(true);
            }
          }}
          proFormGroupProps={{
            style: {
              flexDirection: 'column',
            },
            titleStyle: {
              flex: '0 0 10px',
            },
          }}
        />
      )}
    </ModalForm>
  );
};

export default CategoryModalForm;
