import { forkGist as forkThisGist } from "../../api/gists";
import { FORKED } from "../../globals/constants/actionTypes";

const forkGist = (state) => (dispatch) => {
  forkThisGist(state.selectedGistId).then((resp) => {
    dispatch({
      type: FORKED,
      payload: resp,
    });
  });
};

export default forkGist;
