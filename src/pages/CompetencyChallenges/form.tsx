import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, history, FormattedMessage, useIntl } from 'umi';
import { Spin } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import { getCompetencyChallenge } from '@/services/escola-lms/competency-challenges';
import { MainForm } from './components/MainForm';
import { Scales } from './components/Scales';
import { DiagnosticTest } from './components/DiagnosticTest';

const CompetencyChallenge: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.CompetencyChallenge>();

  const intl = useIntl();
  const { id, tab = 'main' } = useParams<{ id?: string; tab?: string }>();
  const isNew = id === 'new';
  const competency_challenge_id = Number(id);

  const pageTitle = useMemo(() => {
    if (isNew) return intl.formatMessage({ id: 'CompetencyChallenges.new_challenge' });
    if (data?.name) return data.name;

    return intl.formatMessage({ id: 'menu.Competency challenges' });
  }, [intl, data?.name]);

  const fetchData = useCallback(() => {
    if (Number.isNaN(competency_challenge_id)) return;

    setLoading(true);
    getCompetencyChallenge(competency_challenge_id)
      .then((res) => {
        if (res.success) {
          setData(res.data);
        }
      })
      .finally(() => setLoading(false));
  }, [competency_challenge_id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <PageContainer
      title={pageTitle}
      header={{
        breadcrumb: {
          routes: [
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
          cardProps: { loading: loading && <Spin /> },
          activeKey: tab,
          onChange: (key) => {
            history.push(`/competency-challenges/${id}/${key}`);
          },
        }}
      >
        <ProCard.TabPane key="main" tab={<FormattedMessage id="CompetencyChallenges.main" />}>
          <MainForm
            competency_challenge_id={competency_challenge_id}
            data={data}
            onUpdateSuccess={fetchData}
          />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="scales"
          tab={<FormattedMessage id="CompetencyChallenges.scales" />}
          disabled={isNew}
        >
          <Scales
            competency_challenge_id={competency_challenge_id}
            scales={data?.scales ?? []}
            onScaleDelete={fetchData}
            onScaleAdd={fetchData}
            onScaleUpdate={fetchData}
          />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="diagnostic-test"
          tab={<FormattedMessage id="CompetencyChallenges.diagnostic-test" />}
          disabled={isNew}
        >
          <DiagnosticTest data={data} />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default CompetencyChallenge;
