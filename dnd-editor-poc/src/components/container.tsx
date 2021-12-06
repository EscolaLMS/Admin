import { FC, useState, useCallback } from 'react';
import { Card } from './card';
import update from 'immutability-helper';

import { Dustbin } from './dustbin';
import { Box, BoxItemProps } from './box';
import { HomeOutlined } from '@ant-design/icons';

import { TopicNew, TopicType, TopicNotEmpty } from '../types';

import { Modal, Button } from 'antd';
import { TopicForm } from './form';

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

// THIS IS MOCK CODE

const mockData: TopicNotEmpty[] = require('../mock.json');

// THIS IS MOCK CODE

export const Container: FC = () => {
  const [cards, setCards] = useState<(TopicNew | TopicNotEmpty)[]>(mockData);

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
      <Card
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
      <div></div>
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
      >
        {isModalVisible && <TopicForm item={isModalVisible} />}
      </Modal>
    </>
  );
};
