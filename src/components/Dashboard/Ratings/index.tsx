import { FormattedMessage } from 'umi';
import { Empty, Rate, Row, Spin, Typography } from 'antd';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import { course } from '@/services/escola-lms/course';
import { questionnaireStars } from '@/services/escola-lms/questionnaire';
import { useEffect, useState } from 'react';
import { useModel } from '@@/plugin-model/useModel';
import './index.less';

export const DashdoardComponent: React.FC = () => {
  const { Text, Title } = Typography;
  const [list, setList] = useState<API.Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { initialState } = useModel('@@initialState');
  const [courseId, setCourseId] = useState<number | undefined>(undefined);
  const [ratings, setRatings] = useState<undefined | API.QuestionnaireStars>(undefined);

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

  useEffect(() => {
    const fetchQuestionnaireStars = async () => {
      const request = await questionnaireStars('Course', Number(courseId));

      if (request.success) {
        setRatings(request.data);
      }
    };

    if (courseId) {
      fetchQuestionnaireStars();
    }
  }, [courseId]);

  const listOptions = list.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="ratings" />
      </h3>
      <article>
        <Text>
          <FormattedMessage id="ratings_description" />
        </Text>

        {loading ? (
          <div>
            <Spin />
          </div>
        ) : (
          <ProForm
            name={'ratings'}
            onValuesChange={(_, values) => {
              setCourseId(values.courses);
            }}
            style={{ marginTop: '32px' }}
            submitter={false}
          >
            <ProFormSelect name="courses" options={listOptions} />
            {courseId &&
              (ratings?.count_answers && ratings?.count_answers > 0 ? (
                <>
                  <Row align={'middle'}>
                    <Title
                      level={2}
                      style={{
                        marginBottom: 0,
                        marginRight: '12px',
                      }}
                    >
                      {Number(ratings.avg_rate).toFixed(2)}
                    </Title>
                    <Rate disabled defaultValue={Number(ratings.avg_rate)} />
                  </Row>
                  <ul className={'dashboard-ratings-list'}>
                    {Object.keys(ratings.rates)
                      .reverse()
                      .map((key) => (
                        <li key={key} className={'dashboard-ratings-list-item'}>
                          <Title level={5}>{key}</Title>
                          <Rate disabled defaultValue={Number(key)} />
                          <Title level={5} className={'dashboard-ratings-list-key'}>
                            {ratings.rates[key]}
                          </Title>
                          <Title level={5} className={'dashboard-ratings-list-percentage'}>
                            {((ratings.rates[key] / ratings.count_answers) * 100).toFixed(0)}%
                          </Title>
                        </li>
                      ))}
                  </ul>
                </>
              ) : (
                <ul className={'dashboard-ratings-list dashboard-ratings-list--empty'}>
                  <Empty />
                </ul>
              ))}
          </ProForm>
        )}
      </article>
    </div>
  );
};

export default DashdoardComponent;
