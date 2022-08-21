import React from 'react';

export type Props = {
	title: string;
	name: string;
	placeholder: string;
	type: string;
	handlerValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string | number | null;
	inputClassName?: string;
};

export const Input = ({ inputClassName, name, title, type, placeholder, value, handlerValue }: Props) => {
	return (
		<div className={inputClassName}>
			<label htmlFor={name} aria-label={title}>
				{title}
			</label>
			<input type={type} placeholder={placeholder} value={value!} onChange={handlerValue} name={name} />
		</div>
	);
};
