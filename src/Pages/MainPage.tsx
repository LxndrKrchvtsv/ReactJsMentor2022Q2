import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Header } from '../containers/Header/Header';
import { Main } from '../containers/Main/Main';
import { Footer } from '../containers/Footer/Footer';
import { Modal } from '../components/UI/Modal/Modal';
import { MovieCart } from '../components/MovieCart/MovieCart';
import { DeleteMovie } from '../components/DeleteMovie/DeleteMovie';
import { useLazyGetMoviesQuery } from '../core/store/features/api/movieSlice';
import useQueryParams from '../hooks/useQueryParams';

export const MainPage = () => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const [movieEditId, setMovieEditId] = useState<number | null>(null);
	const [titleModal, setTitleModal] = useState<string>('');
	const [isOpenRemoveModal, setIsOpenRemoveModal] = useState<boolean>(false);

	const handleSetIsClosed = (booleanValue: boolean, newTitleModal = 'ADD MOVIE') => {
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

	const handleSetIsOpenRemoveModal = (boolean: boolean, editId: number | null = null) => {
		setIsOpenRemoveModal(boolean);
		setMovieEditId(editId!);
	};

	const [getMovies, moviesListResponse] = useLazyGetMoviesQuery();
	const [filter] = useQueryParams('filter');
	const [sortBy] = useQueryParams('sortBy');
	const [search] = useQueryParams('search');
	const { searchQuery } = useParams();

	useEffect(() => {
		const filterByGenre = filter === 'ALL' ? '' : filter;
		const sort = {
			sortBy: sortBy || '',
			sortOrder: sortBy === 'genre' ? 'desc' : 'asc',
		};

		const searchBy = searchQuery || search;

		const searchParameter = searchBy ? { search: searchBy, searchBy: 'title' } : null;

		filterByGenre === null ? getMovies({ ...searchParameter, ...sort }) : getMovies({ filter: filterByGenre, ...sort, ...searchParameter });
	}, [filter, sortBy, search, searchQuery, getMovies]);

	return (
		<>
			<Header handleSetIsClosed={handleSetIsClosed} />
			<Main handleSetIsOpenRemoveModal={handleSetIsOpenRemoveModal} openEditModal={openEditModal} moviesListResponse={moviesListResponse} />
			<Footer />
			<Modal isOpenModal={isOpenModal} handler={handleSetIsClosed}>
				<MovieCart header={titleModal} movieEditId={movieEditId} moviesList={moviesListResponse} />
			</Modal>
			<Modal isOpenModal={isOpenRemoveModal} handler={handleSetIsOpenRemoveModal}>
				<DeleteMovie id={movieEditId} />
			</Modal>
		</>
	);
};
