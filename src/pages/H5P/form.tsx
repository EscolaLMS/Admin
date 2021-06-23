import React, { useContext } from 'react';

import { useParams, history, Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { EditorContextProvider, EditorContext } from 'h5p-player/src/components/hh5p/context/index';
import Editor from 'h5p-player/src/components/hh5p/editor/index';
import { Button } from 'antd';

const H5PForm: React.FC<{ id?: number | string }> = ({ id }) => {
  const { state } = useContext(EditorContext);

  const cid = `cid-${id}`;

  const content =
    state.value === 'loaded' && state.settings?.contents && state.settings?.contents[cid];

  // eslint-disable-next-line no-nested-ternary
  const title = content ? content.title : id ? 'Loading Content...' : 'New Content';

  return (
    <PageContainer
      title={`H5P. HTML5 Content ${title}`}
      extra={[
        id && (
          <Button type="primary">
            <Link to={`/h5ps/preview/${id}`}>Preview</Link>
          </Button>
        ),
      ]}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'h5ps',
              breadcrumbName: 'HP5s',
            },
            {
              path: title,
              breadcrumbName: 'Form',
            },
          ],
        },
      }}
    >
      <Editor id={id} onSubmit={(response) => !id && history.push(`/h5ps/${response.id}`)} />
    </PageContainer>
  );
};

export default () => {
  const params = useParams<{ h5p?: string }>();
  const { h5p } = params;
  return (
    <EditorContextProvider url={`${REACT_APP_API_URL}/api/hh5p`}>
      <H5PForm id={h5p === 'new' ? undefined : h5p} />
    </EditorContextProvider>
  );
};
