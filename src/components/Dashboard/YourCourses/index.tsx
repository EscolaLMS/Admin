import { FormattedMessage, Link } from 'umi';
import ProCard from '@ant-design/pro-card';
import { Button, Spin, Typography } from 'antd';
import './index.less';
import { useEffect, useState } from 'react';
import { course } from '@/services/escola-lms/course';
import { PlusCircleFilled } from '@ant-design/icons';
import { useModel } from '@@/plugin-model/useModel';

const truncate = (str: string, n: number) => {
  return str.length > n ? str.substring(0, n - 1) + '...' : str;
};

export const DashdoardComponent: React.FC = () => {
  const [list, setList] = useState<API.Course[]>([]);
  const { initialState } = useModel('@@initialState');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const request = await course({
        author_id: initialState?.currentUser?.id,
      });

      if (request.success) {
        setList(request.data);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const { Text, Title } = Typography;

  if (loading) {
    return <Spin />;
  }

  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="your_courses" />
      </h3>
      <div className={'dashboard__card-group'}>
        <div className={'dashboard__card'}>
          <ProCard layout="center" bordered>
            <Link to={`/courses/list/new`} key={'new_course'}>
              <PlusCircleFilled
                style={{
                  fontSize: '52px',
                  marginBottom: '36px',
                }}
              />
              <Title level={5}>
                <FormattedMessage id="new_course" />
              </Title>
            </Link>
          </ProCard>
        </div>
        {list.map((item) => (
          <div className={'dashboard__card'} key={item.id}>
            <img src={item.image_url} alt={item.title} className={'dashboard__card-img'} />
            <ProCard
              actions={[
                <Link to={`/courses/list/${item.id}`} key={item.id}>
                  <Button>
                    <FormattedMessage id="manage_course" />
                  </Button>
                </Link>,
              ]}
            >
              {item.title && <Title level={5}>{truncate(item.title, 40)}</Title>}
              {item.summary && <Text>{truncate(item.summary, 60)}</Text>}
            </ProCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashdoardComponent;
