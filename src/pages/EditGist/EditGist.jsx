import { notification } from "antd";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editGist } from "../../api/gists";
import GistCreationForm from "../../components/GistCreationForm/GistCreationForm";
import GistForm from "../../components/GistForm/GistForm";
import { EditGistContext } from "../../contexts/editGistContext/provider";
import { SETEDITDATAFORPOST, SETGISTDATAFOREDIT, SETSELECTEDGISTDATA } from "../../globals/constants/actionTypes";
import { SELECTED_GIST } from "../../globals/constants/localStorageAccessors";
import {
  CFSWrapper,
  HomePageLayout,
} from "../../shared/components/styledComponent";
import transformGistForEdit from "../../utils/transformGistForEdit";
import transformGistFormDataForPost from "../../utils/transformGistFormDataForPost";

const EditGist = () => {
  // const formRef = useRef(null);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(EditGistContext);

  useEffect(() => {
    if (!state.gistData) {
      const myGist = localStorage.getItem(SELECTED_GIST);
      if (myGist) {
        var parsed = JSON.parse(myGist);
        dispatch({
          type: SETSELECTEDGISTDATA,
          payload: parsed,
        });
      }
    }
  }, [dispatch, state.gistData]);

  useEffect(() => {
    if(state.gistData){
      var transformed = transformGistForEdit(state.gistData);
      dispatch({
        type:SETGISTDATAFOREDIT,
        payload: transformed
      })
    }
  }, [state.gistData]);

  function handleSubmitForm(values){
    if(values){
      var transformedForEdit = transformGistFormDataForPost(values);
      dispatch({
        type: SETEDITDATAFORPOST,
        payload: transformedForEdit
      });
      debugger
      editGist(state.gistData?.id, state.dataForPost).then(e=>{
        navigate('/me')
      })
    }
  }


  return (
    <HomePageLayout>
      <CFSWrapper>
        <h2>Edit Gist</h2>
      </CFSWrapper>
      <GistCreationForm
        // description={description}
        // files={files}
        onSubmitForm={handleSubmitForm}
      />
    </HomePageLayout>
  );
};

export default EditGist;
