import React from 'react';

export type Props = {
	children: React.ReactNode;
};

export type Movie = {
	readonly budget: number;
	readonly genres: string[];
	readonly id: number;
	readonly overview: string;
	readonly poster_path: string;
	readonly release_date: string;
	readonly revenue: number;
	readonly runtime: number;
	readonly tagline: string;
	readonly title: string;
	readonly vote_average: number;
	readonly vote_count: number;
};

export type MoviesListResponse = {
	data: Movie[];
	limit: number;
	offset: number;
	totalAmount: number;
};
