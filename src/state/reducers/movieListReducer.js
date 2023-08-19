const initialState = {
    loading: true,
    movies: [],
    error: '',
  };

//Reducer for fecthing movie list in list page ( both upcoming movies and search querry )
const movieListReducer = (state = initialState, action) => {
    switch (action.type) {
        //On success fetching of initial data
        case 'FETCH_LIST_SUCCESS':
            return {
              ...state,
              loading: false,
              movies: action.payload,
              error: '',
            };
        //On success fetching of more data on scroll
        case 'FETCH_MORE_SUCCESS':
            return {
              ...state,
              loading: false,
              movies: {
                ...state.movies,
                page: action.payload.page,
                results: [...state.movies.results, ...action.payload.results]
              },
              error: '',
            };
        //On failed fecthing of data
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