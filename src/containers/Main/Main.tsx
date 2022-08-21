import React from 'react';

import { Filtering } from '../../components/Filtering/Filtering';
import { ErrorBoundary } from '../../components/UI/ErrorBoundary/ErrorBoundary';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { MoviesListResponse } from '../../core/types/types';

type PropsBody = {
	openEditModal: (booleanValue: boolean, event: React.MouseEvent<HTMLSpanElement, MouseEvent>, editId: number) => void;
	handleSetIsOpenRemoveModal: (boolean: boolean, editId: number | null) => void;
	moviesListResponse: MoviesListResponse;
};

export const Main = ({ handleSetIsOpenRemoveModal, openEditModal, moviesListResponse }: PropsBody) => {
	return (
		<main>
			<Filtering />
			<ErrorBoundary>
				<MoviesList openRemoveModal={handleSetIsOpenRemoveModal} openEditModal={openEditModal} moviesListResponse={moviesListResponse} />
			</ErrorBoundary>
		</main>
	);
};
