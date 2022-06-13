import { createContext, useEffect, useState } from "react";
import { getAllPublicGists } from "../api/gists";

const PublicGistsContext = createContext();

export default function PublicGistsContextProvider({ children }) {
  const [gists, setGists] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [selectedGist, setSelectedGist] = useState({});

  useEffect(() => {
    setLoading(true);
    getAllPublicGists(page, pageSize).then((gists) => {
      setGists(gists);
      setLoading(false);
    });
  }, [page, pageSize]);

  return (
    <PublicGistsContext.Provider
      value={{ gists, loading, selectedGist, setPage, setPageSize, setSelectedGist }}
    >
      {children}
    </PublicGistsContext.Provider>
  );
}

export { PublicGistsContext };
