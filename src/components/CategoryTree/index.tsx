import React, { useState, useEffect, useMemo } from 'react';
import { TreeSelect } from 'antd';

import { categoryTree } from '@/services/escola-lms/category';

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
  state: {
    type: number;
  };
  value?: string;
  onChange?: (value: string) => void;
}> = (props) => {
  const { value, onChange } = props;

  const [categories, setCategories] = useState<API.Category[]>([]);

  useEffect(() => {
    categoryTree().then((response) => setCategories(response.data));
  }, []);

  const treeData = useMemo(() => {
    return categories.map((cat) => treeConvert(cat));
  }, [categories]);

  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      disabled={categories.length === 0}
    ></TreeSelect>
  );
};

export default CategoryTree;
