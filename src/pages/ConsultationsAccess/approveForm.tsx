import { DrawerForm, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { Descriptions, Form } from 'antd';
import { format } from 'date-fns';
import React, { useCallback, useMemo } from 'react';
import { FormattedMessage, useIntl, useModel } from 'umi';
import { v4 as uuidv4 } from 'uuid';

import { DATETIME_FORMAT } from '@/consts/dates';
import PACKAGES from '@/consts/packages';
import { approveConsultationAccessTerm } from '@/services/escola-lms/consultations_access';

enum MeetingType {
  Custom = 'custom',
  Jitsi = 'jitsi',
  PencilSpaces = 'pencil-spaces',
}

const conditionallyReturnArr = <TObj extends Record<string, any>>(
  value: TObj,
  bool: boolean,
): TObj[] => (bool ? [value] : []);

const generateJitsiMeeting = () => `https://meet.jit.si/${uuidv4()}`;

const getMeetingLink = ({ meeting_link, meeting_type }: FormData): string | null => {
  const meetingTypeMap: Record<MeetingType, string | null> = {
    [MeetingType.Custom]: meeting_link,
    [MeetingType.Jitsi]: generateJitsiMeeting(),
    [MeetingType.PencilSpaces]: null,
  };

  return meetingTypeMap?.[meeting_type] ?? meeting_link;
};

interface FormData {
  meeting_type: MeetingType;
  meeting_link: string;
}

interface Props {
  term?: EscolaLms.ConsultationAccess.Models.ConsultationAccessEnquiryProposedTerm;
  onClose: () => void;
  onSuccess: () => void;
}

export const ApproveForm: React.FC<Props> = ({ term, onClose, onSuccess }) => {
  const intl = useIntl();
  const { initialState } = useModel('@@initialState');

  const [form] = Form.useForm<FormData>();
  const meetingType = Form.useWatch('meeting_type', form);

  const pencilSpacesPackageInstalled = useMemo(
    () => Boolean(initialState?.packages?.[PACKAGES.PencilSpaces]),
    [initialState?.packages],
  );

  const meetingTypeOptions = useMemo(
    () => [
      {
        value: MeetingType.Custom,
        label: intl.formatMessage({ id: `ConsultationsAccess.meetingType.custom` }),
      },
      {
        value: MeetingType.Jitsi,
        label: intl.formatMessage({ id: `ConsultationsAccess.meetingType.jitsi` }),
      },
      ...conditionallyReturnArr(
        {
          value: MeetingType.PencilSpaces,
          label: intl.formatMessage({ id: `ConsultationsAccess.meetingType.pencil-spaces` }),
        },
        pencilSpacesPackageInstalled,
      ),
    ],
    [intl, pencilSpacesPackageInstalled],
  );

  const handleFinish = useCallback(
    async (formData: FormData) => {
      if (!term) return;
      const meeting_link = getMeetingLink(formData);

      const res = await approveConsultationAccessTerm(term?.id, { meeting_link });
      if (!res.success) return;

      onClose();
      onSuccess();
    },
    [term],
  );

  return (
    <DrawerForm<FormData>
      title={<FormattedMessage id="approve_form" defaultMessage="Approve Form" />}
      onVisibleChange={(visible) => !visible && onClose()}
      form={form}
      visible={!!term}
      autoFocusFirstInput
      drawerProps={{
        destroyOnClose: true,
      }}
      submitTimeout={2000}
      initialValues={{ meeting_type: MeetingType.Custom }}
      onFinish={handleFinish}
    >
      {term && (
        <Descriptions column={2}>
          <Descriptions.Item
            label={<FormattedMessage id="approve_date" defaultMessage="Approved Date" />}
          >
            {format(new Date(term.proposed_at), DATETIME_FORMAT)}
          </Descriptions.Item>
        </Descriptions>
      )}
      <ProFormSelect
        name="meeting_type"
        options={meetingTypeOptions}
        label={<FormattedMessage id="ConsultationsAccess.meetingType" />}
      />
      {meetingType === MeetingType.Custom && (
        <ProFormText
          rules={[
            {
              required: true,
            },
          ]}
          name="meeting_link"
          label={<FormattedMessage id="ConsultationsAccess.meetingLink" />}
        />
      )}
    </DrawerForm>
  );
};
