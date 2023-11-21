import { FormattedMessage } from 'umi';
import { Button } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { createText, formatRecommenderProbability } from './utils';

interface ExerciseRecommenderProps {
  recommendedData: API.RecommenderExercise;
  createTopic: () => void;
}

export const ExerciseRecommender: React.FC<ExerciseRecommenderProps> = ({
  recommendedData,
  createTopic,
}) => (
  <>
    <Paragraph className="recommender__paragraph">
      <FormattedMessage id="recommender.add_exercise" />
      <span className="recommender__paragraph--span">{`${createText(
        recommendedData?.topic_type,
      )},`}</span>
      <br />
      <FormattedMessage id="recommender.increase" />
      <span className="recommender__paragraph--span">
        {`${formatRecommenderProbability(recommendedData.probability)}%`}
      </span>
    </Paragraph>
    <Button className="recommender__button" type="default" onClick={createTopic}>
      <FormattedMessage id="recommender.add_button" />
    </Button>
  </>
);
