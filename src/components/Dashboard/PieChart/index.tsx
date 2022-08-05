import { FormattedMessage } from 'umi';
import PieChart from '@/components/PieChart/PieChart';
export const DashdoardComponent: React.FC<{ metric: API.ReportType; title: string }> = ({
  metric,
  title = 'PieChartTitle',
}) => {
  return (
    <div className="dashboard-draggable__component">
      <h3>{title}</h3>
      <article>
        <PieChart metric={metric} />
      </article>
    </div>
  );
};

export default DashdoardComponent;
