import React, { useEffect } from 'react';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchMoviesList } from '../../store/CreateAsyncThunks/fetchMoviesList';

import { MovieItem } from './MovieItem/MovieItem';

type Props = {
	openRemoveModal: (movieEditId: number) => void;
	handleOpenDetail: (id: number) => () => void;
	openEditModal: (booleanValue: boolean, event: React.MouseEvent<HTMLSpanElement, MouseEvent>, movieEditId: number) => void;
};

export const MoviesList = ({ openRemoveModal, handleOpenDetail, openEditModal }: Props) => {
	const dispatch = useAppDispatch();
	const { moviesList, isLoading, error, activeGenre, sortBy } = useAppSelector((state) => state.moviesListReducer);

	useEffect(() => {
		const genre = activeGenre !== 'ALL' ? activeGenre : null;
		dispatch(
			fetchMoviesList({
				genre,
				sortBy,
			})
		);
	}, [activeGenre, sortBy, dispatch]);

	return (
		<>
			{isLoading && 'Please wait while loading.'}
			{error ||
				moviesList.map((movie) => {
					return (
						<MovieItem
							key={movie.id}
							id={movie.id}
							posterPath={movie.poster_path}
							releaseDate={movie.release_date}
							tagline={movie.tagline}
							title={movie.title}
							openRemoveModal={openRemoveModal}
							handleOpenDetail={handleOpenDetail}
							openEditModal={openEditModal}
						/>
					);
				})}
		</>
	);
};
