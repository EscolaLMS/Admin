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
    path: '/users',
    name: 'user',
    routes: [
      {
        path: '/users',
        redirect: '/users/list',
      },
      {
        path: '/users/list',
        name: 'Users',
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
    ],
  },
  {
    path: '/user_groups',
    name: 'User Groups',
    icon: 'team',
    access: 'userGroupListPermission',
    component: './UserGroups',
  },
  {
    path: '/user_groups/:group',
    name: 'Form',
    icon: 'team',
    access: 'userGroupDetailsPermission',
    component: './UserGroups/form',
    hideInMenu: true,
  },
  {
    path: '/sales',
    name: 'sales',
    routes: [
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
    ],
  },
  {
    path: '/courses',
    name: 'Courses',
    routes: [
      {
        path: '/courses',
        redirect: '/courses/list',
      },
      {
        path: '/courses/list',
        name: 'Courses',
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
    ],
  },
  {
    name: 'Consultations',
    icon: 'interaction',
    path: '/consultations',
    access: 'consultationListPermission',
    component: './Consultations',
  },
  {
    path: '/consultations/:consultation',
    access: 'consultationDetailsPermission',
    component: './Consultations/form',
    hideInMenu: true,
  },
  {
    path: '/consultations/:consultation/:tab',
    access: 'consultationDetailsPermission',
    component: './Consultations/form',
    hideInMenu: true,
  },

  {
    name: 'StationaryEvents',
    icon: 'global',
    path: '/stationary-events',
    access: 'stationaryEventsListPermission',
    component: './StationaryEvents',
  },
  {
    path: '/stationary-events/:id',
    access: 'stationaryEventsDetailsPermission',
    component: './StationaryEvents/form',
    hideInMenu: true,
  },

  {
    path: '/stationary-events/:id/:tab',
    access: 'stationaryEventsDetailsPermission',
    component: './StationaryEvents/form',
    hideInMenu: true,
  },

  //

  {
    name: 'Products',
    icon: 'shopping-cart',
    path: '/products',
    access: 'productsListPermission',
    component: './Products',
  },
  {
    path: '/products/:id',
    access: 'productsDetailsPermission',
    component: './Products/form',
    hideInMenu: true,
  },

  {
    path: '/products/:id/:tab',
    access: 'productsDetailsPermission',
    component: './Products/form',
    hideInMenu: true,
  },

  //

  {
    name: 'Webinars',
    icon: 'CustomerServiceOutlined',
    path: '/webinars',
    access: 'webinarListPermission',
    component: './Webinars',
  },
  {
    path: '/webinars/:webinar',
    access: 'consultationDetailsPermission',
    component: './Webinars/form',
    hideInMenu: true,
  },
  {
    path: '/webinars/:webinar/:tab',
    access: 'consultationDetailsPermission',
    component: './Webinars/form',
    hideInMenu: true,
  },
  {
    path: '/pages',
    name: 'Pages',
    icon: 'read',
    access: 'pageListPermission',
    component: './Pages',
  },
  {
    path: '/pages/:page',
    name: 'Form',
    icon: 'read',
    access: 'pageDetailsPermission',
    component: './Pages/form',
    hideInMenu: true,
  },

  {
    path: '/templates',
    name: 'Templates',
    icon: 'highlight',
    access: 'templateDetailsPermission',
    component: './Templates',
  },
  {
    path: '/templates/:template',
    name: 'Templates',
    icon: 'highlight',
    access: 'templateDetailsPermission',
    component: './Templates',
    hideInMenu: true,
  },
  {
    path: '/templates/:template/:id',
    name: 'Templates',
    icon: 'highlight',
    access: 'templateDetailsPermission',
    component: './Templates/form',
    hideInMenu: true,
  },
  {
    path: '/files',
    name: 'Files',
    icon: 'folderOpen',
    access: 'fileListPermission',
    component: './Files',
  },
  {
    name: 'settings',
    icon: 'calculator',
    access: 'settingListPermission',
    path: '/settings',
    component: './Settings',
  },
  {
    name: 'settings',
    path: '/settings/:tab',
    icon: 'calculator',
    access: 'settingListPermission',
    component: './Settings',
    hideInMenu: true,
  },

  {
    name: 'Notifications',
    icon: 'alert',
    path: '/notifications',
    access: 'notificationListPermission',
    component: './Notifications',
  },

  {
    name: 'Questionnaire',
    icon: 'question',
    path: '/questionnaire',
    access: 'questionnaireListPermission',
    component: './Questionnaire',
  },
  {
    path: '/questionnaire/:questionnaireId',
    name: 'Questionnaire Form',
    access: 'questionnaireDetailPermission',
    component: './Questionnaire/form',
    hideInMenu: true,
  },
  {
    name: 'reports',
    icon: 'project',
    path: '/reports',
    access: 'reportListPermission',
    component: './Reports',
  },
  {
    name: 'Logs',
    icon: 'history',
    path: '/logs',
    access: 'trackerListPermission',
    component: './Logs',
  },
  {
    name: 'Translations',
    icon: 'translation',
    path: '/translations',
    access: 'translationListPermission',
    component: './Translations',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
