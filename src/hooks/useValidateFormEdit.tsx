import { useState } from 'react';
import { isPast } from 'date-fns';

interface ManageProps {
  showModal: boolean;
  disableEdit: boolean;
  clicked: boolean;
  valuesChanged?: boolean;
  showConfirmModal?: boolean;
  loading?: boolean;
}

export default function useValidateFormEdit() {
  const [manageCourseEdit, setManageCourseEdit] = useState<ManageProps>({
    showModal: false,
    disableEdit: false,
    clicked: false,
  });

  const validateCourseEdit = (modelData: API.Course | API.Webinar | API.Consultation) => {
    if (
      modelData?.status === 'published' &&
      modelData?.active_from &&
      isPast(new Date(modelData?.active_from)) &&
      !manageCourseEdit.clicked
    ) {
      setManageCourseEdit({
        ...manageCourseEdit,
        showModal: false,
        disableEdit: true,
        clicked: false,
      });
    } else {
      setManageCourseEdit({
        ...manageCourseEdit,
        showModal: false,
        disableEdit: false,
        clicked: false,
      });
    }
  };

  return { manageCourseEdit, setManageCourseEdit, validateCourseEdit };
}
