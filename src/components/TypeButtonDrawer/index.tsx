import React, { useState } from 'react';

import TypeButton from '@/components/TypeButton';
import TypeDrawer from '@/components/TypeDrawer';

type PossibleType =
  | 'App\\Models\\User'
  | 'EscolaLms\\Core\\Models\\User'
  | 'EscolaLms\\Cart\\Models\\Order'
  | 'EscolaLms\\Cart\\Models\\Course'
  | 'EscolaLms\\Auth\\Models\\UserGroup';

export const TypeButtonDrawer: React.FC<{
  type: PossibleType;
  type_id: number;
}> = ({ type, type_id }) => {
  console.log(type, type_id);
  const [currentRow, setCurrentRow] = useState<API.LinkedType>({ type: '', value: null });
  return (
    <React.Fragment>
      <TypeButton type={type} type_id={type_id} onData={(data) => setCurrentRow(data)} />
      <TypeDrawer
        data={currentRow}
        visible={!!currentRow.type}
        onClose={() => setCurrentRow({ type: '', value: null })}
      />
    </React.Fragment>
  );
};

export default TypeButtonDrawer;
