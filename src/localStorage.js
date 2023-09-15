export const setLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getLocalStorage = () => {
  const userString = localStorage.getItem("user");
  return userString ? JSON.parse(userString) : null;
};

export const removeLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getTokenLocalStorage = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  return user ? user.accessToken.access : "error";
};

export const getRefreshTokenLocalStorage = () => {
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  return user ? user.accessToken.refresh : "error";
};
