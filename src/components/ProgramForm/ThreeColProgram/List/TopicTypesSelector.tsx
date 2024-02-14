import PACKAGES from '@/consts/packages';
import {
  AudioOutlined,
  CarryOutOutlined,
  FileImageOutlined,
  FilePdfOutlined,
  FileTextOutlined,
  FundOutlined,
  InteractionOutlined,
  //CaretUpOutlined,
  //CaretDownOutlined,
  PercentageOutlined,
  PicCenterOutlined,
  PlusOutlined,
  VideoCameraAddOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Button, Divider, Space, Tooltip } from 'antd';
import { useCallback, useState } from 'react';

import { TopicType } from '@/services/escola-lms/enums';
import { FormattedMessage, useIntl, useModel } from 'umi';
import './types.css';

import { topicTypeToSettingName } from '@/pages/Settings/global';

export const TopicTypesSelector: React.FC<{
  onSelected: (type: TopicType) => void;
  onNewLesson: () => void;
  positionsToHide?: (TopicType | 'lesson')[];
  depth?: number;
}> = ({ onSelected, onNewLesson, positionsToHide, depth = 0 }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { initialState } = useModel('@@initialState');
  const intl = useIntl();

  const setSelected = useCallback((type: TopicType) => {
    setOpen(false);
    onSelected(type);
  }, []);

  const topicTypeIsDisabled = useCallback(
    (type: TopicType) => {
      const key = Object.keys(TopicType)
        .filter((x) => TopicType[x as keyof typeof TopicType] == type)
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
    <div className={`topic-types-selector ${open ? 'topic-types-selector--visible' : ''}`}>
      <Space>
        <Tooltip placement="top" title={<FormattedMessage id="add_new_topic" />}>
          <Button
            type="primary"
            size="small"
            onClick={() => setOpen((prev) => !prev)}
            icon={<PlusOutlined />}
          />
        </Tooltip>
      </Space>

      <div
        className={`topic-types-selector__list ${
          open ? 'topic-types-selector__list--visible' : ''
        }`}
      >
        {!positionsToHide?.includes('lesson') && (
          <>
            <Tooltip
              placement="right"
              title={
                intl.messages[`Lesson_level-${depth}`] ? (
                  <FormattedMessage id={`Lesson_level-${depth}`} />
                ) : (
                  <FormattedMessage id="Lesson" defaultMessage="Lesson" />
                )
              }
            >
              <Button
                block
                onClick={() => {
                  setOpen(false);
                  onNewLesson();
                }}
                icon={<PicCenterOutlined />}
              />
            </Tooltip>
            <Divider />
          </>
        )}
        {!positionsToHide?.includes(TopicType.RichText) &&
          !topicTypeIsDisabled(TopicType.RichText) && (
            <Tooltip placement="right" title={<FormattedMessage id="RichText" />}>
              <Button
                block
                onClick={() => setSelected(TopicType.RichText)}
                icon={<FileTextOutlined />}
              />
            </Tooltip>
          )}
        {!positionsToHide?.includes(TopicType.OEmbed) && !topicTypeIsDisabled(TopicType.OEmbed) && (
          <Tooltip placement="right" title={<FormattedMessage id="OEmbed" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.OEmbed)}
              icon={<YoutubeOutlined />}
            />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.Audio) && !topicTypeIsDisabled(TopicType.Audio) && (
          <Tooltip placement="right" title={<FormattedMessage id="Audio" />}>
            <Button block onClick={() => setSelected(TopicType.Audio)} icon={<AudioOutlined />} />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.Video) && !topicTypeIsDisabled(TopicType.Video) && (
          <Tooltip placement="right" title={<FormattedMessage id="Video" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.Video)}
              icon={<VideoCameraAddOutlined />}
            />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.H5P) && !topicTypeIsDisabled(TopicType.H5P) && (
          <Tooltip placement="right" title={<FormattedMessage id="H5P" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.H5P)}
              icon={<InteractionOutlined />}
            />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.Image) && !topicTypeIsDisabled(TopicType.Image) && (
          <Tooltip placement="right" title={<FormattedMessage id="Image" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.Image)}
              icon={<FileImageOutlined />}
            />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.PDF) && !topicTypeIsDisabled(TopicType.PDF) && (
          <Tooltip placement="right" title={<FormattedMessage id="PDF" />}>
            <Button block onClick={() => setSelected(TopicType.PDF)} icon={<FilePdfOutlined />} />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.SCORM) && !topicTypeIsDisabled(TopicType.SCORM) && (
          <Tooltip placement="right" title={<FormattedMessage id="SCORM" />}>
            <Button block onClick={() => setSelected(TopicType.SCORM)} icon={<FundOutlined />} />
          </Tooltip>
        )}
        {!positionsToHide?.includes(TopicType.Project) &&
          !topicTypeIsDisabled(TopicType.Project) && (
            <Tooltip placement="right" title={<FormattedMessage id="Project" />}>
              <Button
                block
                onClick={() => setSelected(TopicType.Project)}
                icon={<CarryOutOutlined />}
              />
            </Tooltip>
          )}
        {!positionsToHide?.includes(TopicType.GiftQuiz) &&
          !topicTypeIsDisabled(TopicType.GiftQuiz) && (
            <Tooltip placement="right" title={<FormattedMessage id="Quiz" />}>
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
