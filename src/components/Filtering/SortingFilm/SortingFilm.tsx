import React from 'react';

import useQueryParams from '../../../hooks/useQueryParams';

import Styles from './SortingFilm.module.css';

export const SortingFilm = () => {
	const [, setSortBy] = useQueryParams('sortBy');

	const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(event.currentTarget.value);
	};

	return (
		<div className={Styles.sorting__wrapper}>
			<div>{'SORT BY'}</div>
			<select onChange={(event) => handleSort(event)}>
				<option value={'release_date'}>{'RELEASE DATE'}</option>
				<option value={'vote_average'}>{'RATING'}</option>
				<option value={'genres'}>{'GENRE'}</option>
			</select>
		</div>
	);
};
