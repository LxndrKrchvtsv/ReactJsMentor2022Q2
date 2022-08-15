import React from 'react';

import { Field, Formik } from 'formik';

import { Label } from '../Label/Label';
import { Input, Props as InputProps } from '../Input/Input';
import { Textarea, Props as TextareaProps } from '../Textarea/Textarea';
import { Select, Props as SelectProps } from '../Select/Select';
import { Button } from '../Button/Button';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { createMovieThunk } from '../../store/CreateAsyncThunks/createMovieThunk';

import { FormField } from '../../types/types';
import { useAppSelector } from '../../hooks/useAppSelector';
import { editMovieThunk } from '../../store/CreateAsyncThunks/editMovieThunk';

import { validateEmptyString, validateGenres, validateNumber, validatePosterPath } from './validation';
import Styles from './MovieCart.module.css';

type Props = {
	header: string;
	movieEditId: number | null;
};

const InputValidateComponent = ({ field, form: { touched, errors }, ...props }: FormField & InputProps) => (
	<>
		<Input {...field} {...props} />
		{touched[field.name] && errors[field.name] && <div className={'error'}>{errors[field.name]}</div>}
	</>
);

const TextareaValidateComponent = ({ field, form: { touched, errors }, ...props }: FormField & TextareaProps) => (
	<>
		<Textarea {...field} {...props} />
		{touched[field.name] && errors[field.name] && <div className={'error'}>{errors[field.name]}</div>}
	</>
);

const SelectValidateComponent = ({ field, form: { touched, errors }, ...props }: FormField & SelectProps) => (
	<>
		<Select {...field} {...props} />
		{touched[field.name] && errors[field.name] && <div className={'error'}>{errors[field.name]}</div>}
	</>
);

const initialValues = {
	title: '',
	vote_average: '',
	release_date: '',
	poster_path: '',
	overview: '',
	runtime: '',
	genres: [],
};

export const MovieCart = ({ header, movieEditId }: Props) => {
	const dispatch = useAppDispatch();
	const { moviesList } = useAppSelector((state) => state.moviesListReducer);

	const getMovieById = () => {
		const filmById = moviesList.filter((film) => film.id === movieEditId);
		return filmById[0];
	};

	return (
		<Formik
			initialValues={getMovieById() || initialValues}
			onSubmit={(values, { setSubmitting }) => {
				const formattedData = {
					...values,
					runtime: Number(values.runtime),
					vote_average: parseFloat(values.vote_average as unknown as string),
				};
				if (!movieEditId) return dispatch(createMovieThunk(formattedData));
				if (movieEditId) return dispatch(editMovieThunk(formattedData));
				setSubmitting(false);
			}}
		>
			{({ handleSubmit, handleChange, handleReset, values }) => (
				<form onSubmit={handleSubmit}>
					<div className={Styles.add__movie__container}>
						<Label label={header} />
						<div className={Styles.add__movies__inputs__wrapper}>
							<div className={Styles.left__section__inputs}>
								<Field
									component={InputValidateComponent}
									type={'text'}
									validate={validateEmptyString}
									name={'title'}
									value={values.title}
									placeholder={'entire title'}
									handlerValue={handleChange}
									title={'TITLE'}
									inputClassName={Styles.add__movies__input__block}
								/>
								<Field
									component={InputValidateComponent}
									validate={validatePosterPath}
									type={'text'}
									name={'poster_path'}
									value={values.poster_path}
									placeholder={'https://'}
									handlerValue={handleChange}
									title={'MOVIE URL'}
									inputClassName={Styles.add__movies__input__block}
								/>
								<Field
									component={SelectValidateComponent}
									validate={validateGenres}
									name={'genres'}
									value={values.genres}
									handler={handleChange}
									className={Styles.add__movies__input__block}
								/>
							</div>
							<div className={Styles.right__section__inputs}>
								<Field
									component={InputValidateComponent}
									validate={validateEmptyString}
									type={'date'}
									name={'release_date'}
									value={values.release_date}
									placeholder={'select date'}
									handlerValue={handleChange}
									title={'RELEASE DATE'}
									inputClassName={Styles.add__movies__input__block}
								/>
								<Field
									component={InputValidateComponent}
									validate={validateNumber}
									type={'text'}
									name={'vote_average'}
									value={values.vote_average}
									placeholder={'7.8'}
									handlerValue={handleChange}
									title={'RATING'}
									inputClassName={Styles.add__movies__input__block}
								/>
								<Field
									component={InputValidateComponent}
									validate={validateNumber}
									type={'text'}
									name={'runtime'}
									value={values.runtime}
									placeholder={'minutes'}
									handlerValue={handleChange}
									title={'RUNTIME'}
									inputClassName={Styles.add__movies__input__block}
								/>
							</div>
						</div>
						<Field
							component={TextareaValidateComponent}
							validate={validateEmptyString}
							name={'overview'}
							value={values.overview}
							placeholder={'Movie description'}
							handlerValue={handleChange}
							title={'OVERVIEW'}
							rows={5}
							textAreaClassName={Styles.add__movies__textarea__block}
						/>
					</div>
					<div className={Styles.reset__confirm__wrapper}>
						<Button type={'reset'} classButton={Styles.button__reset} label={'RESET'} handler={handleReset} />
						<Button type={'submit'} classButton={Styles.button__confirm} label={'CONFIRM'} />
					</div>
				</form>
			)}
		</Formik>
	);
};
