export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

const getAccessToken = () => {
  return typeof window !== 'undefined'
    ? localStorage.getItem(ACCESS_TOKEN)
    : null;
};

const setAccessToken = (token: string) => {
  return localStorage.setItem(ACCESS_TOKEN, token);
};

const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN);
};

const setRefreshToken = (token: string) => {
  return localStorage.setItem(REFRESH_TOKEN, token);
};

const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN);
};

export const tokenService = {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
};
