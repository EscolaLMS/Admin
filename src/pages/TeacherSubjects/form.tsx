import { useState, useEffect } from 'react';
import { Spin, Button } from 'antd';
import ProCard from '@ant-design/pro-card';
import { useParams, history, useIntl, FormattedMessage, useModel } from 'umi';
import { getCourse } from '@/services/escola-lms/course';
import { PageContainer } from '@ant-design/pro-layout';
import { categoriesArrToIds, tagsArrToIds } from '@/utils/utils';
import { GradesModal } from './components/gradesModal';

export default () => {
  const params = useParams<{ subject?: string; tab?: string }>();
  const intl = useIntl();
  const { subject, tab = 'groups' } = params;
  const [data, setData] = useState<Partial<API.Course>>();
  const [modalGradesVisible, setModalGradesVisible] = useState(false);
  const [fromDateValidation, setFromDateValidation] = useState<Date | undefined | null>(null);
  const [toDateValidation, setToDateValidation] = useState<Date | undefined | null>(null);
  const { setInitialState, initialState } = useModel('@@initialState');

  useEffect(() => {
    //TODO: Get correct data when possible
    const fetch = async () => {
      const response = await getCourse(Number(subject));

      if (response.success) {
        setData({
          ...response.data,
          categories: response.data.categories?.map(categoriesArrToIds),
          tags: response.data.tags?.map(tagsArrToIds),
          summary: response.data.summary || '',
        });

        setFromDateValidation(response.data.active_from);
        setToDateValidation(response.data.active_to);
      }
    };
    fetch();
  }, [subject]);

  if (!data) {
    return <Spin />;
  }

  const handleCancelModalGrades = () => setModalGradesVisible(false);

  return (
    <>
      <GradesModal
        visible={modalGradesVisible}
        handleOk={() => console.log('ok')}
        handleCancel={handleCancelModalGrades}
      />
      <PageContainer
        title={
          <>
            <FormattedMessage id={data.title ?? 'course'} />
            {', '}
            <FormattedMessage id={tab} />
          </>
        }
        tabBarExtraContent={
          <div style={{ display: 'flex', padding: '12px', gap: '12px' }}>
            <Button type="primary" key="primary" onClick={() => console.log('MSTeams')}>
              <FormattedMessage id="msTeams" defaultMessage="msTeams" />
            </Button>
            <Button type="primary" key="primary" onClick={() => console.log('attendence')}>
              <FormattedMessage id="uploadAttendance" defaultMessage="uploadAttendance" />
            </Button>
            <Button type="primary" key="primary" onClick={() => setModalGradesVisible(true)}>
              <FormattedMessage id="uploadGrades" defaultMessage="uploadGrades" />
            </Button>
          </div>
        }
        header={{
          breadcrumb: {
            routes: [
              {
                path: 'subjects',
                breadcrumbName: intl.formatMessage({
                  id: 'Subjects',
                }),
              },
              {
                path: String(subject),
                breadcrumbName: intl.formatMessage({
                  id: 'form',
                }),
              },
              {
                path: '/',
                breadcrumbName: String(data.title),
              },
              {
                path: String(tab),
                breadcrumbName: intl.formatMessage({ id: tab, defaultMessage: String(tab) }),
              },
            ],
          },
        }}
      >
        <ProCard
          bodyStyle={{ padding: '24px' }}
          tabs={{
            type: 'card',
            activeKey: tab,
            onChange: (key) => {
              setInitialState({
                ...initialState,
                collapsed: key === 'program',
              });

              history.push(`/teacher/subjects/${subject}/${key}`);
            },
          }}
        >
          <ProCard.TabPane key="groups" tab={<FormattedMessage id="groups" />}>
            <p>GROUPS</p>
          </ProCard.TabPane>
          <ProCard.TabPane key="students" tab={<FormattedMessage id="students" />}>
            <p>STUDENTS</p>
          </ProCard.TabPane>
          <ProCard.TabPane
            key="examPartialGrades"
            tab={<FormattedMessage id="examPartialGrades" />}
          >
            <p>EXAMS - PARTIAL GRADES</p>
          </ProCard.TabPane>
          <ProCard.TabPane key="schedule" tab={<FormattedMessage id="schedule" />}>
            <p>SCHEDULE</p>
          </ProCard.TabPane>
          <ProCard.TabPane key="attendance" tab={<FormattedMessage id="attendance" />}>
            <p>ATTENDENCE</p>
          </ProCard.TabPane>
          <ProCard.TabPane key="ratingScale" tab={<FormattedMessage id="ratingScale" />}>
            <p>RATING SCALE</p>
          </ProCard.TabPane>
          <ProCard.TabPane key="finalGrades" tab={<FormattedMessage id="finalGrades" />}>
            <p>FINAL GRADES</p>
          </ProCard.TabPane>
        </ProCard>
      </PageContainer>
    </>
  );
};
