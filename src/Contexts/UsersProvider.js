import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchUsers } from "../Services/userServices";
import { userReducer } from "../reducers/userReducer";
import { useAuth } from "./AuthProvider";
import { useState } from "react";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [showUserEditForm, setShowUserEditForm] = useState(false);
  const [showAvatarForm, setShowAvatarForm] = useState(false);

  const initialState = {
    users: [],
    currentUserData: currentUser,
    searchVal: "",
    searchedUsers: [],
  };

  const [state, userDispatch] = useReducer(userReducer, initialState);

  const fetchAllUsers = async () => {
    try {
      const users = await fetchUsers();
      userDispatch({
        type: "FETCH_ALL_USERS",
        payload: users,
        currPayload: currentUser,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentUser) fetchAllUsers();
  }, [currentUser]);

  return (
    <UsersContext.Provider
      value={{
        state,
        userDispatch,
        showUserEditForm,
        setShowUserEditForm,
        showAvatarForm,
        setShowAvatarForm,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
