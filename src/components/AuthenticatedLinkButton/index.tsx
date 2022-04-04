import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import type { ButtonProps } from 'antd';
declare const REACT_APP_API_URL: string;

export const AuthenticatedLinkButton: React.FC<
  React.PropsWithChildren<{ url: string; filename: string } & ButtonProps>
> = ({ url, filename, children, ...rest }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleAction = useCallback(async () => {
    setLoading(true);
    const result = await fetch(`${REACT_APP_API_URL}${url}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` },
    });

    const anchor = document.createElement('a');
    const blob = await result.blob();
    const href = window.URL.createObjectURL(blob);

    anchor.download = filename;
    anchor.href = href;

    anchor.click();
    setLoading(false);
  }, [url, filename]);

  return (
    <Button loading={loading} {...rest} onClick={handleAction}>
      {children}
    </Button>
  );
};

export default AuthenticatedLinkButton;
