import { REMOVECREDENTIALS, SETCREDENTIALS } from "../../globals/constants/actionTypes";

const credentialReducer = (state, {type, payload}) => {
    switch(type){
        case SETCREDENTIALS:
            return{
                ...state,
                username: payload.username,
                token: payload.token,
                isLoggedIn: true
            }
        case REMOVECREDENTIALS:
            return{
                ...state,
                username: null,
                authUserData: null,
                token:null,
                isLoggedIn: false
            }

        default:
            return state;
    }
}

export default credentialReducer;