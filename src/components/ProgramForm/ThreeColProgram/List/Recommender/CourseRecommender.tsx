import { RecommenderIcon } from '@/icons';
import Paragraph from 'antd/lib/typography/Paragraph';
import { FormattedMessage } from 'umi';
import { RecommenderPopoverInfo } from './RecommenderPopoverInfo';
import { formatRecommenderProbability, useCourseRecommender } from './utils';

interface CourseRecommenderProps {
  courseId: number;
}

export const CourseRecommender: React.FC<CourseRecommenderProps> = ({ courseId }) => {
  const recommendedData = useCourseRecommender(courseId);
  if (recommendedData && recommendedData.probability && recommendedData.probability > -0.016) {
    return null;
  }
  return recommendedData ? (
    <div className="recommender">
      <RecommenderIcon style={{ marginTop: '4px' }} />
      <div>
        <h3 className="recommender__title">
          <FormattedMessage id="recommender.title" />
        </h3>

        <Paragraph className="recommender__paragraph">
          <FormattedMessage id="recommender.finish" />
          <strong>{`${formatRecommenderProbability(recommendedData.probability)}%. `}</strong>
          <br />
          <FormattedMessage id="recommender.too_long" />
        </Paragraph>
      </div>
      <RecommenderPopoverInfo />
    </div>
  ) : (
    <></>
  );
};
