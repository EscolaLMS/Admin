import { useMemo, useState, useEffect } from 'react';
import { message, Spin, Row, Col, Input } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDigit,
  ProFormRadio,
  ProFormSwitch,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams, history, useIntl, FormattedMessage } from 'umi';
import { useCallback } from 'react';
import ProductSelect from '@/components/ProductSelect';
import { getProduct, createProduct, updateProduct } from '@/services/escola-lms/products';
import ProFormImageUpload from '@/components/ProFormImageUpload';
import CategoryCheckboxTree from '@/components/CategoryCheckboxTree';

import './index.css';

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

const ProductsForm = () => {
  const intl = useIntl();
  const params = useParams<{ id?: string; tab?: string }>();
  const { id, tab = 'attributes' } = params;
  const isNew = id === 'new';

  const [data, setData] = useState<Partial<EscolaLms.Cart.Models.Product>>();
  const [form] = ProForm.useForm();

  const [multiple, setMultiple] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    const response = await getProduct(Number(id));
    if (response.success) {
      setData({
        ...response.data,
      });
      setMultiple(response.data.type === 'bundle');
    }
  }, [id]);

  useEffect(() => {
    if (isNew) {
      setData({
        name: '...',
      });
      return;
    }

    fetchData();
  }, [id]);

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
        console.log('on finish', values.productables);

        const postData = {
          ...values,
          productables: values.productables ? getProductables(values.productables) : undefined,
        };
        let response: API.DefaultResponse<EscolaLms.Cart.Models.Product>;
        if (isNew) {
          response = await createProduct(postData);
          if (response.success) {
            history.push(`/products/${response.data.id}`);
          }
        } else {
          response = await updateProduct(Number(id), postData);
          if (response.success) {
            history.push(`/products/${response.data.id}/${tab}`);
          }
        }

        message.success(response.message);
      },
      initialValues: data,
    }),
    [data, id, tab],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={isNew ? <FormattedMessage id="product" /> : <FormattedMessage id="product.edit" />}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'products',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Products',
              }),
            },
            {
              path: String(id),
              breadcrumbName: intl.formatMessage({
                id: 'form',
              }),
            },
            {
              path: '/',
              breadcrumbName: intl.formatMessage({
                id: id === 'new' ? 'new' : 'edit',
              }),
            },
            {
              path: String(tab),
              breadcrumbName: intl.formatMessage({
                id: String(tab),
              }),
            },
          ],
        },
      }}
    >
      <ProCard
        tabs={{
          type: 'card',
          activeKey: tab,
          onChange: (key) => history.push(`/products/${id}/${key}`),
        }}
      >
        <ProCard.TabPane key="attributes" tab={<FormattedMessage id="attributes" />}>
          <ProForm {...formProps} form={form}>
            <ProForm.Group>
              <ProFormText
                width="md"
                name="name"
                label={<FormattedMessage id="name" />}
                tooltip={<FormattedMessage id="name_tooltip" />}
                placeholder={intl.formatMessage({
                  id: 'name',
                  defaultMessage: 'name',
                })}
                required
              />
            </ProForm.Group>

            <ProForm.Item
              name="productables"
              label={<FormattedMessage id="productables" />}
              valuePropName="value"
            >
              <ProductSelect multiple={multiple} />
            </ProForm.Item>

            <ProForm.Group>
              <ProFormRadio.Group
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
              <ProFormSwitch name="purchasable" label={<FormattedMessage id="purchasable" />} />

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

            <ProForm.Group>
              <ProFormDigit
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

            <ProForm.Group>
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
            </ProForm.Group>
          </ProForm>
        </ProCard.TabPane>
        {!isNew && (
          <ProCard.TabPane key="media" tab={<FormattedMessage id="media" />}>
            <ProForm {...formProps}>
              <ProFormImageUpload
                title="image"
                action={`/api/admin/products/${id}/?_method=PUT`}
                src_name="poster_url"
                form_name="poster"
                getUploadedSrcField={(info) => info.file.response.data.image_url}
                setPath={(removedPath) =>
                  setData((prevState) => ({
                    ...prevState,
                    ...removedPath,
                  }))
                }
              />
            </ProForm>
          </ProCard.TabPane>
        )}
        {!isNew && (
          <ProCard.TabPane key="categories" tab={<FormattedMessage id="categories" />}>
            <Row>
              <Col span={12}>
                <ProForm {...formProps}>
                  <ProForm.Item
                    label={<FormattedMessage id="categories" />}
                    name="categories"
                    valuePropName="value"
                  >
                    <CategoryCheckboxTree />
                  </ProForm.Item>
                </ProForm>
              </Col>
            </Row>
          </ProCard.TabPane>
        )}
      </ProCard>
    </PageContainer>
  );
};

export default ProductsForm;
