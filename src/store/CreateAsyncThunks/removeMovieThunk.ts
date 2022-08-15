import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { removeMovie } from '../../core/api/api';

export const removeMovieThunk = createAsyncThunk('createMovieStatus', async (id: number, thunkAPI) => {
	try {
		const createMovieResponse = await removeMovie(id);
		return createMovieResponse.statusText;
	} catch (e) {
		if (axios.isAxiosError(e)) {
			return thunkAPI.rejectWithValue(e.message);
		}
		return thunkAPI.rejectWithValue(`An unexpected error occurred ${e}`);
	}
});
