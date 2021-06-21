import component from './en-US/component';
import globalHeader from './en-US/globalHeader';
import menu from './en-US/menu';
import pwa from './en-US/pwa';
import settingDrawer from './en-US/settingDrawer';
import settings from './en-US/settings';
import pages from './en-US/pages';

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
  title: 'Title',
  options: 'Options',
  base_price: 'Base price',
  duration: 'Duration',
  categories: 'Categories',
  tags: 'Tags',
  'menu.Courses': 'Courses',
  'menu.Users': 'Users',
  'menu.Welcome': 'Welcome',
  'menu.Course Form': 'Course Form',
  'menu.Form': 'Form',
};
