import ProCard from '@ant-design/pro-card';
import QuestionnaireChart from './QuestionnaireChart';
import { Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';
import { questionnaireReport } from '@/services/escola-lms/questionnaire';

export type QuestionnaireRaportState =
  | {
      mode: 'init';
    }
  | {
      mode: 'loading';
    }
  | {
      mode: 'error';
      error: API.DataResponseSuccess<API.DefaultResponseError>;
    }
  | {
      mode: 'loaded';
      value: any;
    };

const QuestionnaireRaports: React.FC<{
  questionnaireId: number;
  models: API.QuestionnaireModel[];
}> = ({ questionnaireId, models }) => {
  const [selectedRaport, setSelectedRaport] = useState('');
  const [state, setState] = useState<QuestionnaireRaportState>({ mode: 'init' });

  useEffect(() => {
    setState({ mode: 'loading' });

    const fetch = async () => {
      try {
        const request = selectedRaport
          ? await questionnaireReport(
              questionnaireId,
              Number(selectedRaport.split('/')[0]),
              Number(selectedRaport.split('/')[1]),
            )
          : await questionnaireReport(questionnaireId);

        if (request.success) {
          setState({
            mode: 'loaded',
            value: request.data,
          });
        }
      } catch (error) {
        setState({
          mode: 'error',
          error: error as API.DataResponseSuccess<API.DefaultResponseError>,
        });
      }
    };
    fetch();
  }, [questionnaireId, models, selectedRaport]);

  return (
    <>
      <Typography.Title level={5}>
        <FormattedMessage
          id="questionnaire.raports.filter"
          defaultMessage="questionnaire.raports.filter"
        />
      </Typography.Title>
      <Select allowClear style={{ minWidth: '200px' }} onChange={(v) => setSelectedRaport(v)}>
        {models.map((model) => (
          <Select.Option value={`${model.model_type_id}/${model.model_id}`} key={model.id}>
            {model.model_type_title} {model.model_id}
          </Select.Option>
        ))}
      </Select>

      <ProCard split="vertical">
        <ProCard colSpan={12} layout="center">
          <QuestionnaireChart state={state} type="count_answers" />
        </ProCard>
        <ProCard colSpan={12} layout="center">
          <QuestionnaireChart state={state} type="sum_rate" />
        </ProCard>
      </ProCard>
    </>
  );
};

export default QuestionnaireRaports;
