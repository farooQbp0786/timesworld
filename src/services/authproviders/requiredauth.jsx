import React from "react";
import { useAuth } from ".";
import { Navigate, Outlet } from "react-router-dom";

const RequiredAuth = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequiredAuth;
