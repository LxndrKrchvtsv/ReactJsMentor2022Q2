import React from 'react';

export class CreateElementComponent extends React.Component<{}, {}>{
	render() {
		return React.createElement('h2', {}, 'Hello React.CreateElement');
	}
}