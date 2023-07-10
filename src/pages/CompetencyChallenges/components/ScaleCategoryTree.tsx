import React, { useState, useEffect, useMemo } from 'react';
import { FormattedMessage } from 'umi';
import { TreeSelect } from 'antd';

import { categoryTree } from '@/services/escola-lms/category';

type TreeNodeType = {
  title: string;
  value: number;
  disabled?: boolean;
  children?: TreeNodeType[];
};

const treeConvert = (
  category: API.Category,
  disabledNodes: number[],
  depth: number = 0,
): TreeNodeType =>
  category.subcategories?.length
    ? {
        title: category.name,
        value: category.id,
        disabled: depth === 0 || disabledNodes.includes(category.id),
        children: category.subcategories.map((cat) => treeConvert(cat, disabledNodes, depth + 1)),
      }
    : {
        title: category.name,
        value: category.id,
        disabled: depth === 0 || disabledNodes.includes(category.id),
      };

interface Props {
  multiple?: boolean;
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
  disabledNodes?: number[]; // categories id arr
}

export const ScaleCategoryTree: React.FC<Props> = ({
  value,
  onChange,
  multiple = false,
  disabledNodes = [],
}) => {
  const [categories, setCategories] = useState<API.Category[]>([]);

  useEffect(() => {
    categoryTree().then((response) => {
      if (response.success) {
        setCategories(response.data);
      }
    });
  }, []);

  const treeData = useMemo(
    () => categories.map((cat) => treeConvert(cat, disabledNodes)),
    [categories, disabledNodes],
  );

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
