import { createContext, useContext, useEffect, useReducer } from "react";
import { fetchUsers } from "../Services/userServices";
import { userReducer } from "../reducers/userReducer";

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

  const initialState = {
    users: [],
  };
  const [state, userDispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <UsersContext.Provider value={{ state, userDispatch }}>
      {children}
    </UsersContext.Provider>
  );
};
export const useUsers = () => useContext(UsersContext);
