import React, { useCallback, useEffect, useState } from 'react';

import Styles from './MovieDetails.module.css';

import SearchButton from '../../asset/inline/SearchButton.svg';
import { Logo } from '../Logo/Logo';
import { getMovieDetail } from '../../core/api/api';
import { Movie } from '../../types/types';
import { Label } from '../Label/Label';

type Props = {
	id: number | null;
	handler: (id: null) => () => void;
}

export const MovieDetails = ({ id, handler }: Props) => {
	const [movieDetail, setMovieDetail] = useState<Movie>({} as Movie);

	useEffect(() => {
		getMovieDetail(id).then(res => setMovieDetail(res.data));
	}, [id]);

	const getHoursFromMinutes = useCallback(() => {
		const hours = Math.trunc(movieDetail.runtime/60);
		const minutes = movieDetail.runtime % 60;
		return `${hours} h ${minutes} min`;
	}, [movieDetail])

	return (
		<div className={Styles.section__description__wrapper}>
			<div className={Styles.logo__search}><Logo small={true} /> <img src={SearchButton} alt='Search' onClick={handler(null)} /></div>
			<div className={Styles.block__description__wrapper}>
				<div className={Styles.poster}><
					img src={movieDetail?.poster_path} alt='' />
				</div>
				<div className={Styles.text__description__wrapper}>
					<div className={Styles.title__vote_average}><
						Label label={movieDetail?.title} labelClassName={Styles.movie__header} />
						<span>{movieDetail?.vote_average}</span>
					</div>
					<div className={Styles.genres}>{movieDetail?.genres?.join(' & ')}</div>
					<div className={Styles.release__runtime}>
						<span>{movieDetail?.release_date?.slice(0, 4)}</span>
						<span>{getHoursFromMinutes()}</span>
					</div>
					<div className={Styles.overview}>{movieDetail?.overview}</div>
				</div>
			</div>
		</div>
	);
};
