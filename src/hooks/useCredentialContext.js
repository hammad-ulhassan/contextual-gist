import { useContext } from "react";
import { CredentialContext } from "../contexts/CredentialContext";

export default function useCredentialContext(){
    const context = useContext(CredentialContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
      }
      return context;
}