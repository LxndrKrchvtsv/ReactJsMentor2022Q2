import React from 'react';
import Styles from './SortingFilm.module.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { toggleSortBy } from '../../store/Reducers/movieListSlice';

export const SortingFilm = () => {
	const dispatch = useAppDispatch();

	return (
		<div className={Styles.sorting__wrapper}>
			<div>
				SORT BY
			</div>
			<select onChange={(event) => dispatch(toggleSortBy(event.currentTarget.value))} >
				<option value='release_date' >RELEASE DATE</option>
				<option value='vote_average' >RATING</option>
				<option value='genres' >GENRE</option>
			</select>
		</div>
	);
};
