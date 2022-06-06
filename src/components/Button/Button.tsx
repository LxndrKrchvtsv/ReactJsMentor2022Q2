import React from 'react';
import { PropsButton } from '../../types/types';

export const Button: React.FC<PropsButton> = ({ handler, label, classButton }) => {
	return (
		<button type={'button'} className={classButton} onClick={handler}>
			{label}
		</button>
	);
};
