import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from './reducers/movieListReducer'
import movieDetailReducer from './reducers/movieDetailReducer';

const store = configureStore({
    reducer: {
        list: movieListReducer,
        details: movieDetailReducer
    }
});

export default store;