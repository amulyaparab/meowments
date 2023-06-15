import { createContext, useEffect } from "react";
import { getAllPosts } from "../Services/postServices";

const utilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  useEffect(() => {
    // getAllPosts();
  }, []);
  return <utilsContext.Provider>{children}</utilsContext.Provider>;
};
