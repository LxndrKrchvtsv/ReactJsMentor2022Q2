import React from 'react';

import Styles from './GenreToggle.module.css';

type PropsGenreItem = {
	index: number;
	genre: string;
	isActive: boolean;
	toggleActive: (index: number) => void;
};

export const GenreItem = ({ index, genre, toggleActive, isActive }: PropsGenreItem) => {
	return (
		<div
			className={`${Styles.genre__toggle__item} ${isActive ? Styles.active : ''}`}
			onClick={() => toggleActive(index)}
			onKeyUp={() => toggleActive(index)}
			role={'menuitem'}
			tabIndex={0}
		>
			{genre}
		</div>
	);
};
