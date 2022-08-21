import React from 'react';

export type Props = {
	title: string;
	placeholder: string;
	name: string;
	rows: number;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
	textAreaClassName?: string;
};

export const Textarea = ({ title, placeholder, name, rows, onChange, value, textAreaClassName }: Props) => {
	return (
		<div className={textAreaClassName}>
			<label htmlFor={name}>{title}</label>
			<textarea name={name} placeholder={placeholder} rows={rows} onChange={onChange} value={value}>
				{value}
			</textarea>
		</div>
	);
};
