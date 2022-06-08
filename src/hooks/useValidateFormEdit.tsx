import { useState } from 'react';
import { isPast } from 'date-fns';

export default function useValidateFormEdit() {
  const [manageCourseEdit, setManageCourseEdit] = useState({
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
        showModal: false,
        disableEdit: true,
        clicked: false,
      });
    } else {
      setManageCourseEdit({
        showModal: false,
        disableEdit: false,
        clicked: false,
      });
    }
  };

  return { manageCourseEdit, setManageCourseEdit, validateCourseEdit };
}
