import React, { useState } from 'react';

import TypeButton from '@/components/TypeButton';
import TypeDrawer from '@/components/TypeDrawer';

export type PossibleType =
  | 'App\\Models\\User'
  | 'App\\Models\\Course'
  | 'App\\Models\\Webinar'
  | 'EscolaLms\\Webinars\\Models\\Webinar'
  | 'EscolaLms\\Core\\Models\\User'
  | 'EscolaLms\\Cart\\Models\\Order'
  | 'EscolaLms\\Cart\\Models\\Course'
  | 'EscolaLms\\Webinars\\Models\\Webinar'
  | 'EscolaLms\\Auth\\Models\\UserGroup'
  | 'Questionnaire'
  | 'Product';

export const TypeButtonDrawer: React.FC<{
  type: PossibleType;
  type_id: number;
}> = ({ type, type_id }) => {
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
