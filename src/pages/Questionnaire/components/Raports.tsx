import { getQuestionnaireRaport, questionnaireReport } from '@/services/escola-lms/questionnaire';
import ProCard from '@ant-design/pro-card';
import { Button, Select, Typography } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'umi';
import QuestionnaireChart from './QuestionnaireChart';

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
  models: API.QuestionnaireQuestionModel[];
}> = ({ questionnaireId, models }) => {
  const [selectedRaport, setSelectedRaport] = useState('');
  const [state, setState] = useState<QuestionnaireRaportState>({ mode: 'init' });
  const [buttonLoading, setButtonLoading] = useState(false);
  const handleDownloadRaport = useCallback(async () => {
    const splitedData = selectedRaport.split('/');

    setButtonLoading(true);
    try {
      const response = await getQuestionnaireRaport(
        splitedData[2],
        Number(splitedData[1]),
        Number(questionnaireId),
      );

      if (response instanceof Blob) {
        console.log('response', response);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(response);
        downloadLink.download = `raport_questionaire_${splitedData[2]}_${questionnaireId}.xlsx`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    } catch (error) {
      setState({
        mode: 'error',
        error: error as API.DataResponseSuccess<API.DefaultResponseError>,
      });
    } finally {
      setButtonLoading(false);
    }
  }, [selectedRaport, questionnaireId]);

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
      <Select allowClear style={{ minWidth: '400px' }} onChange={(v) => setSelectedRaport(v)}>
        {models.map((model) => (
          <Select.Option
            value={`${model.model_type_id}/${model.model_id}/${model.model_type_title}`}
            key={model.id}
          >
            <FormattedMessage id={model.model_type_title} defaultMessage={model.model_type_title} />{' '}
            - {model.model_title}
          </Select.Option>
        ))}
      </Select>
      {selectedRaport && (
        <div>
          <br />
          <Button onClick={handleDownloadRaport} loading={buttonLoading}>
            <FormattedMessage id="download" />
          </Button>
        </div>
      )}

      <hr />
      <ProCard split="vertical">
        <ProCard colSpan={24} layout="center">
          <QuestionnaireChart state={state} />
        </ProCard>
      </ProCard>
    </>
  );
};

export default QuestionnaireRaports;
