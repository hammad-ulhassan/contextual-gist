import {  SETEDITDATAFORPOST, SETGISTDATAFOREDIT, SETSELECTEDGISTDATA } from "../../globals/constants/actionTypes";

const reducer = (state, {type, payload}) =>{
    switch(type){
        case SETSELECTEDGISTDATA:
            return {
                ...state,
                gistData: payload
            }
        case SETGISTDATAFOREDIT:
            return{
                ...state,
                description: payload.description,
                files: payload.files
            }
        case SETEDITDATAFORPOST:
            return {
                ...state,
                dataForPost: payload
            }
        default:
            return state;
    }
}

export default reducer;