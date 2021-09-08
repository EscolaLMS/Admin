import React from 'react';

import { useParams, history } from 'umi';
import { EditorContextProvider } from 'h5p-headless-player';

import { H5PForm } from '@/components/H5PForm';

export default () => {
  const params = useParams<{ h5p?: string }>();
  const { h5p } = params;
  return (
    <EditorContextProvider url={`${REACT_APP_API_URL}/api/hh5p`}>
      <H5PForm
        onSubmit={(id) => h5p === 'new' && history.push(`/h5ps/${id}`)}
        id={h5p === 'new' ? undefined : h5p}
      />
    </EditorContextProvider>
  );
};
