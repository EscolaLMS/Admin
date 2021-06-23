export default [
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
    icon: 'book',
    component: './NewPage',
  },
  {
    path: '/courses',
    name: 'Courses',
    icon: 'book',
    component: './Courses',
  },
  {
    path: '/h5ps',
    name: 'H5Ps',
    icon: 'book',
    component: './H5P',
  },
  {
    path: '/h5ps/:h5p',
    name: 'H5Ps',
    icon: 'book',
    component: './H5P/form',
    hideInMenu: true,
  },
  {
    path: '/h5ps/preview/:h5p',
    name: 'H5Ps',
    icon: 'book',
    component: './H5P/preview',
    hideInMenu: true,
  },
  {
    path: '/courses/:course',
    name: 'Form',
    icon: 'book',
    component: './Courses/form',
    hideInMenu: true,
  },
  {
    path: '/courses/:course/:tab',
    name: 'Course Form',
    icon: 'book',
    component: './Courses/form',
    hideInMenu: true,
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
