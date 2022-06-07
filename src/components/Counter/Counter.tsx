import React from 'react';
import { PropsEmpty, StateCounter } from '../../types/types';
import { Button } from '../Button/Button';

export class Counter extends React.Component<PropsEmpty, StateCounter> {
	state = {
		count: 0,
		label: 'Counter: ',
	};

	handleIncrement = () => {
		return this.setState((prevState) => ({ count: prevState.count + 1 }));
	};

	handleDecrement = () => {
		return this.setState((prevState) => ({ count: prevState.count - 1 }));
	};

	render() {
		return (
			<div>
				<span>
					{this.state.label} <strong>{this.state.count}</strong>
				</span>
				<div>
					<Button handler={this.handleDecrement} label={'Decrement'} />
					<Button handler={this.handleIncrement} label={'Increment'} />
				</div>
			</div>
		);
	}
}
