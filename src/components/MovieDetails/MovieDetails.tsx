import React, { useCallback, useEffect, useState } from 'react';

import Styles from './MovieDetails.module.css';

import SearchButton from '../../asset/inline/SearchButton.svg';
import { Logo } from '../Logo/Logo';
import { Label } from '../Label/Label';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchMovieDetail } from '../../store/CreateAsyncThunks/fetchMovieDetail';

type Props = {
	id: number | null;
	handler: (id: null) => () => void;
}

export const MovieDetails = ({ id, handler }: Props) => {
	const dispatch = useAppDispatch();
	const { movie, isLoading, error } = useAppSelector(state => state.movieDetailReducer);

	useEffect(() => {
		id && dispatch(fetchMovieDetail(id));
	}, [id]);

	const getHoursFromMinutes = useCallback(() => {
		const hours = Math.trunc(movie.runtime / 60);
		const minutes = movie.runtime % 60;
		return `${hours} h ${minutes} min`;
	}, [movie]);

	return (
		<div className={Styles.section__description__wrapper}>
			<div className={Styles.logo__search}>
				<Logo small={true} />
				<img src={SearchButton} alt='Search' onClick={handler(null)} />
			</div>
			{isLoading && 'Please wait while it is loading'}
			{error ? error : isLoading ? isLoading :
				<div className={Styles.block__description__wrapper}>
					<div className={Styles.poster}>
						<img src={movie?.poster_path} alt='poster' />
					</div>
					<div className={Styles.text__description__wrapper}>
						<div className={Styles.title__vote_average}><
							Label label={movie?.title} labelClassName={Styles.movie__header} />
							<span>{movie?.vote_average}</span>
						</div>
						<div className={Styles.genres}>{movie?.genres?.join(' & ')}</div>
						<div className={Styles.release__runtime}>
							<span>{movie?.release_date?.slice(0, 4)}</span>
							<span>{getHoursFromMinutes()}</span>
						</div>
						<div className={Styles.overview}>{movie?.overview}</div>
					</div>
				</div>}
		</div>
	);
};
