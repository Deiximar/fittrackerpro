import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const ProtectedRoute = ({ element }) => {
  const { token, isAuthenticated } = useAuth();

  if (!!token && isAuthenticated) {
    return element;
  }

  return <Navigate to="/profile/login" />;
};

export default ProtectedRoute;
