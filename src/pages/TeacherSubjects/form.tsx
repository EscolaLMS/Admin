import React from 'react';
import { Spin, Button } from 'antd';
import ProCard from '@ant-design/pro-card';
import { useParams, history, useIntl, FormattedMessage, useModel, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

import { TeacherSubjectContextProvider, useTeacherSubject } from './context';
import Groups from './components/Groups';
import { Exams } from './components/Exams';

const TeacherSubjectsFormContent: React.FC<{ tab: string }> = ({ tab }) => {
  const intl = useIntl();
  const { setInitialState, initialState } = useModel('@@initialState');
  const { teacherSubjectData, semester_subject_id } = useTeacherSubject();

  if (!teacherSubjectData) {
    return <Spin />;
  }

  return (
    <PageContainer
      title={
        <>
          <FormattedMessage id={teacherSubjectData?.subject?.name} />
          {', '}
          <FormattedMessage id={tab} />
        </>
      }
      tabBarExtraContent={
        <div style={{ display: 'flex', padding: '12px', gap: '12px' }}>
          <Button type="primary" onClick={() => console.log('MSTeams')}>
            <FormattedMessage id="msTeams" defaultMessage="msTeams" />
          </Button>
          <Button type="primary" onClick={() => console.log('attendence')}>
            <FormattedMessage id="uploadAttendance" defaultMessage="uploadAttendance" />
          </Button>
          <Link to={`/teacher/subjects/${semester_subject_id}/exams?exam_id=new`}>
            <Button type="primary">
              <FormattedMessage id="uploadGrades" defaultMessage="uploadGrades" />
            </Button>
          </Link>
        </div>
      }
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'teacher',
              breadcrumbName: intl.formatMessage({
                id: 'Teacher',
              }),
            },
            {
              path: 'subjects',
              breadcrumbName: intl.formatMessage({
                id: 'Subjects',
              }),
            },
            {
              path: String(semester_subject_id),
              breadcrumbName: String(teacherSubjectData.subject?.name),
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

            history.push(`/teacher/subjects/${semester_subject_id}/${key}`);
          },
        }}
      >
        <ProCard.TabPane key="groups" tab={<FormattedMessage id="groups" />}>
          <Groups />
        </ProCard.TabPane>
        <ProCard.TabPane key="students" tab={<FormattedMessage id="students" />}>
          <p>STUDENTS</p>
        </ProCard.TabPane>
        <ProCard.TabPane key="exams" tab={<FormattedMessage id="exams" />}>
          <Exams />
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
  );
};

export default () => {
  const params = useParams<{ subjectId?: string; tab?: string }>();
  const { subjectId, tab = 'groups' } = params;

  return (
    <TeacherSubjectContextProvider semester_subject_id={Number(subjectId)}>
      <TeacherSubjectsFormContent tab={tab} />
    </TeacherSubjectContextProvider>
  );
};
