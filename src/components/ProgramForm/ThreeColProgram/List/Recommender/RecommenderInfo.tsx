import { Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi';

const PopoverContent = (
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

export const RecommenderInfo: React.FC = () => (
  <Popover
    placement="bottomLeft"
    content={PopoverContent}
    trigger="click"
    showArrow={false}
    className="recommender__popover"
  >
    <InfoCircleOutlined style={{ color: '#2DAC34' }} />
  </Popover>
);
