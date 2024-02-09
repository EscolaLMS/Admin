import { InfoCircleOutlined } from '@ant-design/icons';
import ProForm from '@ant-design/pro-form';
import { Button, Image, Modal, Select, Space, Tooltip } from 'antd';
import type { DefaultOptionType } from 'antd/lib/select';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'umi';

import SecureUpload from '@/components/SecureUpload';
import { ExamGradeType } from '@/services/escola-lms/enums';
import { useTeacherSubject } from '../context';

const FileExamGradeType: React.FC<{
  type: ExamGradeType;
  groupSelectDisabled: boolean;
  onDataConverted: (data: ConvertedData | undefined) => void;
}> = ({ type, onDataConverted, groupSelectDisabled }) => {
  const { semester_subject_id, teacherSubjectData } = useTeacherSubject();
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const groupOptions: DefaultOptionType[] = useMemo(
    () =>
      (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({
        label: name,
        value: id,
      })),

    [],
  );
  const reqData: API.ParseExamFileRequest = {
    type,
    group_id: selectedGroup!,
    semester_subject_id: semester_subject_id!,
  };

  const onUploadFile = useCallback((response: API.DefaultResponse<API.Exam>) => {
    if (response.success) {
      // TODO error handling
      // filter out users that are not in selected group
      const exam_results = response.data.results.filter(({ user_id }) => user_id !== null);
      if (!exam_results.length) return;

      onDataConverted({ exam_results, group_id: response.data.group_id });
    }
  }, []);

  return (
    <>
      <ProForm.Item label={<FormattedMessage id="group" />}>
        <Select
          disabled={groupSelectDisabled}
          value={selectedGroup}
          onChange={(v) => setSelectedGroup(v)}
          options={groupOptions}
          placeholder={<FormattedMessage id="select_group" />}
          style={{ width: '100%' }}
        />
      </ProForm.Item>
      <SecureUpload
        name="file"
        url="/api/admin/exams/parse"
        onUpload={onUploadFile}
        onChange={(info) => !info.fileList.length && onDataConverted(undefined)}
        maxFiles={1}
        data={reqData}
        disabled={!selectedGroup}
      />
    </>
  );
};

const ManualExamGradeType: React.FC<{
  onDataConverted: (convertedData: ConvertedData) => void;
}> = ({ onDataConverted }) => {
  const { teacherSubjectData, groupUsers } = useTeacherSubject();
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  const groupOptions: DefaultOptionType[] = useMemo(
    () =>
      (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({
        label: name,
        value: id,
      })),

    [],
  );

  const onSelectedGroupChange = useCallback(
    (group_id: number) => {
      setSelectedGroup(group_id);
      const currGroup = groupUsers.byId?.[group_id];
      if (!currGroup) return;

      const exam_results = currGroup.users.reduce<API.ExamResult[]>(
        (acc, { id, email, first_name, last_name, academic_teacher_id }) => {
          // filter out tutors
          if (academic_teacher_id !== null) return acc;

          return [
            ...acc,
            {
              email,
              first_name,
              last_name,
              user_id: id,
              result: 0,
            },
          ];
        },
        [],
      );

      onDataConverted({ group_id, exam_results });
    },
    [groupUsers.byId],
  );

  return (
    <Select
      value={selectedGroup}
      onChange={onSelectedGroupChange}
      options={groupOptions}
      placeholder={<FormattedMessage id="select_group" />}
      style={{ width: '100%' }}
    />
  );
};

export interface ConvertedData {
  group_id: number;
  exam_results: API.ExamResult[];
}

interface Props {
  open: boolean;
  closeModal: () => void;
  onSuccess: (convertedData: ConvertedData) => void;
  type: ExamGradeType;
}

const EXAM_GRADE_IMAGES: Record<ExamGradeType, string[]> = {
  [ExamGradeType.TestPortal]: ['/teacher-examples/testPortal.png'],
  [ExamGradeType.TeamsForms]: ['/teacher-examples/teamsForms.png'],
  [ExamGradeType.TeamsLecture]: [
    '/teacher-examples/teamsLecture.png',
    '/teacher-examples/teamsLectureWithoutMail.png',
  ],
  [ExamGradeType.Manual]: [],
};

const ExampleImagesPreview: React.FC<{ images: string[] }> = ({ images }) => {
  const [visible, setVisible] = useState(false);

  const openImagePreview = useCallback(() => setVisible(true), []);

  return (
    <>
      <Tooltip title={<FormattedMessage id="see_file_example_image" />}>
        <Button onClick={openImagePreview} icon={<InfoCircleOutlined />} />
      </Tooltip>
      <Image.PreviewGroup preview={{ visible, onVisibleChange: setVisible }}>
        {images.map((src) => (
          <Image key={src} style={{ display: 'none' }} src={src} />
        ))}
      </Image.PreviewGroup>
    </>
  );
};

const ModalFooter: React.FC<{
  type: ExamGradeType;
  onOk: () => void;
  onCancel: () => void;
  okDisabled: boolean;
}> = ({ type, onOk, onCancel, okDisabled }) => {
  const currentImages = EXAM_GRADE_IMAGES?.[type] ?? EXAM_GRADE_IMAGES[ExamGradeType.Manual];

  return (
    <Space
      style={{ width: '100%', justifyContent: currentImages.length ? 'space-between' : 'flex-end' }}
    >
      {!!currentImages.length && <ExampleImagesPreview images={currentImages} />}
      <Space>
        <Button onClick={onCancel}>
          <FormattedMessage id="cancel" />
        </Button>
        <Button type="primary" disabled={okDisabled} onClick={onOk}>
          <FormattedMessage id="ok" />
        </Button>
      </Space>
    </Space>
  );
};

const FILE_TYPES = [ExamGradeType.TeamsLecture, ExamGradeType.TestPortal, ExamGradeType.TeamsForms];

export const ConvertGradesModal: React.FC<Props> = ({ open, closeModal, onSuccess, type }) => {
  const { teacherSubjectData, fetchGroupUsers } = useTeacherSubject();
  const [convertedData, setConvertedData] = useState<ConvertedData>();

  useEffect(() => {
    if (type === ExamGradeType.Manual && open) {
      teacherSubjectData?.groups?.forEach(({ id }) => fetchGroupUsers(id));
    }
  }, [type, open]);

  return (
    <Modal
      title={<FormattedMessage id={`TeacherSubjects.Exams.${type}Convert`} />}
      width="40vw"
      open={open}
      onCancel={closeModal}
      footer={
        <ModalFooter
          type={type}
          onOk={() => {
            if (convertedData) {
              onSuccess(convertedData);
            }
          }}
          onCancel={closeModal}
          okDisabled={!convertedData}
        />
      }
    >
      {FILE_TYPES.includes(type) && (
        <FileExamGradeType
          type={type}
          onDataConverted={setConvertedData}
          groupSelectDisabled={!!convertedData}
        />
      )}
      {type === ExamGradeType.Manual && <ManualExamGradeType onDataConverted={setConvertedData} />}
    </Modal>
  );
};
