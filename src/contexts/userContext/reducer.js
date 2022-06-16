import {
  SETLOADING,
  SETUSERDATA,
  SETUSERGISTS,
  SETUSERGISTSLOADING,
  SETUSERLOGIN,
} from "../../globals/constants/actionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SETUSERGISTS:
      return {
        ...state,
        userGists: payload,
        gistsLoading: false
      };
    case SETUSERLOGIN:
      return {
        ...state,
        userLogin: payload,
      };
    case SETUSERDATA:
      return {
        ...state,
        userData: payload,
        loading: false,
      };
    case SETLOADING:
      return {
        ...state,
        loading: payload,
      };
    case SETUSERGISTSLOADING:
      return {
        ...state,
        gistsLoading: payload,
      };
    default:
      return state;
  }
};

export default reducer;
