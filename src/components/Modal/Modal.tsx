import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { ButtonClose } from '../ButtonClose/ButtonClose';

import Styles from './Modal.module.css';

type Props = {
	children: ReactNode;
	handler: () => void;
	isOpenModal: boolean;
};

export const Modal = ({ children, handler, isOpenModal }: Props) => {
	const [container] = useState(() => {
		return document.createElement('div');
	});

	useEffect(() => {
		document.body.appendChild(container);
		return () => {
			document.body.removeChild(container);
		};
	}, [container]);

	if (!isOpenModal) return null;

	return ReactDOM.createPortal(
		<div className={Styles.overlay__wrapper} onClick={handler}>
			<div className={Styles.modal__wrapper} onClick={(event) => event.stopPropagation()}>
				<ButtonClose handler={handler} />
				{children}
			</div>
		</div>,
		container
	);
};
