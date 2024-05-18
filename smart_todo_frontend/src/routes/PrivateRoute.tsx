import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export const NonPrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { token } = useContext(AuthContext);
  if (token) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};
