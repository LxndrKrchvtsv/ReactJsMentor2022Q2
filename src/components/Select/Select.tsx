import React, { useState } from 'react';

import { movieCardGenres } from '../../constants/genres';

import Styles from './Select.module.css';

type Props = {
	selectClassName: string;
	handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	value: string[];
};

export const Select = ({ selectClassName, handler, name, value }: Props) => {
	const [isOpenSelect, setIsOpenSelect] = useState(false);
	const handleState = (boolean: boolean) => () => {
		setIsOpenSelect(boolean);
	};

	return (
		<div className={selectClassName}>
			<label>{'Genre'}</label>
			<div className={Styles.multiselect} onMouseLeave={handleState(false)}>
				<div className={Styles.selectBox}>
					<select>
						<option>{'Select Genre'}</option>
					</select>
					<div className={Styles.overSelect} onClick={handleState(!isOpenSelect)} />
				</div>
				{isOpenSelect && (
					<div className={Styles.checkboxes}>
						{movieCardGenres.map((element) => (
							<label key={element}>
								<input type={'checkbox'} name={name} onChange={handler} value={element} checked={value.includes(element)} />
								{element}
							</label>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
