import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import {FormattedMessage, history, useParams} from 'umi';

import ModelFields from '@/components/ModelFields';

const ConsultationFields: React.FC = () => {
  const {consultation} = useParams<{ consultation?: string; }>();
  return (
    <PageContainer>
      <ProCard
        tabs={{
          type: 'card',
          activeKey: consultation,
          onChange: (key) => history.push(`/other/consultations/${key}`),
        }}
      >
        <ProCard.TabPane key="list" tab={<FormattedMessage id="list" />} />

        <ProCard.TabPane key="fields" tab={<FormattedMessage id="ModelFields" />}>
          <ModelFields class_type="EscolaLms\Consultations\Models\Consultation" />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default ConsultationFields;
