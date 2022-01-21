import React, { useState, useCallback, useEffect } from 'react';
import type { XAPIEvent } from '@escolalms/h5p-react';
import { getH5p } from '@/services/escola-lms/h5p';
import { Player } from '@escolalms/h5p-react';
import ReactJson from 'react-json-view';
import { Divider, Typography } from 'antd';
const { Title } = Typography;

const H5Player: React.FC<{ id: number }> = ({ id }) => {
  const [h5pObject, seth5pObject] = useState<API.H5PObject | undefined>(undefined);
  const [XAPIEvents, setXAPIEvents] = useState<XAPIEvent[]>([]);

  const fetchH5P = useCallback(
    async (h5pID: number) => {
      try {
        const request = await getH5p(h5pID);
        if (request.success) {
          seth5pObject(request.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [id],
  );

  useEffect(() => {
    fetchH5P(Number(id));
  }, [id]);

  return (
    <React.Fragment>
      {h5pObject && (
        <Player
          h5pObject={h5pObject}
          id={id}
          onXAPI={(event) => setXAPIEvents((prevState) => [...prevState, event])}
        />
      )}

      <Divider />
      <div style={{ overflow: 'auto', maxHeight: '400px' }}>
        <Title level={5}>XAPI Events</Title>
        <ReactJson src={XAPIEvents} />
      </div>
    </React.Fragment>
  );
};

export default H5Player;
