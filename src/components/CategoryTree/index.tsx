import React, { useState, useEffect, useMemo } from 'react';
import { FormattedMessage } from 'umi';
import { TreeSelect } from 'antd';

import { categoryTree } from '@/services/escola-lms/category';

export interface CategoryTreeProps {
  state?: {
    type: number;
  };
  multiple?: boolean;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
  enabledDepth?: number;
}

type TreeNodeType = {
  title: string;
  value: string | number;
  disabled?: boolean;
  children?: TreeNodeType[];
};

const treeConvert = (category: API.Category, enabledDepth?: number, depth = 0): TreeNodeType => {
  return category.subcategories && category.subcategories.length
    ? {
        title: category.name,
        value: category.id,
        disabled: typeof enabledDepth === 'number' && depth !== enabledDepth,
        children: category.subcategories.map((cat) => treeConvert(cat, enabledDepth, depth + 1)),
      }
    : {
        title: category.name,
        value: category.id,
        disabled: typeof enabledDepth === 'number' && depth !== enabledDepth,
      };
};

export const CategoryTree: React.FC<CategoryTreeProps> = ({
  value,
  onChange,
  multiple = false,
  enabledDepth,
}) => {
  const [categories, setCategories] = useState<API.Category[]>([]);

  useEffect(() => {
    categoryTree().then((response) => {
      if (response.success) {
        setCategories(response.data);
      }
    });
  }, []);

  const treeData = useMemo(() => {
    return categories.map((cat) => treeConvert(cat, enabledDepth));
  }, [categories]);

  return (
    <TreeSelect<string | string[] | number | number[]>
      loading={categories.length === 0}
      multiple={multiple}
      showSearch
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
