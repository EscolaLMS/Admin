import React, { FC, useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { ItemTypes } from './itemtypes';
import { XYCoord } from 'dnd-core';
import { TopicNotEmpty, TopicNew } from './types';
import { Popconfirm } from 'antd';

import { FormattedMessage } from 'umi';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import TopicHeader from '../Topic/header';

const style = {
  textAlign: 'left',
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};

export interface CardProps {
  id: any;
  topic: TopicNotEmpty | TopicNew;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  onEdit: (topic: TopicNotEmpty | TopicNew) => void;
  onDelete: (topic: TopicNotEmpty | TopicNew) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const TopicButtons: React.FC<{ onDelete: () => void; onEdit: () => void; loading: boolean }> = ({
  onDelete,
  onEdit,
  loading,
}) => {
  return (
    <div>
      <Divider type="vertical" />
      <Button onClick={() => onEdit()} loading={loading} size="small">
        <FormattedMessage id="edit" />
      </Button>

      <Popconfirm
        onConfirm={onDelete}
        title={<FormattedMessage id="deleteQuestion" />}
        okText={<FormattedMessage id="yes" />}
        cancelText={<FormattedMessage id="no" />}
      >
        <Button loading={loading} size="small" danger>
          <FormattedMessage id="delete" />
        </Button>
      </Popconfirm>
    </div>
  );
};

export const DndCard: FC<CardProps> = ({ id, topic, index, moveCard, onEdit, onDelete }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        ...style,
        opacity,
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      data-handler-id={handlerId}
    >
      <TopicHeader topic={topic} />
      <TopicButtons onDelete={() => onDelete(topic)} onEdit={() => onEdit(topic)} loading={false} />
    </div>
  );
};
