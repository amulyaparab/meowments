import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";
import { useUtils } from "../Contexts/UtilsProvider";
import { useEffect } from "react";

export const RequiresAuth = ({ children }) => {
  const { state } = useAuth();
  // const { userData, user, encodedToken } = useUtils();
  // console.log(state, "amulya");
  // console.log(userData, "dshfkj");
  // const userData = localStorage.getItem("userData");
  console.log(state, "dfjsdlk");
  return <>{state?.encodedToken ? children : <Navigate to="/landing" />}</>;
};
