import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { moviesSlice } from './features/api/movieSlice';

const rootReducer = combineReducers({
	[moviesSlice.reducerPath]: moviesSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesSlice.middleware),
});
