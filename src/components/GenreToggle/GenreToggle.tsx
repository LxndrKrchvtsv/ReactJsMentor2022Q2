import React from 'react';

import { toggleGenres } from '../../constants/genres';

import { GenreItem } from './GenreItem';
import Styles from './GenreToggle.module.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { toggleGenre } from '../../store/Reducers/movieListSlice';

export const GenreToggle = () => {
	const dispatch = useAppDispatch();
	const { activeGenre } = useAppSelector(state => state.moviesListReducer);
	const handleToggleActive = (genre: string) => () => {
		dispatch(toggleGenre(genre));
	};

	return (
		<div className={Styles.genre__toggle__wrap}>
			{toggleGenres.map((genre, index) => (
				<GenreItem key={genre} genre={genre} isActive={activeGenre === genre} toggleActive={handleToggleActive} />
			))}
		</div>
	);
};
