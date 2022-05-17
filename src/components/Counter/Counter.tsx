import React from 'react';
import { Button } from '../Button/Button';

interface state {
	count: number;
	label: string;
}

interface props {}

export class Counter extends React.Component<props, state> {
	constructor(props: props) {
		super(props);

		this.state = {
			count: 0,
			label: 'Counter: '
		}
	}

	handleIncrement() {
		return this.setState(prevState => ({count: prevState.count + 1}));
	};

	handleDecrement() {
		return this.setState(prevState => ({count: prevState.count - 1}));
	};

	render() {
		return (
			<>
				<div>
					<span>{this.state.label} <strong>{this.state.count}</strong> </span>
					<div>
						<Button handler={this.handleDecrement.bind(this)} label={'Decrement'} />
						<Button handler={this.handleIncrement.bind(this)} label={'Increment'} />
					</div>
				</div>
			</>
		);
	}
};
