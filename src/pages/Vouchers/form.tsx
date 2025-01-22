import CategoryTree from '@/components/CategoryTree';
import { MoneyInput } from '@/components/MoneyInput';
import ProductSelect from '@/components/ProductsSelect';
import UserSelect from '@/components/UserSelect';
import { useShowNotification } from '@/hooks/useMessage';
import { createVoucher, getVoucher, updateVoucher } from '@/services/escola-lms/vouchers';
import { createRequiredFieldValidator } from '@/utils/validate';
import ProCard from '@ant-design/pro-card';
import ProForm, {
  ProFormDatePicker,
  ProFormDigit,
  ProFormRadio,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

const mapper = <T extends { id: string | number } | string | number>(item: T): string | number =>
  typeof item === 'object' ? item.id : item;

type Idks = (string | number)[];

type CouponType = Omit<
  EscolaLms.Vouchers.Models.Coupon,
  'included_categories' | 'excluded_categories' | 'included_products' | 'excluded_products'
> & {
  included_categories: Idks;
  excluded_categories: Idks;
  included_products: Idks;
  excluded_products: Idks;
};

const VoucherForm = () => {
  const intl = useIntl();
  const params = useParams<{ voucherId?: string; tab?: string }>();
  const { voucherId, tab = 'attributes' } = params;
  const isNew = voucherId === 'new';
  const requiredValidator = createRequiredFieldValidator(intl);

  const [data, setData] = useState<Partial<CouponType>>();
  const [voucherType, setVoucherType] = useState<API.VouchersTypes>();
  const isProductType = voucherType === 'product_fixed' || voucherType === 'product_percent';
  const { showNotification } = useShowNotification();
  const [form] = ProForm.useForm();

  const fetchData = useCallback(async () => {
    const response = await getVoucher(Number(voucherId));
    if (response.success) {
      setData({
        ...response.data,
        included_categories: response.data.included_categories?.map(mapper),
        excluded_categories: response.data.excluded_categories?.map(mapper),
        included_products: response.data.included_products?.map(mapper),
        excluded_products: response.data.excluded_products?.map(mapper),
      });
      setVoucherType(response.data.type as API.VouchersTypes);
    }
  }, [voucherId]);

  useEffect(() => {
    if (isNew) {
      setData({
        name: intl.formatMessage({
          id: 'new',
          defaultMessage: 'new',
        }),
      });
      return;
    }

    fetchData();
  }, [voucherId]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: EscolaLms.Vouchers.Http.Requests.CreateCouponRequest) => {
        const postData = {
          ...values,
        };
        let response: API.DefaultResponse<EscolaLms.Vouchers.Models.Coupon>;
        if (isNew) {
          try {
            response = await createVoucher(postData);
            if (response.success) {
              history.push(`/sales/vouchers/${response.data.id}`);
              showNotification(response);
            }
          } catch (error) {
            showNotification(error as API.DefaultResponseError);
          }
        } else {
          try {
            response = await updateVoucher(Number(voucherId), postData);
            if (response.success) {
              history.push(`/sales/vouchers/${response.data.id}`);

              showNotification(response);
            }
          } catch (error) {
            showNotification(error as API.DefaultResponseError);
          }
        }
      },
      initialValues: data,
      validate: true,
    }),
    [data, voucherId, tab],
  );

  if (!data) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={isNew ? <FormattedMessage id="voucher" /> : <FormattedMessage id="voucher.edit" />}
    >
      <ProCard>
        <ProForm
          {...formProps}
          form={form}
          onValuesChange={(values) => {
            if (values.type) {
              setVoucherType(values.type);
            }
          }}
          omitNil={false}
        >
          <ProForm.Group>
            <ProFormText
              width="md"
              name="name"
              label={<FormattedMessage id="name" />}
              tooltip={<FormattedMessage id="name" />}
              placeholder={intl.formatMessage({
                id: 'name',
                defaultMessage: 'name',
              })}
              required
              rules={[
                {
                  validator: requiredValidator,
                },
              ]}
            />
            <ProFormText
              width="md"
              name="code"
              label={<FormattedMessage id="vouchers.code" />}
              tooltip={<FormattedMessage id="vouchers.code" />}
              placeholder={intl.formatMessage({
                id: 'vouchers.code',
                defaultMessage: 'vouchers.code',
              })}
              required
              rules={[
                {
                  validator: requiredValidator,
                },
              ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormRadio.Group
              shouldUpdate
              name="type"
              label={<FormattedMessage id="vouchers.type" />}
              options={[
                {
                  label: <FormattedMessage id="vouchers.cart_fixed" />,
                  value: 'cart_fixed',
                },
                {
                  label: <FormattedMessage id="vouchers.cart_percent" />,
                  value: 'cart_percent',
                },
                {
                  label: <FormattedMessage id="vouchers.product_fixed" />,
                  value: 'product_fixed',
                },
                {
                  label: <FormattedMessage id="vouchers.product_percent" />,
                  value: 'product_percent',
                },
              ]}
            />{' '}
            <ProFormSwitch
              name="active"
              label={<FormattedMessage id="is_active" defaultMessage="is_active" />}
            />
            <ProFormSwitch
              name="exclude_promotions"
              label={
                <FormattedMessage id="exclude_promotions" defaultMessage="exclude_promotions" />
              }
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormDatePicker
              width="md"
              name="active_from"
              label={<FormattedMessage id="active_from" />}
              tooltip={<FormattedMessage id="active_from" />}
              placeholder={intl.formatMessage({
                id: 'active_from',
                defaultMessage: 'active_from',
              })}
              disabled={!voucherType}
              required
              rules={[
                {
                  validator: requiredValidator,
                },
              ]}
            />
            <ProFormDatePicker
              width="md"
              name="active_to"
              label={<FormattedMessage id="active_to" />}
              tooltip={<FormattedMessage id="active_to" />}
              placeholder={intl.formatMessage({
                id: 'active_to',
                defaultMessage: 'active_to',
              })}
              disabled={!voucherType}
              required
              rules={[
                {
                  validator: requiredValidator,
                },
              ]}
            />
            <ProFormDigit
              width="md"
              name="limit_usage"
              label={<FormattedMessage id="vouchers.limit_usage" />}
              tooltip={<FormattedMessage id="vouchers.limit_usage" />}
              placeholder={intl.formatMessage({
                id: 'vouchers.limit_usage',
                defaultMessage: 'vouchers.limit_usage',
              })}
              required
              disabled={!voucherType}
              rules={[
                {
                  validator: requiredValidator,
                },
              ]}
            />
            <ProFormDigit
              width="md"
              name="limit_per_user"
              label={<FormattedMessage id="limit_per_user" />}
              tooltip={<FormattedMessage id="limit_per_user" />}
              placeholder={intl.formatMessage({
                id: 'limit_per_user',
                defaultMessage: 'limit_per_user',
              })}
              required
              disabled={!voucherType}
              rules={[
                {
                  validator: requiredValidator,
                },
              ]}
            />
          </ProForm.Group>
          <ProForm.Group>
            <MoneyInput
              form={form}
              width="md"
              name="min_cart_price"
              label={{ id: 'vouchers.min_cart_price' }}
              tooltip={<FormattedMessage id="vouchers.min_cart_price" />}
              placeholder={intl.formatMessage({
                id: 'vouchers.min_cart_price',
                defaultMessage: 'vouchers.min_cart_price',
              })}
              disabled={!voucherType}
              required
              rules={[
                {
                  validator: requiredValidator,
                },
              ]}
            />
            <MoneyInput
              form={form}
              width="md"
              name="max_cart_price"
              label={{ id: 'vouchers.max_cart_price' }}
              tooltip={<FormattedMessage id="vouchers.max_cart_price" />}
              placeholder={intl.formatMessage({
                id: 'vouchers.max_cart_price',
                defaultMessage: 'vouchers.max_cart_price',
              })}
              disabled={!voucherType}
              required
              rules={[
                {
                  validator: requiredValidator,
                },
              ]}
            />
            {voucherType?.includes('percent') ? (
              <ProFormDigit
                width="sm"
                name="amount"
                label={
                  <FormattedMessage
                    id="voucher.value"
                    values={{
                      currency: '(%)',
                    }}
                  />
                }
                tooltip={<FormattedMessage id="voucher.value" />}
                placeholder={intl.formatMessage({
                  id: 'voucher.value',
                  defaultMessage: 'voucher.value',
                })}
                required
                disabled={!voucherType}
                rules={[
                  {
                    validator: requiredValidator,
                  },
                ]}
                min={1}
                max={100}
              />
            ) : (
              <MoneyInput
                width="md"
                name="amount"
                label={{
                  id: 'voucher.value',
                }}
                tooltip={<FormattedMessage id="voucher.value" />}
                placeholder={intl.formatMessage({
                  id: 'voucher.value',
                  defaultMessage: 'voucher value',
                })}
                form={form}
                required
                rules={[
                  {
                    validator: requiredValidator,
                  },
                ]}
              />
            )}
          </ProForm.Group>
          {voucherType && (
            <>
              <ProForm.Group>
                <ProForm.Item
                  shouldUpdate
                  style={{ minWidth: 104 * 3 }}
                  name={isProductType ? 'included_products' : 'excluded_products'}
                  label={
                    <FormattedMessage
                      id={
                        isProductType ? 'vouchers.included_products' : 'vouchers.excluded_products'
                      }
                    />
                  }
                  valuePropName="value"
                >
                  <ProductSelect multiple />
                </ProForm.Item>
              </ProForm.Group>
              <ProForm.Group>
                <ProForm.Item
                  shouldUpdate
                  style={{ minWidth: 104 * 3 }}
                  name={'users'}
                  label={<FormattedMessage id={'voucher.only_for_users'} />}
                  valuePropName="value"
                >
                  <UserSelect multiple showEmail />
                </ProForm.Item>
              </ProForm.Group>
              <ProForm.Group>
                <ProForm.Item
                  name={isProductType ? 'included_categories' : 'excluded_categories'}
                  style={{ minWidth: 104 * 3 }}
                  label={
                    <FormattedMessage
                      id={
                        isProductType
                          ? 'voucher.included_categories'
                          : 'voucher.excluded_categories'
                      }
                      defaultMessage={
                        isProductType
                          ? 'voucher.included_categories'
                          : 'voucher.excluded_categories'
                      }
                    />
                  }
                  valuePropName="value"
                >
                  <CategoryTree multiple />
                </ProForm.Item>
              </ProForm.Group>
            </>
          )}
        </ProForm>
      </ProCard>
    </PageContainer>
  );
};

export default VoucherForm;
