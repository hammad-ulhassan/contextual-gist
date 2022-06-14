import { createContext, useState, useEffect } from "react";
import { getAuthUserData } from "../api/user";

const CredentialContext = createContext();

export default function CredentialContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);
  const [authUserData, setAuthUserData] = useState(null);

  useEffect(() => {
      if(username && token){
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', isLoggedIn)
      }
      else{
          setIsLoggedIn(false);
          localStorage.setItem('isLoggedIn', isLoggedIn)

      }
  }, [username, token, isLoggedIn]);

  useEffect(() => {
      if(isLoggedIn === true){
        getAuthUserData().then(authData => {
            setAuthUserData(authData);
            localStorage.setItem('authUserData', JSON.stringify(authData))
        })
      }
  }, [isLoggedIn]);

  return (
    <CredentialContext.Provider
      value={{
        isLoggedIn,
        username,
        token,
        authUserData,
        setToken,
        setUsername,
      }}
    >
      {children}
    </CredentialContext.Provider>
  );
}

export {CredentialContext};
