import PERMISSIONS from '@/consts/permissions';
import { isUserHavePermissions } from '@/services/escola-lms/permissions';

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function (initialState: {
  currentUser: API.UserItem;
  config: API.Setting[];
  packages: Record<string, string>;
}) {
  const currentUser = initialState?.currentUser;

  const havePermissions = isUserHavePermissions(currentUser);
  const dashboardPermission = havePermissions(PERMISSIONS.CoreDashboardAccess);
  const havePermissionsInDashboard = (...permissions: PERMISSIONS[]) => {
    return dashboardPermission && havePermissions(...permissions);
  };

  // TODO implement minimal versions
  const havePackageInstalled = (
    packageName: string,
    // ,minVersion: string = '0.0.0'
  ) => {
    return initialState.packages && initialState.packages[packageName];
  };

  const haveSettingsInDashboard = (
    settingName: string,
    expectedValue: string | number | boolean,
  ): boolean => {
    const userRoles = currentUser?.roles || [];
    const settingData = initialState?.config?.find(({ key }) => key === settingName)?.data;
    if (Array.isArray(userRoles) && Array.isArray(settingData)) {
      return userRoles.every((role) => settingData.includes(role));
    }
    return settingData === expectedValue;
  };

  return {
    dashboardPermission,

    userProfilePermission: havePermissionsInDashboard(PERMISSIONS.UserReadSelf),

    userListPermission: havePermissionsInDashboard(PERMISSIONS.UserList),
    userDetailsPermission: havePermissionsInDashboard(PERMISSIONS.UserRead),
    userCreatePermission: havePermissionsInDashboard(PERMISSIONS.UserCreate),

    userGroupListPermission: havePermissionsInDashboard(PERMISSIONS.UserGroupList),
    userGroupDetailsPermission: havePermissionsInDashboard(PERMISSIONS.UserGroupRead),

    analyticsPermission: havePermissionsInDashboard(
      PERMISSIONS.NotificationListAll,
      PERMISSIONS.ReportList,
      PERMISSIONS.TrackerList,
    ),

    configurationPermission: havePermissionsInDashboard(
      PERMISSIONS.FileList,
      PERMISSIONS.SettingsList,
      PERMISSIONS.TemplateRead,
      PERMISSIONS.TranslationList,
    ),

    orderListPermission: havePermissionsInDashboard(PERMISSIONS.CartOrderList),

    paymentListPermission: havePermissionsInDashboard(PERMISSIONS.PaymentList),

    coursesPermission:
      havePermissionsInDashboard(
        PERMISSIONS.CourseList,
        PERMISSIONS.H5PList,
        PERMISSIONS.ScormList,
        PERMISSIONS.CategoryList,
        PERMISSIONS.WebinarList,
      ) && !haveSettingsInDashboard('hideInMenu-Courses', true),

    courseListPermission:
      havePermissionsInDashboard(PERMISSIONS.CourseList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesList', true),
    courseDetailsPermission: havePermissionsInDashboard(PERMISSIONS.CourseRead),

    h5pListPermission:
      havePermissionsInDashboard(PERMISSIONS.H5PList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesH5ps', true),
    h5pDetailsPermission: havePermissionsInDashboard(PERMISSIONS.H5PRead),

    otherPermission: havePermissionsInDashboard(
      PERMISSIONS.ConsultationList,
      PERMISSIONS.StationaryEventsList,
      PERMISSIONS.QuestionnaireList,
      PERMISSIONS.PageList,
    ),

    scormListPermission:
      havePermissionsInDashboard(PERMISSIONS.ScormList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesH5ps', true) &&
      !haveSettingsInDashboard('disableTopicType-SCORM', true),
    scormDetailsPermission: havePermissionsInDashboard(PERMISSIONS.ScormRead),

    pageListPermission: havePermissionsInDashboard(PERMISSIONS.PageList),
    pageDetailsPermission: havePermissionsInDashboard(PERMISSIONS.PageRead),

    templateListPermission: havePermissionsInDashboard(PERMISSIONS.TemplateList),
    templateDetailsPermission: havePermissionsInDashboard(PERMISSIONS.TemplateRead),

    fileListPermission: havePermissionsInDashboard(PERMISSIONS.FileList),

    categoryListPermission:
      havePermissionsInDashboard(PERMISSIONS.CategoryList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesCategories', true),

    salesPermission:
      havePermissionsInDashboard(
        PERMISSIONS.CartOrderList,
        PERMISSIONS.PaymentList,
        PERMISSIONS.VoucherList,
        PERMISSIONS.ProductsManage,
      ) && !haveSettingsInDashboard('disable-ECommerce', true),

    certificatesPermission: !haveSettingsInDashboard('disable-Certificates', true),

    settingListPermission: havePermissionsInDashboard(PERMISSIONS.SettingsList),

    roleListPermission: havePermissionsInDashboard(PERMISSIONS.PermisionRoleList),
    roleDetailsPermission: havePermissionsInDashboard(PERMISSIONS.PermissionRoleUpdate),

    notificationListPermission: havePermissionsInDashboard(PERMISSIONS.NotificationListAll),

    reportListPermission:
      havePermissionsInDashboard(PERMISSIONS.ReportList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesCategories', true),

    usersPermission: havePermissionsInDashboard(
      PERMISSIONS.UserList,
      PERMISSIONS.PermisionRoleList,
      PERMISSIONS.UserGroupList,
    ),

    questionnaireListPermission:
      havePermissionsInDashboard(PERMISSIONS.QuestionnaireList) &&
      !haveSettingsInDashboard('hideInMenu-OtherQuestionnaire', true),
    questionnaireDetailPermission: havePermissionsInDashboard(PERMISSIONS.QuestionnaireRead),

    webinarListPermission:
      havePermissionsInDashboard(PERMISSIONS.WebinarList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesWebinars', true),
    webinarDetailsPermission: havePermissionsInDashboard(PERMISSIONS.WebinarRead),

    consultationListPermission: havePermissionsInDashboard(PERMISSIONS.ConsultationList),
    consultationDetailsPermission: havePermissionsInDashboard(PERMISSIONS.ConsultationRead),

    stationaryEventsListPermission:
      havePermissionsInDashboard(PERMISSIONS.StationaryEventsList) &&
      !haveSettingsInDashboard('hideInMenu-OtherStationary-events', true),

    stationaryEventsDetailsPermission: havePermissionsInDashboard(PERMISSIONS.StationaryEventsRead),

    productsDetailsPermission: havePermissionsInDashboard(PERMISSIONS.ProductsList),
    productsListPermission: havePermissionsInDashboard(PERMISSIONS.ProductsManage),

    trackerListPermission: havePermissionsInDashboard(PERMISSIONS.TrackerList),

    voucherListPermission: havePermissionsInDashboard(PERMISSIONS.VoucherList),
    voucherDetailPermission: havePermissionsInDashboard(PERMISSIONS.VoucherRead),

    translationListPermission:
      havePermissionsInDashboard(PERMISSIONS.TranslationList) &&
      !haveSettingsInDashboard('hideInMenu-ConfigurationTranslations', true) &&
      havePackageInstalled('escolalms/translations'),
    translationDetailPermission: havePermissionsInDashboard(PERMISSIONS.TranslationRead),
    adminTranslationListPermission:
      havePermissionsInDashboard(PERMISSIONS.TranslationList) &&
      !haveSettingsInDashboard('hideInMenu-ConfigurationAdminTranslations', true) &&
      havePackageInstalled('escolalms/translations'),

    loggedOut: !currentUser,

    taskListPermission: havePermissionsInDashboard(PERMISSIONS.TaskList),
    taskDetailsPermission: havePermissionsInDashboard(PERMISSIONS.TaskList),

    courseAccessListPermission:
      havePermissionsInDashboard(PERMISSIONS.CourseAccessList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesAccess', true) &&
      havePackageInstalled('escolalms/course-access'),

    consultationAccessListPermission:
      havePermissionsInDashboard(PERMISSIONS.ConsultationAccessList) &&
      !haveSettingsInDashboard('hideInMenu-OtherConsultation-access', true),

    coursesQuizReportsListPermission:
      havePermissionsInDashboard(PERMISSIONS.QuizAttemptList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesQuiz-reports', true) &&
      havePackageInstalled('escolalms/topic-type-gift'),

    teacherPermission:
      havePermissionsInDashboard(
        PERMISSIONS.PCGListSemesterSubjects,
        PERMISSIONS.PCGListSemesters,
        PERMISSIONS.PCGListAcademicYears,
      ) && !haveSettingsInDashboard('hideInMenu-Teacher', true),

    teacherSubjectListPermission:
      havePermissionsInDashboard(
        PERMISSIONS.PCGListSemesterSubjects,
        PERMISSIONS.PCGListSemesters,
        PERMISSIONS.PCGListAcademicYears,
      ) &&
      !haveSettingsInDashboard('hideInMenu-TeacherSubjects', true) &&
      havePackageInstalled('escolalms/pcg-integration'),

    teacherSubjectDetailsPermission:
      havePermissionsInDashboard(
        PERMISSIONS.TeacherListExamResult,
        PERMISSIONS.TeacherListGradeTerm,
        PERMISSIONS.TeacherListAttendance,
        PERMISSIONS.TeacherListGradeScale,
        PERMISSIONS.TeacherListFinalGrade,
        PERMISSIONS.TeacherSaveExamResult,
        PERMISSIONS.TeacherSaveAttendance,
        PERMISSIONS.TeacherSaveFinalGrade,
        PERMISSIONS.TeacherDeleteExamResult,
      ) &&
      !haveSettingsInDashboard('hideInMenu-TeacherSubjects', true) &&
      havePackageInstalled('escolalms/pcg-integration') &&
      havePackageInstalled('escolalms/pcg-grades') &&
      havePackageInstalled('escolalms/pcg-attendances'),
    competencyChallengesPermission:
      havePermissionsInDashboard(
        PERMISSIONS.CompetencyChallengeScaleCreate,
        PERMISSIONS.CompetencyChallengeScaleUpdate,
        PERMISSIONS.CompetencyChallengeScaleDelete,
        PERMISSIONS.CreateCompetencyChallenges,
        PERMISSIONS.ReadCompetencyChallenges,
        PERMISSIONS.UpdateCompetencyChallenges,
        PERMISSIONS.DeleteCompetencyChallenges,
        PERMISSIONS.ListCompetencyChallenges,
      ) && havePackageInstalled('escolalms/competency-challenges'),
    tasksPermission: () => true,
  };
}
