import Columns from '@/components/Columns';
import { FormattedMessage } from 'umi';

export const DashboardComponent: React.FC<{ metric: API.ReportType }> = ({ metric }) => {
  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="current_user_status" defaultMessage="Current User Status" />
      </h3>
      <article>
        <Columns metric={metric} />
      </article>
    </div>
  );
};

export default DashboardComponent;
