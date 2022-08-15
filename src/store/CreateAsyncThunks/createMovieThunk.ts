import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { createMovie } from '../../core/api/api';
import { Movie } from '../../types/types';

export const createMovieThunk = createAsyncThunk('createMovieStatus', async (movieData: Movie, thunkAPI) => {
	try {
		const createMovieResponse = await createMovie(movieData);
		return createMovieResponse.statusText;
	} catch (e) {
		if (axios.isAxiosError(e)) {
			return thunkAPI.rejectWithValue(e.message);
		}
		return thunkAPI.rejectWithValue(`An unexpected error occurred ${e}`);
	}
});
