import React from 'react';
import { Col, Input, Row } from 'antd';
import InputColor from '@/components/FabricEditor/fields/InputColor';
import FabricInput from '@/components/FabricEditor/fields/FabricInput';
import FabricSelect from '@/components/FabricEditor/fields/FabricSelect';
import FabricCheckbox from '@/components/FabricEditor/fields/FabricCheckbox';
import type { ActiveElementFieldName, ActiveElementState } from '@/components/FabricEditor/types';
import {
  FONT_FAMILY,
  FONT_SIZE,
  TEXT_STROKE_WIDTH as STROKE_WIDTH,
  TEXT_ALIGN,
} from '@/components/FabricEditor/consts';
import { FormattedMessage, useIntl } from 'umi';

const FabricEditorTextForm: React.FC<{
  values: ActiveElementState;
  onChange: (propName: ActiveElementFieldName) => (value: number | string | boolean) => void;
}> = ({ values, onChange }) => {
  const intl = useIntl();
  return (
    <div className="fabric-editor__form fabric-editor__form--active-element">
      <h3 className="fabric-editor__form-title">
        <FormattedMessage id="fabric.text_options" />
      </h3>

      <Row gutter={5}>
        <Col>
          <Row gutter={5}>
            <Col>
              <Input.Group compact>
                <FabricSelect
                  value={values.fontFamily}
                  onChange={onChange('fontFamily')}
                  label={intl.formatMessage({ id: 'fabric.font_family' })}
                  name={'fontFamily'}
                  options={FONT_FAMILY.map((f) => ({ value: f.toLowerCase(), label: f }))}
                  style={{ minWidth: '180px' }}
                />

                <FabricSelect
                  value={values.fontSize}
                  onChange={onChange('fontSize')}
                  label={intl.formatMessage({ id: 'fabric.font_size' })}
                  name={'fontSize'}
                  options={FONT_SIZE.map((f) => ({ value: f, label: '' + f }))}
                  style={{ minWidth: '75px' }}
                />
              </Input.Group>
            </Col>

            <Col>
              <Input.Group compact>
                <FabricSelect
                  value={values.textAlign}
                  onChange={onChange('textAlign')}
                  label={intl.formatMessage({ id: 'fabric.text_align' })}
                  name={'textAlign'}
                  options={TEXT_ALIGN.map((f) => ({ value: f.toLowerCase(), label: f }))}
                  style={{ minWidth: '180px' }}
                />

                <FabricInput
                  value={values.lineHeight}
                  onChange={onChange('lineHeight')}
                  label={intl.formatMessage({ id: 'fabric.line_height' })}
                  name={'lineHeight'}
                  type="number"
                  // @ts-ignore
                  min="0"
                  max="10"
                  step="0.1"
                  style={{ minWidth: '75px' }}
                />
              </Input.Group>
            </Col>
          </Row>

          <Input.Group style={{ marginBottom: '15px' }}>
            <Row gutter={5}>
              <Col>
                <FabricCheckbox
                  value={values.bold}
                  onChange={onChange('bold')}
                  label={intl.formatMessage({ id: 'fabric.bold' })}
                  name={'bold'}
                />
              </Col>
              <Col>
                <FabricCheckbox
                  value={values.italic}
                  onChange={onChange('italic')}
                  label={intl.formatMessage({ id: 'fabric.italic' })}
                  name={'italic'}
                />
              </Col>
              <Col>
                <FabricCheckbox
                  value={values.underline}
                  onChange={onChange('underline')}
                  label={intl.formatMessage({ id: 'fabric.underline' })}
                  name="underline"
                />
              </Col>
              <Col>
                <FabricCheckbox
                  value={values.linethrough}
                  onChange={onChange('linethrough')}
                  label={intl.formatMessage({ id: 'fabric.linethrough' })}
                  name={'linethrough'}
                />
              </Col>
              <Col>
                <FabricCheckbox
                  value={values.overline}
                  onChange={onChange('overline')}
                  label={intl.formatMessage({ id: 'fabric.overline' })}
                  name={'overline'}
                />
              </Col>
            </Row>
          </Input.Group>
        </Col>

        <Col>
          <Input.Group>
            <Row gutter={10}>
              <Col>
                <InputColor
                  value={values.fill}
                  onChange={onChange('fill')}
                  label={intl.formatMessage({ id: 'fabric.text_color' })}
                  name={'fill'}
                />
              </Col>
              <Col>
                <InputColor
                  value={values.textBackgroundColor}
                  onChange={onChange('textBackgroundColor')}
                  label={intl.formatMessage({ id: 'fabric.text_background' })}
                  name={'textBackgroundColor'}
                />
              </Col>
              <Col>
                <InputColor
                  value={values.backgroundColor}
                  onChange={onChange('backgroundColor')}
                  label={intl.formatMessage({ id: 'fabric.background_color' })}
                  name={'backgroundColor'}
                />
              </Col>
            </Row>
          </Input.Group>

          <Row gutter={10}>
            <Col>
              <Input.Group compact>
                <InputColor
                  value={values.stroke}
                  onChange={onChange('stroke')}
                  label={intl.formatMessage({ id: 'fabric.stroke_color' })}
                  name={'stroke'}
                />

                <FabricSelect
                  value={values.strokeWidth}
                  onChange={onChange('strokeWidth')}
                  label={intl.formatMessage({ id: 'fabric.stroke_width' })}
                  name={'strokeWidth'}
                  options={STROKE_WIDTH.map((f) => ({ value: f, label: '' + f }))}
                  style={{ minWidth: '65px' }}
                />
              </Input.Group>
            </Col>
            <Col>
              <FabricInput
                value={values.opacity}
                onChange={onChange('opacity')}
                label={'Opacity'}
                name={'opacity'}
                type="range"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FabricEditorTextForm;
