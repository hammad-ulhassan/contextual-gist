import { getUser } from "../../api/user";
import { SETLOADING, SETUSERDATA } from "../../globals/constants/actionTypes";

const fetchUserData = (state)=>(dispatch) =>{
    dispatch({
        type: SETLOADING,
        payload: true
    });
    getUser(state.userLogin).then(userData=>{
        dispatch({
            type: SETUSERDATA,
            payload: userData
        })
    })
}

export default fetchUserData;