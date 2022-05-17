import React from 'react';
import Styles from './GenreToggle.module.css';

interface props {
	index: number;
	genre: string;
	isActive: boolean;
	toggleActive: (index: number) => void;
}

export const GenreItem: React.FC<props> = ({index, genre, toggleActive, isActive}) => {
	return (
		<div className={`${Styles.genre__toggle__item} ${isActive ? Styles.active : ''}`}
			 onClick={() => toggleActive(index)}>
			{genre}
		</div>
	);
};