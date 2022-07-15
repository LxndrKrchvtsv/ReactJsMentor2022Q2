import React from 'react';

import { Props } from '../../types/types';

export class ErrorBoundary extends React.Component<Props, object> {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		const { hasError } = this.state;
		if (hasError) {
			return (
				<div>
					<p>{'Seems like an error occured!'}</p>
				</div>
			);
		}
		return this.props.children;
	}
}
