import React, { useState } from 'react';

import { ButtonOption } from '../../ButtonOption/ButtonOption';

import Styles from './Movie.module.css';

type MovieItemType = {
	id: number;
	posterPath: string;
	releaseDate: string;
	tagline: string;
	title: string;
	openRemoveModal: (movieEditId: number) => void;
	handleOpenDetail: (id: number) => () => void;
	openEditModal: (booleanValue: boolean, event: React.MouseEvent<HTMLSpanElement, MouseEvent>, movieEditId: number) => void;
};

export const MovieItem = ({ id, posterPath, releaseDate, tagline, title, openRemoveModal, handleOpenDetail, openEditModal }: MovieItemType) => {
	const [isOptionVisible, setIsOptionVisible] = useState(false);
	const handleOptionVisible = (booleanOption: boolean) => () => {
		setIsOptionVisible(booleanOption);
	};

	return (
		<div className={Styles.movie__wrapper} onMouseEnter={handleOptionVisible(true)} onMouseLeave={handleOptionVisible(false)} onClick={handleOpenDetail(id)}>
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
