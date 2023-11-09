import { FormattedMessage } from 'umi';
import { Button } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';

interface ExerciseRecommenderProps {
  recommendedData: API.RecommenderExercise;
  createTopic: () => void;
}

export const ExerciseRecommender: React.FC<ExerciseRecommenderProps> = ({
  recommendedData,
  createTopic,
}) => {
  const createText = (topic: API.RecommenderTopicType) =>
    topic?.includes('.') && topic?.split('.').join(' ');

  return (
    <>
      <Paragraph className="recommender__paragraph">
        <FormattedMessage id="recommender.add_exercise" />
        <span className="recommender__paragraph--span">{`${createText(
          recommendedData?.topic_type,
        )},`}</span>
        <br />
        <FormattedMessage id="recommender.increase" />
        <span className="recommender__paragraph--span">
          {`^ ${Math.floor(recommendedData.probability * 100)}%`}
        </span>
      </Paragraph>
      <Button className="recommender__button" type="default" onClick={createTopic}>
        <FormattedMessage id="recommender.add_button" />
      </Button>
    </>
  );
};
