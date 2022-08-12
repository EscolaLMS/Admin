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
            <Title level={4}>
              <FormattedMessage id="tutorial_card_left_title" />
            </Title>
            <Text>
              <FormattedMessage id="tutorial_card_left_description" />
            </Text>
          </Col>
          <Col span={12}>
            <ProCard
              bodyStyle={{
                background: '#FFED8E',
                borderRadius: '8px',
              }}
            >
              <Row align={'middle'} justify={'space-evenly'}>
                <div>
                  <Title level={5}>
                    <FormattedMessage id="tutorial_card_right_title" />
                  </Title>
                  <Text>
                    <FormattedMessage id="tutorial_card_right_description" />
                  </Text>
                </div>
                <div>
                  <Button
                    type="primary"
                    href={'https://docs.wellms.io/app-guide/'}
                    target={'_blank'}
                  >
                    <FormattedMessage id="learn_more" />
                  </Button>
                </div>
              </Row>
            </ProCard>
          </Col>
        </Row>
      </article>
    </div>
  );
};

export default DashdoardComponent;
