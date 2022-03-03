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
    name: 'Users',
    icon: 'user',
    access: 'userListPermission',
    component: './Users',
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
    path: '/users/new',
    icon: 'user',
    component: './Users/User',
    access: 'userCreatePermission',
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
    path: '/orders',
    name: 'Orders',
    icon: 'fund',
    access: 'orderListPermission',
    component: './Orders',
  },
  {
    path: '/payments',
    name: 'Payments',
    icon: 'dollar',
    access: 'paymentListPermission',
    component: './Payments',
  },
  {
    path: '/courses',
    name: 'Courses',
    icon: 'fire',
    access: 'courseListPermission',
    component: './Courses',
  },
  {
    path: '/courses/:course',
    name: 'Form',
    icon: 'book',
    access: 'courseDetailsPermission',
    component: './Courses/form',
    hideInMenu: true,
  },
  {
    path: '/courses/:course/:tab',
    name: 'Course Form',
    icon: 'book',
    access: 'courseDetailsPermission',
    component: './Courses/form',
    hideInMenu: true,
  },
  {
    path: '/h5ps',
    name: 'H5Ps',
    icon: 'experiment',
    access: 'h5pListPermission',
    component: './H5P',
  },
  {
    path: '/h5ps/:h5p',
    name: 'H5Ps',
    icon: 'book',
    access: 'h5pDetailsPermission',
    component: './H5P/form',
    hideInMenu: true,
  },
  {
    path: '/h5ps/preview/:h5p',
    name: 'H5Ps',
    icon: 'book',
    access: 'h5pDetailsPermission',
    component: './H5P/preview',
    hideInMenu: true,
  },
  {
    path: '/scorms',
    name: 'SCORMs',
    icon: 'experiment',
    access: 'scormListPermission',
    component: './Scorm',
  },
  {
    path: '/scorms/preview/:uuid',
    name: 'SCORMs',
    icon: 'experiment',
    access: 'scormDetailsPermission',
    component: './Scorm/preview',
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
    path: '/categories',
    name: 'categories',
    icon: 'calculator',
    access: 'categoryListPermission',
    component: './Categories',
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
    name: 'Roles',
    path: '/roles',
    icon: 'lock',
    access: 'roleListPermission',
    component: './Roles',
  },
  {
    name: 'Permissions',
    path: '/roles/:name',
    icon: 'lock',
    access: 'roleDetailsPermission',
    component: './Roles/form',
    hideInMenu: true,
  },
  {
    name: 'Webinars',
    icon: 'expand',
    path: '/webinars',
    access: 'webinarListPermission',
    component: './Webinars',
  },
  {
    name: 'Notifications',
    icon: 'alert',
    path: '/notifications',
    access: 'notificationListPermission',
    component: './Notifications',
  },
  {
    name: 'reports',
    icon: 'project',
    path: '/reports',
    access: 'reportListPermission',
    component: './Reports',
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
