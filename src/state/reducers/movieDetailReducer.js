const initialState = {
    loading: true,
    details: [],
    error: '',
  };

//Reducer for fecthing movie details in detail page
const movieDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      //On success fetching of data
        case 'FETCH_DETAILS_SUCCESS':
            return {
              ...state,
              loading: false,
              details: action.payload,
              error: '',
            };
      //On failed fecthing of data
        case 'FETCH_DETAILS_ERROR':
          return {
            ...state,
            loading: false,
            details: [],
            error: action.payload,
          };
        default:
          return state;
        }
}

export default movieDetailReducer;