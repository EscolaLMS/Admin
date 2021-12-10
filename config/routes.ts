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
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'Welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/users',
    name: 'Users',
    icon: 'user',
    access: 'adminPermission',
    component: './Users',
  },
  {
    path: '/users/me',
    name: 'User',
    icon: 'user',
    component: './Users/me',
    hideInMenu: true,
  },
  {
    path: '/users/me/:tab',
    name: 'User Form',
    icon: 'user',
    component: './Users/me',
    hideInMenu: true,
  },
  {
    path: '/users/:user',
    name: 'Form',
    icon: 'user',
    access: 'adminPermission',
    component: './Users/form',
    hideInMenu: true,
  },
  {
    path: '/user_groups',
    name: 'User Groups',
    icon: 'team',
    access: 'adminPermission',
    component: './UserGroups',
  },

  {
    path: '/user_groups/:group',
    name: 'Form',
    icon: 'team',
    access: 'adminPermission',
    component: './UserGroups/form',
    hideInMenu: true,
  },

  {
    path: '/orders',
    name: 'Orders',
    icon: 'fund',
    access: 'adminPermission',
    component: './Orders',
  },
  {
    path: '/payments',
    name: 'Payments',
    icon: 'dollar',
    access: 'adminPermission',
    component: './Payments',
  },
  {
    path: '/courses',
    name: 'Courses',
    icon: 'fire',
    access: 'tutorPermission',
    component: './Courses',
  },
  {
    path: '/courses/:course',
    name: 'Form',
    icon: 'book',
    access: 'tutorPermission',
    component: './Courses/form',
    hideInMenu: true,
  },
  {
    path: '/courses/:course/:tab',
    name: 'Course Form',
    icon: 'book',
    access: 'tutorPermission',
    component: './Courses/form',
    hideInMenu: true,
  },
  {
    path: '/h5ps',
    name: 'H5Ps',
    icon: 'experiment',
    access: 'tutorPermission',
    component: './H5P',
  },
  {
    path: '/scorms',
    name: 'SCORMs',
    icon: 'experiment',
    access: 'tutorPermission',
    component: './Scorm',
  },
  {
    path: '/scorms/preview/:uuid',
    name: 'SCORMs',
    icon: 'experiment',
    access: 'tutorPermission',
    component: './Scorm/preview',
    hideInMenu: true,
  },
  {
    path: '/h5ps/:h5p',
    name: 'H5Ps',
    icon: 'book',
    access: 'tutorPermission',
    component: './H5P/form',
    hideInMenu: true,
  },
  {
    path: '/h5ps/preview/:h5p',
    name: 'H5Ps',
    icon: 'book',
    access: 'tutorPermission',
    component: './H5P/preview',
    hideInMenu: true,
  },
  {
    path: '/pages',
    name: 'Pages',
    icon: 'read',
    access: 'adminPermission',
    component: './Pages',
  },
  {
    path: '/pages/:page',
    name: 'Form',
    icon: 'read',
    access: 'adminPermission',
    component: './Pages/form',
    hideInMenu: true,
  },

  {
    path: '/templates',
    name: 'Templates',
    icon: 'highlight',
    access: 'adminPermission',
    component: './Templates',
  },
  {
    path: '/templates/:template',
    name: 'Templates',
    icon: 'highlight',
    access: 'adminPermission',
    component: './Templates/form',
    hideInMenu: true,
  },

  {
    path: '/files',
    name: 'Files',
    icon: 'folderOpen',
    access: 'adminPermission',
    component: './Files',
  },
  {
    name: 'categories',
    icon: 'calculator',
    access: 'tutorPermission',
    path: '/categories',
    component: './Categories',
  },
  {
    name: 'settings',
    icon: 'calculator',
    access: 'adminPermission',
    path: '/settings',
    component: './Settings',
  },
  {
    name: 'settings',
    path: '/settings/:tab',
    icon: 'calculator',
    access: 'adminPermission',
    component: './Settings',
    hideInMenu: true,
  },
  {
    name: 'Roles',
    path: '/roles',
    icon: 'lock',
    access: 'adminPermission',
    component: './Roles',
  },
  {
    name: 'Permissions',
    path: '/roles/:name',
    icon: 'lock',
    access: 'adminPermission',
    component: './Roles/form',
    hideInMenu: true,
  },
  {
    name: 'reports',
    icon: 'project',
    access: 'adminPermission',
    path: '/reports',
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
