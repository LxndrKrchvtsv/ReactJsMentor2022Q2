import React from 'react';

import Styles from './ButtonClose.module.css';

type Props = {
	handler?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	isItSmall?: boolean;
};

export const ButtonClose = ({ handler, isItSmall }: Props) => {
	return <div className={`${Styles.close} ${isItSmall && Styles.close__small}`} onClick={handler} />;
};
