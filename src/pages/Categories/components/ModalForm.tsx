import CategoryTree from '@/components/CategoryTree';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import { category } from '@/services/escola-lms/category';
import { slugify } from '@/services/escola-lms/slug';
import ProForm, {
  ModalForm,
  ProFormDigit,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

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

  const isEditing = typeof id === 'number' && id > 0;

  useEffect(() => {
    setDeletedIcon(false);
    if (typeof id === 'number' && id > 0) {
      category(id).then((response) => {
        if (response.success) {
          form.setFieldsValue(response.data);
        }
      });
    } else {
      form.resetFields();
    }
  }, [id, form]);

  return (
    <ModalForm
      form={form}
      title={intl.formatMessage({
        id: isEditing ? 'editCategory' : 'newCategory',
        defaultMessage: isEditing ? 'editCategory' : 'newCategory',
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
            validator: async (_, value) => {
              if (!value) {
                return Promise.reject(
                  new Error(
                    intl.formatMessage({
                      id: 'field_required',
                    }),
                  ),
                );
              }
              return Promise.resolve();
            },
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
      <ProFormTextArea
        name="description"
        label={<FormattedMessage id="description" />}
        placeholder={intl.formatMessage({ id: 'description' })}
      />
      <ProFormSwitch
        name="is_active"
        label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
        initialValue={false}
      />
      <ProFormDigit name="order" label={<FormattedMessage id="stacking_order" />} />
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
