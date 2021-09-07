import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import PieChart from './components/PieChart';
import ProCard from '@ant-design/pro-card';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <ProCard split="vertical">
        <ProCard colSpan={12} layout="center">
          <PieChart metric={'EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric'} />
        </ProCard>
        <ProCard colSpan={12} layout="center">
          <PieChart metric={'EscolaLms\\Reports\\Metrics\\CoursesPopularityMetric'} />
        </ProCard>
      </ProCard>
      <ProCard split="vertical">
        <ProCard colSpan={12} layout="center">
          <PieChart metric={'EscolaLms\\Reports\\Metrics\\CoursesSecondsSpentMetric'} />
        </ProCard>
        <ProCard colSpan={12} layout="center">
          <PieChart metric={'EscolaLms\\Reports\\Metrics\\TutorsPopularityMetric'} />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
