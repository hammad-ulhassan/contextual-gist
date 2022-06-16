import { Spin } from "antd";
import { useCallback, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GistCard from "../../components/GistCard/GistCard";
import GistMeta from "../../components/GistMeta/GistMeta";
import {
  ColFSWrapper,
  CSBWrapper,
  HomePageLayout,
} from "../../shared/components/styledComponent";
import GistUtils from "../../components/GistUtils/GistUtils";
import { SelectedGistContext } from "../../contexts/gistPageContext/provider";
import {
  SETFORKS,
  SETLOGGEDIN,
  SETSELECTEDGISTID,
  SETSHOWPERSONALCONTROLS,
} from "../../globals/constants/actionTypes";
import fetchGistData from "../../contexts/gistPageContext/getGistData";
import { CREDENTIAL_STATE, SELECTED_GIST } from "../../globals/constants/localStorageAccessors";
import forkGist from "../../contexts/gistPageContext/forkGist";

export const GistPage = () => {
  let { id } = useParams();
  const { state, dispatch } = useContext(SelectedGistContext);
  const navigate = useNavigate();

  const editGist = useCallback(() => {
    console.log(state.selectedGistId)
    navigate(`/edit/${state.selectedGistId}`);
  }, []);

  function deleteGist() {}

  function onForkGist() {
    forkGist(state)(dispatch);
  }

  function onStarGist() {
    //[redundancy todo]
  }

  useEffect(() => {
    if(state.forkedResponse){
      //todo //inifite aa raha hai
    }
  }, [state.forkedResponse]);

  useEffect(() => {
    if (id) {
      dispatch({
        type: SETSELECTEDGISTID,
        payload: id,
      });
    }
  }, [id]);

  useEffect(() => {
    if (state.selectedGistId) {
      fetchGistData(state)(dispatch);
    }
  }, [state.selectedGistId]);

  useEffect(() => {
    if (state.selectedGistData) {
      localStorage.setItem(SELECTED_GIST, JSON.stringify(state.selectedGistData));
      const myState = localStorage.getItem(CREDENTIAL_STATE);
      if (myState) {
        let parsedState = JSON.parse(myState);
        dispatch({
          type: SETLOGGEDIN,
          payload: parsedState.isLoggedIn,
        });
        if (parsedState.username === state.selectedGistData?.owner?.login) {
          dispatch({
            type: SETSHOWPERSONALCONTROLS,
            payload: true,
          });
        } else {
          dispatch({
            type: SETSHOWPERSONALCONTROLS,
            payload: false,
          });
        }
      }
      dispatch({
        type: SETFORKS,
        payload: state.selectedGistData?.forks,
      });
    }
  }, [dispatch, state.selectedGistData]);

  return (
    <HomePageLayout>
      <CSBWrapper>
        {/* {JSON.stringify(selectedGist)} */}
        {!state.loading ? (
          <GistMeta isInTable={false} gist={state.selectedGistData} />
        ) : null}
        {!state.loading ? (
          <GistUtils
          handleGistEdit={editGist}
          handleGistDelete={deleteGist}
          handleForkGist={onForkGist}
          handleGistStar={onStarGist}
          />
        ) : null}
      </CSBWrapper>
      <ColFSWrapper gap="0.5vh">
        {!state.loading && state.selectedGistData ? (
          Object.keys(state.selectedGistData?.files)
            .map((fn) => state.selectedGistData?.files[fn])
            .map((file, index) => (
              <GistCard
              style={{ minWidth: "100%", margin: "1%" }}
              filename={file.filename}
              content={file.content}
              language={file.language}
              key={index}
              />
            ))
        ) : (
          <Spin size="large" />
        )}
      </ColFSWrapper>
    </HomePageLayout>
  );
};
