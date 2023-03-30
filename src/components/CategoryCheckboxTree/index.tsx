import React, { useState, useEffect, useMemo } from 'react';
import { Tree, Spin } from 'antd';

import { categoryTree } from '@/services/escola-lms/category';

type TreeNodeType = {
  title: string;
  key: string | number;
  children?: TreeNodeType[];
};

const treeConvert = (category: API.Category): TreeNodeType => {
  return category.subcategories && category.subcategories.length
    ? {
        title: category.name,
        key: category.id,
        children: category.subcategories.map((cat) => treeConvert(cat)),
      }
    : {
        title: category.name,
        key: category.id,
      };
};

export const CategoryCheckboxTree: React.FC<{
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
}> = ({ value, onChange, multiple = true }) => {
  const [categories, setCategories] = useState<API.Category[]>([]);

  useEffect(() => {
    categoryTree().then((response) => {
      if (response.success) {
        setCategories(response.data);
      }
    });
  }, []);

  const treeData = useMemo(() => {
    return categories.map((cat) => treeConvert(cat));
  }, [categories]);

  if (categories.length === 0) {
    return <Spin />;
  }

  return (
    <Tree
      multiple={multiple}
      checkable
      checkStrictly={true}
      defaultExpandAll
      style={{ width: '100%' }}
      checkedKeys={value}
      onCheck={(keys) => {
        if (typeof keys === 'object' && !Array.isArray(keys) && keys.checked) {
          const checkedKeys = keys.checked;
          return onChange && Array.isArray(checkedKeys) && onChange(checkedKeys);
        }
      }}
      treeData={treeData}
      disabled={categories.length === 0}
    />
  );
};

export default CategoryCheckboxTree;
