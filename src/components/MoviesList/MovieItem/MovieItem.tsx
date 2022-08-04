import React, { useState } from 'react';

import { ButtonOption } from '../../ButtonOption/ButtonOption';

import Styles from './Movie.module.css';

type MovieItemType = {
	posterPath: string;
	releaseDate: string;
	tagline: string;
	title: string;
	handler: () => void;
	handlerRemove: () => void;
};

export const MovieItem = ({ posterPath, releaseDate, tagline, title, handler, handlerRemove }: MovieItemType) => {
	const [isOptionVisible, setIsOptionVisible] = useState(false);
	const handleOptionVisible = (booleanOption: boolean) => () => {
		setIsOptionVisible(booleanOption);
	};

	return (
		<div className={Styles.movie__wrapper} onMouseEnter={handleOptionVisible(true)} onMouseLeave={handleOptionVisible(false)}>
			{isOptionVisible && <ButtonOption handler={handler} handlerRemove={handlerRemove} />}
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
