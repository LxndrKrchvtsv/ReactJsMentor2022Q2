import React from 'react';

import { Label } from '../Label/Label';
import { Button } from '../Button/Button';

import Styles from './DeleteMovie.module.css';

export const DeleteMovie = () => {
	return (
		<div className={Styles.delete__movie__container}>
			<Label label={'REMOVE MOVIE'} />
			<p>{'Are you sure you want to delete this movie?'}</p>
			<Button classButton={Styles.button__confirm} label={'CONFIRM'} />
		</div>
	);
};
