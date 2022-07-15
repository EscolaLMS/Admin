import { PageContainer } from '@ant-design/pro-layout';
import { useParams, history, useIntl, FormattedMessage } from 'umi';

import './index.css';
import ProductsForm from './components/form';

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
      {id && (
        <ProductsForm
          id={id}
          tab={tab}
          onTabChange={(newTab) => history.push(`/other/products/${id}/${newTab}`)}
          onProductSaved={(model) => {
            return isNew
              ? history.push(`/other/products/${model.id}`)
              : history.push(`/other/products/${model.id}/${tab}`);
          }}
        />
      )}
    </PageContainer>
  );
};

export default ProductsFormPage;
