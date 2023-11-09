import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { RecommenderSvg } from './recommender';

export const RecommenderIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={RecommenderSvg} {...props} />
);
