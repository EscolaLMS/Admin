import { differenceInSeconds } from 'date-fns';
import type { JwtPayload } from 'jwt-decode';
import { jwtDecode } from 'jwt-decode';
import { refreshToken } from './escola-lms/auth';

const logout = () => {
  localStorage.removeItem('TOKEN');
  dispatchEvent(new Event('token_change'));
  window.location.reload();
};

export const refreshTokenCallback = () => {
  const token = localStorage.getItem('TOKEN');
  if (token) {
    refreshToken()
      .then((response) => {
        if (response.success) {
          const newToken = response.data.token;
          localStorage.setItem('TOKEN', newToken);
          dispatchEvent(new Event('token_change'));
          const { exp } = jwtDecode(newToken) as JwtPayload;
          if (exp) {
            const diffInSecs = differenceInSeconds(new Date(exp * 1000), new Date()) - 60;
            if (diffInSecs < 3600) {
              setTimeout(refreshTokenCallback, (diffInSecs < 0 ? 0 : diffInSecs) * 1000);
            }
          }
        } else {
          logout();
        }
      })
      .catch(() => {
        logout();
      });
  }
};
