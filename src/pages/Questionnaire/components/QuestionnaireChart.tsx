import { Column } from '@ant-design/plots';
import React from 'react';

import ProCard from '@ant-design/pro-card';
import { Alert, Spin } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import type { QuestionnaireRaportState } from './Raports';

const config = {
  isGroup: true,
  xField: 'label',
  yField: 'value',
  seriesField: 'type',
  marginRatio: 0,
};

const QuestionnaireChart: React.FC<{ state: QuestionnaireRaportState }> = ({ state }) => {
  const intl = useIntl();
  return (
    <ProCard headerBordered style={{ height: '500px' }}>
      {state.mode === 'loading' && <Spin />}
      {state.mode === 'loaded' && state.value.length > 0 ? (
        <Column
          {...config}
          data={[...state.value, ...state.value].map(
            (val: Record<string, number | string>, index: number) => ({
              label: val.title,
              value: index > state.value.length - 1 ? val.count_answers : Number(val.avg_rate),
              type:
                index > state.value.length - 1 ? intl.formatMessage({ id: 'answers' }) : 'Rating',
            }),
          )}
        />
      ) : (
        state.mode !== 'loading' && (
          <p>
            <FormattedMessage id="no_data" defaultMessage="no_data" />
          </p>
        )
      )}
      {state.mode === 'error' && <Alert message={state.error.data.message} type="error" />}
    </ProCard>
  );
};

export default QuestionnaireChart;
