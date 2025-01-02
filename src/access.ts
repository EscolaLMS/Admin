/**
 * @see https://umijs.org/docs/max/access#access
 * */
// export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
//   const { currentUser } = initialState ?? {};
//   return {
//     canAdmin: currentUser,
//   };
// }

import PACKAGES from '@/consts/packages';
import PERMISSIONS from '@/consts/permissions';
import { isUserHavePermissions } from '@/services/escola-lms/permissions';
import { createHavePackageInstalled } from './utils/access';

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

  // TODO #1005 implement minimal versions
  const havePackageInstalled = createHavePackageInstalled(initialState?.packages);

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

  // Quiz reports
  const canAccessQuizReports =
    !haveSettingsInDashboard('hideInMenu-CoursesQuiz-reports', true) &&
    havePackageInstalled(PACKAGES.TopicTypeGift);

  const canAccessQuizReportsList =
    havePermissionsInDashboard(PERMISSIONS.QuizAttemptList) && canAccessQuizReports;

  const canAccessQuizReportsListSelf =
    havePermissionsInDashboard(PERMISSIONS.QuizAttemptListSelf) && canAccessQuizReports;

  // H5P
  const canAccessH5P =
    !haveSettingsInDashboard('hideInMenu-CoursesH5ps', true) &&
    havePackageInstalled(PACKAGES.HeadlessH5p);
  const canAccessH5PList = havePermissionsInDashboard(PERMISSIONS.H5PList) && canAccessH5P;
  const canAccessH5PAuthorList =
    havePermissionsInDashboard(PERMISSIONS.H5PAuthorList) && canAccessH5P;

  const canAccessH5PDetails = havePermissionsInDashboard(PERMISSIONS.H5PRead) && canAccessH5P;

  return {
    dashboardPermission,

    userProfilePermission: havePermissionsInDashboard(PERMISSIONS.UserReadSelf),

    userListPermission: havePermissionsInDashboard(PERMISSIONS.UserList),
    userDetailsPermission: havePermissionsInDashboard(PERMISSIONS.UserRead),
    userCreatePermission: havePermissionsInDashboard(PERMISSIONS.UserCreate),

    UserBulkNotificationListPermission: havePermissionsInDashboard(
      PERMISSIONS.UserBulkNotificationList,
    ),
    UserBulkNotificationCreatePermission: havePermissionsInDashboard(
      PERMISSIONS.UserBulkNotificationCreate,
    ),

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
        PERMISSIONS.ScormListOwn,
        PERMISSIONS.CategoryList,
        PERMISSIONS.WebinarList,
      ) && !haveSettingsInDashboard('hideInMenu-Courses', true),

    courseListPermission:
      havePermissionsInDashboard(PERMISSIONS.CourseList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesList', true),
    courseDetailsPermission: havePermissionsInDashboard(PERMISSIONS.CourseRead),

    h5pListPermission: canAccessH5PList || canAccessH5PAuthorList,
    h5pDetailsPermission: canAccessH5PDetails,

    otherPermission: havePermissionsInDashboard(
      PERMISSIONS.ConsultationList,
      PERMISSIONS.StationaryEventsList,
      PERMISSIONS.QuestionnaireList,
      PERMISSIONS.PageList,
    ),

    scormListPermission:
      havePermissionsInDashboard(PERMISSIONS.ScormList, PERMISSIONS.ScormListOwn) &&
      !haveSettingsInDashboard('hideInMenu-CoursesH5ps', true) &&
      !haveSettingsInDashboard('disableTopicType-SCORM', true),
    scormDetailsPermission: havePermissionsInDashboard(
      PERMISSIONS.ScormRead,
      PERMISSIONS.ScormReadOwn,
    ),

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
      havePackageInstalled(PACKAGES.Translations),
    translationDetailPermission: havePermissionsInDashboard(PERMISSIONS.TranslationRead),
    adminTranslationListPermission:
      havePermissionsInDashboard(PERMISSIONS.TranslationList) &&
      !haveSettingsInDashboard('hideInMenu-ConfigurationAdminTranslations', true) &&
      havePackageInstalled(PACKAGES.Translations),

    loggedOut: !currentUser,

    taskListPermission: havePermissionsInDashboard(PERMISSIONS.TaskList),
    taskDetailsPermission: havePermissionsInDashboard(PERMISSIONS.TaskList),

    courseAccessListPermission:
      havePermissionsInDashboard(PERMISSIONS.CourseAccessList) &&
      !haveSettingsInDashboard('hideInMenu-CoursesAccess', true) &&
      havePackageInstalled(PACKAGES.CourseAccess),

    consultationAccessListPermission:
      havePermissionsInDashboard(PERMISSIONS.ConsultationAccessList) &&
      !haveSettingsInDashboard('hideInMenu-OtherConsultation-access', true),

    coursesQuizReportsListPermission: canAccessQuizReportsList || canAccessQuizReportsListSelf,

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
      havePackageInstalled(PACKAGES.PCGIntegration),

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
      havePackageInstalled(PACKAGES.PCGIntegration) &&
      havePackageInstalled(PACKAGES.PCGGrades) &&
      havePackageInstalled(PACKAGES.PCGAttendances),
    competencyChallengesPermission:
      (!haveSettingsInDashboard('hideInMenu-Competency-challengesList', true) &&
        havePackageInstalled(PACKAGES.CompetencyChallenges) &&
        havePermissionsInDashboard(
          PERMISSIONS.ListCompetencyChallenges,
          PERMISSIONS.ReadCompetencyChallenges,
          PERMISSIONS.DeleteCompetencyChallenges,
        )) ||
      (havePackageInstalled(PACKAGES.CompetencyChallenges) &&
        havePermissionsInDashboard(
          PERMISSIONS.ReadCompetencyChallenges,
          PERMISSIONS.CreateCompetencyChallenges,
          PERMISSIONS.UpdateCompetencyChallenges,
          PERMISSIONS.CompetencyChallengeScaleCreate,
          PERMISSIONS.CompetencyChallengeScaleUpdate,
          PERMISSIONS.CompetencyChallengeScaleDelete,
        )),
    competencyChallengesListPermission:
      !haveSettingsInDashboard('hideInMenu-Competency-challengesList', true) &&
      havePackageInstalled(PACKAGES.CompetencyChallenges) &&
      havePermissionsInDashboard(
        PERMISSIONS.ListCompetencyChallenges,
        PERMISSIONS.ReadCompetencyChallenges,
        PERMISSIONS.DeleteCompetencyChallenges,
      ),
    competencyChallengesFormPermission:
      havePackageInstalled(PACKAGES.CompetencyChallenges) &&
      havePermissionsInDashboard(
        PERMISSIONS.ReadCompetencyChallenges,
        PERMISSIONS.CreateCompetencyChallenges,
        PERMISSIONS.UpdateCompetencyChallenges,
        PERMISSIONS.CompetencyChallengeScaleCreate,
        PERMISSIONS.CompetencyChallengeScaleUpdate,
        PERMISSIONS.CompetencyChallengeScaleDelete,
      ),
    tasksPermission: () => true,
    // DICTIONARY
    dictionaryList:
      !haveSettingsInDashboard('hideInMenu-OtherDictionary', true) &&
      havePackageInstalled(PACKAGES.Dictionary) &&
      havePermissionsInDashboard(PERMISSIONS.DictionaryList, PERMISSIONS.DictionaryRead),
    dictionaryCreate:
      havePackageInstalled(PACKAGES.Dictionary) &&
      havePermissionsInDashboard(PERMISSIONS.DictionaryCreate),

    dictionaryWordList:
      havePackageInstalled(PACKAGES.Dictionary) &&
      havePermissionsInDashboard(PERMISSIONS.DictionaryWordList, PERMISSIONS.DictionaryWordRead),
    dictionaryWordCreate:
      havePackageInstalled(PACKAGES.Dictionary) &&
      havePermissionsInDashboard(PERMISSIONS.DictionaryWordCreate),
  };
}
