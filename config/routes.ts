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
    path: '/courses/:course',
    name: 'Course Form',
    icon: 'book',
    component: './Courses/form',
    hideInMenu: true,
  },
  {
    path: '/interactive',
    name: 'Interactives',
    icon: 'book',
    component: './NewPage',
  },
  {
    path: '/categories',
    name: 'Categories',
    icon: 'book',
    component: './NewPage',
  },
  {
    path: '/payments',
    name: 'Payments',
    icon: 'book',
    component: './NewPage',
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
