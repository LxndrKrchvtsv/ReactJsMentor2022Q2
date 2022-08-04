import React from 'react';

type PropsButton = {
	handler?: () => void;
	label: string;
	classButton?: string;
};

export const Button = ({ handler, label, classButton }: PropsButton) => {
	return (
		<button type={'button'} className={classButton} onClick={handler}>
			{label}
		</button>
	);
};
