import { FormattedMessage } from 'umi';
import Paragraph from 'antd/lib/typography/Paragraph';
import { formatRecommenderProbability } from './utils';

interface CourseRecommenderProps {
  recommendedData: API.Recommender;
}

export const CourseRecommender: React.FC<CourseRecommenderProps> = ({ recommendedData }) => (
  <Paragraph className="recommender__paragraph">
    <strong>
      <FormattedMessage id="recommender.finish" />
    </strong>
    <FormattedMessage id="recommender.too_long" />
    <strong>{`${formatRecommenderProbability(recommendedData.probability)}%`}</strong>
  </Paragraph>
);
