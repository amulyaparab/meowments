import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
};
