import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

import { getCourse } from '@/services/escola-lms/course';
import { Link } from 'umi';

export const CourseLink: React.FC<{
  id: number;
}> = ({ id }) => {
  const [course, setCourse] = useState<API.Course>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    getCourse(id, { signal: controller.signal })
      .then((response) => {
        setLoading(false);
        if (response.success) {
          setCourse(response.data);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [id]);

  if (loading) {
    return <Spin />;
  }

  return (
    <Link to={`/courses/${id}`}>
      <small>{id}: </small>
      {course && course.title}
    </Link>
  );
};

export default CourseLink;
