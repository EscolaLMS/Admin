import React, { useContext } from 'react';

import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { EditorContext, Editor } from 'h5p-headless-player';

import { Button } from 'antd';

export const H5PForm: React.FC<{ id?: number | string; onSubmit: (id: number) => void }> = ({
  id,
  onSubmit,
}) => {
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
      <Editor id={id} onSubmit={(response) => onSubmit(response.id)} />
    </PageContainer>
  );
};

export default H5PForm;
