import { FormattedMessage } from 'umi';

import PieChart from '@/components/PieChart/PieChart';
export const DashdoardComponent: React.FC<{ metric: API.ReportType }> = ({ metric }) => {
  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id={metric.split('\\').pop()} defaultMessage={metric.split('\\').pop()} />
      </h3>

      <article>
        <PieChart metric={metric} header={false} />
      </article>
    </div>
  );
};

export default DashdoardComponent;
