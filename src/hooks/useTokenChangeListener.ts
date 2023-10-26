import { useEffect, useRef } from 'react';

export function useTokenChangeListener(onTokenChange: (newToken: string | null) => void) {
  const onTokenChangeRef = useRef(onTokenChange);

  useEffect(() => {
    const eventHandler = () => {
      const token = localStorage.getItem('TOKEN');
      onTokenChangeRef.current(token);
    };

    window.addEventListener('token_change', eventHandler);

    return () => {
      window.removeEventListener('token_change', eventHandler);
    };
  }, []);
}
