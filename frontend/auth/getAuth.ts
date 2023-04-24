export const getAuth = () => {
  if (localStorage.getItem('token')) {
    return { token: localStorage.getItem('token') };
  }
};
