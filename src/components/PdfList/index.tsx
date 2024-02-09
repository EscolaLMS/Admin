import { Alert, Button, List, Spin } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';

import { useCallback } from 'react';
import { FormattedMessage } from 'umi';

import { pdf, pdfs } from '@/services/escola-lms/pdfs';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';

type Request = EscolaLms.TemplatesPdf.Http.Requests.PdfListingAdminRequest & {
  template_id?: number;
};
type Model = EscolaLms.TemplatesPdf.Models.FabricPDF;

type ModelState =
  | {
      state: 'initial';
    }
  | {
      state: 'loading';
    }
  | {
      state: 'loaded';
      list: Model[];
    }
  | {
      state: 'error';
      error: string;
    };

type PreviewState =
  | {
      state: 'initial';
    }
  | {
      state: 'loading';
    }
  | {
      state: 'loaded';
      data: any;
    };

export const PdfList: React.FC<Request> = ({ user_id, template_id }) => {
  const [state, setState] = useState<ModelState>({ state: 'initial' });

  const [previewState, setPreviewState] = useState<PreviewState>({ state: 'initial' });

  useEffect(() => {
    setState({ state: 'loading' });
    const abortController = new AbortController();
    pdfs({ user_id, template_id }, { signal: abortController.signal })
      .then((response) => {
        if (response && response.success) {
          setState({ state: 'loaded', list: response.data });
        } else if (response && !response.success) {
          setState({ state: 'error', error: response.message });
        }
      })
      .catch((err) => setState({ state: 'error', error: err.toString() }));

    return () => {
      abortController.abort();
    };
  }, []);

  const getPdf = useCallback((id: number) => {
    setPreviewState({ state: 'loading' });
    pdf(id).then((response) => {
      if (response.success) {
        setPreviewState({ state: 'loaded', data: response.data.content });
      } else {
        setPreviewState({ state: 'initial' });
      }
    });
  }, []);

  if (state.state === 'error') {
    return <Alert message="Error Text" type="error" />;
  }

  if (state.state === 'loading' || state.state === 'initial') {
    return <Spin />;
  }

  return (
    <Fragment>
      <List
        size="small"
        itemLayout="horizontal"
        dataSource={state.list}
        header={<FormattedMessage id="generated_pdfs" defaultMessage="Generated PDFs" />}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                key="download"
                type="primary"
                onClick={() => getPdf(item.id)}
                loading={previewState.state === 'loading'}
              >
                <FormattedMessage id="download_pdf" defaultMessage="Download PDFs" />
              </Button>,
            ]}
          >
            {item.title} <TypeButtonDrawer type="App\Models\User" type_id={item.user_id} />
          </List.Item>
        )}
      />
      {previewState.state === 'loaded' && <p>fabric preview</p>}
    </Fragment>
  );
};

export default PdfList;
