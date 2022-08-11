import React from 'react';
import ProCard from '@ant-design/pro-card';
import { Column } from '@ant-design/plots';

const Chart: React.FC<{
  config: any;
  value: any;
  title: JSX.Element | string;
  children?: JSX.Element;
}> = ({ config, value, title, children }) => {
  return (
    <ProCard title={title} headerBordered>
      <div style={{ overflow: 'auto', minHeight: '400px' }}>
        <Column {...config} data={value} />
        {children && children}
      </div>
    </ProCard>
  );
};

export default Chart;
