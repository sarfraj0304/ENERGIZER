import { createContext, useState } from "react";
export const ContextProvider = createContext();
export const ContextProviderMovie = ({ children }) => {
  const [cat, setCat] = useState("");
  const SetMovieCategory = (e) => {
    setCat(e);
  };
  return (
    <ContextProvider.Provider value={{ cat, SetMovieCategory }}>
      {children}
    </ContextProvider.Provider>
  );
};
