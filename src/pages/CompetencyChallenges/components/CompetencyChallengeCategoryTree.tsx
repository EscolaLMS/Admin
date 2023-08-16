import React, { useState, useEffect, useMemo } from 'react';
import { FormattedMessage } from 'umi';
import { TreeSelect } from 'antd';

import { categoryTree } from '@/services/escola-lms/category';
import { useCompetencyChallengeContext } from '../context';

type TreeNodeType = {
  title: string;
  value: number;
  disabled?: boolean;
  children?: TreeNodeType[];
};

const treeConvert = (
  category: API.Category,
  disabledNodes: number[],
  enabledDepth: number,
  depth: number = 0,
): TreeNodeType => {
  return category.subcategories?.length
    ? {
        title: category.name,
        value: category.id,
        disabled: depth !== enabledDepth || disabledNodes.includes(category.id),
        children: category.subcategories.map((cat) =>
          treeConvert(cat, disabledNodes, enabledDepth, depth + 1),
        ),
      }
    : {
        title: category.name,
        value: category.id,
        disabled: depth !== enabledDepth || disabledNodes.includes(category.id),
      };
};

export interface CompetencyChallengeCategoryTreeProps {
  value?: string | string[] | number | number[];
  onChange?: (value: string | string[] | number | number[]) => void;
  type?: 'scale' | 'question';
  disabledNodes?: number[]; // categories id arr
  multiple?: boolean;
}

export const CompetencyChallengeCategoryTree: React.FC<CompetencyChallengeCategoryTreeProps> = ({
  value,
  onChange,
  type = 'scale',
  disabledNodes = [],
  multiple = false,
}) => {
  const [categories, setCategories] = useState<API.Category[]>([]);
  const { categoryDepths, competencyChallenge } = useCompetencyChallengeContext();

  const categoriesToShow = useMemo(
    () =>
      competencyChallenge.data?.type === 'simple'
        ? categories.filter((category) => category.id === competencyChallenge.data?.category?.id)
        : categories,
    [categories, competencyChallenge.data?.type, competencyChallenge.data?.category?.id],
  );

  const treeData = useMemo(
    () => categoriesToShow.map((cat) => treeConvert(cat, disabledNodes, categoryDepths[type])),
    [categoriesToShow, disabledNodes, type],
  );

  useEffect(() => {
    categoryTree().then((response) => {
      if (response.success) {
        setCategories(response.data);
      }
    });
  }, []);

  return (
    <TreeSelect<string | string[] | number | number[]>
      loading={categories.length === 0}
      showSearch
      multiple={multiple}
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
