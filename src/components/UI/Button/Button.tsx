import React from 'react';

type PropsButton = {
	handler?: () => void;
	label: string;
	classButton?: string;
	type?: 'button' | 'submit' | 'reset';
};

export const Button = ({ handler, label, classButton, type = 'button' }: PropsButton) => {
	return (
		<button type={type} className={classButton} onClick={handler}>
			{label}
		</button>
	);
};
