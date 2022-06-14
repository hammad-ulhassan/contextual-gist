import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  gists: [],
  selectedGist: null,
  page: 1,
  pageSize: 9,
  loading: false,
  loggedIn: false,
  username: null,
  token: null
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]); //wrong

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default GlobalContextProvider;
