import ProCard from '@ant-design/pro-card';
import { FormattedMessage } from 'umi';

import Editor from './editor';
import Player from './player';

const Card: React.FC<{
  defaultCard?: 'edit' | 'preview';
  id: 'new' | number;
  onSubmit: (id: number) => void;
  onLoaded?: (settings: API.H5PObject) => void;
}> = ({ defaultCard = 'edit', id, onSubmit, onLoaded }) => {
  return (
    <ProCard
      tabs={{
        type: 'card',
        defaultActiveKey: defaultCard,
      }}
    >
      <ProCard.TabPane key="edit" disabled={!id} tab={<FormattedMessage id="edit" />}>
        <Editor key={id} id={id} onSubmitted={onSubmit} onLoaded={onLoaded} />
      </ProCard.TabPane>
      {id !== 'new' && (
        <ProCard.TabPane key="preview" disabled={!id} tab={<FormattedMessage id="preview" />}>
          <Player id={id} onLoaded={onLoaded} />
        </ProCard.TabPane>
      )}
    </ProCard>
  );
};

export default Card;
