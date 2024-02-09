import Paragraph from 'antd/lib/typography/Paragraph';
import { FormattedMessage } from 'umi';

export const InfoRecommender: React.FC = () => (
  <Paragraph className="recommender__paragraph">
    <FormattedMessage id="recommender.save_exercise" />
  </Paragraph>
);
