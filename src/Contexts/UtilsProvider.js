import { createContext, useEffect } from "react";

const utilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  useEffect(() => {}, []);
  return <utilsContext.Provider>{children}</utilsContext.Provider>;
};
