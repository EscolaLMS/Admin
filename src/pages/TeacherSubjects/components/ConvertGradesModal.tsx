import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'umi';
import { Button, Modal, Select } from 'antd';
import type { DefaultOptionType, SelectProps } from 'antd/lib/select';

import SecureUpload from '@/components/SecureUpload';
import { ExamGradeType } from '@/services/escola-lms/enums';
import { useTeacherSubject } from '../context';

const FILE_TYPES = [ExamGradeType.TeamsLecture, ExamGradeType.TestPortal, ExamGradeType.TeamsForms];

export function useSelectAll({
  showSelectAll = true,
  options = [],
  value,
  onChange,
}: { showSelectAll?: boolean } & Pick<SelectProps, 'options' | 'value' | 'onChange'>) {
  const handleSelectAll = useCallback(() => {
    onChange?.(
      options.map((option) => option.value),
      options,
    );
  }, [onChange, options]);

  const handleDeselectAll = useCallback(() => {
    onChange?.([], []);
  }, [onChange]);

  const enhancedOptions = useMemo(() => {
    if (!showSelectAll) return options;

    return [
      {
        label: !value?.length ? (
          <Button type="link" onClick={handleSelectAll}>
            <FormattedMessage id="select_all" />
          </Button>
        ) : (
          <Button type="link" onClick={handleDeselectAll}>
            <FormattedMessage id="deselect_all" />
          </Button>
        ),
        options,
      },
    ];
  }, [handleSelectAll, handleDeselectAll, options, showSelectAll, value?.length]);

  return {
    options: enhancedOptions,
    value,
    onChange,
  };
}

interface Props {
  open: boolean;
  closeModal: () => void;
  onSuccess: (convertedData: API.ExamResult[]) => void;
  type: ExamGradeType;
  semester_subject_id: number;
}

export const ConvertGradesModal: React.FC<Props> = ({
  open,
  closeModal,
  onSuccess,
  type,
  semester_subject_id,
}) => {
  const { teacherSubjectData, groupUsers, getGroupUsers } = useTeacherSubject();
  const [convertedData, setConvertedData] = useState<API.ExamResult[]>();
  const [manualSelectValue, setManualSelectValue] = useState<number[]>([]);

  const reqData: API.ParseExamFileRequest = {
    type,
    semester_subject_id,
  };

  const onUploadFile = useCallback((response: API.DefaultResponse<API.Exam>) => {
    if (response.success) {
      setConvertedData(response.data.results);
    }
  }, []);

  const manualSelectOptions: DefaultOptionType[] = useMemo(
    () =>
      (teacherSubjectData?.groups ?? []).map(({ id, name }) => ({
        label: name,
        value: id,
      })),

    [],
  );

  const onManualSelectChange = useCallback(
    (selectedGroups: number[]) => {
      setManualSelectValue(selectedGroups);
      const data = selectedGroups.reduce<API.ExamResult[]>((acc, group_id) => {
        const currGroup = groupUsers.byId?.[group_id];
        if (!currGroup) return acc;

        const userExamResults = currGroup.users.map<API.ExamResult>(
          ({ id, email, first_name, last_name }) => ({
            email,
            first_name,
            last_name,
            user_id: id,
            result: 0,
          }),
        );

        return [...acc, ...userExamResults];
      }, []);

      setConvertedData(data?.length ? data : undefined);
    },
    [groupUsers.byId],
  );

  const manualSelectAllProps = useSelectAll({
    options: manualSelectOptions,
    onChange: onManualSelectChange,
    value: manualSelectValue,
  });

  useEffect(() => {
    if (type === ExamGradeType.Manual && open) {
      teacherSubjectData?.groups?.forEach(({ id }) => getGroupUsers(id));
    }
  }, [type, open]);

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
          data={reqData}
          hideLabel
        />
      )}
      {type === ExamGradeType.Manual && (
        <Select
          {...manualSelectAllProps}
          placeholder={<FormattedMessage id="select_groups" />}
          mode="multiple"
          style={{ width: '100%' }}
        />
      )}
    </Modal>
  );
};
