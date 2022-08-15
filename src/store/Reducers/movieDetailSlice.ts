import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Movie } from '../../types/types';
import { fetchMovieDetail } from '../CreateAsyncThunks/fetchMovieDetail';

type MovieDetailState = {
	movie: Movie;
	isLoading: boolean;
	error: string;
};

const initialState: MovieDetailState = {
	movie: {} as Movie,
	isLoading: false,
	error: '',
};

const movieDetailSlice = createSlice({
	name: 'movieDetail',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchMovieDetail.pending.type]: (state) => {
			state.isLoading = true;
		},
		[fetchMovieDetail.fulfilled.type]: (state, action: PayloadAction<Movie>) => {
			state.isLoading = false;
			state.movie = action.payload;
		},
		[fetchMovieDetail.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default movieDetailSlice.reducer;
