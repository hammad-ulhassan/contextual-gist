import { useContext } from "react";
import { PublicGistsContext } from "../contexts/publicGistsContext/PublicGistsContextProvider";

export function usePublicGists() {
    const context = useContext(PublicGistsContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }