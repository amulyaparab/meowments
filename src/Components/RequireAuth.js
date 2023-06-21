import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";

export const RequiresAuth = ({ children }) => {
  const { state } = useAuth();

  console.log(state, "dfjsdlk");
  return <>{state?.encodedToken ? children : <Navigate to="/landing" />}</>;
};
