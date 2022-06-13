import { useContext } from "react";
import { PublicGistsContext } from "../contexts/PublicGistsContext";

export function usePublicGists() {
    const context = useContext(PublicGistsContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }