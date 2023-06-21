import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";
import { formatDate } from "../backend/utils/authUtils";
import { v4 as uuid } from "uuid";
import { authReducer } from "../reducers/authReducer";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    loginInUser: JSON.parse(localStorage.getItem("userData"))?.user || {},
    username:
      JSON.parse(localStorage.getItem("userData"))?.user?.username || "",
    password:
      JSON.parse(localStorage.getItem("userData"))?.user?.password || "",
    newUser: {
      _id: uuid(),
      avatarUrl: "",
      firstName: "",
      lastName: "",
      bio: "",
      website: "",
      occupation: "",
      username: "",
      password: "",
      createdAt: formatDate(),
      updatedAt: formatDate(),
      bookmarks: [],
      followedBy: [],
      following: [],
      email: "",
    },
    encodedToken:
      JSON?.parse(localStorage?.getItem("userData"))?.encodedToken || "",
  };

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
        authDispatch({
          type: "SET_USER",
          payload: foundUser,
          encodedTokenPayload: encodedToken,
        });

        localStorage.setItem(
          "userData",
          JSON.stringify({ user: foundUser, encodedToken: encodedToken })
        );
      }

      console.log(foundUser, "sdks", status, "df");
    } catch (err) {
      console.log(err);
    }
  };

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
        authDispatch({
          type: "SET_USER",
          payload: createdUser,
          encodedTokenPayload: encodedToken,
        });

        localStorage.setItem(
          "userData",
          JSON.stringify({
            user: createdUser,
            encodedToken: encodedToken,
          })
        );
      }
      console.log(createdUser, "user", status, "df");
    } catch (err) {
      console.log(err);
    }
  };

  const [state, authDispatch] = useReducer(authReducer, initialState);

  const userData = localStorage.getItem("userData");
  const currentUser = JSON.parse(userData)?.user;
  const currentToken = JSON.parse(userData)?.encodedToken;
  const fetchCurrentUser = () => {
    try {
      const userData = localStorage.getItem("userData");
      const currentUser = JSON.parse(userData)?.user;
      return currentUser;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurrentToken = () => {
    try {
      const userData = localStorage.getItem("userData");

      const currentToken = JSON.parse(userData)?.encodedToken;
      return currentToken;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCurrentUser();

    fetchCurrentToken();
    // console.log(currentUser, currentToken, "amullllllllllllllllllllll");
  }, [currentUser, currentToken]);

  return (
    <AuthContext.Provider
      value={{
        userSignUpData,
        userLoginData,
        currentUser,
        state,
        fetchCurrentToken,
        fetchCurrentUser,
        currentToken,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
