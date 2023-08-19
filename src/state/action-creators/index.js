const Base_URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

//Function type of success fetch of movies list
const fetchMoviesSuccess = (movies) => {
    return {
        type: 'FETCH_LIST_SUCCESS',
        payload: movies,
    }
}

//Function type of success fetch more movies list on scrolling
const fetchMoreMoviesSuccess = (movies) => {
    return {
        type: 'FETCH_MORE_SUCCESS',
        payload: movies,
    }
}

//Function type of fetch movie list failure (for error handling)
const fetchMoviesFalilure = error => {
    return {
        type: 'FETCH_LIST_ERROR',
        payload: error,
    }
}


//Function to fetch upcoming movies
export const upcomingMovies = (page) => {

    //Endpoint for fetching upcoming movies
    const URL = `${Base_URL}movie/upcoming?language=en-US&page=${page}&api_key=${API_KEY}`;

    return async(dispatch)=> {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                }
            })
            const data = await response.json();
            //Initial fetching
            if(page===1){
                data.keyword = '';
                dispatch(fetchMoviesSuccess(data));
            //More fetch on scroll
            }else if(page>1){
                data.page = page;
                dispatch(fetchMoreMoviesSuccess(data));
            }
          } catch (error) {
            dispatch(fetchMoviesFalilure(error.message));
          }
    }
}

//Function to fetch movies on search of input
export const searchMovies = (input, page) => {

    //Endpoint for fetching movies on search querry
    const URL = `${Base_URL}search/movie?query=${input}&page=${page}&api_key=${API_KEY}`;

    return async(dispatch)=> {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    accept: 'application/json'
                }
            })
            const data = await response.json();
            //Initial fetching
            if(page===1){
                data.keyword = input;
                dispatch(fetchMoviesSuccess(data));
            //More fetch on scroll
            }else if(page>1){
                data.page = page;
                dispatch(fetchMoreMoviesSuccess(data));
            }
          } catch (error) {
            dispatch(fetchMoviesFalilure(error.message));
          }
    }
}

//Function type of success fetch of details of movie
const fetchDetailsSuccess = (details) => {
    return {
        type: 'FETCH_DETAILS_SUCCESS',
        payload: details,
    }
}

//Function type of fetch failure of details of movie (error handling)
const fetchDetailsFalilure = error => {
    return {
        type: 'FETCH_DETAILS_ERROR',
        payload: error,
    }
}

//Function to fetch details of particular movie by id
export const movieDetail = (id) => {

    //Endpoint to fetch details of particular movie by id
    const URL = `${Base_URL}movie/${id}?language=en-US&api_key=${API_KEY}`;

    return async(dispatch)=> {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    accept: 'application/json'
                }
            })
            const data = await response.json();
            dispatch(fetchDetailsSuccess(data));
          } catch (error) {
            dispatch(fetchDetailsFalilure(error.message));
          }
    }
}