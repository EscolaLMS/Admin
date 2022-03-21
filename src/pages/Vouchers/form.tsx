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
import { categoriesArrToIds } from '@/utils/utils';

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
        excluded_categories: response.data.excluded_categories?.map(categoriesArrToIds),
        included_products: response.data.included_products?.map(categoriesArrToIds),
      });
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
      onFinish: async (values: Partial<any>) => {
        const postData = {
          ...values,
        };
        let response: API.DefaultResponse<any>;
        if (isNew) {
          response = await createVoucher(postData);
          if (response.success) {
            history.push(`/vouchers/${response.data.id}`);
          }
        } else {
          response = await updateVoucher(Number(voucherId), postData);
          if (response.success) {
            history.push(`/vouchers/${response.data.id}`);
          }
        }
        message.success(response.message);
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
              label={<FormattedMessage id="code" />}
              tooltip={<FormattedMessage id="code" />}
              placeholder={intl.formatMessage({
                id: 'code',
                defaultMessage: 'code',
              })}
              required
            />
          </ProForm.Group>
          <ProForm.Group>
            <ProFormRadio.Group
              shouldUpdate
              name="type"
              label={<FormattedMessage id="type" />}
              options={[
                {
                  label: 'cart_fixed',
                  value: 'cart_fixed',
                },
                {
                  label: 'cart_percent',
                  value: 'cart_percent',
                },
                {
                  label: 'product_fixed',
                  value: 'product_fixed',
                },
                {
                  label: 'product_percent',
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
            />
            <ProFormDigit
              width="md"
              name="limit_usage"
              label={<FormattedMessage id="limit_usage" />}
              tooltip={<FormattedMessage id="limit_usage" />}
              placeholder={intl.formatMessage({
                id: 'limit_usage',
                defaultMessage: 'limit_usage',
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
            <ProFormDigit
              width="md"
              name="min_cart_price"
              label={<FormattedMessage id="min_cart_price" />}
              tooltip={<FormattedMessage id="min_cart_price" />}
              placeholder={intl.formatMessage({
                id: 'min_cart_price',
                defaultMessage: 'min_cart_price',
              })}
              required
              disabled={!voucherType}
            />
            <ProFormDigit
              width="md"
              name="max_cart_price"
              label={<FormattedMessage id="max_cart_price" />}
              tooltip={<FormattedMessage id="max_cart_price" />}
              placeholder={intl.formatMessage({
                id: 'max_cart_price',
                defaultMessage: 'max_cart_price',
              })}
              required
              disabled={!voucherType}
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
                          ? 'included_products'
                          : 'excluded_products'
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
