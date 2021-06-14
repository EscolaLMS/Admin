import React from 'react';
import MediaInteractive from './media/h5p';
import MediaText from './media/text';
import MediaUpload from './media/upload';
import Tabs from 'antd/lib/tabs';
import { MediaType } from './media';

const { TabPane } = Tabs;

const TopicMediaForm = ({ data, loading, onUpdate, onDelete, tab, onTabChange }) => {
  return (
    <Tabs
      activeKey={
        data.media && data?.media?.type === 'VIDEO' && tab === '-1'
          ? MediaType.VIDEO.toString()
          : tab
      }
      onChange={onTabChange}
    >
      <TabPane
        tab="Audio"
        key={MediaType.AUDIO.toString()}
        disabled={data?.media?.type ? data?.media?.type !== 'AUDIO' : false}
      >
        <MediaUpload
          topic={data}
          type="audio"
          media={data.media && data.media.type === 'AUDIO' ? data.media : null}
          id={data.id}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </TabPane>
      <TabPane
        tab="Video"
        key={MediaType.VIDEO.toString()}
        disabled={data?.media?.type ? data?.media?.type !== 'VIDEO' : false}
      >
        <MediaUpload
          topic={data}
          type="video"
          media={data.media && data.media.type === 'VIDEO' ? data.media : null}
          id={data.id}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </TabPane>
      <TabPane
        tab="Document"
        key={MediaType.DOCUMENT.toString()}
        disabled={data?.media?.type ? data?.media?.type !== 'DOCUMENT' : false}
      >
        <MediaUpload
          topic={data}
          type="document"
          media={data.media && data.media.type === 'DOCUMENT' ? data.media : null}
          id={data.id}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </TabPane>
      <TabPane
        tab="Interactive"
        key={MediaType.INTERACTIVE.toString()}
        disabled={data?.media?.type ? data?.media?.type !== 'INTERACTIVE' : false}
      >
        <MediaInteractive
          media={data.media && data.media.type === 'INTERACTIVE' ? data.media : null}
          id={data.id}
          onUpdate={onUpdate}
        />
      </TabPane>
      <TabPane
        tab="Text"
        key={MediaType.TEXT.toString()}
        disabled={data?.media?.type ? data?.media?.type !== 'TEXT' : false}
      >
        <MediaText text={data.contenttext} onUpdate={onUpdate} loading={loading} />
      </TabPane>
      <TabPane tab="Unselected" key={MediaType.NONE}>
        <React.Fragment />
      </TabPane>
    </Tabs>
  );
};

export default TopicMediaForm;
