import React from "react";

export const UserContext = React.createContext(null);

export const useUserContext = () => {
  const user = React.useContext(UserContext);

  if (!user) {
    return console.log("user is not found");
  }
  return user;
};
