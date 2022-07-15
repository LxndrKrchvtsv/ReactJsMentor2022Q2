import React from 'react';

import { Button } from '../Button/Button';

import Styles from './AddMovie.module.css';

export const AddMovie = () => {
	return <Button classButton={Styles.add__movie__button} label={'+ ADD MOVIE'} />;
};
