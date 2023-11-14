import { FormattedMessage } from 'umi';

export const RecommenderPopoverContent: React.FC = () => (
  <div className="recommender__popover-wrapper">
    <h3 className="recommender__popover-title">
      <FormattedMessage id="recommender_info.title" />
    </h3>
    <strong className="recommender__popover-text">
      <FormattedMessage id="recommender_info.first_title" />
    </strong>
    <p className="recommender__popover-text">
      <FormattedMessage id="recommender_info.first_text" />
    </p>
    <strong className="recommender__popover-text">
      <FormattedMessage id="recommender_info.second_title" />
    </strong>
    <p className="recommender__popover-text">
      <FormattedMessage id="recommender_info.second_text" />
    </p>
  </div>
);
