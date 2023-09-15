import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { UserContext } from "./App";

export const ProtectedRoute = ({ redirectPath }) => {
  const { user } = React.useContext(UserContext);
  if (!user) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
