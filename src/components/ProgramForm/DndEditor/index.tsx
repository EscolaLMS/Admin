import { FC, useState, useCallback, useEffect, useContext } from 'react';
import update from 'immutability-helper';
import { Context } from '@/components/ProgramForm/Context';
import { Modal } from 'antd';
import {
  FileTextOutlined,
  FilePdfOutlined,
  FileImageOutlined,
  VideoCameraAddOutlined,
  AudioOutlined,
  YoutubeOutlined,
  InteractionOutlined,
} from '@ant-design/icons';
import { DndCard } from './card';
import { Dustbin } from './dustbin';
import { Box, BoxItemProps } from './box';
import Topic from '../Topic/index';
import { FormattedMessage } from 'react-intl';
import { TopicType } from '../../../services/escola-lms/course';

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

export const DndEditorContainer: FC<{
  courseId?: number;
  courseLessons: API.Lesson[];
  state: API.Lesson;
  setState: (state: API.Lesson) => void;
  topicList: (API.TopicNew | API.TopicNotEmpty)[];
}> = ({ courseId, courseLessons, state, topicList }) => {
  const { id, deleteTopic, sortTopic, updateTopicsOrder, addNewTopic } = useContext(Context);

  const [cards, setCards] = useState<API.TopicNewOrNotEmpty[]>([]);

  const [isModalVisible, setIsModalVisible] = useState<API.TopicNewOrNotEmpty>();

  useEffect(() => {
    setCards(topicList);
  }, [topicList]);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      if (dragCard && state.id && sortTopic && id) {
        sortTopic(state.id, Number(dragCard.id), hoverIndex > dragIndex ? false : true);
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        );
      }
    },

    [cards],
  );

  const updateOrder = useCallback(() => {
    return updateTopicsOrder && updateTopicsOrder(Number(state.id));
  }, [cards, state]);

  const onNewCard = useCallback(
    (item: BoxItemProps) => {
      const newTopic = addNewTopic && state.id && addNewTopic(state.id);

      setCards((prevCards) => [...prevCards, { ...newTopic, topicable_type: item.type }]);

      setIsModalVisible({ ...newTopic, topicable_type: item.type });
    },
    [cards],
  );

  const onDeleteCart = useCallback(
    (item: API.TopicNew | API.TopicNotEmpty) => {
      setCards((prevCards) => prevCards.filter((el) => el.id !== item.id));
      return deleteTopic && item.id && deleteTopic(item.id);
    },
    [cards],
  );

  const onEditCart = useCallback(
    (item: API.TopicNew | API.TopicNotEmpty) => {
      setIsModalVisible(item);
    },
    [cards],
  );

  const renderCard = (card: API.TopicNew | API.TopicNotEmpty, index: number) => {
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h3>
          <FormattedMessage id="topic_list" />
        </h3>
        <Dustbin>
          <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        </Dustbin>
      </div>
      <div className="topic-types__wrapper" style={{ width: '100%' }}>
        <h3>
          <FormattedMessage id="topic_types" />
        </h3>
        <div
          className="topic-types__list"
          style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
        >
          <Box type={TopicType.RichText} onEnd={onNewCard} icon={<FileTextOutlined />} />
          <Box type={TopicType.OEmbed} onEnd={onNewCard} icon={<YoutubeOutlined />} />
          <Box type={TopicType.Audio} onEnd={onNewCard} icon={<AudioOutlined />} />
          <Box type={TopicType.Video} onEnd={onNewCard} icon={<VideoCameraAddOutlined />} />
          <Box type={TopicType.H5P} onEnd={onNewCard} icon={<InteractionOutlined />} />
          <Box type={TopicType.Image} onEnd={onNewCard} icon={<FileImageOutlined />} />
          <Box type={TopicType.PDF} onEnd={onNewCard} icon={<FilePdfOutlined />} />
        </div>
      </div>

      <Modal
        title={
          <>
            {` ${isModalVisible && isModalVisible.title}`}
            <FormattedMessage id="topic" />
          </>
        }
        visible={isModalVisible !== undefined}
        onCancel={() => setIsModalVisible(undefined)}
        footer={false}
        width={1300}
      >
        {isModalVisible && (
          <Topic
            courseId={courseId}
            courseLessons={courseLessons}
            key={isModalVisible.id}
            topic={isModalVisible as API.Topic}
            onClose={() => setIsModalVisible(undefined)}
          />
        )}
      </Modal>
    </div>
  );
};
