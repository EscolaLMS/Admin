import Statistics from '@/components/Statistics';
import { FormattedMessage } from 'umi';

export const DashdoardComponent: React.FC = () => {
  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="hall_of_fame" />
      </h3>
      <article>
        <div>
          <Statistics metric="EscolaLms\Reports\Metrics\CoursesPopularityMetric" />
        </div>
      </article>
    </div>
  );
};

export default DashdoardComponent;
