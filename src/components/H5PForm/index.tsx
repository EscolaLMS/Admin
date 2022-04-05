import React, { useContext } from 'react';

import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { EditorContext } from '@escolalms/h5p-react';
import { Editor } from '../H5P/editor';
import { useIntl, FormattedMessage } from 'umi';
import { Button } from 'antd';

export const H5PForm: React.FC<{ id?: number | string; onSubmit: (id: number) => void }> = ({
  id,
  onSubmit,
}) => {
  const intl = useIntl();
  const { state } = useContext(EditorContext);

  const cid = `cid-${id}`;

  const content =
    state.value === 'loaded' && state.settings?.contents && state.settings?.contents[cid];

  // eslint-disable-next-line no-nested-ternary
  const title = content ? content.title : id ? 'Loading Content...' : 'New Content';

  return (
    <PageContainer
      title={
        <>
          <FormattedMessage id="H5P_new_content_title" />
          {` ${title}`}
        </>
      }
      extra={[
        id && (
          <Button type="primary">
            <Link to={`/h5ps/preview/${id}`}>
              <FormattedMessage id="preview" />
            </Link>
          </Button>
        ),
      ]}
      header={{
        breadcrumb: {
          routes: [
            {
              path: 'h5ps',
              breadcrumbName: intl.formatMessage({
                id: 'H5P',
              }),
            },
            {
              path: title,
              breadcrumbName: intl.formatMessage({
                id: 'form',
              }),
            },
          ],
        },
      }}
    >
      <Editor id={id} onSubmit={(response) => onSubmit(Number(response.id))} />
    </PageContainer>
  );
};

export default H5PForm;
