import React, { CSSProperties, FC } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './itemtypes';

import { TopicType } from '../types';

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
};

export interface BoxItemProps {
  type: TopicType;
}

export interface BoxProps extends BoxItemProps {
  onEnd: (item: BoxItemProps) => void;
  icon?: React.ReactNode;
}

interface DropResult {
  type: TopicType;
}

export const Box: FC<BoxProps> = function Box({ type, onEnd, icon = null }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult && onEnd) {
        console.log(`You dropped ${item.type} into ${dropResult}!`);
        onEnd(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} role="Box" style={{ ...style, opacity }} data-testid={`box-${type}`}>
      {icon}
      {type.split('\\').pop()}
    </div>
  );
};
