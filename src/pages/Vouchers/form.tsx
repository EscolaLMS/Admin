import { useMemo, useState, useEffect, useCallback } from 'react';
import { message, Spin } from 'antd';
import ProForm, {
  ProFormText,
  ProFormDigit,
  ProFormDatePicker,
  ProFormRadio,
} from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { useParams, useIntl, FormattedMessage, history } from 'umi';
import { createVoucher, getVoucher, updateVoucher } from '@/services/escola-lms/vouchers';
import UserSelect from '@/components/UserSelect';
import CategoryTree from '@/components/CategoryTree';
import ProductSelect from '@/components/ProductsSelect';

const mapper = (item) => (typeof item === 'object' ? item.id : item);

const VoucherForm = () => {
  const intl = useIntl();
  const params = useParams<{ voucherId?: string; tab?: string }>();
  const { voucherId, tab = 'attributes' } = params;
  const isNew = voucherId === 'new';

  const [data, setData] = useState<Partial<EscolaLms.Vouchers.Models.Coupon>>();
  const [voucherType, setVoucherType] = useState('');

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
      setVoucherType(response.data.type);
    }
  }, [voucherId]);

  useEffect(() => {
    if (isNew) {
      setData({
        name: 'new',
      });
      return;
    }

    fetchData();
  }, [voucherId]);

  const formProps = useMemo(
    () => ({
      onFinish: async (values: Partial<EscolaLms.Vouchers.Models.Coupon>) => {
        const postData = {
          ...values,
        };
        let response: API.DefaultResponse<EscolaLms.Vouchers.Models.Coupon>;
        if (isNew) {
          try {
            response = await createVoucher(postData);
            if (response.success) {
              history.push(`/vouchers/${response.data.id}`);
              message.success(<FormattedMessage id="success" defaultMessage="success" />);
            }
          } catch (error) {
            message.error(<FormattedMessage id="error" defaultMessage="error" />);
          }
        } else {
          try {
            response = await updateVoucher(Number(voucherId), postData);
            if (response.success) {
              history.push(`/vouchers/${response.data.id}`);
              message.success(<FormattedMessage id="success" defaultMessage="success" />);
            }
          } catch (error) {
            message.error(<FormattedMessage id="error" defaultMessage="error" />);
          }
        }
      },
      initialValues: data,
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
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormDatePicker
              width="sm"
              name="active_from"
              label={<FormattedMessage id="active_from" />}
              tooltip={<FormattedMessage id="active_from" />}
              placeholder={intl.formatMessage({
                id: 'active_from',
                defaultMessage: 'active_from',
              })}
              disabled={!voucherType}
              required
            />
            <ProFormDatePicker
              width="sm"
              name="active_to"
              label={<FormattedMessage id="active_to" />}
              tooltip={<FormattedMessage id="active_to" />}
              placeholder={intl.formatMessage({
                id: 'active_to',
                defaultMessage: 'active_to',
              })}
              disabled={!voucherType}
              required
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
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormDigit
              width="md"
              name="min_cart_price"
              label={<FormattedMessage id="vouchers.min_cart_price" />}
              tooltip={<FormattedMessage id="vouchers.min_cart_price" />}
              placeholder={intl.formatMessage({
                id: 'vouchers.min_cart_price',
                defaultMessage: 'vouchers.min_cart_price',
              })}
              disabled={!voucherType}
              required
            />
            <ProFormDigit
              width="md"
              name="max_cart_price"
              label={<FormattedMessage id="vouchers.max_cart_price" />}
              tooltip={<FormattedMessage id="vouchers.max_cart_price" />}
              placeholder={intl.formatMessage({
                id: 'vouchers.max_cart_price',
                defaultMessage: 'vouchers.max_cart_price',
              })}
              disabled={!voucherType}
              required
            />
            <ProFormDigit
              width="md"
              name="amount"
              label={<FormattedMessage id="amount" />}
              tooltip={<FormattedMessage id="amount" />}
              placeholder={intl.formatMessage({
                id: 'amount',
                defaultMessage: 'amount',
              })}
              required
              disabled={!voucherType}
            />
          </ProForm.Group>
          {voucherType && (
            <>
              <ProForm.Group>
                <ProForm.Item
                  shouldUpdate
                  style={{ minWidth: 104 * 3 }}
                  name={
                    voucherType === 'product_fixed' || voucherType === 'product_percent'
                      ? 'included_products'
                      : 'excluded_products'
                  }
                  label={
                    <FormattedMessage
                      id={
                        voucherType === 'product_fixed' || voucherType === 'product_percent'
                          ? 'vouchers.included_products'
                          : 'vouchers.excluded_products'
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
                  label={<FormattedMessage id={'users'} />}
                  valuePropName="value"
                >
                  <UserSelect multiple showEmail />
                </ProForm.Item>
              </ProForm.Group>
              <ProForm.Group>
                <ProForm.Item
                  name={
                    voucherType === 'product_fixed' || voucherType === 'product_percent'
                      ? 'included_categories'
                      : 'excluded_categories'
                  }
                  label={<FormattedMessage id="categories" defaultMessage="categories" />}
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
