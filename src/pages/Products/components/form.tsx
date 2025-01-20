import ProductablesSelect from '@/components/ProductablesSelect';
import ProCard from '@ant-design/pro-card';
import ProForm, {
  ProFormDigit,
  ProFormRadio,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-form';
import { Col, Input, Row, Spin, Tag } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, useIntl, useModel } from 'umi';

import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import {
  createProduct,
  getProduct,
  productForModel,
  updateProduct,
} from '@/services/escola-lms/products';

import { MoneyInput } from '@/components/MoneyInput';
import ProductsSelect from '@/components/ProductsSelect';
import TagsInput from '@/components/TagsInput';
import TemplateManuallyTriggerForProduct from '@/components/TemplateManuallyTrigger/forProduct';
import UserSubmissions from '@/components/UsersSubmissions';
import WysiwygMarkdown from '@/components/WysiwygMarkdown';
import PACKAGES from '@/consts/packages';
import { useShowNotification } from '@/hooks/useMessage';
import { createHavePackageInstalled } from '@/utils/access';
import { categoriesArrToIds, tagsArrToIds } from '@/utils/utils';
import { ProFormSelect } from '@ant-design/pro-components';
import ProTable from '@ant-design/pro-table';
import UserAccess from './UserAccess';
import './index.css';

enum ProductTypes {
  SINGLE = 'single',
  BUNDLE = 'bundle',
  SUBSCRIPTION = 'subscription',
  SUBSCRIPTION_ALL_IN = 'subscription-all-in',
}

