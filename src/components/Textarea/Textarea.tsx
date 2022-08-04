import React from 'react';

type Props = {
	title: string;
	placeholder: string;
	name: string;
	rows: number;
	handlerValue: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
	textAreaClassName?: string;
};

export const Textarea = ({ title, placeholder, name, rows, handlerValue, value, textAreaClassName }: Props) => {
	return (
		<div className={textAreaClassName}>
			<label htmlFor={name}>{title}</label>
			<textarea name={name} placeholder={placeholder} rows={rows} onChange={handlerValue} value={value}>
				{value}
			</textarea>
		</div>
	);
};
