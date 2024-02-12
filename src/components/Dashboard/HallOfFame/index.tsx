import Statistics from '@/components/Statistics';
import { FormattedMessage } from 'umi';

export const DashboardComponent: React.FC<{
  metric: Record<string, API.ReportType>;
}> = ({ metric }) => {
  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="hall_of_fame" defaultMessage="Hall of fame" />
      </h3>
      <article>
        <div>
          <Statistics metric={metric} />
        </div>
      </article>
    </div>
  );
};

export default DashboardComponent;
