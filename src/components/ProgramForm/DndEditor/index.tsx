import { FC, useState, useCallback } from 'react';
import update from 'immutability-helper';
import { Modal } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { DndCard } from './card';
import { Dustbin } from './dustbin';
import { Box, BoxItemProps } from './box';
import { TopicForm } from './form';
import { TopicNew, TopicType, TopicNotEmpty } from './types';

const style = {
  width: 900,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC<{
  courseId?: number;
  courseLessons: API.Lesson[];
  topicList: (TopicNew | TopicNotEmpty)[];
}> = ({ courseId, courseLessons, topicList }) => {
  const [cards, setCards] = useState<(TopicNew | TopicNotEmpty)[]>(topicList);

  const [isModalVisible, setIsModalVisible] = useState<TopicNew | TopicNotEmpty>();

  const handleOk = () => {
    console.log('save topic stuff');
    setIsModalVisible(undefined);
  };

  const handleCancel = () => {
    setIsModalVisible(undefined);
  };

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      console.log('send sorting to backend/content, skip new ones');

      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      );
    },
    [cards],
  );

  const onNewCard = useCallback((item: BoxItemProps) => {
    const newTopic: TopicNew = {
      id: Math.round(Math.random() * Number.MAX_SAFE_INTEGER),
      isNew: true,
      can_skip: false,
      topicable_type: item.type,
    };
    setCards((prevCards) => [...prevCards, newTopic]);
    setIsModalVisible(newTopic);
  }, []);

  const onDeleteCart = useCallback((item: TopicNew | TopicNotEmpty) => {
    setCards((prevCards) => prevCards.filter((el) => el.id !== item.id));
    console.log('send delete to backend/content');
    console.log('onDelete', item);
  }, []);

  const onEditCart = useCallback((item: TopicNew | TopicNotEmpty) => {
    console.log('onEditCart', item);
    setIsModalVisible(item);
  }, []);

  const renderCard = (card: TopicNew | TopicNotEmpty, index: number) => {
    return (
      <DndCard
        key={card.id}
        index={index}
        id={card.id}
        topic={card}
        moveCard={moveCard}
        onDelete={onDeleteCart}
        onEdit={onEditCart}
      />
    );
  };

  return (
    <>
      <div style={{ overflow: 'hidden', clear: 'both', float: 'left' }}>
        <Dustbin>
          <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        </Dustbin>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <Box type={TopicType.RichText} onEnd={onNewCard} icon={<HomeOutlined />} />
        <Box type={TopicType.OEmbed} onEnd={onNewCard} icon={<HomeOutlined />} />
        <Box type={TopicType.Audio} onEnd={onNewCard} icon={<HomeOutlined />} />
        <Box type={TopicType.Video} onEnd={onNewCard} icon={<HomeOutlined />} />
        <Box type={TopicType.H5P} onEnd={onNewCard} icon={<HomeOutlined />} />
        <Box type={TopicType.Image} onEnd={onNewCard} icon={<HomeOutlined />} />
        <Box type={TopicType.PDF} onEnd={onNewCard} icon={<HomeOutlined />} />
      </div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible !== undefined}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        {isModalVisible && (
          <TopicForm courseId={courseId} courseLessons={courseLessons} item={isModalVisible} />
        )}
      </Modal>
    </>
  );
};
