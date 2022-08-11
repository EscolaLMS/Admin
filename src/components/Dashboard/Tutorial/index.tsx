import { FormattedMessage } from 'umi';
import { Button, Col, Row, Typography } from 'antd';
import ProCard from '@ant-design/pro-card';

export const DashdoardComponent: React.FC = () => {
  const { Title, Text } = Typography;

  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="tutorial" />
      </h3>
      <article>
        <Row align={'middle'}>
          <Col span={12}>
            <Title level={4}>You’re ready to share your knowledge.</Title>
            <Text>
              Use our best practices and recommendations to plan, produce, and publish a
              substantive, high-quality course.
            </Text>
          </Col>
          <Col span={12}>
            <ProCard
              bodyStyle={{
                background: '#FFED8E',
              }}
            >
              <div>
                <Title level={5}>Not sure how to create a course? </Title>
                <Text>Check out our guide and learn how to do it.</Text>
              </div>
              <div>
                <Button type="primary">Learn more</Button>
              </div>
            </ProCard>
          </Col>
        </Row>
      </article>
    </div>
  );
};

export default DashdoardComponent;
