import React, { useRef, useState } from 'react';
import type { DropTargetMonitor } from 'react-dnd';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './itemtypes';
import type { XYCoord, Identifier } from 'dnd-core';
import { Popconfirm } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'umi';
import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import Tooltip from 'antd/lib/tooltip';
import TopicHeader from '../Topic/header';

export interface CardProps {
  id: any;
  topic: API.TopicNotEmpty | API.TopicNew;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  onEdit: (topic: API.TopicNotEmpty | API.TopicNew) => void;
  onDelete: (topic: API.TopicNotEmpty | API.TopicNew) => void;
  onCloneCart: (topic: API.TopicNotEmpty | API.TopicNew) => void;
  onEnd: () => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const TopicButtons: React.FC<{
  onDelete: () => void;
  onCloneCart: () => void;
  onEdit: () => void;
  loading: boolean;
}> = ({ onDelete, onCloneCart, onEdit, loading }) => {
  return (
    <div className="dnd-editor-card-options">
      <Tooltip title={<FormattedMessage id="copy_topic" />}>
        <Button onClick={onCloneCart} size="small" loading={loading}>
          <CopyOutlined />
        </Button>
      </Tooltip>

      <Divider type="vertical" />
      <Button onClick={() => onEdit()} loading={loading} size="small">
        <FormattedMessage id="edit" />
      </Button>
      <Divider type="vertical" />
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

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const DndCard: React.FC<CardProps> = ({
  id,
  topic,
  index,
  moveCard,
  onEdit,
  onDelete,
  onCloneCart,
  onEnd,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
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
    end() {
      onEnd();
    },
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div
      onMouseOver={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
      className="dnd-editor-card"
      ref={ref}
      style={{
        opacity,
      }}
      data-handler-id={handlerId}
    >
      <TopicHeader topic={topic as API.Topic} />
      {showOptions && (
        <TopicButtons
          onCloneCart={() => onCloneCart(topic)}
          onDelete={() => onDelete(topic)}
          onEdit={() => onEdit(topic)}
          loading={false}
        />
      )}
    </div>
  );
};
