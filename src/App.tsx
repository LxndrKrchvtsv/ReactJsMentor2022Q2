import React from 'react';

import './App.module.css';
import Styles from './containers/Header/Header.module.css';

import { Header } from './containers/Header/Header';
import { Body } from './containers/Body/Body';
import { Footer } from './containers/Footer/Footer';
import { Logo } from './components/Logo/Logo';
import { AddMovie } from './components/AddMovie/AddMovie';
import { Search } from './components/Search/Search';
import { GenreToggle } from './components/GenreToggle/GenreToggle';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { MoviesList } from './components/MoviesList/MoviesList';

const App = () => {
	return (
		<>
			<Header>
				<div className={Styles.logo__button__wrapper}>
					<Logo />
					<AddMovie />
				</div>
				<Search />
			</Header>
			<Body>
				<GenreToggle />
				<ErrorBoundary>
					<MoviesList />
				</ErrorBoundary>
			</Body>
			<Footer>
				<Logo />
			</Footer>
		</>
	);
};

export default App;
