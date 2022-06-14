const Reducer = (state, action) => {
    switch(action.type){
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'SET_GISTS':
            return {
                ...state,
                gists: action.payload
            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            }
        case 'SET_PAGESIZE':
            return{
                ...state,
                pageSize: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;