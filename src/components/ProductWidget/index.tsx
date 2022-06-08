import ProductsForm from '@/pages/Products/components/form';
import React, { useState } from 'react';

export const ProductWidget: React.FC<{
  type?: 'line' | 'card';
  productable?: {
    name?: string;
    class_type?: string;
    class_id?: string | number;
  };
}> = ({ productable, type = 'card' }) => {
  const [tab, setTab] = useState<string>('attributes');
  return (
    <ProductsForm
      productable={productable}
      tab={tab}
      onTabChange={(newTab) => setTab(newTab)}
      type={type}
    />
  );
};

export default ProductWidget;
