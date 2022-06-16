import { createContext, useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";

const SelectedUserContext = createContext();

export default function SelectedUserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SelectedUserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SelectedUserContext.Provider>
  );
}

export {SelectedUserContext};
