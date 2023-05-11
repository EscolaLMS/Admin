import React, { useState, PropsWithChildren } from 'react';

import TypeButton from '@/components/TypeButton';
import TypeDrawer from '@/components/TypeDrawer';
import { Space } from 'antd';

export type PossibleType =
  | 'App\\Models\\User'
  | 'App\\Models\\Course'
  | 'App\\Models\\Webinar'
  | 'EscolaLms\\Core\\Models\\User'
  | 'EscolaLms\\Cart\\Models\\Order'
  | 'EscolaLms\\Cart\\Models\\Course'
  | 'EscolaLms\\Webinars\\Models\\Webinar'
  | 'EscolaLms\\Auth\\Models\\UserGroup'
  | 'EscolaLms\\Consultations\\Models\\Consultation'
  | 'EscolaLms\\TopicTypeGift\\Models\\GiftQuiz'
  | 'EscolaLms\\Vouchers\\Models\\Order'
  | 'Questionnaire'
  | 'Product'
  | 'Students';

export const TypeButtonDrawer: React.FC<
  PropsWithChildren<{
    type: PossibleType;
    type_id: number;
    text?: React.ReactNode;
  }>
> = ({ type, type_id, text, children }) => {
  const [currentRow, setCurrentRow] = useState<API.LinkedType>({ type: '', value: null });

  return (
    <React.Fragment>
      <Space direction="vertical">
        {children}
        <TypeButton
          type={type}
          type_id={type_id}
          onData={(data) => setCurrentRow(data)}
          text={text}
        />
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
