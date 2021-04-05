const SEARCH_ERROR = "SEARCH_ERROR";

const InitialState = {
    searchError: false
};


const errorReducer = (state = InitialState, action) => {
    switch(action.type) {
        case SEARCH_ERROR:
          return {
              ...state,
              searchError: action.error
          }
        default: return state
    }
};

export const getSearchError = (error) => {
    return {
        type: SEARCH_ERROR,
        error
    }
}

export default errorReducer;