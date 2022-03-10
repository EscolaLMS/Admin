import { useState } from 'react';
import { isPast } from 'date-fns';

export default function useValidateFormEdit() {
  const [manageCourseEdit, setManageCourseEdit] = useState({
    showModal: false,
    disableEdit: false,
  });

  const validateCourseEdit = (modelData: API.Course | API.Webinar | API.Consultation) => {
    if (
      modelData?.status === 'published' &&
      modelData?.active_from &&
      isPast(new Date(modelData?.active_from))
    ) {
      setManageCourseEdit({
        showModal: false,
        disableEdit: true,
      });
    } else {
      setManageCourseEdit({
        showModal: false,
        disableEdit: false,
      });
    }
  };

  return { manageCourseEdit, setManageCourseEdit, validateCourseEdit };
}
