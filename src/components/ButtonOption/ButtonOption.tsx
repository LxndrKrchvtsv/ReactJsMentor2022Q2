import React, { useState } from 'react';

import { ButtonClose } from '../ButtonClose/ButtonClose';

import Styles from './ButtonOption.module.css';

type Props = {
	handler: () => void;
	handlerRemove: () => void;
};

export const ButtonOption = ({ handler, handlerRemove }: Props) => {
	const [isOptionClose, setIsOptionClose] = useState(false);
	const handleSetIsOptionClose = (isClose: boolean) => () => {
		setIsOptionClose(isClose);
	};

	return (
		<div className={Styles.button__option__wrapper}>
			<div className={Styles.button__option} onClick={handleSetIsOptionClose(true)}>
				<div className={Styles.button__option__item} />
				<div className={Styles.button__option__item} />
				<div className={Styles.button__option__item} />
			</div>
			{isOptionClose && (
				<div className={Styles.option__item__wrapper}>
					<ButtonClose isItSmall={true} handler={handleSetIsOptionClose(false)} />
					<span className={Styles.option__item} onClick={handler}>
						{'Edit'}
					</span>
					<span className={Styles.option__item} onClick={handlerRemove}>
						{'Remove'}
					</span>
				</div>
			)}
		</div>
	);
};
