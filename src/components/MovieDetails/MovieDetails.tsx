import React, { useCallback, useEffect } from 'react';

import SearchButton from '../../asset/inline/SearchButton.svg';
import { Logo } from '../UI/Logo/Logo';
import { Label } from '../UI/Label/Label';

import { useLazyGetMovieQuery } from '../../core/store/features/api/movieSlice';
import useQueryParams from '../../hooks/useQueryParams';

import Styles from './MovieDetails.module.css';

export const MovieDetails = () => {
	const [movieId, setMovieId] = useQueryParams('movieId');
	const [getMovie, { data: movie, isLoading, isSuccess, isError, error }] = useLazyGetMovieQuery();

	useEffect(() => {
		getMovie(movieId);
	}, [movieId, getMovie]);

	const getHoursFromMinutes = useCallback(() => {
		const hours = Math.trunc(movie.runtime / 60);
		const minutes = movie.runtime % 60;
		return `${hours} h ${minutes} min`;
	}, [movie]);

	return (
		<div className={Styles.section__description__wrapper}>
			<div className={Styles.logo__search}>
				<Logo small={true} />
				<img src={SearchButton} alt={'Search'} onClick={() => setMovieId(null)} />
			</div>
			{isError && error}
			{isLoading && 'Please wait while it is loading'}
			{isSuccess && (
				<div className={Styles.block__description__wrapper}>
					<div className={Styles.poster}>
						<img src={movie?.poster_path} alt={'poster'} />
					</div>
					<div className={Styles.text__description__wrapper}>
						<div className={Styles.title__vote_average}>
							<Label label={movie?.title} labelClassName={Styles.movie__header} />
							<span>{movie?.vote_average}</span>
						</div>
						<div className={Styles.genres}>{movie?.genres?.join(' & ')}</div>
						<div className={Styles.release__runtime}>
							<span>{movie?.release_date?.slice(0, 4)}</span>
							<span>{getHoursFromMinutes()}</span>
						</div>
						<div className={Styles.overview}>{movie?.overview}</div>
					</div>
				</div>
			)}
		</div>
	);
};
