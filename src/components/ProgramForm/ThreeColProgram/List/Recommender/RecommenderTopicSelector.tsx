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

export const RecommenderTopicSelector: React.FC<{
  onSelected: (type: TopicType) => void;
  positionsToHide?: (TopicType | 'lesson')[];
}> = ({ onSelected, positionsToHide }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { initialState } = useModel('@@initialState');

  const setSelected = useCallback((type: TopicType) => {
    setOpen(false);
    onSelected(type);
  }, []);

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
          return !(initialState?.packages && initialState?.packages?.[PACKAGES.TopicTypeGift]);
        case TopicType.SCORM:
          return !(initialState?.packages && initialState?.packages?.[PACKAGES.Scorm]);
        case TopicType.Project:
          return !(initialState?.packages && initialState?.packages?.[PACKAGES.TopicTypeProject]);
        default:
          return !(initialState?.packages && initialState?.packages?.[PACKAGES.TopicTypes]);
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
        {!positionsToHide?.includes(TopicType.RichText) &&
          !topicTypeIsDisabled(TopicType.RichText) && (
            <Tooltip title={<FormattedMessage id="RichText" />}>
              <Button
                block
                onClick={() => setSelected(TopicType.RichText)}
                icon={<FileTextOutlined />}
              />
            </Tooltip>
          )}
        {!positionsToHide?.includes(TopicType.OEmbed) && !topicTypeIsDisabled(TopicType.OEmbed) && (
          <Tooltip title={<FormattedMessage id="OEmbed" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.OEmbed)}
              icon={<YoutubeOutlined />}
            />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.Audio) && !topicTypeIsDisabled(TopicType.Audio) && (
          <Tooltip title={<FormattedMessage id="Audio" />}>
            <Button block onClick={() => setSelected(TopicType.Audio)} icon={<AudioOutlined />} />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.Video) && !topicTypeIsDisabled(TopicType.Video) && (
          <Tooltip title={<FormattedMessage id="Video" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.Video)}
              icon={<VideoCameraAddOutlined />}
            />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.H5P) && !topicTypeIsDisabled(TopicType.H5P) && (
          <Tooltip title={<FormattedMessage id="H5P" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.H5P)}
              icon={<InteractionOutlined />}
            />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.Image) && !topicTypeIsDisabled(TopicType.Image) && (
          <Tooltip title={<FormattedMessage id="Image" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.Image)}
              icon={<FileImageOutlined />}
            />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.PDF) && !topicTypeIsDisabled(TopicType.PDF) && (
          <Tooltip title={<FormattedMessage id="PDF" />}>
            <Button block onClick={() => setSelected(TopicType.PDF)} icon={<FilePdfOutlined />} />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.SCORM) && !topicTypeIsDisabled(TopicType.SCORM) && (
          <Tooltip title={<FormattedMessage id="SCORM" />}>
            <Button block onClick={() => setSelected(TopicType.SCORM)} icon={<FundOutlined />} />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.Project) &&
          !topicTypeIsDisabled(TopicType.Project) && (
            <Tooltip title={<FormattedMessage id="Project" />}>
              <Button
                block
                onClick={() => setSelected(TopicType.Project)}
                icon={<CarryOutOutlined />}
              />
            </Tooltip>
          )}
        {!positionsToHide?.includes(TopicType.GiftQuiz) &&
          !topicTypeIsDisabled(TopicType.GiftQuiz) && (
            <Tooltip title={<FormattedMessage id="Quiz" />}>
              <Button
                block
                onClick={() => setSelected(TopicType.GiftQuiz)}
                icon={<PercentageOutlined />}
              />
            </Tooltip>
          )}
      </div>
    </div>
  );
};
