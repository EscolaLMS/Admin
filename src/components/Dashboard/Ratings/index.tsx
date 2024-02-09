import { course } from '@/services/escola-lms/course';
import { questionnaireStars } from '@/services/escola-lms/questionnaire';
import { roundPercentageList } from '@/utils/utils';
import ProForm, { ProFormSelect } from '@ant-design/pro-form';
import { useModel } from '@umijs/max';
import { Empty, Rate, Row, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';
import './index.less';

interface Rates {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

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
        authors: initialState?.currentUser?.id,
      });

      if (request.success) {
        setList(request.data);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchQuestionnaireStars = async () => {
      const request = await questionnaireStars('Course', Number(courseId));

      if (request.success) {
        setRatings(request.data);
      }
      setLoading(false);
    };

    if (courseId) {
      fetchQuestionnaireStars();
    }
  }, [courseId]);

  const listOptions = list.map((item) => ({
    label: item.title,
    value: item.id,
  }));

  const ratingsPercentage = Object.keys(ratings?.rates || ({} as Record<string, number>))
    .sort()
    .map((key) => {
      // TODO: fix this
      // @ts-ignore
      const rate = ratings ? ratings?.rates[key as keyof Rates] : 0;
      if (rate === 0) {
        return 0;
      }
      return (rate / (ratings?.sum_rates as number)) * 100;
    });

  return (
    <div className="dashboard-draggable__component">
      <h3>
        <FormattedMessage id="ratings" />
      </h3>
      <article>
        <Text>
          <FormattedMessage id="ratings_description" />
        </Text>

        <ProForm
          name={'ratings'}
          onValuesChange={(_, values) => {
            setCourseId(values.courses);
          }}
          style={{ marginTop: '32px' }}
          submitter={false}
        >
          <React.Fragment>
            <ProFormSelect name="courses" options={listOptions} fieldProps={{ loading }} />
            {loading && <Spin />}
            {!loading &&
              courseId &&
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
                    {roundPercentageList(ratingsPercentage)
                      .map((rate, index) => {
                        return (
                          <li key={rate} className={'dashboard-ratings-list-item'}>
                            <Title level={5}>{index + 1}</Title>
                            <Rate disabled defaultValue={Number(index + 1)} />
                            <Title level={5} className={'dashboard-ratings-list-key'}>
                              {ratings.rates[index + 1] as number}
                            </Title>
                            <Title level={5} className={'dashboard-ratings-list-percentage'}>
                              {rate}%
                            </Title>
                          </li>
                        );
                      })
                      .reverse()}
                  </ul>
                </>
              ) : (
                <ul className={'dashboard-ratings-list dashboard-ratings-list--empty'}>
                  <Empty />
                </ul>
              ))}
          </React.Fragment>
        </ProForm>
      </article>
    </div>
  );
};

export default DashdoardComponent;
