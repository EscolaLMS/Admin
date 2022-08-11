import { FormattedMessage } from 'umi';
import ProCard from '@ant-design/pro-card';
import { Button, Typography } from 'antd';
import './index.less';

export const DashdoardComponent: React.FC = () => {
  const { Text, Title } = Typography;

  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="your_courses" />
      </h3>
      <div className={'dashboard__card-group'}>
        <div className={'dashboard__card'}>
          <ProCard layout="center" bordered>
            Create new course
          </ProCard>
        </div>
        <div className={'dashboard__card'}>
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/3/32/Googleplex_HQ_%28cropped%29.jpg'
            }
            className={'dashboard__card-img'}
          />
          <ProCard layout="center" bordered>
            <div>
              <Title level={4}>BHP przy produkcji Big Mac Vege®</Title>
              <div>
                <Text>Opis</Text>
              </div>
              <Button>Manage Lesson</Button>
            </div>
          </ProCard>
        </div>
        <div className={'dashboard__card'}>
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/commons/3/32/Googleplex_HQ_%28cropped%29.jpg'
            }
            className={'dashboard__card-img'}
          />
          <ProCard layout="center" bordered>
            <div>
              <Title level={4}>BHP przy produkcji Big Mac Vege®</Title>
              <Button>Manage Lesson</Button>
            </div>
          </ProCard>
        </div>
      </div>
    </div>
  );
};

export default DashdoardComponent;
