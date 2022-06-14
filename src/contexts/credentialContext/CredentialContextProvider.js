import { createContext, useReducer, useEffect } from "react";
import { CREDENTIAL_STATE } from "../../globals/constants/localStorageAccessors";
import credentialReducer from "./credentialReducer";
import { initialState } from "./initialState";

const CredentialContext = createContext();

export default function CredentialContextProvider({ children }) {
  const [state, credentialDispatch] = useReducer(
    credentialReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(CREDENTIAL_STATE, JSON.stringify(state));
}, [state]);

  return (
    <CredentialContext.Provider value={{ 
        state, credentialDispatch }}>
      {children}
    </CredentialContext.Provider>
  );
}

export { CredentialContext };
