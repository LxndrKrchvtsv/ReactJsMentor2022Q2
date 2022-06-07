import React from 'react';
import Styles from './GenreToggle.module.css';

interface Props {
	index: number;
	genre: string;
	isActive: boolean;
	toggleActive: (index: number) => void;
}

export const GenreItem: React.FC<Props> = ({ index, genre, toggleActive, isActive }) => {
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
