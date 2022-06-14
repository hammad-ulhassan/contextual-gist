import { getAuthUserData } from "../../api/user"
import { SETAUTHUSERDATA } from "../../globals/constants/actionTypes"

const fetchAuthUserData = (state) => (dispatch) =>{
    getAuthUserData().then(userData => {
        dispatch({
            type: SETAUTHUSERDATA,
            payload: userData
        })
    })
}

export default fetchAuthUserData;