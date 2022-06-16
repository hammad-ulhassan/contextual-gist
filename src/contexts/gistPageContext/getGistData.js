import { getGist } from "../../api/gists";
import { SETLOADING, SETSELECTEDGISTDATA } from "../../globals/constants/actionTypes"

const fetchGistData = (state)=> (dispatch) => {
    dispatch({
        type: SETLOADING,
        payload: true
    });
    getGist(state.selectedGistId).then(gistData=>{
        dispatch({
            type: SETSELECTEDGISTDATA,
            payload: gistData
        })
    })
}

export default fetchGistData;