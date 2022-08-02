import BasicLayout, { BasicLayoutProps } from '@ant-design/pro-layout';

export const Layout = (props: BasicLayoutProps) => {
  console.log(props);
  return <BasicLayout title="Ant Design Pro" {...props} />;
};

export default Layout;
