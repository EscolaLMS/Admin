import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'umi';
import { Modal } from 'antd';
import { ProFormSelect } from '@ant-design/pro-form';

import SecureUpload from '@/components/SecureUpload';
import { ExamGradeType } from '@/services/escola-lms/enums';

interface Props {
  open: boolean;
  closeModal: () => void;
  onSuccess: (convertedData: API.ExamResult[]) => void;
  type: ExamGradeType;
  semester_subject_id: number;
}

const FILE_TYPES = [ExamGradeType.TeamsLecture, ExamGradeType.TestPortal, ExamGradeType.TeamsForms];

export const ConvertGradesModal: React.FC<Props> = ({
  open,
  closeModal,
  onSuccess,
  type,
  semester_subject_id,
}) => {
  const [convertedData, setConvertedData] = useState<API.ExamResult[]>();

  const data: API.ParseExamFileRequest = {
    type,
    semester_subject_id,
  };

  const onUploadFile = useCallback((response: API.DefaultResponse<API.Exam>) => {
    if (response.success) {
      setConvertedData(response.data.results);
    }
  }, []);

  return (
    <Modal
      title={<FormattedMessage id={`TeacherSubjects.Exams.${type}Convert`} />}
      width="40vw"
      open={open}
      onCancel={closeModal}
      onOk={() => {
        if (convertedData) {
          onSuccess(convertedData);
        }
      }}
      okButtonProps={{ disabled: !convertedData }}
    >
      {FILE_TYPES.includes(type) && (
        <SecureUpload
          name="file"
          url="/api/admin/exams/parse"
          onUpload={onUploadFile}
          onChange={(info) => !info.fileList.length && setConvertedData(undefined)}
          maxFiles={1}
          data={data}
          hideLabel
        />
      )}
      {/* TODO */}
      {type === ExamGradeType.Manual && <ProFormSelect />}
    </Modal>
  );
};
