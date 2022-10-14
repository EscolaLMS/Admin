import DemoColumn from '@/components/Columns';
import { FormattedMessage } from 'umi';

export const DashdoardComponent: React.FC<{ metric: API.ReportType }> = ({ metric }) => {
  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="current_users" />
      </h3>
      <article>
        <DemoColumn metric={metric} />
      </article>
    </div>
  );
};

export default DashdoardComponent;
