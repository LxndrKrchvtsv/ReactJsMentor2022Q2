import React, { useEffect, useState } from 'react';

import { getMoviesList } from '../../api/api';

import { Movie } from '../../types/types';

import Styles from './MoviesList.module.css';
import { MovieItem } from './MovieItem/MovieItem';

export const MoviesList = () => {
	const [moviesList, setMoviesList] = useState<Movie[] | null>(null);

	useEffect(() => {
		getMoviesList().then((res) => setMoviesList(res.data.data));
	}, []);

	return (
		<div className={Styles.movies__list__wrapper}>
			{moviesList?.map((movie) => {
				return (
					<MovieItem
						key={movie.id}
						posterPath={movie.poster_path}
						releaseDate={movie.release_date}
						tagline={movie.tagline}
						title={movie.title}
					/>
				);
			})}
		</div>
	);
};
