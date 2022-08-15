import React, { useState } from 'react';

import { movieCardGenres } from '../../constants/genres';

import Styles from './Select.module.css';

export type Props = {
	className?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	value: string[];
};

export const Select = ({ className, onChange, name, value }: Props) => {
	const [isOpenSelect, setIsOpenSelect] = useState(false);
	const handleState = (boolean: boolean) => () => {
		setIsOpenSelect(boolean);
	};

	return (
		<div className={className}>
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
								<input id={element} type={'checkbox'} name={name} onChange={onChange} value={element} checked={value.includes(element)} />
								{element}
							</label>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
