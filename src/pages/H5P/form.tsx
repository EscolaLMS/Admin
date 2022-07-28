import { useState } from 'react';
import { useParams, history } from 'umi';
import { FormattedMessage, useIntl } from 'umi';

import H5PCard from '@/components/H5P/card';
import { PageContainer } from '@ant-design/pro-layout';

export default () => {
  const params = useParams<{ h5p?: string }>();
  const intl = useIntl();

  const { h5p } = params;
  const [title, setTitle] = useState<string>('');
  return (
    <PageContainer
      title={
        <>
          {title ? (
            <FormattedMessage id="H5P_edit_content_title" />
          ) : (
            <FormattedMessage id="H5P_new_content_title" />
          )}

          {` ${title}`}
        </>
      }
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
      <H5PCard
        onLoaded={(data) => {
          const contents = data.contents && data.contents[`cid-${h5p}`];
          if (contents && contents.title) {
            setTitle(contents.title);
          }
        }}
        onSubmit={(id) => h5p === 'new' && history.push(`/courses/h5ps/${id}`)}
        id={h5p === 'new' || !h5p ? 'new' : Number(h5p)}
      />
    </PageContainer>
  );
};
