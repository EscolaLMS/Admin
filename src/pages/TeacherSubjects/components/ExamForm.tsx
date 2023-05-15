import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, history } from 'umi';
import { Button, Col, InputNumber, Row } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import ProForm, { ProFormDatePicker, ProFormText } from '@ant-design/pro-form';
import { ExamGradeType } from '@/services/escola-lms/enums';
import { createExam, getExam, updateExam } from '@/services/escola-lms/exams';

import { ConvertGradesModal } from './ConvertGradesModal';

const SelectTypeButtonsGroup: React.FC<{ onSelect: (type: ExamGradeType) => void }> = ({
  onSelect,
}) => (
  <Row gutter={[16, 16]}>
    <Col span={12}>
      <Button type="primary" onClick={() => onSelect(ExamGradeType.TeamsForms)}>
        <FormattedMessage id="uploadFile.MsTeamsForms" defaultMessage="uploadFile.MsTeamsForms" />
      </Button>
    </Col>
    <Col span={12}>
      <Button type="primary" onClick={() => onSelect(ExamGradeType.TestPortal)}>
        <FormattedMessage id="uploadFile.TestPortal" defaultMessage="uploadFile.TestPortal" />
      </Button>
    </Col>
    <Col span={12}>
      <Button type="primary" onClick={() => onSelect(ExamGradeType.TeamsLecture)}>
        <FormattedMessage id="uploadFile.MsTeams" defaultMessage="uploadFile.MsTeams" />
      </Button>
    </Col>
    <Col span={12}>
      <Button type="primary" onClick={() => onSelect(ExamGradeType.Manual)}>
        <FormattedMessage id="uploadGradesManually" defaultMessage="uploadGradesManually" />
      </Button>
    </Col>
  </Row>
);

const staticColumns: ProColumns<API.ExamResult>[] = [
  { title: <FormattedMessage id="first_name" />, dataIndex: 'first_name', editable: false },
  { title: <FormattedMessage id="last_name" />, dataIndex: 'last_name', editable: false },
  {
    title: <FormattedMessage id="examResult" />,
    dataIndex: 'result',
    valueType: 'percent',
    formItemProps: {
      rules: [
        {
          required: true,
          message: <FormattedMessage id="field_required" />,
        },
        {
          type: 'number',
          min: 0,
          max: 100,
          message: <FormattedMessage id="number_between" values={{ min: 0, max: 100 }} />,
        },
      ],
    },
  },
];

interface ExamFormValues {
  title: string;
  weight: number;
  passed_at: Date | string;
}

interface Props {
  exam_id: string;
  semester_subject_id: number;
}
export const ExamForm: React.FC<Props> = ({ semester_subject_id, exam_id }) => {
  const [form] = ProForm.useForm<ExamFormValues>();
  const [selectedType, setSelectedType] = useState<ExamGradeType>();
  const [examResults, setExamResults] = useState<API.ExamResult[]>();
  const editableKeys = useMemo(
    () => (examResults ?? []).map(({ user_id }) => user_id),
    [examResults],
  );

  useEffect(() => {
    const numExamId = Number(exam_id);

    if (exam_id === 'new') {
      setSelectedType(undefined);
      setExamResults(undefined);
      form.resetFields();
    }

    if (exam_id !== 'new' && !Number.isNaN(numExamId)) {
      getExam(numExamId).then((res) => {
        if (res.success) {
          const { type, results, title, weight, passed_at } = res.data;
          setSelectedType(type);
          setExamResults(results);
          form.setFieldsValue({ title, weight, passed_at });
        }
      });
    }
  }, [exam_id]);

  const resetState = useCallback(() => {
    setSelectedType(undefined);
    setExamResults(undefined);
  }, []);

  return (
    <>
      {selectedType && (
        <ConvertGradesModal
          open={Boolean(selectedType && !examResults)}
          type={selectedType}
          closeModal={resetState}
          onSuccess={setExamResults}
          semester_subject_id={semester_subject_id}
        />
      )}
      <ProForm
        form={form}
        submitter={selectedType === undefined || !examResults ? false : undefined}
        onFinish={async (formData: ExamFormValues) => {
          // Validation since table has other form instance
          const areExamResultsValid = examResults?.every(
            ({ result }) => typeof result === 'number' && result >= 0 && result <= 100,
          );

          if (areExamResultsValid) {
            const { title, passed_at, weight } = formData;
            const numExamId = Number(exam_id);

            const reqData: API.CreateExamRequest = {
              type: selectedType!,
              semester_subject_id,
              title,
              passed_at,
              weight,
              results: examResults!,
            };

            const response = Number.isNaN(numExamId)
              ? await createExam(reqData)
              : await updateExam(numExamId, reqData);
            if (response.success) {
              history.push(`/teacher/subjects/${semester_subject_id}/exams`);
            }
          }
          return true;
        }}
        onReset={resetState}
      >
        <ProForm.Group>
          <ProFormText
            label={<FormattedMessage id="examTitle" defaultMessage="examTitle" />}
            rules={[
              {
                required: true,
                message: <FormattedMessage id="field_required" />,
              },
            ]}
            width="lg"
            name="title"
          />
          <ProFormDatePicker
            label={<FormattedMessage id="datePassingExam" defaultMessage="datePassingExam" />}
            rules={[
              {
                required: true,
                message: <FormattedMessage id="field_required" />,
              },
            ]}
            width="lg"
            name="passed_at"
          />
          <ProForm.Item
            name="weight"
            label={<FormattedMessage id="examImportance" defaultMessage="examImportance" />}
            rules={[
              { required: true, message: <FormattedMessage id="field_required" /> },
              {
                type: 'number',
                min: 1,
                max: 100,
                message: <FormattedMessage id="number_between" values={{ min: 1, max: 100 }} />,
              },
            ]}
          >
            <InputNumber />
          </ProForm.Item>
        </ProForm.Group>
        {selectedType && examResults && (
          <ProTable
            rowKey="user_id"
            editable={{
              type: 'single',
              editableKeys,
              onValuesChange: (record, dataSource) => setExamResults(dataSource),
            }}
            cardProps={{ bodyStyle: { paddingInline: 0 } }}
            search={false}
            dataSource={examResults}
            columns={staticColumns}
          />
        )}
        {!examResults && <SelectTypeButtonsGroup onSelect={setSelectedType} />}
      </ProForm>
    </>
  );
};
