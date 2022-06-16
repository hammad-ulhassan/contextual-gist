import { createContext, useReducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";

const SelectedGistContext = createContext();

export default function SelectedGistContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SelectedGistContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </SelectedGistContext.Provider>
  );
}

export {SelectedGistContext}
