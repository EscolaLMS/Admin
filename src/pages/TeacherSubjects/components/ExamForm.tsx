import { ExamGradeType } from '@/services/escola-lms/enums';
import { createExam, getExam, updateExam } from '@/services/escola-lms/exams';
import ProForm, { ProFormDatePicker, ProFormText } from '@ant-design/pro-form';
import ProTable, { type ProColumns } from '@ant-design/pro-table';
import { Button, Col, InputNumber, Row, Spin } from 'antd';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage, history } from 'umi';

import { useTeacherSubject } from '../context';
import { ConvertGradesModal, type ConvertedData } from './ConvertGradesModal';
import { TEACHER_SUBJECTS_PAGE_SIZE, gradesOptions, passOptions } from './consts';

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
    <Col span={12}>
      <Button type="primary" onClick={() => onSelect(ExamGradeType.ManualPass)}>
        <FormattedMessage id="uploadGradesManuallyPass" defaultMessage="uploadGradesManuallyPass" />
      </Button>
    </Col>
    <Col span={12}>
      <Button type="primary" onClick={() => onSelect(ExamGradeType.ManualGrades)}>
        <FormattedMessage
          id="uploadGradesManuallyGrades"
          defaultMessage="uploadGradesManuallyGrades"
        />
      </Button>
    </Col>
  </Row>
);

const staticColumns: ProColumns<API.ExamResult>[] = [
  { title: <FormattedMessage id="first_name" />, dataIndex: 'first_name', editable: false },
  { title: <FormattedMessage id="last_name" />, dataIndex: 'last_name', editable: false },
];

interface ExamFormValues {
  title: string;
  weight: number;
  passed_at: Date | string;
}

interface Props {
  exam_id: string;
}
export const ExamForm: React.FC<Props> = ({ exam_id }) => {
  const [form] = ProForm.useForm<ExamFormValues>();
  const [selectedType, setSelectedType] = useState<ExamGradeType>();
  const [convertedData, setConvertedData] = useState<ConvertedData>();
  const [fetching, setFetching] = useState(false);
  const { semester_subject_id, getGroupById } = useTeacherSubject();

  const editableKeys = useMemo(
    () => (convertedData?.exam_results ?? []).map(({ user_id }) => user_id),
    [convertedData?.exam_results],
  );

  useEffect(() => {
    const numExamId = Number(exam_id);

    if (exam_id === 'new') {
      setSelectedType(undefined);
      setConvertedData(undefined);
      form.resetFields();
    }

    if (exam_id !== 'new' && !Number.isNaN(numExamId)) {
      setFetching(true);
      getExam(numExamId)
        .then((res) => {
          if (res.success) {
            const { type, results, title, weight, passed_at, group_id } = res.data;
            setSelectedType(type);
            setConvertedData({ group_id, exam_results: results });
            form.setFieldsValue({ title, weight, passed_at });
          }
        })
        .finally(() => setFetching(false));
    }
  }, [exam_id]);

  const resetState = useCallback(() => {
    setSelectedType(undefined);
    setConvertedData(undefined);
  }, []);

  if (fetching) {
    return <Spin />;
  }

  return (
    <>
      {selectedType && (
        <ConvertGradesModal
          open={Boolean(selectedType && !convertedData)}
          type={selectedType}
          closeModal={resetState}
          onSuccess={setConvertedData}
        />
      )}
      <ProForm
        form={form}
        submitter={selectedType === undefined || !convertedData ? false : undefined}
        onFinish={async (formData: ExamFormValues) => {
          if (convertedData && typeof semester_subject_id === 'number') {
            const { title, passed_at, weight } = formData;
            const numExamId = Number(exam_id);
            const { exam_results, group_id } = convertedData;

            const reqData: API.CreateExamRequest = {
              type: selectedType!,
              semester_subject_id,
              title,
              passed_at,
              weight,
              group_id,
              results: exam_results,
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

          {selectedType !== ExamGradeType.ManualGrades && selectedType !==ExamGradeType.ManualPass && (
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
          )}
        </ProForm.Group>
        {selectedType && convertedData && (
          <ProTable
            rowKey="user_id"
            headerTitle={getGroupById(convertedData.group_id)?.name}
            editable={{
              type: 'single',
              editableKeys,
              onValuesChange: (record, dataSource) =>
                setConvertedData({ group_id: convertedData.group_id, exam_results: dataSource }),
            }}
            cardProps={{ bodyStyle: { paddingInline: 0 } }}
            search={false}
            dataSource={convertedData.exam_results.sort((a, b) =>
              a.last_name.localeCompare(b.last_name),
            )}
            pagination={{ defaultPageSize: TEACHER_SUBJECTS_PAGE_SIZE }}
            columns={[
              ...staticColumns,
              (() => {
                switch (selectedType) {
                  case ExamGradeType.ManualPass:
                    return {
                      title: <FormattedMessage id="examResult" />,
                      dataIndex: 'result',
                      valueType: 'select',
                      fieldProps: {
                        options: passOptions,
                      },
                    };
                  case ExamGradeType.ManualGrades:
                    return {
                      title: <FormattedMessage id="examResult" />,
                      dataIndex: 'result',
                      valueType: 'select',
                      fieldProps: {
                        options: gradesOptions,
                      },
                    };
                  default:
                    return {
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
                            message: (
                              <FormattedMessage id="number_between" values={{ min: 0, max: 100 }} />
                            ),
                          },
                        ],
                      },
                    };
                }
              })(),
            ]}
          />
        )}
        {!convertedData && <SelectTypeButtonsGroup onSelect={setSelectedType} />}
      </ProForm>
    </>
  );
};
