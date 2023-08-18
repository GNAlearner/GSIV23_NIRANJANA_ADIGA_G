const initialState = {
    loading: true,
    movies: [],
    error: '',
  };

const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LIST_SUCCESS':
            return {
              ...state,
              loading: false,
              movies: action.payload,
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

export default movieListReducer;