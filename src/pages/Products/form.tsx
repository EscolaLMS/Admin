import { PageContainer } from '@ant-design/pro-layout';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

import ProductsForm from './components/form';
import './index.css';

const ProductsFormPage = () => {
  const params = useParams<{ id?: string; tab?: string }>();
  const { id, tab = 'attributes' } = params;
  const intl = useIntl();
  const isNew = id === 'new';

  return (
    <PageContainer
      title={isNew ? <FormattedMessage id="product" /> : <FormattedMessage id="product.edit" />}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'sales/products',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Other activities.Products',
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
      {id && (
        <ProductsForm
          id={id}
          tab={tab}
          onTabChange={(newTab) => history.push(`/sales/products/${id}/${newTab}`)}
          onProductSaved={(model) => {
            return isNew
              ? history.push(`/sales/products/${model.id}`)
              : history.push(`/sales/products/${model.id}/${tab}`);
          }}
        />
      )}
    </PageContainer>
  );
};

export default ProductsFormPage;
