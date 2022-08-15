import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { editMovie } from '../../core/api/api';
import { Movie } from '../../types/types';

export const editMovieThunk = createAsyncThunk('editMovieStatus', async (movieData: Movie, thunkAPI) => {
	try {
		const createMovieResponse = await editMovie(movieData);
		return createMovieResponse.statusText;
	} catch (e) {
		if (axios.isAxiosError(e)) {
			return thunkAPI.rejectWithValue(e.message);
		}
		return thunkAPI.rejectWithValue(`An unexpected error occurred ${e}`);
	}
});
