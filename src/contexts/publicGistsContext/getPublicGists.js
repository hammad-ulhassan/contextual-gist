import { getAllPublicGists } from "../../api/gists";
import { SETGISTS, SETLOADING } from "../../globals/constants/actionTypes"

const fetchPublicGists= (state)=>(dispatch) => {
    dispatch({
        type: SETLOADING,
        payload: true
    });
    getAllPublicGists(state.page, state.pageSize).then(gistsArray=>{
        dispatch({
            type: SETGISTS,
            payload: gistsArray
        })
    })
}
export default fetchPublicGists;