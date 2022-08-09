import React, { useEffect } from 'react';

import { MovieItem } from './MovieItem/MovieItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMoviesList } from '../../store/CreateAsyncThunks/fetchMoviesList';

type Props = {
	handler: () => void;
	handlerRemove: () => void;
	handleOpen: (id: number) => () => void;
};

export const MoviesList = ({ handler, handlerRemove, handleOpen }: Props) => {
	const dispatch = useAppDispatch();
	const { moviesList, isLoading, error, activeGenre, sortBy } = useAppSelector(state => state.moviesListReducer);

	useEffect(() => {
		const genre = activeGenre !== 'ALL' ? activeGenre : null
		dispatch(fetchMoviesList({
			genre,
			sortBy
		}));
	}, [activeGenre, sortBy]);

	return (
		<>
			{isLoading && 'Please wait while loading.'}
			{error ? error :
				moviesList.map((movie) => {
					return <MovieItem
						key={movie.id}
						id={movie.id}
						posterPath={movie.poster_path}
						releaseDate={movie.release_date}
						tagline={movie.tagline}
						title={movie.title}
						handler={handler}
						handlerRemove={handlerRemove}
						handleOpen={handleOpen}
					/>;
				})}
		</>);
};
