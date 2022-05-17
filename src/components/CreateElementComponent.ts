import React from 'react';
import {PropsEmpty, StateEmpty} from '../types/types';

export class CreateElementComponent extends React.Component<PropsEmpty, StateEmpty>{
	render() {
		return React.createElement('h2', {}, 'Hello React.CreateElement');
	}
}