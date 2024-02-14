import type { ButtonProps } from 'antd';
import { Button, message } from 'antd';
import React, { useCallback, useState } from 'react';
import { FormattedMessage } from 'umi';
declare const REACT_APP_API_URL: string;

export const AuthenticatedLinkButton: React.FC<
  React.PropsWithChildren<{ url: string; filename: string } & ButtonProps>
> = ({ url, filename, children, ...rest }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleAction = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetch(`${window.REACT_APP_API_URL || REACT_APP_API_URL}${url}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
      });

      const anchor = document.createElement('a');
      const blob = await result.blob();
      const href = window.URL.createObjectURL(blob);

      anchor.download = filename;
      anchor.href = href;

      anchor.click();
      setLoading(false);
      message.success(<FormattedMessage id="file_downloaded" defaultMessage="File downloaded" />);
    } catch (error) {
      setLoading(false);
      message.error(
        <FormattedMessage id="file_downloaded_error" defaultMessage="Can't download file" />,
      );
    }
  }, [url, filename]);

  return (
    <Button loading={loading} {...rest} onClick={handleAction}>
      {children}
    </Button>
  );
};

export default AuthenticatedLinkButton;
