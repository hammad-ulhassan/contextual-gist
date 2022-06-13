import { useCallback, useState } from "react";
import BtnGrp from "../../components/BtnGrp/BtnGrp";
import Datatable from "../../components/Datatable/Datatable";
import {
  CFEWrapper,
  HomePageLayout,
} from "../../shared/components/styledComponent";

import { usePublicGists } from "../../hooks/usePublicGistsContext";

export default function Homepage() {
  const [view, setView] = useState("table");
  const { gists, loading, setPage, setPageSize } = usePublicGists();

  const viewChange = useCallback((view) => {
    setView(view);
  }, []);

  const onPageChange = useCallback(
    (page, pageSize) => {
      setPage(page);
      setPageSize(pageSize);
    },
    [setPage, setPageSize]
  );

  return (
    <HomePageLayout>
      <CFEWrapper>
        <BtnGrp onViewChange={viewChange} view={view} />
      </CFEWrapper>
      <div>
        {view === "table" ? (
          <Datatable
            data={gists}
            loading={loading}
            onPageChange={onPageChange}
          />
        ) : (
          <></>
        )}
      </div>
    </HomePageLayout>
  );
}
