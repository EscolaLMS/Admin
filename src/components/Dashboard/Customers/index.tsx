import { FormattedMessage } from 'umi';

export const DashboardComponent: React.FC = () => {
  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="customers" />
      </h3>
      <article>
        <div>This Dashboard component is not yet implemented. Sorry</div>
      </article>
    </div>
  );
};

export default DashboardComponent;
