import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import React, { useMemo } from 'react';
import { FormattedMessage, history, useIntl, useParams } from 'umi';

import { DiagnosticTest } from './components/DiagnosticTest';
import { MainForm } from './components/MainForm';
import { Scales } from './components/Scales';
import { CompetencyChallengeContextProvider, useCompetencyChallengeContext } from './context';

const CompetencyChallengeContent: React.FC = () => {
  const { competencyChallenge } = useCompetencyChallengeContext();
  const intl = useIntl();
  const { id, tab = 'main' } = useParams<{ id?: string; tab?: string }>();
  const isNew = id === 'new';

  const pageTitle = useMemo(() => {
    if (isNew) return intl.formatMessage({ id: 'CompetencyChallenges.new_challenge' });
    if (competencyChallenge.data?.name) return competencyChallenge.data.name;

    return intl.formatMessage({ id: 'menu.Competency challenges' });
  }, [intl, competencyChallenge.data?.name]);

  return (
    <PageContainer
      title={pageTitle}
      header={{
        breadcrumb: {
          items: [
            {
              path: 'competency-challenges',
              breadcrumbName: intl.formatMessage({
                id: 'menu.Competency challenges',
              }),
            },
            {
              path: String(id),
              breadcrumbName: pageTitle,
            },
            {
              path: tab,
              breadcrumbName: intl.formatMessage({ id: `CompetencyChallenges.${tab}` }),
            },
          ],
        },
      }}
    >
      <ProCard
        bodyStyle={{ padding: '24px' }}
        tabs={{
          type: 'card',
          cardProps: { loading: competencyChallenge.loading && <Spin /> },
          activeKey: tab,
          onChange: (key) => {
            history.push(`/competency-challenges/${id}/${key}`);
          },
        }}
      >
        <ProCard.TabPane key="main" tab={<FormattedMessage id="CompetencyChallenges.main" />}>
          <MainForm />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="scales"
          tab={<FormattedMessage id="CompetencyChallenges.scales" />}
          disabled={isNew}
        >
          <Scales />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="diagnostic-test"
          tab={<FormattedMessage id="CompetencyChallenges.diagnostic-test" />}
          disabled={isNew}
        >
          <DiagnosticTest />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

const CompetencyChallenge: React.FC = () => (
  <CompetencyChallengeContextProvider>
    <CompetencyChallengeContent />
  </CompetencyChallengeContextProvider>
);

export default CompetencyChallenge;
