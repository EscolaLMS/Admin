import React, { useState } from 'react';
import { FormattedMessage } from 'umi';
import { Button, Col, InputNumber, Row } from 'antd';
import ProForm, { ProFormDatePicker, ProFormText } from '@ant-design/pro-form';
import { ExamGradeType } from '@/services/escola-lms/enums';

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

interface Props {
  exam_id: string;
  semester_subject_id: number;
}
export const ExamForm: React.FC<Props> = ({ semester_subject_id }) => {
  const [form] = ProForm.useForm();
  const [selectedType, setSelectedType] = useState<ExamGradeType>();
  const [convertedData, setConvertedData] = useState<API.ExamResult[]>();

  return (
    <>
      {selectedType && (
        <ConvertGradesModal
          open={Boolean(selectedType && !convertedData)}
          type={selectedType}
          closeModal={() => setSelectedType(undefined)}
          onSuccess={setConvertedData}
          semester_subject_id={semester_subject_id}
        />
      )}
      <ProForm
        form={form}
        submitter={selectedType === undefined || !convertedData ? false : undefined}
      >
        <ProForm.Group>
          <ProFormText
            label={<FormattedMessage id="examTitle" defaultMessage="examTitle" />}
            rules={[
              {
                required: true,
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
              },
            ]}
            width="lg"
            name="passed_at"
          />
          <ProForm.Item
            name="weight"
            label={<FormattedMessage id="examImportance" defaultMessage="examImportance" />}
            rules={[{ required: true }, { type: 'number', min: 1, max: 100 }]}
          >
            <InputNumber min={1} max={100} />
          </ProForm.Item>
        </ProForm.Group>
        {selectedType === ExamGradeType.TeamsForms && convertedData && <p>MS Teams Forms</p>}
        {selectedType === ExamGradeType.TestPortal && convertedData && <p>Test Portal</p>}
        {selectedType === ExamGradeType.TeamsLecture && convertedData && <p>MS Teams Lecture</p>}
        {selectedType === ExamGradeType.Manual && convertedData && <p>Manual</p>}
        {!convertedData && <SelectTypeButtonsGroup onSelect={setSelectedType} />}
      </ProForm>
    </>
  );
};
