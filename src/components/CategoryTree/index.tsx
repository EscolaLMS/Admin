import React, { useState, useEffect, useMemo } from 'react';
import { TreeSelect } from 'antd';

import { categoryTree } from '@/services/escola-lms/category';
import { FormattedMessage } from 'umi';

type TreeNodeType = {
  title: string;
  value: string | number;
  children?: TreeNodeType[];
};

const treeConvert = (category: API.Category): TreeNodeType => {
  return category.subcategories && category.subcategories.length
    ? {
        title: category.name,
        value: category.id,
        children: category.subcategories.map((cat) => treeConvert(cat)),
      }
    : {
        title: category.name,
        value: category.id,
      };
};

export const CategoryTree: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
}> = ({ value, onChange, multiple = false }) => {
  const [categories, setCategories] = useState<API.Category[]>([]);

  useEffect(() => {
    categoryTree().then((response) => setCategories(response.data));
  }, []);

  const treeData = useMemo(() => {
    return categories.map((cat) => treeConvert(cat));
  }, [categories]);

  return (
    <TreeSelect<string | string[] | number | number[]>
      loading={categories.length === 0}
      multiple={multiple}
      showSearch
      style={{ width: '100%', minWidth: '310px' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder={<FormattedMessage id="select" defaultMessage="Please select" />}
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      disabled={categories.length === 0}
    />
  );
};

export default CategoryTree;
