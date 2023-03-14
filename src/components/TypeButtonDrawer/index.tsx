import React, { useState, PropsWithChildren } from 'react';

import TypeButton from '@/components/TypeButton';
import TypeDrawer from '@/components/TypeDrawer';
import { Space } from 'antd';

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
  | 'EscolaLms\\Consultations\\Models\\Consultation'
  | 'Questionnaire'
  | 'Product';

export const TypeButtonDrawer: React.FC<
  PropsWithChildren<{
    type: PossibleType;
    type_id: number;
  }>
> = ({ type, type_id, children }) => {
  const [currentRow, setCurrentRow] = useState<API.LinkedType>({ type: '', value: null });

  return (
    <React.Fragment>
      <Space direction="vertical">
        {children}
        <TypeButton type={type} type_id={type_id} onData={(data) => setCurrentRow(data)} />
      </Space>
      <TypeDrawer
        data={currentRow}
        visible={!!currentRow.type}
        onClose={() => setCurrentRow({ type: '', value: null })}
      />
    </React.Fragment>
  );
};

export default TypeButtonDrawer;
