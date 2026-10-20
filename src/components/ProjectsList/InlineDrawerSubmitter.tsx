import { Button, Space } from 'antd';
import React from 'react';
import { FormattedMessage } from 'umi';

interface Props {
  onCancel?: () => void;
  submitting?: boolean;
  submitDisabled?: boolean;
}

// DrawerForm portals its submitter into the drawer footer, where the floating
// accessibility widget covers it — pass `submitter={false}` and render this
// inside the form body instead.
export const InlineDrawerSubmitter: React.FC<Props> = ({
  onCancel,
  submitting,
  submitDisabled,
}) => (
  <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Button onClick={onCancel} disabled={submitting}>
      <FormattedMessage id="cancel" defaultMessage="Cancel" />
    </Button>
    <Button type="primary" htmlType="submit" loading={submitting} disabled={submitDisabled}>
      <FormattedMessage id="ok" defaultMessage="OK" />
    </Button>
  </Space>
);

export default InlineDrawerSubmitter;
