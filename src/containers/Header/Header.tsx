import React from 'react';

import { NavLink } from 'react-router-dom';

import { MovieDetails } from '../../components/MovieDetails/MovieDetails';

import { Logo } from '../../components/UI/Logo/Logo';
import { Button } from '../../components/UI/Button/Button';
import ButtonStyles from '../../components/MovieCart/MovieCart.module.css';
import { Search } from '../../components/Search/Search';
import useQueryParams from '../../hooks/useQueryParams';

import HeaderStyles from './Header.module.css';

type PropsHeader = {
	handleSetIsClosed: (booleanValue: boolean) => void;
};

export const Header = ({ handleSetIsClosed }: PropsHeader) => {
	const [movieId] = useQueryParams('movieId');

	return (
		<header>
			{movieId ? (
				<MovieDetails />
			) : (
				<>
					<div className={HeaderStyles.logo__button__wrapper}>
						<NavLink to={'/'} replace>
							<Logo />
						</NavLink>
						<Button classButton={ButtonStyles.add__movie__button} label={'+ ADD MOVIE'} handler={() => handleSetIsClosed(true)} />
					</div>
					<Search />
				</>
			)}
		</header>
	);
};
