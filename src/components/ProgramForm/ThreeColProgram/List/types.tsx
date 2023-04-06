import { useState, useCallback } from 'react';
import { Button, Tooltip, Space, Divider } from 'antd';
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
  //CaretUpOutlined,
  //CaretDownOutlined,
  PercentageOutlined,
  PlusOutlined,
  PicCenterOutlined,
} from '@ant-design/icons';

import './types.css';
import { TopicType } from '@/services/escola-lms/enums';
import { FormattedMessage, useModel } from 'umi';

export const TopicTypesSelector: React.FC<{
  sortingMode: 'none' | 'up' | 'down' | 'both';
  onSelected: (type: TopicType) => void;
  onNewLesson: () => void;
  onSort: (up: boolean) => void;
  positionsToHide?: string[];
}> = ({ onSelected, /*onSort, sortingMode = 'both',*/ onNewLesson, positionsToHide }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { initialState } = useModel('@@initialState');
  const showProjectTypeInProgram = initialState?.config?.filter(
    (item) => item.key === 'showProjectTypeInProgram',
  )[0]?.data;

  const setSelected = useCallback((type: TopicType) => {
    setOpen(false);
    onSelected(type);
  }, []);

  return (
    <div className="topic-types-selector">
      <Space>
        {/* TODO add sorting */}
        {/** 
        {(sortingMode === 'both' || sortingMode === 'up') && (
          <Tooltip placement="top" title={<FormattedMessage id="sort_element_up" />}>
            <Button
              type="default"
              size="small"
              onClick={() => onSort(true)}
              icon={<CaretUpOutlined />}
            />
          </Tooltip>
        )}
        {(sortingMode === 'both' || sortingMode === 'down') && (
          <Tooltip placement="top" title={<FormattedMessage id="sort_element_down" />}>
            <Button
              type="default"
              size="small"
              onClick={() => onSort(false)}
              icon={<CaretDownOutlined />}
            />
          </Tooltip>
        )}
         */}
        <Tooltip placement="top" title={<FormattedMessage id="add_new_topic" />}>
          <Button
            type="primary"
            size="small"
            onClick={() => setOpen((prev) => !prev)}
            icon={<PlusOutlined />}
          />
        </Tooltip>
      </Space>

      {open && (
        <div className="topic-types-selector__list">
          {!positionsToHide?.includes('lesson') && (
            <>
              <Tooltip placement="right" title={<FormattedMessage id="Lesson" />}>
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
          <Tooltip placement="right" title={<FormattedMessage id="RichText" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.RichText)}
              icon={<FileTextOutlined />}
            />
          </Tooltip>
          <Tooltip placement="right" title={<FormattedMessage id="OEmbed" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.OEmbed)}
              icon={<YoutubeOutlined />}
            />
          </Tooltip>
          <Tooltip placement="right" title={<FormattedMessage id="Audio" />}>
            <Button block onClick={() => setSelected(TopicType.Audio)} icon={<AudioOutlined />} />
          </Tooltip>
          <Tooltip placement="right" title={<FormattedMessage id="Video" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.Video)}
              icon={<VideoCameraAddOutlined />}
            />
          </Tooltip>
          <Tooltip placement="right" title={<FormattedMessage id="H5P" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.H5P)}
              icon={<InteractionOutlined />}
            />
          </Tooltip>
          <Tooltip placement="right" title={<FormattedMessage id="Image" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.Image)}
              icon={<FileImageOutlined />}
            />
          </Tooltip>
          <Tooltip placement="right" title={<FormattedMessage id="PDF" />}>
            <Button block onClick={() => setSelected(TopicType.PDF)} icon={<FilePdfOutlined />} />
          </Tooltip>
          <Tooltip placement="right" title={<FormattedMessage id="SCORM" />}>
            <Button block onClick={() => setSelected(TopicType.SCORM)} icon={<FundOutlined />} />
          </Tooltip>

          {showProjectTypeInProgram && (
            <Tooltip placement="right" title={<FormattedMessage id="Project" />}>
              <Button
                block
                onClick={() => setSelected(TopicType.Project)}
                icon={<CarryOutOutlined />}
              />
            </Tooltip>
          )}

          <Tooltip placement="right" title={<FormattedMessage id="Quiz" />}>
            <Button
              block
              onClick={() => setSelected(TopicType.GiftQuiz)}
              icon={<PercentageOutlined />}
            />
          </Tooltip>
        </div>
      )}
    </div>
  );
};
