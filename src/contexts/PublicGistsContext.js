import { createContext, useEffect, useState } from "react";
import { getAllPublicGists, getGist } from "../api/gists";

const PublicGistsContext = createContext();

export default function PublicGistsContextProvider({ children }) {
  const [gists, setGists] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllPublicGists(page, pageSize).then((gists) => {
      setGists(gists);
      setLoading(false);
    });
  }, [page, pageSize]);

  return (
    <PublicGistsContext.Provider
      value={{ gists, loading, setPage, setPageSize }}
    >
      {children}
    </PublicGistsContext.Provider>
  );
}

export { PublicGistsContext };
