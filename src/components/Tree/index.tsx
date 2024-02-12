import { Tree as AntdTree } from 'antd';
import type { DataNode } from 'antd/es/tree';

export const recursiveTree = (
  branch: object[],
  titlePropName: string,
  childrenPropName: string,
  keyPropName: string,
): DataNode[] => {
  return branch.map((item) => ({
    title: item[titlePropName as keyof typeof item] ?? '',
    key: item[keyPropName as keyof typeof item] ?? Math.random().toString(),
    children:
      item[childrenPropName as keyof typeof item] &&
      Array.isArray(item[childrenPropName as keyof typeof item])
        ? recursiveTree(
            item[childrenPropName as keyof typeof item],
            titlePropName,
            childrenPropName,
            keyPropName,
          )
        : [],
  }));
};

export const Tree: React.FC<{
  branch: object[];
  titlePropName: string;
  childrenPropName: string;
  keyPropName: string;
}> = ({ branch, titlePropName, childrenPropName, keyPropName }) => {
  return (
    <AntdTree
      defaultExpandAll
      showIcon
      showLine
      treeData={recursiveTree(branch, titlePropName, childrenPropName, keyPropName)}
    />
  );
};
