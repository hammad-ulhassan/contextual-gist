import { createContext, useEffect, useState } from "react";
import { getAllPublicGists } from "../api/gists";

const PublicGistsContext = createContext();

export default function PublicGistsContextProvider({ children }) {
  const [gists, setGists] = useState([]);
  const [page, setPage]=useState(1);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getAllPublicGists(page, pageSize).then((gists) => setGists(gists));
  }, []);

  return (
    <PublicGistsContext.Provider value={{ gists }}>
      {children}
    </PublicGistsContext.Provider>
  );
}

export { PublicGistsContext };