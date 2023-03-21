import type { DataNode } from 'antd/es/tree';
import { Tree as AntdTree } from 'antd';

export const recursiveTree = (
  branch: object[],
  titlePropName: string,
  childrenPropName: string,
  keyPropName: string,
): DataNode[] => {
  return branch.map((item) => ({
    title: item[titlePropName] ?? '',
    key: item[keyPropName] ?? Math.random().toString(),
    children:
      item[childrenPropName] && Array.isArray(item[childrenPropName])
        ? recursiveTree(item[childrenPropName], titlePropName, childrenPropName, keyPropName)
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
