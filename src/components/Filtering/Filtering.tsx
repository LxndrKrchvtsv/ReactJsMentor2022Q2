import React from 'react';

import Styles from '../../App.module.css';

import { GenreToggle } from './GenreToggle/GenreToggle';
import { SortingFilm } from './SortingFilm/SortingFilm';

export const Filtering = () => {
	return (
		<div className={Styles.filter__sorting__wrapper}>
			<GenreToggle />
			<SortingFilm />
		</div>
	);
};
