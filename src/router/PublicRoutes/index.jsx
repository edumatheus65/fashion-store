import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

export const PublicRoutes = () => {
    const { user } = useContext(UserContext);
    return !user ? <Outlet /> : <Navigate to="/admin" />;
  };
  