import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovieDetail } from '../../core/api/api';
import axios from 'axios';

export const fetchMovieDetail = createAsyncThunk(
	'movies/movieDetailStatus',
	async (id: number, thunkAPI) => {
		try {
			const moviesListResponse = await getMovieDetail(id);
			return moviesListResponse.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return thunkAPI.rejectWithValue(error.message);
			} else {
				return thunkAPI.rejectWithValue(`An unexpected error occurred ${error}`);
			}
		}
	}
);
