import { useCallback, useEffect, useState } from "react";
import BtnGrp from "../../components/BtnGrp/BtnGrp";
import Datatable from "../../components/Datatable/Datatable";
import {
  CFEWrapper,
  HomePageLayout,
} from "../../shared/components/styledComponent";

import PublicGistsContextProvider from "../../contexts/PublicGistsContext";
import { usePublicGists } from "../../hooks/usePublicGistsContext";


export default function Homepage() {

  const [view, setView] = useState("table");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const {gists} = usePublicGists();


  const viewChange = useCallback((view) => {
    setView(view);
  }, []);

  const onPageChange = useCallback((page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  }, []);

  return (
    <HomePageLayout>
      <CFEWrapper>
        <BtnGrp onViewChange={viewChange} view={view} />
      </CFEWrapper>
      <div>
        {view === "table" ? (
          // <PublicGistsContextProvider>
            <Datatable
              data={gists}
              loading={loading}
              onPageChange={onPageChange}
            />
          // </PublicGistsContextProvider>
        ) : (
          <></>
        )}
      </div>
    </HomePageLayout>
  );
}
