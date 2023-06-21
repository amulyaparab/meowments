import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";
import { formatDate } from "../backend/utils/authUtils";
import { v4 as uuid } from "uuid";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          loginInUser: action.payload,
          encodedToken: action.encodedTokenPayload,
        };
      case "SET_USERNAME":
        return { ...state, username: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      case "NEW_USERNAME":
        return {
          ...state,
          newUser: { ...state.newUser, username: action.payload },
        };
      case "NEW_PASSWORD":
        return {
          ...state,
          newUser: { ...state.newUser, password: action.payload },
        };
      case "FIRST_NAME":
        return {
          ...state,
          newUser: { ...state.newUser, firstName: action.payload },
        };
      case "LAST_NAME":
        return {
          ...state,
          newUser: { ...state.newUser, lastName: action.payload },
        };
      case "SET_EMAIL":
        return {
          ...state,
          newUser: { ...state.newUser, email: action.payload },
        };
      default:
        return state;
    }
  };
  const initialState = {
    loginInUser: {},
    username: "",
    password: "",

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

  const [state, authDispatch] = useReducer(reducer, initialState);
  console.log(state?.encodedToken, "state");
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
