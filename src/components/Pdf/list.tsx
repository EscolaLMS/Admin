import React, { useState, useEffect, Fragment } from 'react';
import { Spin, List, Alert, Button, Typography, Divider } from 'antd';

import { FormattedMessage } from 'umi';
import { useCallback } from 'react';

import { pdfs, pdf } from '@/services/escola-lms/pdfs';
import PdfZipList from '@/components/Pdf/ziplist';

import TypeButtonDrawer from '@/components/TypeButtonDrawer';
import { DownloadOutlined } from '@ant-design/icons';

type Request = EscolaLms.TemplatesPdf.Http.Requests.PdfListingAdminRequest & {
  template_id?: number;
  title?: string;
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

export const PdfList: React.FC<Request> = ({ user_id, template_id, title }) => {
  const [state, setState] = useState<ModelState>({ state: 'initial' });

  const [previewState, setPreviewState] = useState<PreviewState>({ state: 'initial' });
  const [generateAll, setGenerateAll] = useState<boolean>(false);

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
      <Divider />
      {generateAll && (
        <PdfZipList
          pdfIds={state.list.map((item) => item.id)}
          onFinished={() => setGenerateAll(false)}
        />
      )}
      <List
        size="small"
        itemLayout="horizontal"
        dataSource={state.list}
        header={
          <div>
            <FormattedMessage id="template" />{' '}
            {title && <Typography.Text strong>{title}</Typography.Text>}
            {'. '}
            <FormattedMessage id="generated_pdfs" defaultMessage="Generated PDFs" />{' '}
            <Button
              loading={generateAll}
              type="primary"
              onClick={() => setGenerateAll(true)}
              icon={<DownloadOutlined />}
              size="small"
            >
              <FormattedMessage id="download_all" defaultMessage="Download all PDFs" />
            </Button>
          </div>
        }
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                key="download"
                size="small"
                icon={<DownloadOutlined />}
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
    </Fragment>
  );
};

export default PdfList;
