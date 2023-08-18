const Base_URL = process.env.REACT_APP_API_BASE_URL;
const Fetch_API = process.env.REACT_APP_API_UPCOMING;
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchMoviesSuccess = (movies) => {
    return {
        type: 'FETCH_LIST_SUCCESS',
        payload: movies,
    }
}

const fetchMoviesFalilure = error => {
    return {
        type: 'FETCH_LIST_FAILED',
        payload: error,
    }
}

export const upcomingMovies = () => {
    const URL = `${Base_URL}movie/upcoming?language=en-US&api_key=${API_KEY}`;
    return async(dispatch)=> {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    accept: 'application/json'
                }
            })
            const data = await response.json();
            dispatch(fetchMoviesSuccess(data));
          } catch (error) {
            dispatch(fetchMoviesFalilure(error.message));
          }
    }
}

export const searchMovies = (input) => {

    const URL = `${Base_URL}search/movie?query=${input}&api_key=${API_KEY}`;
    return async(dispatch)=> {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    accept: 'application/json'
                }
            })
            const data = await response.json();
            dispatch(fetchMoviesSuccess(data));
          } catch (error) {
            dispatch(fetchMoviesFalilure(error.message));
          }
    }
}