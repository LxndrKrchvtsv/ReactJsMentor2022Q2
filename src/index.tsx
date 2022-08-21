import { createRoot } from 'react-dom/client';
import React from 'react';

import './App.module.css';

import { Provider } from 'react-redux';

import App from './App';
import { store } from './core/store/store';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
