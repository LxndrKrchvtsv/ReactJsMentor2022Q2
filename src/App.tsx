import React from 'react';
import { Counter } from './components/Counter/Counter';
import { Search } from './components/Search/Search';
import { GenreToggle } from './components/GenreToggle/GenreToggle';
import './App.module.css';

const App: React.FC = () => {
	return (
		<>
			<Counter />
			<Search />
			<GenreToggle />
		</>
	);
};

export default App;
