import { FormattedMessage } from 'umi';
import Paragraph from 'antd/lib/typography/Paragraph';

export const InfoRecommender: React.FC = () => (
  <Paragraph className="recommender__paragraph">
    <FormattedMessage id="recommender.save_exercise" />
  </Paragraph>
);
