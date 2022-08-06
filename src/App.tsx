import React, { useState } from 'react';

import Styles from './App.module.css';
import HeaderStyles from './containers/Header/Header.module.css';
import ButtonStyles from './components/MovieCart/MovieCart.module.css';

import { Header } from './containers/Header/Header';
import { Body } from './containers/Body/Body';
import { Footer } from './containers/Footer/Footer';
import { Logo } from './components/Logo/Logo';
import { MovieCart } from './components/MovieCart/MovieCart';
import { Search } from './components/Search/Search';
import { GenreToggle } from './components/GenreToggle/GenreToggle';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { MoviesList } from './components/MoviesList/MoviesList';
import { Button } from './components/Button/Button';
import { Modal } from './components/Modal/Modal';
import { DeleteMovie } from './components/DeleteMovie/DeleteMovie';
import { MovieDetails } from './components/MovieDetails/MovieDetails';

const App = () => {
	const [movieId, setMovieId] = useState<number | null>(null);
	const [isClosed, setIsClosed] = useState(false);
	const [isOpenRemoveModal, setIsOpenRemoveModal] = useState(false);
	const [titleModal, setTitleModal] = useState('');

	const handleMovieId = (id: number | null) => () => {
		setMovieId(id);
	};

	const handleSetIsClosed = (booleanValue: boolean, newTitleModal = 'ADD MOVIE') => () => {
		setIsClosed(booleanValue);
		setTitleModal(newTitleModal);
	};
	const handleSetIsOpenRemoveModal = (boolean: boolean) => () => setIsOpenRemoveModal(boolean);

	return (
		<main>
			<Header>
				{movieId ?
					<MovieDetails id={movieId} handler={handleMovieId} />
					:
					<>
						<div className={HeaderStyles.logo__button__wrapper}>
							<Logo />
							<Button
								classButton={ButtonStyles.add__movie__button}
								label={'+ ADD MOVIE'}
								handler={handleSetIsClosed(true, 'ADD MOVIE')} />
						</div>
						<Search />
					</>
				}
			</Header>
			<Body>
				<GenreToggle />
				<ErrorBoundary>
					<div className={Styles.movies__list__wrapper}>
						<MoviesList
							handler={handleSetIsClosed(true, 'EDIT MOVIE')}
							handlerRemove={handleSetIsOpenRemoveModal(true)}
							handleOpen={handleMovieId}
						/>
					</div>
				</ErrorBoundary>
			</Body>
			<Footer>
				<Logo />
			</Footer>

			<Modal isClosed={isClosed} handler={handleSetIsClosed(false)}>
				<MovieCart header={titleModal} />
			</Modal>
			<Modal isClosed={isOpenRemoveModal}
			       handler={handleSetIsOpenRemoveModal(false)}>
				<DeleteMovie />
			</Modal>
		</main>
	);
};

export default App;
