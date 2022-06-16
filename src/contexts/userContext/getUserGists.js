import { getUserGists } from "../../api/gists";
import { SETUSERGISTS, SETUSERGISTSLOADING } from "../../globals/constants/actionTypes"

const fetchUserGists = (state)=>(dispatch)=>{
    dispatch({
        type: SETUSERGISTSLOADING,
        payload: true
    });
    getUserGists(state.userLogin).then(userGists => {
        dispatch({
            type: SETUSERGISTS,
            payload: userGists
        })
    })
}

export default fetchUserGists;