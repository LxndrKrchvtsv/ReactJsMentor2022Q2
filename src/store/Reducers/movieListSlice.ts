import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types/types';
import { fetchMoviesList } from '../CreateAsyncThunks/fetchMoviesList';

type MovieListState = {
	moviesList: Movie[];
	isLoading: boolean;
	error: string;
	activeGenre: string;
	sortBy: string;
}

const initialState: MovieListState = {
	moviesList: [],
	isLoading: false,
	error: '',
	activeGenre: 'ALL',
	sortBy: 'vote_average',
};

const movieListSlice = createSlice({
	name: 'movieList',
	initialState,
	reducers: {
		toggleGenre(state, action: PayloadAction<string>) {
			state.activeGenre = action.payload;
		},
		toggleSortBy(state, action: PayloadAction<string>) {
			state.sortBy = action.payload;
		}
	},
	extraReducers: {
		[fetchMoviesList.pending.type]: (state) => {state.isLoading = true},
		[fetchMoviesList.fulfilled.type]: (state, action: PayloadAction<Movie[]>) => {
			state.isLoading = false;
			state.moviesList = action.payload;
		},
		[fetchMoviesList.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const { toggleGenre, toggleSortBy } = movieListSlice.actions;
export default movieListSlice.reducer;
