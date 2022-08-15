import React from 'react';

import { Label } from '../Label/Label';
import { Button } from '../Button/Button';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { removeMovieThunk } from '../../store/CreateAsyncThunks/removeMovieThunk';

import Styles from './DeleteMovie.module.css';

type Props = {
	id: number | null;
};

export const DeleteMovie = ({ id }: Props) => {
	const dispatch = useAppDispatch();
	const handleRemove = () => {
		if (id) return dispatch(removeMovieThunk(id));
		return null;
	};

	return (
		<div className={Styles.delete__movie__container}>
			<Label label={'REMOVE MOVIE'} />
			<p>{'Are you sure you want to delete this movie?'}</p>
			<Button classButton={Styles.button__confirm} label={'CONFIRM'} handler={handleRemove} />
		</div>
	);
};
