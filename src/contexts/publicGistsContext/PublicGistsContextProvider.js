import { createContext, useReducer, useEffect } from "react";
import initialState from "./initialState";
import publicGistsReducer from "./publicGistsReducer";

const PublicGistsContext = createContext();

export default function PublicGistsContextProvider({ children }) {
  const [state, publicGistDispatch] = useReducer(publicGistsReducer, initialState);

  return (
    <PublicGistsContext.Provider value={{ state, publicGistDispatch }}>
      {children}
    </PublicGistsContext.Provider>
  );
}

export { PublicGistsContext };
