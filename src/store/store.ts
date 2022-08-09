import { combineReducers, configureStore } from '@reduxjs/toolkit';
import moviesListReducer from './Reducers/movieListSlice';
import movieDetailReducer from './Reducers/movieDetailSlice';

const rootReducer = combineReducers({
	moviesListReducer,
	movieDetailReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AddDispatch = typeof store.dispatch;
