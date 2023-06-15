import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchUsers } from "../Services/userServices";

const UsersContext = createContext();
export const UsersProvider = ({ children }) => {
  const fetchAllUsers = async () => {
    try {
      const users = await fetchUsers();
      userDispatch({ type: "FETCH_ALL_USERS", payload: users });
    } catch (err) {
      console.log(err);
    }
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_ALL_USERS":
        return { ...state, users: action.payload };
      default:
        return state;
    }
  };
  const initialState = {
    users: [],
  };
  const [state, userDispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <UsersContext.Provider value={{ state }}>{children}</UsersContext.Provider>
  );
};
export const useUsers = () => useContext(UsersContext);
