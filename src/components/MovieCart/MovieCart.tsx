import React from 'react';

import { Label } from '../Label/Label';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { Select } from '../Select/Select';

import Styles from './MovieCart.module.css';
import { useMovieForm } from '../../hooks/useMovieForm';

type Props = {
	header: string;
};

export const MovieCart = ({ header }: Props) => {
	const { state, setFormField } = useMovieForm();

	const handlerValue = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.currentTarget;
		setFormField({
			key: name,
			value,
		});
	};

	const handleGenreSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = event.currentTarget;

		const getSelectedGenres = () => {
			if (checked) return [...state.genreSelected, value];
			return [...state.genreSelected].filter((element: string) => value !== element);
		};

		setFormField({
			key: name,
			value: getSelectedGenres(),
		});
	};

	const handleReset = () => {};

	const handleConfirm = () => {};

	return (
		<>
			<div className={Styles.add__movie__container}>
				<Label label={header} />
				<div className={Styles.add__movies__inputs__wrapper}>
					<div className={Styles.left__section__inputs}>
						<Input
							type={'text'}
							name={'title'}
							value={state.title}
							placeholder={'entire title'}
							handlerValue={handlerValue}
							title={'TITLE'}
							inputClassName={Styles.add__movies__input__block}
						/>
						<Input
							type={'text'}
							name={'url'}
							value={state.url}
							placeholder={'https://'}
							handlerValue={handlerValue}
							title={'MOVIE URL'}
							inputClassName={Styles.add__movies__input__block}
						/>
						<Select
							name={'genreSelected'}
							value={state.genreSelected}
							handler={handleGenreSelect}
							selectClassName={Styles.add__movies__input__block}
						/>
					</div>
					<div className={Styles.right__section__inputs}>
						<Input
							type={'date'}
							name={'releaseDate'}
							value={state.releaseDate}
							placeholder={'select date'}
							handlerValue={handlerValue}
							title={'RELEASE DATE'}
							inputClassName={Styles.add__movies__input__block}
						/>
						<Input
							type={'text'}
							name={'rating'}
							value={state.rating}
							placeholder={'7,8'}
							handlerValue={handlerValue}
							title={'RATING'}
							inputClassName={Styles.add__movies__input__block}
						/>
						<Input
							type={'text'}
							name={'runtime'}
							value={state.runtime}
							placeholder={'minutes'}
							handlerValue={handlerValue}
							title={'RUNTIME'}
							inputClassName={Styles.add__movies__input__block}
						/>
					</div>
				</div>
				<Textarea
					name={'overview'}
					value={state.overview}
					placeholder={'Movie description'}
					handlerValue={handlerValue}
					title={'OVERVIEW'}
					rows={5}
					textAreaClassName={Styles.add__movies__textarea__block}
				/>
			</div>
			<div className={Styles.reset__confirm__wrapper}>
				<Button classButton={Styles.button__reset} label={'RESET'} handler={handleReset} />
				<Button classButton={Styles.button__confirm} label={'CONFIRM'} handler={handleConfirm} />
			</div>
		</>
	);
};
