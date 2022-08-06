import React from 'react';

type Props = {
	title: string;
	name: string;
	placeholder: string;
	type: string;
	handlerValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	inputClassName?: string;
};

export const Input = ({ title, name, placeholder, type, handlerValue, value, inputClassName }: Props) => {
	return (
		<div className={inputClassName}>
			<label htmlFor={name} aria-label={title}>
				{title}
			</label>
			<input type={type} placeholder={placeholder} value={value} onChange={handlerValue} name={name} />
		</div>
	);
};
