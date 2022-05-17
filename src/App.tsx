import React from 'react';
import { CreateElementComponent } from './components/CreateElementComponent';
import { Counter } from './components/Counter/Counter';
import { Search } from './components/Search/Search';
import { GenreToggle } from './components/GenreToggle/GenreToggle';
import './App.module.css';

const App: React.FC = () => {
	return (
		<>
			<CreateElementComponent/>
			<Counter />
			<Search />
			<GenreToggle />
		</>
	);
};

export default App;
