import axios, { AxiosResponse } from 'axios';

import { Movie, MoviesListResponse } from '../../types/types';

const baseUrl = 'http://localhost:4000/movies';

export const getMoviesList = (genre: string | null, sortBy: string): Promise<AxiosResponse<MoviesListResponse>> => {
	return axios.get(baseUrl, {
		params: {
			filter: genre,
			sortBy,
		},
	});
};

export const getMovieDetail = (id: number | null): Promise<AxiosResponse<Movie>> => {
	return axios.get(`${baseUrl}/${id}`);
};

export const createMovie = (movieData: Movie) => {
	return axios.post(baseUrl, movieData);
};

export const editMovie = (movieData: Movie): Promise<AxiosResponse<Movie>> => {
	return axios.put(baseUrl, { ...movieData });
};

export const removeMovie = (id: number): Promise<AxiosResponse<Movie>> => {
	return axios.delete(`${baseUrl}/${id}`);
};
