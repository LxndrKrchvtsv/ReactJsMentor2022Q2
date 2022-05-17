import React, { useState } from 'react';
import { GenreItem } from './GenreItem';
import Styles from './GenreToggle.module.css';

interface state {
	readonly genres: string[];
	activeGenre: number;
}

interface props {}

export const GenreToggle: React.FC<props> = () => {
	const [state, setState] = useState<state> ({
		genres: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
		activeGenre: 0
	});

	const toggleActive = (index: number) => {
		setState({...state, activeGenre: index});
	}

	return (
		<>
			<div className={Styles.genre__toggle__wrap}>
				{state.genres.map((genre, index) =>
					<GenreItem key={index}
							   index={index}
							   genre={genre}
							   isActive={state.activeGenre === index}
							   toggleActive={toggleActive} />)}
			</div>
		</>
	);
};
