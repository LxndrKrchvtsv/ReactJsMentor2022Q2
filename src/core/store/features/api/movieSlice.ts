import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MoviesListResponse } from '../../../types/types';

const baseUrl = 'http://localhost:4000/';

export const moviesSlice = createApi({
	reducerPath: 'movies',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		getMovies: build.query({
			query: (params) => ({
				url: 'movies',
				params: {
					...params,
				},
			}),
			transformResponse: (baseQueryReturnValue: { data: MoviesListResponse }) => {
				return baseQueryReturnValue.data;
			},
		}),
		getMovie: build.query({
			query: (id) => `movies/${id}`,
		}),
		addMovie: build.mutation({
			query: (movie) => ({
				url: 'movies',
				method: 'POST',
				body: movie,
			}),
		}),
		editMovie: build.mutation({
			query: (movie) => ({
				url: 'movies',
				method: 'PUT',
				body: movie,
			}),
		}),
		removeMovie: build.mutation({
			query: (id) => ({
				url: `movies/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const { useLazyGetMoviesQuery, useLazyGetMovieQuery, useAddMovieMutation, useEditMovieMutation, useRemoveMovieMutation } = moviesSlice;
