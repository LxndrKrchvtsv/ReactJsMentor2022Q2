import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { getMovieDetail } from '../../core/api/api';

export const fetchMovieDetail = createAsyncThunk('movies/movieDetailStatus', async (id: number, thunkAPI) => {
	try {
		const moviesListResponse = await getMovieDetail(id);
		return moviesListResponse.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return thunkAPI.rejectWithValue(error.message);
		}
		return thunkAPI.rejectWithValue(`An unexpected error occurred ${error}`);
	}
});
