import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import { useUtils } from "../Contexts/UtilsProvider";

export const RequiresAuth = ({ children }) => {
  // const { isLoggedIn, token } = useAuth();
  const { userData, user, encodedToken } = useUtils();
  // console.log(userData, user, encodedToken, "amulya");
  return <>{userData ? children : <Navigate to="/landing" />}</>;
};
