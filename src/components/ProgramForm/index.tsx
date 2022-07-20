import React, { useState } from 'react';

import { AppContext } from '@/components/ProgramForm/Context';
import Program from '@/components/ProgramForm/Program';
import ThreeColProgram from '@/components/ProgramForm/ThreeColProgram';

const NEW_PROGRAM = true;

export const ProgramForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  return <AppContext id={Number(id)}>{NEW_PROGRAM ? <ThreeColProgram /> : <Program />}</AppContext>;
};

export default ProgramForm;
