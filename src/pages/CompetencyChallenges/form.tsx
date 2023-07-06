import React, { useEffect, useState } from 'react';
import { useParams, history, FormattedMessage } from 'umi';
import { Spin } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import { getCompetencyChallenge } from '@/services/escola-lms/competency-challenges';
import { MainForm } from './components/MainForm';
import { Scales } from './components/Scales';
import { Quiz } from './components/Quiz';

const CompetencyChallenge: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.CompetencyChallenge>();

  const { id, tab = 'main' } = useParams<{ id?: string; tab?: string }>();
  const isNew = id === 'new';
  const competency_challenge_id = Number(id);

  useEffect(() => {
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

  return (
    <PageContainer>
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
          <MainForm competency_challenge_id={competency_challenge_id} data={data} />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="scales"
          tab={<FormattedMessage id="CompetencyChallenges.scales" />}
          disabled={isNew}
        >
          <Scales />
        </ProCard.TabPane>
        <ProCard.TabPane
          key="quiz"
          tab={<FormattedMessage id="CompetencyChallenges.quiz" />}
          disabled={isNew}
        >
          <Quiz />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default CompetencyChallenge;
