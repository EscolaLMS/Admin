﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            access: 'loggedOut',
            component: './User/login',
          },
          {
            name: 'reset',
            path: '/user/reset-password',
            access: 'loggedOut',
            component: './User/reset',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'Welcome',
    icon: 'smile',
    access: 'dashboardPermission',
    component: './Welcome',
  },
  {
    path: '/courses',
    name: 'Courses',
    icon: 'fire',
    access: 'coursesPermission',
    routes: [
      {
        path: '/courses',
        redirect: '/courses/list',
        access: 'coursesPermission',
      },
      {
        path: '/courses/list',
        name: 'List',
        icon: 'fire',
        access: 'courseListPermission',
        component: './Courses',
      },
      {
        path: '/courses/list/:course',
        name: 'Form',
        icon: 'book',
        access: 'courseDetailsPermission',
        component: './Courses/form',
        hideInMenu: true,
      },
      {
        path: '/courses/list/:course/:tab',
        name: 'Course Form',
        icon: 'book',
        access: 'courseDetailsPermission',
        component: './Courses/form',
        hideInMenu: true,
        exact: false,
      },
      {
        path: '/courses/h5ps',
        name: 'H5Ps',
        icon: 'experiment',
        access: 'h5pListPermission',
        component: './H5P',
      },
      {
        path: '/courses/h5ps/:h5p',
        name: 'H5Ps',
        icon: 'book',
        access: 'h5pDetailsPermission',
        component: './H5P/form',
        hideInMenu: true,
      },
      {
        path: '/courses/h5ps/preview/:h5p',
        name: 'H5Ps',
        icon: 'book',
        access: 'h5pDetailsPermission',
        component: './H5P/preview',
        hideInMenu: true,
      },
      {
        path: '/courses/scorms',
        name: 'SCORMs',
        icon: 'experiment',
        access: 'scormListPermission',
        component: './Scorm',
      },
      {
        path: '/courses/scorms/preview/:uuid',
        name: 'SCORMs',
        icon: 'experiment',
        access: 'scormDetailsPermission',
        component: './Scorm/preview',
        hideInMenu: true,
      },
      {
        path: '/courses/categories',
        name: 'Categories',
        icon: 'calculator',
        access: 'categoryListPermission',
        component: './Categories',
      },
      {
        path: '/courses/webinars',
        name: 'Webinars',
        icon: 'CustomerServiceOutlined',
        access: 'webinarListPermission',
        component: './Webinars',
      },
      {
        path: '/courses/webinars/:webinar',
        access: 'webinarDetailsPermission',
        component: './Webinars/form',
        hideInMenu: true,
      },
      {
        path: '/courses/webinars/:webinar/:tab',
        access: 'webinarDetailsPermission',
        component: './Webinars/form',
        hideInMenu: true,
      },
      {
        path: '/courses/access',
        name: 'Access Requests',
        icon: 'experiment',
        access: 'courseAccessListPermission',
        component: './CourseAccess',
      },

      // TODO correct access
      {
        path: '/courses/quiz-reports',
        name: 'Quiz Reports',
        icon: 'read',
        access: 'coursesPermission',
        component: './QuizReports',
      },
      {
        path: '/courses/quiz-reports/:reportId',
        hideInMenu: true,
        name: 'Details',
        icon: 'read',
        access: 'coursesPermission',
        component: './QuizReports/details',
      },
    ],
  },
  {
    path: '/sales',
    name: 'Sales',
    access: 'salesPermission',
    icon: 'shopping-cart',
    routes: [
      {
        path: '/sales',
        redirect: '/sales/orders',
        access: 'salesPermission',
      },
      {
        path: '/sales/orders',
        name: 'Orders',
        icon: 'fund',
        access: 'orderListPermission',
        component: './Orders',
      },
      {
        path: '/sales/payments',
        name: 'Payments',
        icon: 'dollar',
        access: 'paymentListPermission',
        component: './Payments',
      },
      {
        path: '/sales/vouchers',
        name: 'Vouchers',
        icon: 'percentage',
        access: 'voucherListPermission',
        component: './Vouchers',
      },
      {
        path: '/sales/vouchers/:voucherId/',
        access: 'voucherDetailPermission',
        component: './Vouchers/form',
        hideInMenu: true,
      },
      {
        path: '/sales/products',
        name: 'Products',
        icon: 'shopping-cart',
        access: 'productsListPermission',
        component: './Products',
      },
      {
        path: '/sales/products/:id',
        access: 'productsDetailsPermission',
        component: './Products/form',
        hideInMenu: true,
      },
      {
        path: '/sales/products/:id/:tab',
        access: 'productsDetailsPermission',
        component: './Products/form',
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/users',
    name: 'Users',
    access: 'usersPermission',
    icon: 'user',
    routes: [
      {
        path: '/users',
        redirect: '/users/list',
        access: 'usersPermission',
      },
      {
        path: '/users/list',
        name: 'List',
        icon: 'user',
        access: 'userListPermission',
        component: './Users',
      },
      {
        path: '/users/list/new',
        icon: 'user',
        component: './Users/User',
        access: 'userCreatePermission',
        hideInMenu: true,
      },
      {
        name: 'Roles',
        path: '/users/roles',
        icon: 'lock',
        access: 'roleListPermission',
        component: './Roles',
      },
      {
        name: 'Permissions',
        path: '/users/roles/:name',
        icon: 'lock',
        access: 'roleDetailsPermission',
        component: './Roles/form',
        hideInMenu: true,
      },
      {
        path: '/users/groups',
        name: 'User Groups',
        icon: 'team',
        access: 'userGroupListPermission',
        component: './UserGroups',
      },
      {
        path: '/users/groups/:group',
        name: 'Form',
        icon: 'team',
        access: 'userGroupDetailsPermission',
        component: './UserGroups/form',
        hideInMenu: true,
      },
      {
        path: '/users/me',
        name: 'User',
        icon: 'user',
        access: 'userProfilePermission',
        component: './Users/me',
        hideInMenu: true,
      },
      {
        path: '/users/me/:tab',
        name: 'User Form',
        icon: 'user',
        access: 'userProfilePermission',
        component: './Users/me',
        hideInMenu: true,
      },
      {
        path: '/users/:user/:tab',
        icon: 'user',
        access: 'userDetailsPermission',
        component: './Users/User',
        hideInMenu: true,
      },
      {
        path: '/users/fields',
        icon: 'user',
        access: 'userDetailsPermission',
        component: './Users/fields',
        hideInMenu: true,
      },
    ],
  },
  {
    name: 'Analytics',
    path: '/analytics',
    access: 'analyticsPermission',
    icon: 'rise',
    routes: [
      {
        path: '/analytics',
        redirect: '/analytics/notifications',
        access: 'analyticsPermission',
      },
      {
        name: 'Notifications',
        icon: 'alert',
        path: '/analytics/notifications',
        access: 'notificationListPermission',
        component: './Notifications',
      },
      {
        name: 'reports',
        icon: 'project',
        path: '/analytics/reports',
        access: 'reportListPermission',
        component: './Reports',
      },
      {
        name: 'Logs',
        icon: 'history',
        path: '/analytics/logs',
        access: 'trackerListPermission',
        component: './Logs',
      },
    ],
  },
  {
    name: 'Configuration',
    path: '/configuration',
    access: 'configurationPermission',
    icon: 'setting',
    routes: [
      {
        path: '/configuration',
        redirect: '/configuration/files',
        access: 'configurationPermission',
      },
      {
        path: '/configuration/files',
        name: 'Files',
        icon: 'folderOpen',
        access: 'fileListPermission',
        component: './Files',
      },
      {
        path: '/configuration/settings',
        name: 'settings',
        icon: 'calculator',
        access: 'settingListPermission',
        component: './Settings',
      },
      {
        path: '/configuration/settings/:tab',
        name: 'settings',
        icon: 'calculator',
        access: 'settingListPermission',
        component: './Settings',
        hideInMenu: true,
      },
      {
        path: '/configuration/templates',
        name: 'Templates',
        icon: 'highlight',
        access: 'templateDetailsPermission',
        component: './Templates',
      },
      {
        path: '/configuration/templates/:template',
        name: 'Templates',
        icon: 'highlight',
        access: 'templateDetailsPermission',
        component: './Templates',
        hideInMenu: true,
      },
      {
        path: '/configuration/templates/:template/:id',
        name: 'Templates',
        icon: 'highlight',
        access: 'templateDetailsPermission',
        component: './Templates/form',
        hideInMenu: true,
      },
      {
        name: 'Translations',
        icon: 'translation',
        path: '/configuration/translations',
        access: 'translationListPermission',
        component: './Translations',
      },
    ],
  },
  {
    name: 'Other activities',
    path: '/other',
    access: 'otherPermission',
    icon: 'appstore',
    routes: [
      {
        path: '/other',
        redirect: '/other/consultations',
        access: 'otherPermission',
      },
      {
        path: '/other/consultations',
        name: 'Consultations',
        icon: 'interaction',
        access: 'consultationListPermission',
        component: './Consultations',
      },
      {
        path: '/other/consultation-access',
        name: 'Consultation Requests',
        icon: 'experiment',
        access: 'consultationAccessListPermission',
        component: './ConsultationsAccess',
      },
      {
        path: '/other/consultations/:consultation',
        access: 'consultationDetailsPermission',
        component: './Consultations/form',
        hideInMenu: true,
      },
      {
        path: '/other/consultations/:consultation/:tab',
        access: 'consultationDetailsPermission',
        component: './Consultations/form',
        hideInMenu: true,
      },
      {
        name: 'StationaryEvents',
        icon: 'global',
        path: '/other/stationary-events',
        access: 'stationaryEventsListPermission',
        component: './StationaryEvents',
      },
      {
        path: '/other/stationary-events/:id',
        access: 'stationaryEventsDetailsPermission',
        component: './StationaryEvents/form',
        hideInMenu: true,
      },
      {
        path: '/other/stationary-events/:id/:tab',
        access: 'stationaryEventsDetailsPermission',
        component: './StationaryEvents/form',
        hideInMenu: true,
      },
      {
        path: '/other/questionnaire',
        name: 'Questionnaire',
        icon: 'question',
        access: 'questionnaireListPermission',
        component: './Questionnaire',
      },
      {
        path: '/other/questionnaire/:questionnaireId',
        name: 'Questionnaire Form',
        access: 'questionnaireDetailPermission',
        component: './Questionnaire/form',
        hideInMenu: true,
      },
      {
        path: '/other/pages',
        name: 'Pages',
        icon: 'read',
        access: 'pageListPermission',
        component: './Pages',
      },
      {
        path: '/other/pages/:page',
        name: 'Form',
        icon: 'read',
        access: 'pageDetailsPermission',
        component: './Pages/form',
        hideInMenu: true,
      },

      {
        path: '/other/tasks',
        name: 'Tasks',
        icon: 'read',
        access: 'taskListPermission',
        component: './Tasks',
      },
      {
        path: '/other/tasks/:task',
        name: 'Form',
        icon: 'read',
        access: 'taskDetailsPermission',
        component: './Tasks/form',
        hideInMenu: true,
      },
    ],
  },
  {
    access: 'dashboardPermission',
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
