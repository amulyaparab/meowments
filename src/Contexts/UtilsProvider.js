import { createContext, useEffect } from "react";
import { getAllPosts } from "../Services/postServices";

const utilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const encodedToken = JSON.parse(localStorage.getItem("userData"));
  console.log(encodedToken?.encodedToken, "fsdfjsdyhsdkhfjkdhjk");
  useEffect(() => {
    // getAllPosts();
  }, []);
  return <utilsContext.Provider value={{}}>{children}</utilsContext.Provider>;
};
