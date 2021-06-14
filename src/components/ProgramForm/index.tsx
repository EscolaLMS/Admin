import React from 'react';

import { AppContext } from '@/context/curriculum';
import Curriculum from '@/components/curriculum';

import { program } from '@/services/escola-lms/course';

export const ProgramForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  return (
    <AppContext
      credentials={{
        token: localStorage.getItem('TOKEN'),
        id,
      }}
    >
      <Curriculum />
    </AppContext>
  );
};

export default ProgramForm;
