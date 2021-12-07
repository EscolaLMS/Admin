import { FC, useState, useCallback, useEffect, useContext } from 'react';
import update from 'immutability-helper';
import { Context } from '@/components/ProgramForm/Context';
import { Modal } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { DndCard } from './card';
import { Dustbin } from './dustbin';
import { Box, BoxItemProps } from './box';
import Topic from '../Topic/index';
import { TopicNew, TopicType, TopicNotEmpty } from './types';
import { FormattedMessage } from 'react-intl';

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
  state: API.Lesson;
  setState: (state: API.Lesson) => void;
  topicList: (TopicNew | TopicNotEmpty)[];
  onUpload?: (topic: API.Topic) => void;
}> = ({ courseId, courseLessons, state, topicList, onUpload }) => {
  const { id, deleteTopic, sortTopic, updateTopicsOrder } = useContext(Context);

  const [cards, setCards] = useState<(TopicNew | TopicNotEmpty)[]>([]);

  const [isModalVisible, setIsModalVisible] = useState<TopicNew | TopicNotEmpty>();

  useEffect(() => {
    setCards(topicList);
  }, [topicList]);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];

      return (
        dragCard &&
        state.id &&
        sortTopic &&
        id &&
        sortTopic(state.id, Number(dragCard.id), hoverIndex > dragIndex ? false : true) &&
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        )
      );
    },

    [cards],
  );

  const updateOrder = useCallback(() => {
    return updateTopicsOrder && updateTopicsOrder(Number(state.id));
  }, [cards, state]);

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
    return deleteTopic && item.id && deleteTopic(item.id);
  }, []);

  const onEditCart = useCallback((item: TopicNew | TopicNotEmpty) => {
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
        onEnd={updateOrder}
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
        title={
          <>
            <FormattedMessage id="topic" />
            {`: ${isModalVisible && isModalVisible.title}`}
          </>
        }
        visible={isModalVisible !== undefined}
        onCancel={() => setIsModalVisible(undefined)}
        footer={false}
        width={1000}
      >
        {isModalVisible && (
          <Topic
            courseId={courseId}
            courseLessons={courseLessons}
            key={isModalVisible.id}
            topic={isModalVisible}
            onUpload={onUpload}
            onClose={() => setIsModalVisible(undefined)}
          />
        )}
      </Modal>
    </>
  );
};
