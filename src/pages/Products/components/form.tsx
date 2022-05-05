import { useMemo, useState, useEffect, useCallback } from 'react';
import { message, Spin, Row, Col, Input } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDigit,
  ProFormRadio,
  ProFormSwitch,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { useIntl, FormattedMessage } from 'umi';
import ProductSelect from '@/components/ProductablesSelect';
import {
  getProduct,
  createProduct,
  updateProduct,
  productForModel,
} from '@/services/escola-lms/products';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';

import './index.css';
import UserAccess from './UserAccess';
import UserSubmissions from '@/components/UsersSubmissions';
import TagsInput from '@/components/TagsInput';
import { categoriesArrToIds, tagsArrToIds } from '@/utils/utils';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import TemplateManuallyTriggerForProduct from '@/components/TemplateManuallyTrigger/forProduct';

type MinimumProductProductable = {
  class: string;
  id: number;
};

const transformProductablesFromAPI = (
  input: API.ProductableListItem[],
): MinimumProductProductable[] =>
  input.map((row) => ({
    class: row.productable_type,
    id: Number(row.productable_id),
  }));

const getProductables = (
  values: string[] | string | API.ProductableResourceListItem[],
): {
  id: number;
  class: string;
}[] => {
  const valuesArr: string[] | API.ProductableResourceListItem[] = Array.isArray(values)
    ? values
    : [values];

  const result = valuesArr.map((item) => {
    if (typeof item === 'object') {
      return item;
    }
    return {
      id: parseInt(item.split(':')[1]),
      class: item.split(':')[0],
    };
  });

  return result;
};

