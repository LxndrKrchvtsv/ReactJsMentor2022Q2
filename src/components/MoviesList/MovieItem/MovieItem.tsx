import React from 'react';

import Styles from './Movie.module.css';

type MovieItemType = {
	posterPath: string;
	releaseDate: string;
	tagline: string;
	title: string;
};

export const MovieItem = ({ posterPath, releaseDate, tagline, title }: MovieItemType) => {
	return (
		<div className={Styles.movie__wrapper}>
			<div>
				<img src={posterPath} alt={'movie'} />
			</div>
			<div className={Styles.movie__info__wrapper}>
				<div>
					<div className={Styles.movie__header}>{title}</div>
					<div className={Styles.movie__description}>{tagline}</div>
				</div>
				<div className={Styles.movie__date__release}>{releaseDate.slice(0, 4)}</div>
			</div>
		</div>
	);
};
