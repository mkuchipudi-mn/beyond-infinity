export const loginAction = (data: any) => {
  return {
    type: 'LOGIN',
    data,
  };
};

export const logoutAction = () => {
  return {
    type: 'LOGOUT',
  };
};
