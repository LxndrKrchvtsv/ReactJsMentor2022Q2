import React from 'react';

interface props {
	handler: () => void;
	label: string;
	classButton?: string;
}

export const Button: React.FC<props> = ({handler, label, classButton}) => {
	return (
		<>
			<button className={classButton} onClick={handler}>{label}</button>
		</>
	)
}
