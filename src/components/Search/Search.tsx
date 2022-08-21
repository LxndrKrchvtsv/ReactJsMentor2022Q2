import React, { useEffect, useState } from 'react';

import { Form, Formik, FormikValues } from 'formik';

import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../UI/Button/Button';
import { Label } from '../UI/Label/Label';

import useQueryParams from '../../hooks/useQueryParams';

import Styles from './Search.module.css';

export const Search = () => {
	const navigate = useNavigate();
	const { searchQuery } = useParams();
	const [search, setSearch] = useState('');
	const [, setSearchQueryParam] = useQueryParams('search');

	useEffect(() => {
		// debugger
		if (searchQuery) {
			setSearch(searchQuery);
		}
	}, [searchQuery]);

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.currentTarget.value);
		setSearchQueryParam(e.currentTarget.value);
	};

	const onSubmit = (values: FormikValues) => {
		navigate(`/search/${values.search}`, { replace: true });
	};

	return (
		<Formik
			enableReinitialize
			initialValues={{ search }}
			onSubmit={(values) => {
				onSubmit(values);
			}}
		>
			{({ values }) => {
				return (
					<Form className={Styles.search__wrapper}>
						<Label label={'FIND YOUR MOVIE'} labelClassName={Styles.header__search} />
						<input
							onChange={(e) => handleSearchInput(e)}
							value={values.search}
							placeholder={'What do you want to watch?'}
							type={'text'}
							className={Styles.search__input}
						/>
						<Button type={'submit'} classButton={Styles.button__search} label={'SEARCH'} />
					</Form>
				);
			}}
		</Formik>
	);
};
