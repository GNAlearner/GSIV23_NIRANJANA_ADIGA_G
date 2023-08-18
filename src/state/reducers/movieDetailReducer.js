const initialState = {
    loading: true,
    details: [],
    error: '',
  };

const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LIST_SUCCESS':
            return {
              ...state,
              loading: false,
              details: action.payload,
              error: '',
            };
        case 'FETCH_LIST_ERROR':
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
        default:
          return state;
        }
}

export default movieDetailReducer;