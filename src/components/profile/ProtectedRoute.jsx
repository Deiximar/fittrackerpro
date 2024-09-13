import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/profile/login" />;
  }

  return <Navigate to="/profile/user" />;
};

export default ProtectedRoute;
