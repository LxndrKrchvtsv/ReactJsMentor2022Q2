import React, { useState } from 'react';

import { ButtonClose } from '../ButtonClose/ButtonClose';

import Styles from './ButtonOption.module.css';

type Props = {
	openRemoveModal: (boolean: boolean, editId: number | null) => void;
	movieEditId: number;
	openEditModal: (booleanValue: boolean, event: React.MouseEvent<HTMLSpanElement, MouseEvent>, movieEditId: number) => void;
};

export const ButtonOption = ({ openRemoveModal, openEditModal, movieEditId }: Props) => {
	const [isOptionClose, setIsOptionClose] = useState(false);
	const handleSetIsOptionClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, isClose: boolean) => {
		event.stopPropagation();
		setIsOptionClose(isClose);
	};

	return (
		<div className={Styles.button__option__wrapper}>
			<div className={Styles.button__option} onClick={(event) => handleSetIsOptionClose(event, true)}>
				<div className={Styles.button__option__item} />
				<div className={Styles.button__option__item} />
				<div className={Styles.button__option__item} />
			</div>
			{isOptionClose && (
				<div className={Styles.option__item__wrapper} onClick={(event) => event.stopPropagation()}>
					<ButtonClose isItSmall={true} handler={(event) => handleSetIsOptionClose(event, false)} />
					<span className={Styles.option__item} onClick={(event) => openEditModal(true, event, movieEditId)}>
						{'Edit'}
					</span>
					<span className={Styles.option__item} onClick={() => openRemoveModal(true, movieEditId)}>
						{'Remove'}
					</span>
				</div>
			)}
		</div>
	);
};
