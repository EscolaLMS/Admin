import React from 'react';

import { AppContext } from '@/components/ProgramForm/Context';
import ThreeColProgram from '@/components/ProgramForm/ThreeColProgram';

export const ProgramForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  return (
    <AppContext id={Number(id)}>
      <ThreeColProgram />
    </AppContext>
  );
};

export default ProgramForm;
