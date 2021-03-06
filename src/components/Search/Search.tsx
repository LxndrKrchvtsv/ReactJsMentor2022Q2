import React, { PureComponent } from 'react';
import { Button } from '../Button/Button';
import Styles from './Search.module.css';
import { PropsEmpty, StateSearch } from '../../types/types';

export class Search extends PureComponent<PropsEmpty, StateSearch> {
	state = {
		queryString: '',
	};

	handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		return this.setState(() => ({ queryString: e.target.value }));
	};

	handleStartSearch = () => alert('Sorry, not ready yet!');

	render() {
		return (
			<>
				<input
					onChange={this.handleSearchInput}
					value={this.state.queryString}
					placeholder={'What do you want to watch?'}
					type={'text'}
					className={Styles.search__input}
				/>
				<Button classButton={Styles.button__search} handler={this.handleStartSearch} label={'SEARCH'} />
			</>
		);
	}
}
