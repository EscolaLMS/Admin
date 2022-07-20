import { useState, useCallback, useEffect, useContext } from 'react';
import update from 'immutability-helper';
import { Context } from '@/components/ProgramForm/Context';
import { Button, Modal, Tooltip } from 'antd';
import {
  FundOutlined,
  FileTextOutlined,
  FilePdfOutlined,
  FileImageOutlined,
  VideoCameraAddOutlined,
  AudioOutlined,
  YoutubeOutlined,
  InteractionOutlined,
} from '@ant-design/icons';

import './types.css';
import { TopicType } from '@/services/escola-lms/enums';
import { FormattedMessage } from 'umi';

export const TopicTypesSelector: React.FC<{
  onSelected: (type: TopicType) => void;
}> = ({ onSelected }) => {
  const [open, setOpen] = useState<boolean>(false);

  const setSelected = useCallback((type: TopicType) => {
    setOpen(false);
    onSelected(type);
  }, []);

  return (
    <div className="topic-types-selector">
      <Tooltip placement="top" title={<FormattedMessage id="add_new_topic" />}>
        <Button type="primary" size="small" onClick={() => setOpen((prev) => !prev)}>
          +
        </Button>
      </Tooltip>
      {open && (
        <div className="topic-types-selector__list">
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
        </div>
      )}
    </div>
  );
};
