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
import { SortingFilm } from './components/SortingFilm/SortingFilm';

const App = () => {
	const [movieDetailId, setMovieDetailId] = useState<number | null>(null);
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [movieEditId, setMovieEditId] = useState<number | null>(null);
	const [isOpenRemoveModal, setIsOpenRemoveModal] = useState<boolean>(false);
	const [titleModal, setTitleModal] = useState<string>('');

	const handleMovieId = (id: number | null) => () => {
		setMovieDetailId(id);
	};

	const handleSetIsClosed =
		(booleanValue: boolean, newTitleModal = 'ADD MOVIE') =>
		() => {
			setIsOpenModal(booleanValue);
			setTitleModal(newTitleModal);
			setMovieEditId(null);
		};

	const openEditModal = (booleanValue: boolean, event: React.MouseEvent<HTMLSpanElement, MouseEvent>, editId: number) => {
		event!.stopPropagation();
		setIsOpenModal(booleanValue);
		setTitleModal('EDIT MOVIE');
		if (editId) return setMovieEditId(editId);
	};

	const handleSetIsOpenRemoveModal =
		(boolean: boolean) =>
		(editId: number | null = null) => {
			setIsOpenRemoveModal(boolean);
			setMovieEditId(editId!);
		};

	return (
		<main>
			<Header>
				{movieDetailId ? (
					<MovieDetails id={movieDetailId} handler={handleMovieId} />
				) : (
					<>
						<div className={HeaderStyles.logo__button__wrapper}>
							<Logo />
							<Button classButton={ButtonStyles.add__movie__button} label={'+ ADD MOVIE'} handler={handleSetIsClosed(true, 'ADD MOVIE')} />
						</div>
						<Search />
					</>
				)}
			</Header>
			<Body>
				<div className={Styles.filter__sorting__wrapper}>
					<GenreToggle />
					<SortingFilm />
				</div>
				<ErrorBoundary>
					<div className={Styles.movies__list__wrapper}>
						<MoviesList openRemoveModal={handleSetIsOpenRemoveModal(true)} handleOpenDetail={handleMovieId} openEditModal={openEditModal} />
					</div>
				</ErrorBoundary>
			</Body>
			<Footer>
				<Logo />
			</Footer>
			<Modal isOpenModal={isOpenModal} handler={handleSetIsClosed(false)}>
				<MovieCart header={titleModal} movieEditId={movieEditId} />
			</Modal>
			<Modal isOpenModal={isOpenRemoveModal} handler={handleSetIsOpenRemoveModal(false)}>
				<DeleteMovie id={movieEditId} />
			</Modal>
		</main>
	);
};

export default App;