const ProductsForm: React.FC<{
  type?: 'line' | 'card';
  id?: string;
  productable?: {
    name?: string;
    class_type?: string;
    class_id?: string | number;
  };
  tab: string;
  onTabChange: (tab: string) => void;
  onProductSaved?: (model: EscolaLms.Cart.Models.Product) => void;
}> = ({ tab = 'attributes', onTabChange, id, productable, onProductSaved, type = 'card' }) => {
  const intl = useIntl();

  const [productId, setProductId] = useState<string | number | undefined>(id);

  const isNew = useMemo(() => productId === 'new', [productId]);
  const [loading, setLoading] = useState<boolean>(true);

  const [form] = ProForm.useForm();

  const [multiple, setMultiple] = useState<boolean>(false);

  useEffect(() => {
    if (productable && productable.class_id && productable.class_type) {
      productForModel({
        productable_id: Number(productable.class_id),
        productable_type: productable.class_type,
      })
        .then((response) => {
          if (response.success) {
            setProductId(response.data.id);
          }
        })
        .catch(() => {
          // err id 404 this is new model
          console.log('err');
          setProductId('new');
        });

      form.setFieldsValue({
        productables: [
          {
            class: productable.class_type,
            id: productable.class_id,
          },
        ],
      });
    }
  }, [productable]);

  const fetchData = useCallback(async () => {
    if (productId && productId !== 'new') {
      const response = await getProduct(Number(productId));
      if (response.success) {
        const newData = {
          ...response.data,
          categories: response.data.categories?.map(categoriesArrToIds),
          tags: response.data.tags?.map((tag) => tagsArrToIds(tag as API.Tag)),
          productables: response.data.productables
            ? transformProductablesFromAPI(response.data.productables as API.ProductProductable[])
            : [],
        };

        form.setFieldsValue(newData);

        setMultiple(response.data.type === 'bundle');
      }
    }
    setLoading(false);
  }, [productId]);

  useEffect(() => {
    if (productId) {
      fetchData();
    }
  }, [productId]);

  const formProps = useMemo(
    () => ({
      onValuesChange: (
        values: EscolaLms.Cart.Http.Requests.Admin.ProductUpdateRequest &
          EscolaLms.Cart.Http.Requests.Admin.ProductCreateRequest & {
            productables: string[] | string;
            type: 'bundle' | 'single';
          },
      ) => {
        if (values.type) {
          setMultiple(values.type === 'bundle');
        }
      },

      onFinish: async (
        values: EscolaLms.Cart.Http.Requests.Admin.ProductUpdateRequest &
          EscolaLms.Cart.Http.Requests.Admin.ProductCreateRequest & {
            productables: string[] | string;
          },
      ) => {
        const postData = {
          ...values,
          productables: values.productables ? getProductables(values.productables) : undefined,
        };
        let response: API.DefaultResponse<EscolaLms.Cart.Models.Product>;
        if (isNew) {
          response = await createProduct(postData);
          if (response.success) {
            if (onProductSaved) {
              onProductSaved(response.data);
            }
            setProductId(response.data.id);
            form.setFieldsValue(response.data);
          }
        } else {
          response = await updateProduct(Number(productId), postData);
          if (response.success) {
            if (onProductSaved) {
              onProductSaved(response.data);
            }
          }
        }

        message.success(response.message);
      },
    }),
    [productId, onProductSaved],
  );

  if (loading) {
    return <Spin />;
  }

  return (
    <ProCard
      title={
        type === 'line' ? (
          <FormattedMessage id="product_widget_title" defaultMessage="Product Attibutes" />
        ) : null
      }
      tooltip={
        type === 'line' ? (
          <FormattedMessage
            id="product_widget_tooltip"
            defaultMessage="All attributes below are related only to product"
          />
        ) : null
      }
      subTitle={
        type === 'line' ? (
          <FormattedMessage
            id="product_widget_subtitle"
            defaultMessage="All attributes below are related only to product"
          />
        ) : null
      }
      tabs={{
        type: type,
        activeKey: tab,
        onChange: (key) => onTabChange(key),
      }}
    >
      <ProCard.TabPane key="attributes" tab={<FormattedMessage id="attributes" />}>
        <ProForm {...formProps} form={form}>
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              initialValue={isNew && productable ? productable.name : undefined}
              label={<FormattedMessage id="name" />}
              tooltip={<FormattedMessage id="name_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'name',
                defaultMessage: 'name',
              })}
              required
            />
            <ProForm.Item
              style={{ minWidth: 104 * 3 }}
              name="productables"
              tooltip={<FormattedMessage id="productables_tooltip" />}
              label={<FormattedMessage id="productables" />}
              valuePropName="value"
            >
              <ProductSelect multiple={multiple} disabled={productable !== undefined} />
            </ProForm.Item>
          </ProForm.Group>

          <ProForm.Group>
            <ProFormRadio.Group
              disabled={productable !== undefined}
              initialValue={productId && productId !== 'new' ? undefined : 'single'}
              rules={[
                {
                  required: true,
                },
              ]}
              name="type"
              label={<FormattedMessage id="type" />}
              options={[
                {
                  label: intl.formatMessage({
                    id: 'single',
                    defaultMessage: 'single',
                  }),
                  value: 'single',
                },
                {
                  label: intl.formatMessage({
                    id: 'bundle',
                    defaultMessage: 'bundle',
                  }),
                  value: 'bundle',
                },
              ]}
            />
            <ProFormSwitch
              name="purchasable"
              label={<FormattedMessage id="purchasable" />}
              tooltip={<FormattedMessage id="purchasable_tooltip" />}
            />
          </ProForm.Group>

          <ProForm.Group title={<FormattedMessage id="prices" />}>
            <ProFormDigit
              rules={[
                {
                  required: true,
                },
              ]}
              width="xs"
              name="price"
              label={<FormattedMessage id="price" />}
              tooltip={<FormattedMessage id="price_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'price',
                defaultMessage: 'price',
              })}
              min={0}
              max={99999}
              fieldProps={{ step: 1 }}
            />

            <ProFormDigit
              rules={[
                {
                  required: true,
                },
              ]}
              width="xs"
              name="tax_rate"
              label={<FormattedMessage id="tax_rate" />}
              tooltip={<FormattedMessage id="tax_rate_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'tax_rate',
                defaultMessage: 'tax_rate',
              })}
              initialValue={isNew ? 23 : undefined}
              min={0}
              max={100}
              fieldProps={{
                step: 1,
                formatter: (value) => `${value}%`,
                parser: (value) => (value ? value.replace('%', '') : ''),
              }}
            />
            <ProForm.Item
              shouldUpdate
              label={<FormattedMessage id="price_brutto" />}
              tooltip={<FormattedMessage id="price_brutto_tooltip" />}
              style={{ width: 104 }}
            >
              {(formRef) => {
                return (
                  <Input
                    disabled
                    readOnly
                    value={
                      formRef.getFieldValue('price')
                        ? Math.round(
                            parseInt(formRef.getFieldValue('price')) *
                              (1 + parseInt(formRef.getFieldValue('tax_rate')) / 100),
                          )
                        : undefined
                    }
                  />
                );
              }}
            </ProForm.Item>
            <ProForm.Item
              shouldUpdate
              label={<FormattedMessage id="tax_value" />}
              tooltip={<FormattedMessage id="tax_value_tooltip" />}
            >
              {(formRef) => {
                return (
                  <Input
                    disabled
                    readOnly
                    value={
                      formRef.getFieldValue('price')
                        ? Math.round(
                            parseInt(formRef.getFieldValue('price')) *
                              (parseInt(formRef.getFieldValue('tax_rate')) / 100),
                          )
                        : undefined
                    }
                  />
                );
              }}
            </ProForm.Item>
            <ProFormDigit
              width="xs"
              name="price_old"
              label={<FormattedMessage id="price_old" />}
              tooltip={<FormattedMessage id="price_old_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'price',
                defaultMessage: 'price',
              })}
              min={0}
              max={99999}
              fieldProps={{ step: 1 }}
            />

            <ProFormDigit
              initialValue={isNew ? null : undefined}
              width="xs"
              name="extra_fees"
              label={<FormattedMessage id="extra_fees" />}
              tooltip={<FormattedMessage id="extra_fees_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'extra_fees',
                defaultMessage: 'extra_fees',
              })}
              min={0}
              max={99999}
              fieldProps={{ step: 1 }}
            />
          </ProForm.Group>

          <ProForm.Group title={<FormattedMessage id="additional_fields" />}>
            <ProFormText
              width="md"
              name="duration"
              label={<FormattedMessage id="duration" />}
              tooltip={<FormattedMessage id="duration_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'duration',
                defaultMessage: 'duration',
              })}
            />
            <ProFormDigit
              initialValue={isNew ? null : undefined}
              width="xs"
              name="limit_per_user"
              label={<FormattedMessage id="limit_per_user" />}
              tooltip={<FormattedMessage id="limit_per_user_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'limit_per_user',
                defaultMessage: 'limit_per_user',
              })}
              min={0}
              max={99999}
              fieldProps={{ step: 1 }}
            />
            <ProFormDigit
              initialValue={isNew ? null : undefined}
              width="xs"
              name="limit_total"
              label={<FormattedMessage id="limit_total" />}
              tooltip={<FormattedMessage id="limit_total_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'limit_total',
                defaultMessage: 'limit_total',
              })}
              min={0}
              max={99999}
              fieldProps={{ step: 1 }}
            />
            <ProFormText
              width="md"
              name="teaser_url"
              label={<FormattedMessage id="teaser_url" />}
              tooltip={<FormattedMessage id="teaser_url_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'teaser_url',
                defaultMessage: 'teaser_url',
              })}
            />
          </ProForm.Group>
          {!isNew && (
            <ProForm.Item
              style={{ width: '100%' }}
              name="description"
              label={<FormattedMessage id="description" />}
              tooltip={<FormattedMessage id="description_tooltip" />}
              valuePropName="value"
            >
              <WysiwygMarkdown directory={`products/${productId}/wysiwyg`} />
            </ProForm.Item>
          )}
        </ProForm>
      </ProCard.TabPane>
      {!isNew && (
        <ProCard.TabPane
          key="media"
          tab={<FormattedMessage id="cart_media" defaultMessage="Cart Media" />}
        >
          <ProForm {...formProps} form={form}>
            <ProFormImageUpload
              folder={`products/${productId}`}
              wrapInForm={false}
              title="image"
              action={`/api/admin/products/${productId}/?_method=PUT`}
              src_name="poster_url"
              form_name="poster"
              getUploadedSrcField={(info) => info.file.response.data.poster_url}
              setPath={(removed) => form.setFieldsValue(removed)}
            />
          </ProForm>
        </ProCard.TabPane>
      )}
      {!isNew && (
        <ProCard.TabPane
          key="categories"
          tab={
            <FormattedMessage
              id="product_categories_and_tags"
              defaultMessage="Product Categories & Tags"
            />
          }
        >
          <ProForm {...formProps} form={form}>
            <Row>
              <Col span={12}>
                <ProForm.Item
                  label={<FormattedMessage id="categories" />}
                  name="categories"
                  valuePropName="value"
                >
                  <CategoryCheckboxTree />
                </ProForm.Item>
              </Col>
              <Col span={12}>
                <ProForm.Item
                  label={<FormattedMessage id="tags" />}
                  name="tags"
                  valuePropName="value"
                >
                  <TagsInput />
                </ProForm.Item>
              </Col>
            </Row>
          </ProForm>
        </ProCard.TabPane>
      )}
      {!isNew && (
        <ProCard.TabPane
          key="users"
          tab={<FormattedMessage id="users_attached" defaultMessage="Users Attached" />}
        >
          <Row>
            <Col span={24}>{productId && <UserAccess id={productId} />}</Col>
          </Row>
        </ProCard.TabPane>
      )}{' '}
      {!isNew && (
        <ProCard.TabPane
          key="user_submission"
          tab={
            <FormattedMessage
              id="user_submission"
              defaultMessage="Users Attached without Account"
            />
          }
        >
          <Row>
            <Col span={12}>
              {productId && (
                <UserSubmissions id={Number(productId)} type="EscolaLms\Cart\Models\Product" />
              )}
            </Col>
          </Row>
        </ProCard.TabPane>
      )}
      {!isNew && productId && (
        <ProCard.TabPane key="template" tab={<FormattedMessage id="template" />}>
          <Row>
            <Col span={12}>
              <TemplateManuallyTriggerForProduct productId={Number(productId)} />
            </Col>
          </Row>
        </ProCard.TabPane>
      )}
    </ProCard>
  );
};

export default ProductsForm;