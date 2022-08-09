import React from 'react';

import Styles from './GenreToggle.module.css';

type PropsGenreItem = {
	genre: string;
	isActive: boolean;
	toggleActive: (genre: string) => () => void;
};

export const GenreItem = ({ genre, toggleActive, isActive }: PropsGenreItem) => {
	return (
		<div className={`${Styles.genre__toggle__item} ${isActive ? Styles.active : ''}`} onClick={toggleActive(genre)}>
			{genre}
		</div>
	);
};
