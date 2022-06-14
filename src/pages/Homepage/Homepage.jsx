import { useCallback, useContext, useState, useEffect } from "react";
import BtnGrp from "../../components/BtnGrp/BtnGrp";
import Datatable from "../../components/Datatable/Datatable";
import {
  CFEWrapper,
  HomePageLayout,
} from "../../shared/components/styledComponent";

// import { usePublicGists } from "../../hooks/usePublicGistsContext";
import { getAllPublicGists } from "../../api/gists";
import { Context } from "../../GlobalContext/GlobalContext";

export default function Homepage() {
  const [view, setView] = useState("table");
  // const { gists, loading, setPage, setPageSize } = usePublicGists();
  const [state, dispatch] = useContext(Context);

  const viewChange = useCallback((view) => {
    setView(view);
  }, []);

  const onPageChange = useCallback(
    (page, pageSize) => {
      if (page) {
        dispatch({
          type: "SET_PAGE",
          payload: page,
        });
      }
      if (pageSize) {
        dispatch({
          type: "SET_PAGESIZE",
          payload: pageSize,
        });
      }
    },
    [dispatch]
  );
  
  useEffect(() => {
    console.log('hahah')
  });

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    getAllPublicGists(state.page, state.pageSize).then((gists) => {
      dispatch({ type: "SET_GISTS", payload: gists });
      dispatch({ type: "SET_LOADING", payload: false });
    });
  }, [dispatch, state.page, state.pageSize]);

  return (
    <HomePageLayout>
      <CFEWrapper>
        <BtnGrp onViewChange={viewChange} view={view} />
      </CFEWrapper>
      <div>
        {view === "table" ? (
          <Datatable
            data={state.gists}
            loading={state.loading}
            onPageChange={onPageChange}
          />
        ) : (
          <></>
        )}
      </div>
    </HomePageLayout>
  );
}
