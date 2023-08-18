import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from './reducers/movieListReducer'

const store = configureStore({
    reducer: {
        list: movieListReducer,
    }
});

export default store;