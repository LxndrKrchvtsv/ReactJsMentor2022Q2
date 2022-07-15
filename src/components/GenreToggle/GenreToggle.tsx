import React, { useState } from 'react';

import { GenreItem } from './GenreItem';
import Styles from './GenreToggle.module.css';

type StateGenreToggle = {
	readonly genres: string[];
	activeGenre: number;
};

export const GenreToggle = () => {
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
