import { Button, Modal, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React, { useMemo } from 'react';
import { FormattedMessage } from 'umi';

import { TEACHER_SUBJECTS_PAGE_SIZE } from './consts';
import {
  formatSkippedStudentGroups,
  NO_VALUE,
  partitionSkippedStudents,
} from './skippedStudents.helpers';

interface Props {
  open: boolean;
  onClose: () => void;
  skippedStudents: API.SkippedStudent[];
}

const renderResult = (result: API.SkippedStudent['result']) =>
  result === null || result === undefined ? NO_VALUE : result;

const rowKey = (record: API.SkippedStudent, index?: number) =>
  `${record.email ?? ''}|${record.first_name ?? ''}|${record.last_name ?? ''}|${index ?? 0}`;

const baseColumns: ColumnsType<API.SkippedStudent> = [
  { title: <FormattedMessage id="first_name" />, dataIndex: 'first_name' },
  { title: <FormattedMessage id="last_name" />, dataIndex: 'last_name' },
  { title: <FormattedMessage id="email" />, dataIndex: 'email' },
  { title: <FormattedMessage id="examResult" />, dataIndex: 'result', render: renderResult },
];

const otherGroupColumns: ColumnsType<API.SkippedStudent> = [
  ...baseColumns,
  {
    title: <FormattedMessage id="TeacherSubjects.Exams.skippedStudents.groups" />,
    dataIndex: 'user_groups',
    render: (_, record) => formatSkippedStudentGroups(record.user_groups),
  },
];

const StudentsSection: React.FC<{
  titleId: string;
  descriptionId: string;
  columns: ColumnsType<API.SkippedStudent>;
  dataSource: API.SkippedStudent[];
}> = ({ titleId, descriptionId, columns, dataSource }) => (
  <div>
    <Typography.Title level={5}>
      <FormattedMessage id={titleId} />
    </Typography.Title>
    <Typography.Paragraph type="secondary">
      <FormattedMessage id={descriptionId} />
    </Typography.Paragraph>
    <Table
      rowKey={rowKey}
      columns={columns}
      dataSource={dataSource}
      pagination={{ defaultPageSize: TEACHER_SUBJECTS_PAGE_SIZE, hideOnSinglePage: true }}
      size="small"
    />
  </div>
);

const SkippedStudentsModal: React.FC<Props> = ({ open, onClose, skippedStudents }) => {
  const { otherGroup, notInSystem } = useMemo(
    () => partitionSkippedStudents(skippedStudents),
    [skippedStudents],
  );

  return (
    <Modal
      title={
        <Typography.Title level={4} style={{ marginBottom: 0 }}>
          <FormattedMessage id="TeacherSubjects.Exams.skippedStudents.title" />
        </Typography.Title>
      }
      width={720}
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="ok" type="primary" onClick={onClose}>
          <FormattedMessage id="ok" />
        </Button>,
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingBottom: 24 }}>
        {!!otherGroup.length && (
          <StudentsSection
            titleId="TeacherSubjects.Exams.skippedStudents.otherGroup.title"
            descriptionId="TeacherSubjects.Exams.skippedStudents.otherGroup.description"
            columns={otherGroupColumns}
            dataSource={otherGroup}
          />
        )}
        {!!notInSystem.length && (
          <StudentsSection
            titleId="TeacherSubjects.Exams.skippedStudents.notInSystem.title"
            descriptionId="TeacherSubjects.Exams.skippedStudents.notInSystem.description"
            columns={baseColumns}
            dataSource={notInSystem}
          />
        )}
      </div>
    </Modal>
  );
};

export default SkippedStudentsModal;
