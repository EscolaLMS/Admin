import { useState, useEffect } from 'react';
import { Spin, Button } from 'antd';
import ProCard from '@ant-design/pro-card';
import { useParams, history, useIntl, FormattedMessage, useModel } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { GradesModal } from './components/gradesModal';
import { semesterSubject } from '@/services/escola-lms/semesterSubject';

export default () => {
  const params = useParams<{ subjectId?: string; tab?: string }>();
  const intl = useIntl();
  const { subjectId, tab = 'groups' } = params;
  const [data, setData] = useState<Partial<API.Subjects>>();
  const [modalGradesVisible, setModalGradesVisible] = useState(false);
  const { setInitialState, initialState } = useModel('@@initialState');

  const getSubjectById = async () => {
    const response = await semesterSubject(Number(subjectId));
    if (response.success) {
      setData({
        ...response.data,
      });
    }
  };

  useEffect(() => {
    getSubjectById();
  }, [subjectId]);

  if (!data) {
    return <Spin />;
  }

  const handleCancelModalGrades = () => setModalGradesVisible(false);

  return (
    <>
      <GradesModal
        visible={modalGradesVisible}
        onFinish={async (item) => console.log(item)}
        onVisibleChange={(value: boolean) => {
          if (value === false) {
            handleCancelModalGrades();
          }
        }}
      />
      <PageContainer
        title={
          <>
            <FormattedMessage id={data.subject?.name} />
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
                path: String(subjectId),
                breadcrumbName: intl.formatMessage({
                  id: 'form',
                }),
              },
              {
                path: '/',
                breadcrumbName: String(data.subject?.name),
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
              });

              history.push(`/teacher/subjects/${subjectId}/${key}`);
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
