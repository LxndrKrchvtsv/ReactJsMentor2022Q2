import axios, { AxiosResponse } from 'axios';

import { MoviesListResponse } from '../types/types';

const baseUrl = 'http://localhost:4000/';

export const getMoviesList = (): Promise<AxiosResponse<MoviesListResponse>> => {
	return axios.get(`${baseUrl}movies`);
};
