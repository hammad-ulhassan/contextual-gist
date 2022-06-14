import { createContext, useReducer } from "react"
import Reducer from "./Reducer"

const initialState = {
    gists:[],
    selectedGist: null,
    page: 1,
    pageSize: 9,
    loading: false
}


const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState);
export default GlobalContextProvider;