enum SubscriptionPeriod {
  DAILY = 'daily',
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

type MinimumProductProductable = {
  class: string;
  id: number;
  quantity?: number;
  name?: string;
};

const transformProductablesFromAPI = (
  input: API.ProductableListItem[],
): MinimumProductProductable[] =>
  input.map((row) => ({
    class: row.productable_type,
    id: Number(row.productable_id),
    name: row.name,
    quantity: row.quantity,
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
      name: item.split(':')[2],
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
    quantity?: number;
  };
  tab: string;
  onTabChange: (tab: string) => void;
  onProductSaved?: (model: EscolaLms.Cart.Models.Product) => void;
}> = ({ tab = 'attributes', onTabChange, id, productable, onProductSaved, type = 'card' }) => {
  const intl = useIntl();

  const [productId, setProductId] = useState<string | number | undefined>(id);
  const [currProductables, setCurrProductables] = useState<MinimumProductProductable[]>([]);
  const isNew = useMemo(() => productId === 'new', [productId]);
  const [loading, setLoading] = useState<boolean>(true);
  const [productableType, setProductableType] = useState<string | null>(null);
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);
  const [form] = ProForm.useForm();

  const { initialState } = useModel('@@initialState');
  const currentCurrency = initialState?.config?.find(
    ({ group, key }) => group === 'currencies' && key === 'default',
  )?.value;

  const [multiple, setMultiple] = useState<boolean>(false);
  const [productType, setProductType] = useState<ProductTypes>(ProductTypes.BUNDLE);
  const [hasTrial, setHasTrial] = useState<boolean>(false);
  const havePackageInstalled = useCallback(createHavePackageInstalled(initialState?.packages), [
    initialState?.packages,
  ]);
  const { showNotification } = useShowNotification();

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
      setCurrProductables([
        {
          class: productable.class_type,
          id: Number(productable.class_id),
          name: productable.name,
        },
      ]);
      form.setFieldsValue({
        productables: [
          {
            class: productable.class_type,
            id: productable.class_id,
            name: productable.name,
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
          app_store: response.data.fields?.in_app_purchase_ids?.revenuecat?.app_store,
          play_store: response.data.fields?.in_app_purchase_ids?.revenuecat?.play_store,
        };
        if (response.data && response?.data?.productables) {
          setProductableType(response?.data?.productables[0]?.productable_type);
        }

        setCurrProductables(
          transformProductablesFromAPI(response.data.productables as API.ProductProductable[]),
        );
        form.setFieldsValue(newData);

        setMultiple(response.data.type === ProductTypes.BUNDLE);
        setProductType(response.data.type as ProductTypes);
        setHasTrial(!!response.data.has_trial);
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
            type: ProductTypes;
            has_trial?: boolean;
          },
      ) => {
        if (values.type) {
          setMultiple(values.type === ProductTypes.BUNDLE);
          setProductType(values.type);
        }
        if (typeof values.has_trial === 'boolean') {
          setHasTrial(values.has_trial);
        }
      },

      onFinish: async (
        values: EscolaLms.Cart.Http.Requests.Admin.ProductUpdateRequest &
          Omit<EscolaLms.Cart.Http.Requests.Admin.ProductCreateRequest, 'related_products'> & {
            productables: string[] | string;
            related_products: EscolaLms.Cart.Models.Product[] | number[];
            app_store: string;
            play_store: string;
          },
      ) => {
        const related_products = values.related_products?.every(
          (related_product) => typeof related_product === 'object',
        )
          ? (values.related_products as EscolaLms.Cart.Models.Product[]).map(
              (product) => product.id,
            )
          : values.related_products;

        const postData = {
          ...values,
          productables: [
            {
              id: 134,
              morph_class: 'App\\Models\\awdawd',
              productable_id: 134,
              productable_type: 'App\\Models\\awdwa',
              quantity: 1,
              name: 'new21412421',
              description: 'adawd',
            },
          ],
          ...(values.related_products ? { related_products } : {}),
          fields: {
            in_app_purchase_ids: {
              revenuecat: {
                app_store: values.app_store,
                play_store: values.play_store,
              },
            },
          },
        };
        let response: API.DefaultResponse<EscolaLms.Cart.Models.Product> = {
          success: false,
          message: '',
          errors: {},
        };
        try {
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
        } catch (error) {
          console.error(error);
        } finally {
          showNotification(response);
        }
      },
    }),
    [productId, onProductSaved, currProductables],
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
            id="product_widget_tooltip"
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
        <ProForm {...formProps} form={form} omitNil={false}>
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
              shouldUpdate
              style={{ minWidth: 104 * 3 }}
              name="productables"
              tooltip={<FormattedMessage id="productables_tooltip" />}
              label={<FormattedMessage id="productables" />}
              valuePropName="value"
            >
              <ProductablesSelect
                multiple={multiple}
                disabled={
                  productable !== undefined || productType === ProductTypes.SUBSCRIPTION_ALL_IN
                }
                onChange={(p) =>
                  setCurrProductables(
                    getProductables(p as string[] | string | API.ProductableResourceListItem[]),
                  )
                }
              />
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
                  value: ProductTypes.SINGLE,
                },
                {
                  label: intl.formatMessage({
                    id: 'bundle',
                    defaultMessage: 'bundle',
                  }),
                  value: ProductTypes.BUNDLE,
                },
                {
                  label: intl.formatMessage({
                    id: 'subscription',
                    defaultMessage: 'Subscription',
                  }),
                  value: ProductTypes.SUBSCRIPTION,
                },
                {
                  label: intl.formatMessage({
                    id: 'subscription_all_in',
                    defaultMessage: 'Subscription all in',
                  }),
                  value: ProductTypes.SUBSCRIPTION_ALL_IN,
                },
              ]}
              shouldUpdate
            />
            <ProFormSwitch
              name="purchasable"
              label={<FormattedMessage id="purchasable" />}
              tooltip={<FormattedMessage id="purchasable_tooltip" />}
            />
          </ProForm.Group>
          <ProForm.Group title={<FormattedMessage id="prices" />}>
            <MoneyInput
              form={form}
              width="xs"
              name="price"
              label={{
                id: 'price',
              }}
              tooltip={<FormattedMessage id="price_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'price',
                defaultMessage: 'price',
              })}
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
                parser: (value) => Number(value ? value.replace('%', '') : ''),
              }}
            />
            <ProForm.Item
              shouldUpdate
              label={
                <FormattedMessage
                  id="price_brutto"
                  values={{
                    currency: currentCurrency ? `(${currentCurrency})` : '',
                  }}
                />
              }
              tooltip={<FormattedMessage id="price_brutto_tooltip" />}
            >
              {(formRef) => {
                return (
                  <Input
                    disabled
                    readOnly
                    style={{ width: '104px' }}
                    value={
                      formRef.getFieldValue('price')
                        ? (
                            Math.round(
                              parseInt(formRef.getFieldValue('price')) *
                                (1 + parseInt(formRef.getFieldValue('tax_rate')) / 100),
                            ) / 100
                          ).toFixed(2)
                        : undefined
                    }
                  />
                );
              }}
            </ProForm.Item>

            <ProForm.Item
              shouldUpdate
              label={
                <FormattedMessage
                  id="tax_value"
                  values={{
                    currency: currentCurrency ? `(${currentCurrency})` : '',
                  }}
                />
              }
              tooltip={<FormattedMessage id="tax_value_tooltip" />}
            >
              {(formRef) => {
                return (
                  <Input
                    disabled
                    readOnly
                    style={{ width: '104px' }}
                    value={
                      formRef.getFieldValue('price')
                        ? (
                            Math.round(
                              parseInt(formRef.getFieldValue('price')) *
                                (parseInt(formRef.getFieldValue('tax_rate')) / 100),
                            ) / 100
                          ).toFixed(2)
                        : undefined
                    }
                  />
                );
              }}
            </ProForm.Item>

            <MoneyInput
              form={form}
              width="xs"
              name="price_old"
              label={{
                id: 'price_old',
              }}
              tooltip={<FormattedMessage id="price_old_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'price',
                defaultMessage: 'price',
              })}
              fieldProps={{ step: 1 }}
              defaultValue={null}
            />

            <MoneyInput
              form={form}
              initialValue={isNew ? null : undefined}
              width="xs"
              name="extra_fees"
              label={{
                id: 'extra_fees',
              }}
              tooltip={<FormattedMessage id="extra_fees_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'extra_fees',
                defaultMessage: 'extra_fees',
              })}
              fieldProps={{ step: 1 }}
            />
          </ProForm.Group>
          {(productType === ProductTypes.SUBSCRIPTION ||
            productType === ProductTypes.SUBSCRIPTION_ALL_IN) && (
            <>
              <ProForm.Group title={<FormattedMessage id="subscription" />}>
                <ProFormSelect
                  name="subscription_period"
                  tooltip={<FormattedMessage id="subscription_period_tooltip" />}
                  label={intl.formatMessage({
                    id: 'subscription_period',
                    defaultMessage: 'Subscription period',
                  })}
                  options={[
                    {
                      label: intl.formatMessage({
                        id: 'daily',
                        defaultMessage: 'Daily',
                      }),
                      value: SubscriptionPeriod.DAILY,
                    },
                    {
                      label: intl.formatMessage({
                        id: 'monthly',
                        defaultMessage: 'Monthly',
                      }),
                      value: SubscriptionPeriod.MONTHLY,
                    },
                    {
                      label: intl.formatMessage({
                        id: 'yearly',
                        defaultMessage: 'Yearly',
                      }),
                      value: SubscriptionPeriod.YEARLY,
                    },
                  ]}
                  placeholder={intl.formatMessage({
                    id: 'select',
                    defaultMessage: 'Select',
                  })}
                  rules={[{ required: true }]}
                />
                <ProFormDigit
                  width="sm"
                  name="subscription_duration"
                  label={<FormattedMessage id="subscription_duration" />}
                  tooltip={<FormattedMessage id="subscription_duration_tooltip" />}
                  placeholder={intl.formatMessage({
                    id: 'subscription_duration',
                    defaultMessage: 'subscription_duration',
                  })}
                  min={1}
                  max={99999}
                  fieldProps={{ step: 1 }}
                  rules={[{ required: true }]}
                />
                <ProFormSwitch
                  name="recursive"
                  label={<FormattedMessage id="recursive" />}
                  tooltip={<FormattedMessage id="recursive_tooltip" />}
                />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormSwitch
                  name="has_trial"
                  label={<FormattedMessage id="has_trial" />}
                  tooltip={<FormattedMessage id="has_trial_tooltip" />}
                />
                <ProFormSelect
                  name="trial_period"
                  tooltip={<FormattedMessage id="trial_period_tooltip" />}
                  label={intl.formatMessage({
                    id: 'trial_period',
                    defaultMessage: 'Trial period',
                  })}
                  options={[
                    {
                      label: intl.formatMessage({
                        id: 'daily',
                        defaultMessage: 'Daily',
                      }),
                      value: SubscriptionPeriod.DAILY,
                    },
                    {
                      label: intl.formatMessage({
                        id: 'monthly',
                        defaultMessage: 'Monthly',
                      }),
                      value: SubscriptionPeriod.MONTHLY,
                    },
                    {
                      label: intl.formatMessage({
                        id: 'yearly',
                        defaultMessage: 'Yearly',
                      }),
                      value: SubscriptionPeriod.YEARLY,
                    },
                  ]}
                  placeholder={intl.formatMessage({
                    id: 'select',
                    defaultMessage: 'Select',
                  })}
                  rules={[{ required: hasTrial }]}
                  disabled={!hasTrial}
                />
                <ProFormDigit
                  width="sm"
                  name="trial_duration"
                  label={<FormattedMessage id="trial_duration" />}
                  tooltip={<FormattedMessage id="trial_duration_tooltip" />}
                  placeholder={intl.formatMessage({
                    id: 'trial_duration',
                    defaultMessage: 'trial_duration',
                  })}
                  min={1}
                  max={99999}
                  fieldProps={{ step: 1 }}
                  rules={[{ required: hasTrial }]}
                  disabled={!hasTrial}
                />
              </ProForm.Group>
            </>
          )}
          <ProForm.Group title={<FormattedMessage id="additional_fields" />}>
            <ProFormText
              width="sm"
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
              width="sm"
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
              width="sm"
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
              width="sm"
              name="teaser_url"
              label={<FormattedMessage id="teaser_url" />}
              tooltip={<FormattedMessage id="teaser_url_tooltip" />}
              placeholder={intl.formatMessage({
                id: 'teaser_url',
                defaultMessage: 'teaser_url',
              })}
            />
            {havePackageInstalled(PACKAGES.RevenuecatIntegration) && (
              <>
                <ProFormText
                  width="sm"
                  name="app_store"
                  label={<FormattedMessage id="app_store" />}
                  tooltip={<FormattedMessage id="app_store_tooltip" />}
                  placeholder={intl.formatMessage({
                    id: 'app_store',
                    defaultMessage: 'app_store',
                  })}
                />
                <ProFormText
                  width="sm"
                  name="play_store"
                  label={<FormattedMessage id="play_store" />}
                  tooltip={<FormattedMessage id="play_store_tooltip" />}
                  placeholder={intl.formatMessage({
                    id: 'play_store',
                    defaultMessage: 'play_store',
                  })}
                />
              </>
            )}
          </ProForm.Group>{' '}
          <ProForm.Item
            shouldUpdate
            name={'related_products'}
            label={<FormattedMessage id={'related_products'} />}
            valuePropName="value"
          >
            {productableType && <ProductsSelect type={productableType} multiple />}
          </ProForm.Item>
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
          {currProductables.length > 0 && multiple && (
            <ProTable<MinimumProductProductable>
              headerTitle={intl.formatMessage({
                id: 'selected_products',
                defaultMessage: 'Selected Products',
              })}
              pagination={false}
              search={false}
              dataSource={[...currProductables]}
              rowKey="id"
              columns={[
                {
                  title: <FormattedMessage id="id" defaultMessage="id" />,
                  dataIndex: 'id',
                  width: '80px',
                },
                {
                  title: <FormattedMessage id="name" defaultMessage="name" />,
                  dataIndex: 'name',
                },
                {
                  title: <FormattedMessage id="type" defaultMessage="type" />,
                  dataIndex: 'class',
                  render: (_, record) => (
                    <Tag>
                      <FormattedMessage
                        id={record.class.split('\\').pop()}
                        defaultMessage={record.class.split('\\').pop()}
                      />
                    </Tag>
                  ),
                },
                {
                  title: <FormattedMessage id="quantity" defaultMessage="quantity" />,
                  dataIndex: 'quantity',
                  width: '10%',
                  render: (_, record) => {
                    return (
                      <Input
                        min={1}
                        type="number"
                        value={record.quantity || 1}
                        onChange={(e) => {
                          const value = e.target.value;

                          const index = currProductables.findIndex((item) => item.id === record.id);
                          const collection = currProductables;
                          collection[index].quantity = Number(value);

                          setCurrProductables(collection);
                          // this is needed because the datasource in the pro table does not want to update the data :(
                          forceUpdate();
                        }}
                      />
                    );
                  },
                },
              ]}
            />
          )}
        </ProForm>{' '}
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
