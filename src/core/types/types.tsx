import React from 'react';

export type Props = {
	children: React.ReactNode;
};

export type MoviesListResponse = {
	data: Movie[];
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	error: string;
};

export type Movie = {
	budget: number;
	genres: string[];
	id: number;
	overview: string;
	poster_path: string;
	release_date: string;
	revenue: number;
	runtime: number;
	tagline: string;
	title: string;
	vote_average: number;
	vote_count: number;
};

type Form = {
	errors: string;
	touched: string;
};

type Field = {
	name: number;
	value: string | [];
	onChange: () => void;
	onBlur: () => void;
};

export type FormField = {
	form: Form;
	field: Field;
};
