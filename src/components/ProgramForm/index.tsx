import React from 'react';

import { AppContext } from '@/components/ProgramForm/Context';
import Program from '@/components/ProgramForm/Program';

export const ProgramForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  return (
    <AppContext id={Number(id)}>
      <Program />
    </AppContext>
  );
};

export default ProgramForm;
