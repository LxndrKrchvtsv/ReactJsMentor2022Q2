import React, { useState } from 'react';

import { toggleGenres } from '../../constants/genres';

import { GenreItem } from './GenreItem';
import Styles from './GenreToggle.module.css';

export const GenreToggle = () => {
	const [activeGenre, setActiveGenre] = useState<number>(0);

	const toggleActive = (index: number) => {
		setActiveGenre(index);
	};

	return (
		<div className={Styles.genre__toggle__wrap}>
			{toggleGenres.map((genre, index) => (
				<GenreItem key={genre} index={index} genre={genre} isActive={activeGenre === index} toggleActive={toggleActive} />
			))}
		</div>
	);
};
