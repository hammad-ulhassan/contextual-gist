import { useContext } from "react";
import GlobalContextProvider from "./GlobalContext";

export default function useGlobalContext(){
    const context = useContext(GlobalContextProvider);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
      }
      return context;
}