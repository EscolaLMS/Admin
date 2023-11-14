import { Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { RecommenderPopoverContent } from './RecommenderPopoverContent';

export const RecommenderPopoverInfo: React.FC = () => (
  <Popover
    placement="bottomLeft"
    content={<RecommenderPopoverContent />}
    trigger="click"
    showArrow={false}
    className="recommender__popover"
  >
    <InfoCircleOutlined style={{ color: '#2DAC34' }} />
  </Popover>
);
