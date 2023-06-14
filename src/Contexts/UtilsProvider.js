import axios from "axios";
import { createContext, useEffect } from "react";

const utilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const encodedToken = localStorage.getItem("encodedToken");

  return <utilsContext.Provider>{children}</utilsContext.Provider>;
};
