import PACKAGES from '@/consts/packages';
import { useState, useCallback } from 'react';
import { Button, Tooltip } from 'antd';
import {
  FundOutlined,
  FileTextOutlined,
  FilePdfOutlined,
  FileImageOutlined,
  VideoCameraAddOutlined,
  AudioOutlined,
  YoutubeOutlined,
  InteractionOutlined,
  CarryOutOutlined,
  PercentageOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';

import '../types.css';
import { TopicType } from '@/services/escola-lms/enums';
import { FormattedMessage, useModel } from 'umi';
import { topicTypeToSettingName } from '@/pages/Settings/global';
import { createHavePackageInstalled } from '@/utils/access';

const topicTypes = [
  {
    type: TopicType.RichText,
    icon: <FileTextOutlined />,
    title: <FormattedMessage id="RichText" />,
  },
  {
    type: TopicType.OEmbed,
    icon: <YoutubeOutlined />,
    title: <FormattedMessage id="OEmbed" />,
  },
  {
    type: TopicType.Audio,
    icon: <AudioOutlined />,
    title: <FormattedMessage id="Audio" />,
  },
  {
    type: TopicType.Video,
    icon: <VideoCameraAddOutlined />,
    title: <FormattedMessage id="Video" />,
  },
  {
    type: TopicType.H5P,
    icon: <InteractionOutlined />,
    title: <FormattedMessage id="H5P" />,
  },
  {
    type: TopicType.Image,
    icon: <FileImageOutlined />,
    title: <FormattedMessage id="Image" />,
  },
  {
    type: TopicType.PDF,
    icon: <FilePdfOutlined />,
    title: <FormattedMessage id="PDF" />,
  },
  {
    type: TopicType.SCORM,
    icon: <FundOutlined />,
    title: <FormattedMessage id="SCORM" />,
  },
  {
    type: TopicType.Project,
    icon: <CarryOutOutlined />,
    title: <FormattedMessage id="Project" />,
  },
  {
    type: TopicType.GiftQuiz,
    icon: <PercentageOutlined />,
    title: <FormattedMessage id="Quiz" />,
  },
];

export const RecommenderTopicSelector: React.FC<{
  onSelected: (type: TopicType) => void;
  positionsToHide?: (TopicType | 'lesson')[];
}> = ({ onSelected, positionsToHide }) => {
  const [open, setOpen] = useState(false);

  const { initialState } = useModel('@@initialState');

  const setSelected = useCallback((type: TopicType) => {
    setOpen(false);
    onSelected(type);
  }, []);

  const havePackageInstalled = useCallback(createHavePackageInstalled(initialState?.packages), [
    initialState?.packages,
  ]);

  const topicTypeIsDisabled = useCallback(
    (type: TopicType) => {
      const key = Object.keys(TopicType)
        .filter((x) => TopicType[x] == type)
        .pop();

      const value =
        key &&
        initialState?.config?.filter((item) => item.key === topicTypeToSettingName(key))[0]?.data;

      if (!!value) {
        return true;
      }

      switch (type) {
        case TopicType.GiftQuiz:
          return !havePackageInstalled(PACKAGES.TopicTypeGift);
        case TopicType.SCORM:
          return !havePackageInstalled(PACKAGES.Scorm);
        case TopicType.Project:
          return !havePackageInstalled(PACKAGES.TopicTypeProject);
        default:
          return !havePackageInstalled(PACKAGES.TopicTypes);
      }
    },
    [initialState],
  );

  return (
    <div
      className={`topic-types-selector topic-types-selector__recommender-wrapper
       ${open ? 'topic-types-selector--visible' : ''}`}
    >
      <Button
        type="text"
        size="small"
        onClick={() => setOpen((prev) => !prev)}
        className="topic-types-selector__recommender--add-btn"
        icon={open ? <MinusOutlined /> : <PlusOutlined />}
      >
        <FormattedMessage id="recommender.add_new_exercise" />
      </Button>

      <div
        className={`${'topic-types-selector__recommender'}
          ${open ? 'topic-types-selector__recommender--active' : ''}`}
      >
        {topicTypes.map(
          (topic) =>
            !positionsToHide?.includes(topic.type) &&
            !topicTypeIsDisabled(topic.type) && (
              <Tooltip title={topic.title} key={topic.type}>
                <Button block onClick={() => setSelected(topic.type)} icon={topic.icon} />
              </Tooltip>
            ),
        )}
      </div>
    </div>
  );
};
