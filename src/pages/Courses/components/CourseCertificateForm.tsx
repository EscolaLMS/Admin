import React, { useMemo, useState } from 'react';

import CertificateSelector from '@/components/Certificate';
import { Col, Row, Typography } from 'antd';
import { FormattedMessage } from 'umi';

import PdfList from '@/components/Pdf/list';

export const CourseCertificateForm: React.FC<{
  id: number | string;
}> = ({ id }) => {
  const { Text } = Typography;
  const [templates, setTemplates] = useState<API.Certificate[]>([]);
  const [currTemplates, setCurrTemplates] = useState<number[]>([]);

  const pdfTemplates = useMemo(() => {
    return currTemplates
      .map((tplId) => templates.find((tpl) => tpl.id === tplId))
      .filter((tpl) => tpl !== undefined)
      .filter((tpl) => tpl && tpl.channel === 'EscolaLms\\TemplatesPdf\\Core\\PdfChannel');
  }, [templates, currTemplates]);

  return (
    <div>
      <Row align="middle">
        <Col span={3}>
          <Text>
            <FormattedMessage id="CertificateTemplates" defaultMessage="Users" />
          </Text>
        </Col>
        <Col span={12}>
          <CertificateSelector
            onTemplates={(responseTemplates) => setTemplates(responseTemplates)}
            assignable_class="EscolaLms\Courses\Models\Course"
            assignable_id={Number(id)}
            multiple
            onChange={(values) => setCurrTemplates(values)}
          />
        </Col>
      </Row>

      {pdfTemplates.map(
        (tpl) => tpl && <PdfList key={tpl.id} template_id={tpl.id} title={tpl.name} />,
      )}
    </div>
  );
};

export default CourseCertificateForm;
