import { refreshToken } from './escola-lms/auth';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { differenceInSeconds } from 'date-fns';

const logout = (reason: string = 'noReason') => {
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
            const diffInSecs = differenceInSeconds(new Date(exp * 1000), new Date()) - 60;
            if (diffInSecs < 3600) {
              setTimeout(refreshTokenCallback, (diffInSecs < 0 ? 0 : diffInSecs) * 1000);
            }
          }
        } else {
          logout('r1');
        }
      })
      .catch(() => {
        logout('r2');
      });
  }
};
