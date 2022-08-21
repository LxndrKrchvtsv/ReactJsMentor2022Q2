import React, { useEffect } from 'react';

import { Label } from '../UI/Label/Label';
import { Button } from '../UI/Button/Button';

import { useLazyGetMoviesQuery, useRemoveMovieMutation } from '../../core/store/features/api/movieSlice';

import Styles from './DeleteMovie.module.css';

type Props = {
	id: number | null;
};

export const DeleteMovie = ({ id }: Props) => {
	const [removeMovie, { isSuccess }] = useRemoveMovieMutation();
	const [getMovies] = useLazyGetMoviesQuery();

	useEffect(() => {
		getMovies({
			sortBy: '',
			sortOrder: 'asc',
		});
	}, [isSuccess, getMovies]);

	const handleRemove = () => {
		removeMovie(id);
	};

	return (
		<div className={Styles.delete__movie__container}>
			<Label label={'REMOVE MOVIE'} />
			<p>{isSuccess && 'Movie has been removed successful'}</p>
			<p>{!isSuccess && 'Are you sure you want to delete this movie?'}</p>
			{!isSuccess && <Button classButton={Styles.button__confirm} label={'CONFIRM'} handler={handleRemove} />}
		</div>
	);
};
