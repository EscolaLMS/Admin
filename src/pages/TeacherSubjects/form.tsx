import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Spin } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { FormattedMessage, Link, history, useIntl, useModel, useParams } from 'umi';

import PERMISSIONS from '@/consts/permissions';
import { isUserHavePermissions } from '@/services/escola-lms/permissions';
import { Attendances } from './components/Attendances';
import { ClassRegister } from './components/ClassRegister';
import { Exams } from './components/Exams';
import { FileExportsHistory } from './components/FileExportsHistory';
import { FinalGradesList } from './components/FinalGradesList';
import { GradesScale } from './components/GradesScale';
import { Groups } from './components/Groups';
import { Schedule } from './components/Schedule';
import { Students } from './components/Students';
import { TeacherSubjectContextProvider, useTeacherSubject } from './context';

const TeacherSubjectsFormContent: React.FC<{ tab: string }> = ({ tab }) => {
  const intl = useIntl();
  const { setInitialState, initialState } = useModel('@@initialState');
  const { teacherSubjectData, semester_subject_id, tutors } = useTeacherSubject();

  const currentUserHasPermissions = useCallback(
    isUserHavePermissions(initialState?.currentUser as API.UserItem),
    [initialState?.currentUser],
  );

  const showGradeScale = useMemo(
    () =>
      !!tutors.data.find(({ id }) => id === initialState?.currentUser?.id) ||
      currentUserHasPermissions(PERMISSIONS.TeacherListGradeScale),
    [],
  );

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
                id: 'menu.Teacher',
              }),
            },
            {
              path: 'subjects',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Teacher.Subjects',
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
          <Students />
        </ProCard.TabPane>
        <ProCard.TabPane key="exams" tab={<FormattedMessage id="exams" />}>
          <Exams />
        </ProCard.TabPane>
        <ProCard.TabPane key="schedule" tab={<FormattedMessage id="schedule" />}>
          <Schedule />
        </ProCard.TabPane>
        <ProCard.TabPane key="class-register" tab={<FormattedMessage id="class-register" />}>
          <ClassRegister />
        </ProCard.TabPane>
        <ProCard.TabPane key="attendance" tab={<FormattedMessage id="attendance" />}>
          <Attendances />
        </ProCard.TabPane>
        {showGradeScale && (
          <ProCard.TabPane key="grades-scale" tab={<FormattedMessage id="grades-scale" />}>
            <GradesScale />
          </ProCard.TabPane>
        )}
        <ProCard.TabPane key="final-grades" tab={<FormattedMessage id="final-grades" />}>
          <FinalGradesList />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="file-exports-history"
          tab={<FormattedMessage id="file-exports-history" />}
        >
          <FileExportsHistory />
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
