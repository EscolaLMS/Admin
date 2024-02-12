import { FormattedMessage } from 'umi';

import PieChart from '@/components/PieChart/PieChart';
export const DashboardComponent: React.FC<{
  metric: API.ReportType;
  asDonut?: boolean;
  customLabelTitle?: (value: string) => string;
  customLabelContent?: (value: API.ReportItem) => string;
}> = ({ metric, asDonut = false, customLabelTitle, customLabelContent }) => {
  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id={metric.split('\\').pop()} defaultMessage={metric.split('\\').pop()} />
      </h3>

      <article>
        <PieChart
          metric={metric}
          header={false}
          asDonut={asDonut}
          customLabelTitle={customLabelTitle}
          customLabelContent={customLabelContent}
        />
      </article>
    </div>
  );
};

export default DashboardComponent;
