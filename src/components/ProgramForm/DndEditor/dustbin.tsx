import React, { CSSProperties, FC } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './itemtypes';

const style: CSSProperties = {
  minHeight: '12rem',
  minWidth: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

export const Dustbin: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '#fafafa';
  if (isActive) {
    backgroundColor = '#b7eb8f';
  } else if (canDrop) {
    backgroundColor = '#f1f1f1';
  }

  return (
    <div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
      <div style={{ marginBottom: '10px' }}>{isActive ? 'Release to drop' : 'Drag a box here'}</div>
      {children}
    </div>
  );
};
