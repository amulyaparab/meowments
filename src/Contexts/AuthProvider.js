import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return { ...state, loginInUser: action.payload };
      default:
        return state;
    }
  };
  const [token, setToken] = useState(null);
  const userLoginData = async (loginData) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await axios({
        method: "POST",
        data: loginData,
        url: "/api/auth/login",
      });
      if (status === 200) {
        authDispatch({ type: "SET_USER", payload: foundUser });
        setToken(encodedToken);
        localStorage.setItem("encodedToken", encodedToken);
      }
      console.log(foundUser, "sdks", status, "df");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(token, "token");
  const userSignUpData = async (signUpData) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await axios({
        method: "POST",
        data: signUpData,
        url: "/api/auth/signup",
      });
      if (status === 201) {
        authDispatch({ type: "SET_USER", payload: createdUser });
        setToken(encodedToken);
        localStorage.setItem("encodedToken", encodedToken);
      }
      console.log(createdUser, "user", status, "df");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // userLoginData({ username: "adarshbalika", password: "adarshBalika123" });
  }, []);
  const initialState = {
    loginInUser: {},
  };
  const [state, authDispatch] = useReducer(reducer, initialState);
  console.log(state, "state");
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userSignUpData,
        userLoginData,
        token,
        state,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
