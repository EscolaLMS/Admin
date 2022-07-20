import type { FC } from 'react';
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './itemtypes';
import { Button } from 'antd';

export interface BoxItemProps {
  type: API.TopicType;
}

export interface BoxProps extends BoxItemProps {
  onEnd: (item: BoxItemProps) => void;
  icon?: React.ReactNode;
}

interface DropResult {
  type: API.TopicType;
}

export const Box: FC<BoxProps> = function Box({ type, onEnd, icon = null }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult && onEnd) {
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
    <Button
      className="dnd-editor-box"
      icon={icon}
      ref={drag}
      role="Box"
      style={{ opacity }}
      data-testid={`box-${type}`}
    >
      {type.split('\\').pop()}
    </Button>
  );
};
