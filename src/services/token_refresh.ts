import { refreshToken } from './escola-lms/auth';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { differenceInSeconds } from 'date-fns';

const logout = () => {
  localStorage.removeItem('TOKEN');
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
          const { exp } = jwt_decode(newToken) as JwtPayload;
          if (exp) {
            const diffInSecs = differenceInSeconds(new Date(exp * 1000), new Date());
            setTimeout(refreshTokenCallback, (diffInSecs - 1 < 0 ? 0 : diffInSecs - 1) * 1000);
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
