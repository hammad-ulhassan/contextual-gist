import { SETAUTHUSERDATA, SETCREDENTIALS } from "../../globals/constants/actionTypes";

const credentialReducer = (state, {type, payload}) => {
    switch(type){
        case SETCREDENTIALS:
            console.log('dispatched')
            return{
                ...state,
                username: payload.username,
                token: payload.token,
                isLoggedIn: true
            }

        case SETAUTHUSERDATA:
            return{
                ...state,
                authUserData: payload
            }


        default:
            return state;
    }
}

export default credentialReducer;