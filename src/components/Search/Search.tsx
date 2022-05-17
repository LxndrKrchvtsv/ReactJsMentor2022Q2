import React, { PureComponent } from 'react';
import { Button } from '../Button/Button';
import Styles from './Search.module.css';

interface state {
	queryString: string;
}

interface props {}

export class Search extends PureComponent<props, state> {
	constructor(props: props) {
		super(props);

		this.state = {
			queryString: '',
		}
	}

	handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
		return this.setState(() => ({queryString: e.target.value}))
	}

	handleStartSearch() {
		alert('Sorry, not ready yet!')
	}

	render() {
		return (
			<>
				<input onChange={this.handleSearchInput.bind(this)}
					   value={this.state.queryString}
					   placeholder={'What do you want to watch?'}
					   type="text"
					   className={Styles.search__input}
				/>
				<Button classButton={Styles.button__search} handler={this.handleStartSearch.bind(this)} label={'SEARCH'} />
			</>
		);
	}
};
