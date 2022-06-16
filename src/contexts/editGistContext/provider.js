import { createContext, useReducer } from "react";
import { initialState } from "./initialState";
import reducer from "./reducer";

export const EditGistContext = createContext();

export default function EditGistContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <EditGistContext.Provider
        value={{state, dispatch}}>
            {children}
        </EditGistContext.Provider>
    );
}