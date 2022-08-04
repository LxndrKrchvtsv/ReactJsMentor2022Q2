import React, { PureComponent } from 'react';

import { Button } from '../Button/Button';
import { Label } from '../Label/Label';

import Styles from './Search.module.css';

type StateSearch = {
	queryString: string;
};

export class Search extends PureComponent<Record<string, never>, StateSearch> {
	state = {
		queryString: '',
	};

	handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => this.setState(() => ({ queryString: e.target.value }));

	handleStartSearch = () => alert('Sorry, not ready yet!');

	render() {
		return (
			<div className={Styles.search__wrapper}>
				<Label label={'FIND YOUR MOVIE'} labelClassName={Styles.header__search} />
				<input
					onChange={this.handleSearchInput}
					value={this.state.queryString}
					placeholder={'What do you want to watch?'}
					type={'text'}
					className={Styles.search__input}
				/>
				<Button classButton={Styles.button__search} handler={this.handleStartSearch} label={'SEARCH'} />
			</div>
		);
	}
}
