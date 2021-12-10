import React, { FC } from 'react';
import { useDrop } from 'react-dnd';
import { FormattedMessage } from 'react-intl';
import { ItemTypes } from './itemtypes';

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
  let className;
  if (isActive) {
    className = 'active';
  } else if (canDrop) {
    className = 'drop';
  }

  return (
    <div className={`dnd-editor-dustbin-container ${className}`} ref={drop} role={'Dustbin'}>
      <div className="dnd-editor-box">
        {isActive ? <FormattedMessage id="relase_drop" /> : <FormattedMessage id="drag_here" />}
      </div>
      {children}
    </div>
  );
};
