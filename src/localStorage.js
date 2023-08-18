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
