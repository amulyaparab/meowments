import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn, token } = useAuth();
  console.log(isLoggedIn);
  return <>{isLoggedIn && token ? children : <Navigate to="/landing" />}</>;
};