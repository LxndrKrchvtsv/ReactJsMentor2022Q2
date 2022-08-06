import React, { useState } from 'react';

import { ButtonOption } from '../../ButtonOption/ButtonOption';

import Styles from './Movie.module.css';

type MovieItemType = {
	id: number;
	posterPath: string;
	releaseDate: string;
	tagline: string;
	title: string;
	handler: () => void;
	handlerRemove: () => void;
	handleOpen: (id: number) => () => void;
};

export const MovieItem = ({
	id,
	posterPath,
	releaseDate,
	tagline,
	title,
	handler,
	handlerRemove,
	handleOpen
}: MovieItemType) => {
	const [isOptionVisible, setIsOptionVisible] = useState(false);
	const handleOptionVisible = (booleanOption: boolean) => () => {
		setIsOptionVisible(booleanOption);
	};

	return (
		<div className={Styles.movie__wrapper}
		     onMouseEnter={handleOptionVisible(true)}
		     onMouseLeave={handleOptionVisible(false)}
		     onClick={handleOpen(id)}>
			{isOptionVisible &&
			<ButtonOption handler={handler} handlerRemove={handlerRemove} />}
			<div>
				<img src={posterPath} alt={'movie'} />
			</div>
			<div className={Styles.movie__info__wrapper}>
				<div>
					<div className={Styles.movie__header}>{title}</div>
					<div className={Styles.movie__description}>{tagline}</div>
				</div>
				<div
					className={Styles.movie__date__release}>{releaseDate.slice(0, 4)}</div>
			</div>
		</div>
	);
};
