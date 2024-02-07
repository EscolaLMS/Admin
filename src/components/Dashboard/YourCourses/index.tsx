import ResponsiveImage from '@/components/ResponsiveImage';
import { course } from '@/services/escola-lms/course';
import { PlusCircleFilled } from '@ant-design/icons';
import ProCard from '@ant-design/pro-card';
import { useModel } from '@umijs/max';
import { Button, Image, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { FormattedMessage, Link } from 'umi';
import './index.less';

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
        authors: initialState?.currentUser?.id,
        // Default get courses by latest
        order: 'DESC',
        order_by: 'created_at',
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
        <div
          className={'dashboard__card'}
          style={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
          }}
        >
          <ProCard layout="center">
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
            {item.image_path ? (
              <ResponsiveImage
                path={item.image_path}
                size={240}
                width={240}
                alt={item.title}
                className={'dashboard__card-img'}
              />
            ) : (
              <div className="dashboard__card-img-placeholder">
                <Image width={240} src={'image_placeholder.svg'} preview={false} alt="LMS Image" />
              </div>
            )}
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
