import { SETGISTS, SETLOADING, SETPAGE, SETPAGESIZE } from "../../globals/constants/actionTypes";

const publicGistsReducer = (state, {type, payload}) =>{
    switch(type){
        case SETGISTS:
            return {
                ...state,
                gists: payload,
                loading: false
            }
        case SETLOADING:
            return {
                ...state,
                loading: payload
            }
        case SETPAGE:
            return {
                ...state,
                page: payload
            }
        case SETPAGESIZE:
            return{
                ...state,
                pageSize: payload
            }
        default:
            return state
    }
}

export default publicGistsReducer