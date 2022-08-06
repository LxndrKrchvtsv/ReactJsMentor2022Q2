import axios, { AxiosResponse } from 'axios';

import { Movie, MoviesListResponse } from '../../types/types';

const baseUrl = 'http://localhost:4000/';

export const getMoviesList = (): Promise<AxiosResponse<MoviesListResponse>> => {
	return axios.get(`${baseUrl}movies`);
};

export const getMovieDetail = (id: number | null): Promise<AxiosResponse<Movie>> => {
	return axios.get(`${baseUrl}movies/${id}`);
};
