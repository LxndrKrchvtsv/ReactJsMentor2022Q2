import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { getMoviesList } from '../../core/api/api';

type Parameters = {
	genre: string | null;
	sortBy: string;
};

export const fetchMoviesList = createAsyncThunk('movies/moviesListStatus', async ({ genre, sortBy }: Parameters, thunkAPI) => {
	try {
		const moviesListResponse = await getMoviesList(genre, sortBy);
		return moviesListResponse.data.data;
	} catch (e) {
		if (axios.isAxiosError(e)) {
			return thunkAPI.rejectWithValue(e.message);
		}
		return thunkAPI.rejectWithValue(`An unexpected error occurred ${e}`);
	}
});
