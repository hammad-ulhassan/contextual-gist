import {
  FORKED,
  SETFORKS,
  SETLOADING,
  SETLOGGEDIN,
  SETSELECTEDGISTDATA,
  SETSELECTEDGISTID,
  SETSHOWPERSONALCONTROLS,
} from "../../globals/constants/actionTypes";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SETLOADING:
      return {
        ...state,
        loading: payload,
      };
    case SETSELECTEDGISTDATA:
      return {
        ...state,
        selectedGistData: payload,
        loading: false,
      };
    case SETSELECTEDGISTID:
      return {
        ...state,
        selectedGistId: payload,
      };
    case SETSHOWPERSONALCONTROLS:
      return {
        ...state,
        showPersonalControls: payload,
      };
    case SETLOGGEDIN:
      return {
        ...state,
        isLoggedIn: payload,
      };
    case SETFORKS:
      return {
        ...state,
        forks: payload,
      };
    case FORKED:
      return {
        ...state,
        forkedResponse: payload,
      };
    default:
      return state;
  }
};
export default reducer;
