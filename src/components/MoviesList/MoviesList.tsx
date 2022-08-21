import React from 'react';

import Styles from '../../App.module.css';
import { Movie, MoviesListResponse } from '../../core/types/types';

import { MovieItem } from './MovieItem/MovieItem';

type Props = {
	openRemoveModal: (boolean: boolean, editId: number | null) => void;
	openEditModal: (booleanValue: boolean, event: React.MouseEvent<HTMLSpanElement, MouseEvent>, movieEditId: number) => void;
	moviesListResponse: MoviesListResponse;
};

export const MoviesList = ({ openRemoveModal, openEditModal, moviesListResponse: { data: movies, isLoading, isSuccess, isError, error } }: Props) => {
	return (
		<div className={Styles.movies__list__wrapper}>
			{isError && error}
			{isLoading && 'Please wait while loading.'}
			{isSuccess &&
				movies.map((movie: Movie) => {
					return (
						<MovieItem
							key={movie.id}
							id={movie.id}
							posterPath={movie.poster_path}
							releaseDate={movie.release_date}
							tagline={movie.tagline}
							title={movie.title}
							openRemoveModal={openRemoveModal}
							openEditModal={openEditModal}
						/>
					);
				})}
		</div>
	);
};
