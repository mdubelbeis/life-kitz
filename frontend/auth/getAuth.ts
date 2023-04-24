export const getAuth = () => {
  return localStorage.getItem('token')
    ? { token: localStorage.getItem('token') }
    : { token: null };
};
