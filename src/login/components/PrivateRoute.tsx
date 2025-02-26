import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { PrivateRouteProps } from "../interfaces/RouteInterfaces";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const context = useContext(AuthContext);

  if (!context) {
    return <Navigate to="/login" />;
  }

  const { state } = context;

  return state.isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;