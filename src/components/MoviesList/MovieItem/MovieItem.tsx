import React, { useState } from 'react';

import { ButtonOption } from '../../UI/ButtonOption/ButtonOption';

import useQueryParams from '../../../hooks/useQueryParams';

import Styles from './Movie.module.css';

type MovieItemType = {
	id: number;
	posterPath: string;
	releaseDate: string;
	tagline: string;
	title: string;
	openRemoveModal: (boolean: boolean, editId: number | null) => void;
	openEditModal: (booleanValue: boolean, event: React.MouseEvent<HTMLSpanElement, MouseEvent>, movieEditId: number) => void;
};

export const MovieItem = ({ id, posterPath, releaseDate, tagline, title, openRemoveModal, openEditModal }: MovieItemType) => {
	const [, setMovieId] = useQueryParams('movieId');
	const [isOptionVisible, setIsOptionVisible] = useState(false);
	const handleOptionVisible = (booleanOption: boolean) => () => {
		setIsOptionVisible(booleanOption);
	};

	return (
		<div className={Styles.movie__wrapper} onMouseEnter={handleOptionVisible(true)} onMouseLeave={handleOptionVisible(false)} onClick={() => setMovieId(id)}>
			{isOptionVisible && <ButtonOption openRemoveModal={openRemoveModal} openEditModal={openEditModal} movieEditId={id} />}
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
