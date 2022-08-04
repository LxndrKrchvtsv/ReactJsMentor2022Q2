import React, { useEffect, useState } from 'react';

import { getMoviesList } from '../../core/api/api';

import { Movie } from '../../types/types';

import { MovieItem } from './MovieItem/MovieItem';

type Props = {
	handler: () => void;
	handlerRemove: () => void;
};

export const MoviesList = ({ handler, handlerRemove }: Props) => {
	const [moviesList, setMoviesList] = useState<Movie[]>([]);

	useEffect(() => {
		getMoviesList().then((res) => setMoviesList(res.data.data));
	}, []);

	return moviesList?.map((movie) => {
		return (
			<MovieItem
				key={movie.id}
				posterPath={movie.poster_path}
				releaseDate={movie.release_date}
				tagline={movie.tagline}
				title={movie.title}
				handler={handler}
				handlerRemove={handlerRemove}
			/>
		);
	});
};
