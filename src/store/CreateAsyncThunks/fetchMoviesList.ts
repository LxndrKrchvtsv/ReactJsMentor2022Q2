import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMoviesList } from '../../core/api/api';
import axios from 'axios';

type Parameters = {
	genre: string | null;
	sortBy: string;
}

export const fetchMoviesList = createAsyncThunk(
	'movies/moviesListStatus',
	async ({genre, sortBy}: Parameters, thunkAPI) => {
		try {
			const moviesListResponse =  await getMoviesList(genre, sortBy);
			return moviesListResponse.data.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return thunkAPI.rejectWithValue(error.message);
			} else {
				return thunkAPI.rejectWithValue(`An unexpected error occurred ${error}`);
			}
		}
	}
);
