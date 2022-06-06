import React, { useState } from 'react';
import { PropsEmpty, StateGenreToggle } from '../../types/types';
import { GenreItem } from './GenreItem';
import Styles from './GenreToggle.module.css';

export const GenreToggle: React.FC<PropsEmpty> = () => {
	const [state, setState] = useState<StateGenreToggle>({
		genres: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
		activeGenre: 0,
	});

	const toggleActive = (index: number) => {
		setState({ ...state, activeGenre: index });
	};

	return (
		<div className={Styles.genre__toggle__wrap}>
			{state.genres.map((genre, index) => (
				<GenreItem key={genre} index={index} genre={genre} isActive={state.activeGenre === index} toggleActive={toggleActive} />
			))}
		</div>
	);
};
