import React from 'react';

import { toggleGenres } from '../../../core/constants/genres';

import useQueryParams from '../../../hooks/useQueryParams';

import Styles from './GenreToggle.module.css';
import { GenreItem } from './GenreItem';

export const GenreToggle = () => {
	const [filter, setFilter] = useQueryParams('filter');

	const handleToggleActive = (genre: string) => {
		setFilter(genre);
	};

	return (
		<div className={Styles.genre__toggle__wrap}>
			{toggleGenres.map((genre, index) => (
				<GenreItem key={genre} genre={genre} isActive={filter === genre ? true : genre === 'ALL' && filter === null} toggleActive={handleToggleActive} />
			))}
		</div>
	);
};
