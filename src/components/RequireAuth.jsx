import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const RequireAuth = () => {
    const {auth} = useContext(AuthContext);
    const location = useLocation();

    return (
        auth?.email
                ? <Outlet/>
                : <Navigate to="/user_management/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;